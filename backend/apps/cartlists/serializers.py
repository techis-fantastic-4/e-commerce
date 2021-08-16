from .models import CartList
from rest_framework import serializers


class CartListsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartList
        fields = '__all__'
