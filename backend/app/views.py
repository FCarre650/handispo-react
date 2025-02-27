from rest_framework import generics
from .models import Association, Handicap, Sport
from .serializer import AssociationSerializer, HandicapSerializer, SportSerializer
from django.http import JsonResponse

class AssociationListView(generics.ListCreateAPIView):
    queryset = Association.objects.all()
    serializer_class = AssociationSerializer

    def list_associations(request):

        associations = Association.objects.all()  # Ajoutez les relations nécessaires
        return JsonResponse(list(associations.values()), safe=False)

class HandicapListView(generics.ListCreateAPIView):
    queryset = Handicap.objects.all()
    serializer_class = HandicapSerializer

    def list_handicaps(request):

        handicaps = Handicap.objects.all()  # Ajoutez les relations nécessaires
        return JsonResponse(list(handicaps.values()), safe=False)

class SportListView(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

    def list_sports(request):

        sports = Sport.objects.all()  # Ajoutez les relations nécessaires
        return JsonResponse(list(sports.values()), safe=False)
       