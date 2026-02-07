from django.urls import path
from home.views import *

urlpatterns = [
    path('', index, name='accueil'),
    path('about/', about, name='about'),
    path('blog/', blog, name='blog'),
    path('original-creations/', original_creations, name='original_creations'),
    path('dessins-tirages/', dessins_tirages, name='dessins_tirages'),
    path('expositions/', expositions, name='expositions'),
    path('contact/', contact, name='contact'),
    path('cart/', cart, name="cart")
]
