from django.db import models
from cloudinary.models import CloudinaryField
from config.constants import *

class Products(models.Model):
    class Meta(object):
        db_table = 'products'

    status = models.CharField(
        'Status', blank=False, default='draft', max_length=50, db_index=True, choices = STATUS
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True
    )
    description = models.CharField(
        'Description', blank=False, null=False, max_length=1000, db_index=True
    )
    main_image = CloudinaryField(
        'Main Image', blank=False, null=False
    )
    sku = models.IntegerField(
        'SKU Number', blank=False, null=False, db_index=True, max_digits=11
    )
    category_id = models.ForeignKey(
        'Category ID', on_delete=models.CASCADE, db_index=True, max_digits=11
    )
    quantity = models.IntegerField(
        'Inventory Quantity', blank=False, null=False, default=0, max_digits=5
    )
    price = models.DecimalField(
        'Price', blank=False, null=False
    )
    discount_price = models.DecimalField(
        'Discount Price', blank=True
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )


    