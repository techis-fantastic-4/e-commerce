from django.db import models
from cloudinary.models import CloudinaryField
from config.constants import *


class Product(models.Model):
    class Meta(object):
        db_table = 'product'

    status = models.CharField(
        'Status', blank=False, default='draft', max_length=50, db_index=True, choices=STATUS
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True
    )
    description = models.TextField(
        'Description', blank=False, null=False, max_length=1000, db_index=True
    )
    main_image = CloudinaryField(
        'Main Image', blank=False, null=False
    )
    sku = models.IntegerField(
        'SKU Number', blank=False, null=False, db_index=True
    )
    category_name = models.CharField(
        'Category Name', blank=False, null=False, default='others', max_length=14, db_index=True, choices=CATEGORIES
    )
    quantity = models.IntegerField(
        'Inventory Quantity', blank=False, null=False, default=0
    )
    price = models.DecimalField(
        'Price', blank=False, null=False, max_digits=11, decimal_places=2
    )
    discount_price = models.DecimalField(
        'Discount Price', blank=True, max_digits=11, decimal_places=2
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )
