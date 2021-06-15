# Generated by Django 2.2 on 2021-06-15 00:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, verbose_name='User Name')),
                ('password', models.CharField(max_length=500, verbose_name='Password')),
                ('email', models.EmailField(max_length=500, verbose_name='Email')),
                ('token', models.CharField(max_length=500, verbose_name='Token')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
            ],
            options={
                'db_table': 'user',
            },
        ),
    ]