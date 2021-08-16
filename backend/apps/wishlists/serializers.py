from .models import Wishlist
from rest_framework import serializers


class WishlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wishlist
        fields = '__all__'
        depth = 1
        

class WishlistAddSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wishlist
        fields = '__all__'