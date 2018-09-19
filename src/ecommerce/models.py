from django.db import models
from accounts.models import TimeStampedModel
from tinymce.models import HTMLField

# Create your models here.
class Order(TimeStampedModel):
    ONCART = 'CART'
    PROCESSING = 'PRO'
    CANCELLED = 'CAN'
    RETURNED = 'RET'
    FINISHED = 'FIN'
    ORDER_STATES = (
        (ONCART, 'On cart'),
        (PROCESSING, 'Processing'),
        (CANCELLED, 'Cancelled'),
        (RETURNED, 'Returned'),
        (FINISHED, 'Finished'),
    )
    key = models.CharField(max_length=32, blank=True, null=True)
    cookie_id = models.CharField(max_length=128, blank=True, null=True, unique=True)
    user = models.ForeignKey('authtools.user', models.DO_NOTHING, blank=True, null=True)
    state = models.CharField(max_length=4, choices=ORDER_STATES, default=ONCART)

    def __str__(self):
        return self.key[:50] + ' / ' + self.state


class Orderline(TimeStampedModel):
    order = models.ForeignKey('Order', models.DO_NOTHING)
    product = models.ForeignKey('Product', models.DO_NOTHING)
    #units = models.SmallIntegerField()
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=1)
    notes = models.TextField(blank=True, null=True)

class Product(TimeStampedModel):
    name = models.CharField(max_length=255)
    key = models.CharField(max_length=32)
    is_active = models.BooleanField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=4, blank=True, null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    photo = models.ImageField(upload_to='product_pics/', default='product_pics/default.jpg')
    comission = models.PositiveSmallIntegerField(blank=True, null=True)
    description = HTMLField()
    #offer = models.TextField(blank=True, null=True)
    vendor = models.ForeignKey('Provider', models.DO_NOTHING)
    category = models.ForeignKey('ProductCategory', models.DO_NOTHING)

    def __str__(self):
        return self.name[:50]

class ProductCategory(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name[:50]

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

    def __str__(self):
        return self.profile.user.name[:50]


class Tag(models.Model):
    name = models.CharField(max_length=255)
    key = models.CharField(max_length=32, blank=True, null=True)
