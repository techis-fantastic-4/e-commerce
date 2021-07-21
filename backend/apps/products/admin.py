from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductModel(admin.ModelAdmin):
    fields = ['name', 'status', 'description', 'main_image', 'sku', 'category_name', 'quantity', 'price', 'discount_price']
    list_filter = ['category_name']
    list_display = ['name', 'status', 'main_image', 'category_name']
    search_fields = ['name', 'description']
