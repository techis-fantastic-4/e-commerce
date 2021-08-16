from rest_framework import generics
from .serializers import CartListsSerializer
from ..users.mixins import CustomLoginRequiredMixin
# from django_filters.rest_framework import DjangoFilterBackend
from .models import CartList


class CartList(CustomLoginRequiredMixin, generics.ListAPIView):
    serializer_class = CartListsSerializer
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['user_id']


class CartListAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = CartList.objects.all()
    serializer_class = CartListsSerializer


class CartListDelete(CustomLoginRequiredMixin, generics.DestroyAPIView):
    queryset = CartList.objects.all()
    serializer_class = CartListsSerializer
