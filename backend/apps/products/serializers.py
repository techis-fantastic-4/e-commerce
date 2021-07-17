from .models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    main_image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Product
        fields = '__all__'