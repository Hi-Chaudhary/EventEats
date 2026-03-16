from django.http import HttpResponse

from django.shortcuts import render

def home(request):
    events = [
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
    return render(request, 'EventEatsSite/home.html', {'events': events})


def about(request):
    return render(request, 'EventEatsSite/about.html')


def contact(request):
    return render(request, 'EventEatsSite/contact.html')