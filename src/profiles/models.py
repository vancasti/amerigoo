from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible
import uuid
from django.db import models
from django.conf import settings
from accounts.models import TimeStampedModel

class Address(TimeStampedModel):
    user = models.ForeignKey('authtools.user', models.DO_NOTHING, blank=True, null=True)
    street = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=64, blank=True, null=True)
    postal_code = models.CharField(max_length=32, blank=True, null=True)
    province = models.ForeignKey('Province', models.DO_NOTHING, blank=True, null=True)
    region = models.ForeignKey('Region', models.DO_NOTHING, blank=True, null=True)
    country = models.ForeignKey('Country', models.DO_NOTHING, blank=True, null=True)
    mobile = models.CharField(max_length=32, blank=True, null=True)
    phone = models.CharField(max_length=32, blank=True, null=True)

    def __str__(self):
        return self.street[:50] + ' ' + self.postal_code + ' ' + self.city[:24] + '(' + self.province.name + ')'

    class Meta:
        verbose_name_plural = "Addresses"

class BaseProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE,
                                primary_key=True)
    slug = models.UUIDField(default=uuid.uuid4, blank=True, editable=False)
    # Add more user profile fields here. Make sure they are nullable
    # or with default values
    picture = models.ImageField('Profile picture',
                                upload_to='profile_pics/%Y-%m-%d/',
                                null=True,
                                blank=True)
    bio = models.CharField("Short Bio", max_length=200, blank=True, null=True)
    email_verified = models.BooleanField("Email verified", default=False)

    class Meta:
        abstract = True

class Country(models.Model):
    name = models.CharField(max_length=64)
    key = models.CharField(max_length=8)

    def __str__(self):
        return self.key + ' - ' + self.name[:50]

    class Meta:
        verbose_name_plural = "Countries"


@python_2_unicode_compatible
class Profile(BaseProfile):
    def __str__(self):
        return "{}'s profile". format(self.user)

class Province(models.Model):
    region = models.ForeignKey('Region', models.DO_NOTHING)
    name = models.CharField(max_length=64)
    key = models.CharField(max_length=8)

    def __str__(self):
        return self.key + ' - ' + self.name[:50]

class Region(models.Model):
    country = models.ForeignKey(Country, models.DO_NOTHING)
    name = models.CharField(max_length=64)
    key = models.CharField(unique=True, max_length=8)

    def __str__(self):
        return self.key + ' - ' + self.name[:50]