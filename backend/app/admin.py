from django.contrib import admin

# Register your models here.
from .models import Association, Handicap, Sport

admin.site.register(Association)
admin.site.register(Handicap)
admin.site.register(Sport)