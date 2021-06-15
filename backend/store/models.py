from django.db import models
# from backend.consts import *
from backend.consts import *
from cloudinary.models import CloudinaryField

# Create your models here.

class Product(models.Model):
    class Meta(object):
        db_table = 'product'

    status = models.CharField(
        'Status', blank=False, default='draft', max_length=100, db_index=True, choices= PRODUCT_STATUSES
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=14
    )
    description = models.TextField(
        'Description', blank=False, null=False, max_length=1000
    )
    main_image = CloudinaryField(
        'Main Image', blank=False, null=False
    )
    sku = models.IntegerField(
        'Sku', blank=False, null=True
    )
    category_id = models.IntegerField(
        'Category Id', blank=False, null=True
    )
    quantity = models.IntegerField(
        'Quantity', blank=False, null=True
    )
    price = models.DecimalField(
        'Price', max_digits=5, decimal_places=2, blank=True, null=True
    )
    discount_price = models.DecimalField(
        'Discount Price', max_digits=5, decimal_places=2, blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )
    
class ProductCategory(models.Model):
    class Meta(object):
        db_table = 'product Category'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14
    )
    description = models.TextField(
        'Description', blank=False, null=False, max_length=1000
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )