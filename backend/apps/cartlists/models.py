from django.db import models
from apps.products.models import Product
from apps.users.models import User

# Create your models here.


class Cartlist(models.Model):
    class Meta(object):
        db_table = 'cartlist'

    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, db_index=True
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, db_index=True
    )
    quantity = models.IntegerField(
        'Quantity', blank=False, null=False, default=1, db_index=True
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )
