from django.db import models

# Create your models here.

class User(models.Model):
    class Meta(object):
        db_table = 'user'

    username = models.CharField(
        'User Name', blank=False, max_length=50
    )
    password = models.CharField(
        'Password', blank=False, null=False, max_length=500
    )
    email = models.EmailField(
        'Email', blank=False, null=False, max_length=500
    )
    token = models.CharField(
        'Token', blank=False, null=False, max_length=500
    )
    created_at = models.DateTimeField(
        'Created At', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated At', blank=True, auto_now=True
    )