from django.shortcuts import render

from .config import all_data
# Create your views here.

def personas(request, user):
    data = all_data[user]
    return render(request, "template.html", data)