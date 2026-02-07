from django.contrib import admin
from .models import *



@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return not Artist.objects.exists()
    
admin.site.register(CarrierePoint)
admin.site.register(OriginalCreation)
admin.site.register(Tableau)
admin.site.register(Event)
admin.site.register(Exposition)
admin.site.register(BlogPost)
