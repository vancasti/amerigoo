from django.views import generic


class HomePage(generic.TemplateView):
    template_name = "home.html"


class ShopPage(generic.TemplateView):
    template_name = "shop.html"


class AboutPage(generic.TemplateView):
    template_name = "about.html"
