from django.db import models

class Association(models.Model):
    name = models.CharField(max_length=255)  # Le nom de l'association
    location = models.CharField(max_length=255)  # La localisation
    address = models.CharField(max_length=255)  # L'adresse
    postal_code = models.CharField(max_length=6)  # Le code postal
    city = models.CharField(max_length=255)  # La ville
    phone = models.CharField(max_length=15)  # Le numéro de téléphone
    email = models.EmailField(max_length=255)  # L'email
    website = models.URLField(max_length=255, blank=True, null= True)  # Le site web
    license = models.CharField(max_length=255, blank=True, null= True)  # La licence

    def __str__(self):
        return f"{self.id}: {self.name}" 
