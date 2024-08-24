from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .forms import FeedbackForm

@csrf_exempt
def feedback_view(request):
    if request.method == 'POST':
        form = FeedbackForm(request.POST)
        if form.is_valid():
            
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            subject = f"New Feedback from {name}"
            email_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
            send_mail(subject, email_message, 'justinjaeshim@gmail.com', ['justinjaeshim@gmail.com'])

            return JsonResponse({'status': 'success', 'message': 'Feedback submitted successfully.'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid form submission.'})

    return JsonResponse({'status': 'error', 'message': 'Only POST requests are allowed.'})
