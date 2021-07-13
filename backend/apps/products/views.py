from rest_framework import generics
from .serializers import ProductSerializer
from .models import Product


class ProductList(generics.ListAPIView):
    queryset = Product.objects.order_by('created_at').reverse().filter(status='open')[:20]
    serializer_class = ProductSerializer