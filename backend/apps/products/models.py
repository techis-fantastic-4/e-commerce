from django.db import models
from cloudinary.models import CloudinaryField

class Products(models.Model):
    class Meta(object):
        db_table = 'products'

    