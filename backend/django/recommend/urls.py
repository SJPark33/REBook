from . import views
from django.conf.urls import url
from django.urls import path
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash=False)

urlpatterns = [
    path('recommend/<int:user_id>/', views.recommend, name='recommend'),
]
