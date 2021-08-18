from rest_framework.generics import ListCreateAPIView
from .models import Cartlist
from rest_framework import serializers


class CartListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartlist
        fields = '__all__'
        depth = 1


class CartListAddSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cartlist
        fields = '__all__'
