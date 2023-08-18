from django.db import models
from music.models import Genre, Mood

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this user', blank=True, null=True)
    preferred_mood = models.ManyToManyField(Mood, help_text='Select a mood for this user', blank=True, null=True)

    def __str__(self):
        return f'{self.user}'