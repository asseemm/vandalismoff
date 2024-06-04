from django.shortcuts import render
from django.http import HttpResponse
import csv
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Feedback
from .serializers import FeedbackSerializer

@api_view(['POST'])
def feedback_create(request):
    if request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REGISTER)

def feedbacks_list(request):
    feedbacks = Feedback.objects.all()
    return render(request, 'feedbacks_list.html', {'feedbacks': feedbacks})

def export_feedbacks_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="feedbacks.csv"'
    writer = csv.writer(response)
    writer.writerow(['Name', 'Phone Number'])
    feedbacks = Feedback.objects.all().values_list('name', 'phone_number')
    for feedback in feedbacks:
        writer.writerow(feedback)
    return response
