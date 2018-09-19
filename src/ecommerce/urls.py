from django.urls import path
from django.conf.urls import url

from . import views

app_name = 'ecommerce'

urlpatterns = [
    path('', views.ListOrder.as_view()),
    path('<int:pk>/', views.DetailOrder.as_view()),
    url(r'^add-to-cart/(?P<item_id>[-\w]+)/$',
        views.add_to_cart,
        name="add_to_cart"),
    url(r'^cart/$', views.view_cart, name="cart"),
]