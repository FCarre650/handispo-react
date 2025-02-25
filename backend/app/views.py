from rest_framework import generics
from .models import Association
from .serializer import AssociationSerializer

class AssociationListView(generics.ListCreateAPIView):
    queryset = Association.objects.all()
    serializer_class = AssociationSerializer