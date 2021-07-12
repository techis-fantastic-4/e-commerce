from django.db import models
from cloudinary.models import CloudinaryField
from config.constants import *

class Products(models.Model):
    class Meta(object):
        db_table = 'products'

    status = models.CharField(
        'Status', blank=True, default='draft', max_length=50, db_index=True, choices = STATUS
    )

    