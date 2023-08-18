from django.db import models
from core.models import UserProfile

# Create your models here.
class Feedback(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    feedback_text = models.TextField(max_length=1000, help_text='Enter your feedback')
    rating = models.IntegerField(help_text='Enter a rating between 1 (worst) and 5 (best)')
    feedback_date = models.DateField(auto_now_add=True)
    def __str__(self):
        return f'{self.feedback_text[:20]}...'