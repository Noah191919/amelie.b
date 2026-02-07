from django.db import models
from django.core.exceptions import ValidationError
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from decimal import Decimal

# Create your models here.

class Artist(models.Model):
    firstname = models.CharField("Prénom", max_length=100)
    lastname = models.CharField("Nom de famille", max_length=100)
    title = models.CharField("Titre Biographie", max_length=100)
    paragraphe = models.TextField("Biographie paragraphe 1", null=True, blank=True)
    paragraphe_2 = models.TextField("Biographie paragraphe 2", null=True, blank=True)
    paragraphe_3 = models.TextField("Biographie paragraphe 3", null=True, blank=True)
    birth_date = models.DateField("Date de naissance")
    image = models.ImageField("Image de l'artiste", upload_to='artists/', null=True, blank=True)

    def clean(self):
        # ensure only one Artist exists
        if Artist.objects.exclude(pk=self.pk).exists():
            raise ValidationError("Il ne peut y avoir qu'un seul artiste.")

    def save(self, *args, **kwargs):
        # run validation before saving
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    
    class Meta:
        verbose_name = "L'Artiste"
        verbose_name_plural = "L'Artiste"

class CarrierePoint(models.Model):
    date = models.DateField("Date")
    title = models.CharField("Titre", max_length=100)
    description = models.TextField("Description", null=True, blank=True)
    image = models.ImageField("Image d'illustration", upload_to='carriere/', null=True, blank=True)

    def __str__(self):
        return f"{self.title} ({self.date})"

    class Meta:
        verbose_name = "Point de ma carrière"
        verbose_name_plural = "Points de ma carrière"


class OriginalCreation(models.Model):
    title = models.CharField("Titre", max_length=100)
    description = models.TextField("Description", null=True, blank=True)
    image = models.ImageField("Image de l'œuvre", upload_to='original_creations/', null=True, blank=True)
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Œuvre originale"
        verbose_name_plural = "Œuvres originales"


class Exposition(models.Model):
    title = models.CharField("Titre", max_length=100)
    start_date = models.DateField("Date de début")
    end_date = models.DateField("Date de fin")
    description = models.TextField("Description", null=True, blank=True)
    image = models.ImageField("Image d'illustration", upload_to='exhibitions/', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Exposition"
        verbose_name_plural = "Expositions"


class Event(models.Model):
    title = models.CharField("Titre", max_length=100)
    start_date = models.DateField("Date de début")
    end_date = models.DateField("Date de fin")
    description = models.TextField("Description", null=True, blank=True)
    image = models.ImageField("Image d'illustration", upload_to='activités/', null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Activité"
        verbose_name_plural = "Activités"


class BlogPost(models.Model):
    legend = models.CharField("Légende", max_length=100)
    title = models.CharField("Titre", max_length=100)
    paragraph_1 = models.TextField("Paragraphe 1", null=True, blank=True)
    paragraph_2 = models.TextField("Paragraphe 2", null=True, blank=True)
    paragraph_3 = models.TextField("Paragraphe 3", null=True, blank=True)
    quote = models.TextField("Citation", null=True, blank=True)
    image = models.ImageField("Image d'illustration", upload_to='blog/', null=True, blank=True)
    created_at = models.DateTimeField("Date de création", auto_now_add=True)
    updated_at = models.DateTimeField("Date de mise à jour", auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Article de blog"
        verbose_name_plural = "Articles de blog"


class Tableau(models.Model):
    title = models.CharField("Titre", max_length=100)
    description = models.TextField("Description", null=True, blank=True)
    image = models.ImageField("Image du tableau", upload_to='paintings/', null=True, blank=True)
    price = models.DecimalField(
        "Prix",
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
        validators=[MinValueValidator(Decimal('0.01'))] 
    )
    status = models.CharField("Statut", max_length=20, choices=[
        ('available', "Disponible"),
        ('sold', "Vendu"),
        ('reserved', "Réservé"),
    ], default='available')
    created_at = models.DateTimeField("Date de création", auto_now_add=True)
    updated_at = models.DateTimeField("Date de mise à jour", auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Tableau"
        verbose_name_plural = "Tableaux"