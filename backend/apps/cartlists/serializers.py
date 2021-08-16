from .models import Cartlist
from rest_framework import serializers


class CartListsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartlist
        fields = '__all__'
