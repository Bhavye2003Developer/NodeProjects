from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=200, help_text='Enter a book genre (e.g. Science Fiction, French Poetry etc.)')
    def __str__(self):
        return self.name
    
class Mood(models.Model):
    name = models.CharField(max_length=200, help_text='Enter a mood (e.g. Happy, Sad, etc.)')
    def __str__(self):
        return self.name