from rest_framework import generics
from .extras import generate_order_id
from .models import Product, Order, Orderline
from .serializers import OrderSerializer
from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse


class ListOrder(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class DetailOrder(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


def add_to_cart(request, **kwargs):
    # filter products by id
    product = Product.objects.filter(id=kwargs.get('item_id', "")).first()
    user_order, created = Order.objects.get_or_create(cookie_id=request.session.session_key, state='CART')
    order_line, created = Orderline.objects.get_or_create(order=user_order, product=product)

    if request.user.is_authenticated:
        user_order.user = request.user

    if not created:
        messages.info(request, 'You already own this product')
        return redirect(reverse('shop'))

    if not user_order.key:
        user_order.key = generate_order_id()

    user_order.save()
    order_line.save()
    messages.info(request, "Item added to cart")

    return redirect(reverse('shop'))


def get_user_cart_order(request):
    # get order for the correct user
    order = Order.objects.filter(user=request.user, cookie_id=request.session.session_key, state='CART')
    return Orderline.objects.filter(order=order[0])

def view_cart(request, **kwargs):
    cart_order = get_user_cart_order(request)
    context = {'order': cart_order}
    return render(request, 'cart.html', context)