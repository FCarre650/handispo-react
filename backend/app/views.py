from rest_framework import generics
from .models import Association
from .serializer import AssociationSerializer
from django.http import JsonResponse

class AssociationListView(generics.ListCreateAPIView):
    queryset = Association.objects.all()
    serializer_class = AssociationSerializer

    def list_associations(request):

        associations = Association.objects.all()  # Ajoutez les relations nécessaires
        return JsonResponse(list(associations.values()), safe=False)

    