from django.utils import timezone
from django.db import models
from django.conf import settings
from django.db.models import Avg

class Book(models.Model):
    isbn = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=45)
    book_image_path = models.CharField(max_length=45, null=True)
    book_summary = models.CharField(max_length=45, null=True)
    evaluation = models.CharField(max_length=45, null=True)
    price = models.CharField(max_length=45, null=True)
    publisher = models.CharField(max_length=45, null=True)
    writer = models.CharField(max_length=45, null=True)
    country = models.CharField(max_length=45, null=True)
    maincategory = models.CharField(max_length=45, null=True)
    subcategory = models.CharField(max_length=45, null=True)
    publihsed_date = models.DateField()

class Rating(models.Model):
    comment_id = models.IntegerField(primary_key=True)
    rating = models.CharField(max_length=45, null=True)
    review = models.CharField(max_length=45, null=True)
    user_id = models.CharField(max_length=45, null=True)
    
