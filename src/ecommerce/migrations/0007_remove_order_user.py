# Generated by Django 2.1 on 2018-09-18 17:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0006_auto_20180918_0557'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='user',
        ),
    ]
