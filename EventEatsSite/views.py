from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Keep your existing events list in a variable so both views can use it
EVENTS_DATA = [
    {
        "title": "Spring Food Festival",
        "description": "Enjoy delicious meals, snacks, and drinks from local vendors.",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "date": "20 March 2026",
        "location": "Adelaide Oval"
    },
    {
        "title": "Community BBQ Night",
        "description": "Pre-order your BBQ meals and pick them up fresh at the event.",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        "date": "28 March 2026",
        "location": "Victoria Square"
    },
    {
        "title": "Charity Dessert Fair",
        "description": "Cakes, brownies, cookies, and more for a great cause.",
        "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777",
        "date": "5 April 2026",
        "location": "Rundle Mall"
    },
]

# --- YOUR NEW API VIEW ---
@api_view(['GET'])
def event_api(request):
    return Response(EVENTS_DATA)

# --- YOUR EXISTING HTML VIEWS ---
def home(request):
    return render(request, 'EventEatsSite/home.html', {'events': EVENTS_DATA})

def about(request):
    return render(request, 'EventEatsSite/about.html')

def contact(request):
    return render(request, 'EventEatsSite/contact.html')