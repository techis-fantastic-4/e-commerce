from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import CartListSerializer, CartListAddSerializer
from ..users.mixins import CustomLoginRequiredMixin
from django_filters.rest_framework import DjangoFilterBackend
from .models import Cartlist


class CartList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = Cartlist.objects.all()
    serializer_class = CartListSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id']


class CartListAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Cartlist.objects.all()
    serializer_class = CartListAddSerializer

    def post(self, request, *args, **kwargs):
        # Set the user who login
        request.data['user'] = request.login_user.id
        return self.create(request, *args, **kwargs)


class CartListDelete(CustomLoginRequiredMixin, generics.DestroyAPIView):
    queryset = Cartlist.objects.all()
    serializer_class = CartListSerializer

    def delete(self, request, *args, **kwargs):
        cartlist = Cartlist.objects.get(pk=self.kwargs['pk'])
        if cartlist.user.id != request.login_user.id:
            response = Response({'error': 'You can not delete the cartlist not owned by you.'}, status=status.HTTP_404_NOT_FOUND)
            response.accepted_renderer = JSONRenderer()
            response.accepted_media_type = "application/json"
            response.renderer_context = {}
            return response
        return self.destroy(request, *args, **kwargs)
