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

class HandicapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Handicap
        fields = ['id',
                  'name', 
                  ]

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = ['id',
                  'name', 
                  ]