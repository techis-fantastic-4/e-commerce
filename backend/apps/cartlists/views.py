from rest_framework import generics
from .serializers import CartListsSerializer
from ..users.mixins import CustomLoginRequiredMixin
from django_filters.rest_framework import DjangoFilterBackend
from .models import Cartlist


class CartList(CustomLoginRequiredMixin, generics.ListAPIView):
    serializer_class = CartListsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id']


class CartListAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Cartlist.objects.all()
    serializer_class = CartListsSerializer


class CartListDelete(CustomLoginRequiredMixin, generics.DestroyAPIView):
    queryset = Cartlist.objects.all()
    serializer_class = CartListsSerializer
