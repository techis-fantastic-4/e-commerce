from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from .serializers import WishlistSerializer, WishlistAddSerializer
from ..users.mixins import CustomLoginRequiredMixin
from rest_framework.renderers import JSONRenderer
from django_filters.rest_framework import DjangoFilterBackend
from .models import Wishlist


class WishList(CustomLoginRequiredMixin, generics.ListAPIView):
    serializer_class = WishlistSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id']

    def get(self, request, *args, **kwargs):
        # Filter by login user
        self.queryset = Wishlist.objects.order_by(
            '-created_at').filter(user=request.login_user)
        return self.list(request, *args, **kwargs)


class WishlistAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistAddSerializer

    def post(self, request, *args, **kwargs):
        # Set the user who login
        request.data['user'] = request.login_user.id
        return self.create(request, *args, **kwargs)


class WishlistDelete(CustomLoginRequiredMixin, generics.DestroyAPIView):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer

    def delete(self, request, *args, **kwargs):
        wishlist = Wishlist.objects.get(pk=self.kwargs['pk'])
        if wishlist.user.id != request.login_user.id:
            response = Response({'error': 'You can not delete the wishlist not owned by you.'}, status=status.HTTP_404_NOT_FOUND)
            response.accepted_renderer = JSONRenderer()
            response.accepted_media_type = "application/json"
            response.renderer_context = {}
            return response
        return self.destroy(request, *args, **kwargs)
