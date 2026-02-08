from django.shortcuts import render
from home.models import *

# Create your views here.


def index(request):
    artist = Artist.objects.first()
    events = Event.objects.all()
    expos = Exposition.objects.all()
    posts = BlogPost.objects.all()
    next_expo = expos.order_by('-start_date').first()
    original_creations = OriginalCreation.objects.all()
    context = {
        "artist" : artist,
        "events" : events,
        "expos" : expos,
        "posts" : posts,
        "next_expo": next_expo,
        "original_creations": original_creations
    }
    return render(request, 'home/index.html', context)


def blog(request):
    posts = BlogPost.objects.all()
    context = {
        "posts" : posts,
    }
    return render(request, 'home/blog.html', context)


def original_creations(request):
    original_creations = OriginalCreation.objects.all()
    context = {
        'original_creations': original_creations
    }
    return render(request, 'home/original_creations.html', context)


def dessins_tirages(request):
    dessins_tirages = Tableau.objects.all()
    context = {
        'dessins_tirages': dessins_tirages
    }
    return render(request, 'home/dessins_tirages.html', context)


def about(request):
    artist = Artist.objects.first()
    carriere_points = CarrierePoint.objects.all().order_by('-date')
    context = {
        'artist': artist,
        'carriere_points': carriere_points
    }
    return render(request, 'home/about.html', context)


def expositions(request):
    expos = Exposition.objects.all().order_by('-start_date')
    context = {
        "expos" : expos
    }
    return render(request, 'home/exposition.html', context)


def contact(request): 
    context = {

    }
    return render(request, 'home/contact.html', context)


def cart(request):
    return render(request, 'home/cart.html')