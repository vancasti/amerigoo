from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListOrder.as_view()),
    path('<int:pk>/', views.DetailOrder.as_view()),
]