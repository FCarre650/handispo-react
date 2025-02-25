from rest_framework import serializers
from .models import *

class AssociationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Association
        fields = ['id',
                  'name', 
                  'location', 
                  'address', 
                  'postal_code', 
                  'city',
                  'phone', 
                  'email', 
                  'website', 
                  'license'
                  ]