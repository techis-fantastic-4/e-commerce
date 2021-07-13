from rest_framework import generics, filters
from .serializers import WishlistSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .models import Wishlist


class WishList(generics.ListAPIView):
    queryset = Wishlist.objects.order_by('created_at').reverse().all()
    serializer_class = WishlistSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user_id']
    