import json
import urllib
from django.views import generic
from django import forms
from .forms import ContactForm
from ecommerce.models import Product, Order
from django.conf import settings
from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from django.core.mail import send_mail
from django.http import HttpResponseRedirect


class HomePage(generic.TemplateView):
    template_name = "home.html"

class ShopPage(generic.TemplateView):

    def get(self, request):
        products_best_selling = Product.objects.all()
    
        context = {
            'products_best_selling': products_best_selling,
        }

        return render(request, "shop.html", context)

class CheckoutPage(generic.TemplateView):
    template_name = "checkout.html"

class AboutPage(generic.TemplateView):
    template_name = "about.html"

class ContactFormView(generic.View):
    template_name = "contact.html"

    def get(self, request):
        form = ContactForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = ContactForm(request.POST)
        if form.is_valid():

            #Begin reCAPTCHA validation
            recaptcha_response = request.POST.get('g-recaptcha-response')
            url = 'https://www.google.com/recaptcha/api/siteverify'
            values = {
                'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
                'response': recaptcha_response
            }
            data = urllib.parse.urlencode(values).encode()
            req = urllib.request.Request(url, data=data)
            response = urllib.request.urlopen(req)
            result = json.loads(response.read().decode())
            #End reCAPTCHA validation

            if result['success']:
                subject = form.cleaned_data['subject']
                message = form.cleaned_data['message']
                sender = form.cleaned_data['sender']
                recipients = ['info@amerigoo.com']

                send_mail(subject, message, sender, recipients)
            return HttpResponseRedirect('/contact')
        else:
            # Invalid form! Reshow the form with error highlighted
            return render(request, self.template_name, {'form': form})
