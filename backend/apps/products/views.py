from rest_framework import generics, filters
from .serializers import ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product


class ProductList(generics.ListAPIView):
    queryset = Product.objects.order_by('created_at').reverse().filter(status='open')
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category_name']
    search_fields = ['name', 'description']


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
