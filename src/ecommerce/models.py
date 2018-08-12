from django.db import models
from accounts.models import TimeStampedModel

# Create your models here.
class Cart(TimeStampedModel):
    cookie_id = models.CharField(max_length=128, blank=True, null=True)
    user = models.ForeignKey('authtools.user', models.DO_NOTHING, blank=True, null=True)
    product = models.ForeignKey('Product', models.DO_NOTHING)
    units = models.SmallIntegerField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

class Order(TimeStampedModel):
    key = models.CharField(max_length=32, blank=True, null=True)
    user = models.ForeignKey('authtools.user', models.DO_NOTHING)
    #state = models.ForeignKey('OrderState', models.DO_NOTHING, blank=True, null=True)

class Orderline(TimeStampedModel):
    order = models.ForeignKey(Order, models.DO_NOTHING)
    product = models.ForeignKey('Product', models.DO_NOTHING)
    units = models.SmallIntegerField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    notes = models.TextField(blank=True, null=True)

class Product(TimeStampedModel):
    name = models.CharField(max_length=255)
    key = models.CharField(max_length=32)
    is_active = models.IntegerField(blank=True, null=True)
    unit_price = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    photo = models.CharField(max_length=255, blank=True, null=True)
    comission = models.SmallIntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    offer = models.TextField(blank=True, null=True)
    vendor = models.ForeignKey('Provider', models.DO_NOTHING)
    category = models.ForeignKey('ProductCategory', models.DO_NOTHING)

class ProductCategory(models.Model):
    name = models.CharField(max_length=60)

    class Meta:
        verbose_name_plural = "Product Categories"


class ProductTag(models.Model):
    product = models.ForeignKey(Product, models.DO_NOTHING)
    tag = models.ForeignKey('Tag', models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Product Tags"


class Provider(TimeStampedModel):
    profile = models.OneToOneField('profiles.profile', models.DO_NOTHING, blank=False)
    address = models.OneToOneField('profiles.address', models.DO_NOTHING, blank=True, null=True)

class Tag(models.Model):
    name = models.CharField(max_length=255)
    key = models.CharField(max_length=32, blank=True, null=True)
