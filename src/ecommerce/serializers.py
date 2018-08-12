from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'key',
            'user',
        )
        model = Order