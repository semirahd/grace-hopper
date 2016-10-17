from django.shortcuts import render

from .config import (persona_name, label, 
                    persona_description, persona_belonging, persona_image,
                    persona_qualities_layout, CCtitle, CClink, CCname)
# Create your views here.

def personas(request):
	data = {
	    "persona_name": persona_name,
	    "label": label,
	    "persona_description": persona_description,
	    "persona_belonging": persona_belonging,
	    "persona_image": persona_image,
	    "persona_qualities_layout": persona_qualities_layout,
	    "CCtitle": CCtitle,
	    "CClink": CClink,
	    "CCname": CCname
	}
	return render(request, "community_education.html", data)