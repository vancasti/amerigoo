from django.contrib import admin
from .models import Order
from .models import Orderline
from .models import Product
from .models import ProductCategory
from .models import ProductTag
from .models import Provider
from .models import Tag

# Register your models here.
admin.site.register(Order)
admin.site.register(Orderline)
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(ProductTag)
admin.site.register(Provider)
admin.site.register(Tag)
