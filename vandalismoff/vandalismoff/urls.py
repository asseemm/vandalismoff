"""
URL configuration for vandalismoff project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from myapp.views import feedback_create, feedbacks_list, export_feedbacks_csv
from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include 
from django.shortcuts import redirect

def home(request):
    return HttpResponse("Welcome to the homepage!")

urlpatterns = [
    path('', lambda request: redirect('feedbacks_list'), name='home'),
    path('api/feedback/', feedback_create, name='feedback_create'),
    path('feedbacks/', feedbacks_list, name='feedbacks_list'),
    path('export-csv/', export_feedbacks_csv, name='export_feedbacks_csv'),
]
