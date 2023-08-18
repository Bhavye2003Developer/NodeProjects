# Generated by Django 4.2.3 on 2023-08-15 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='genre',
            field=models.ManyToManyField(help_text='Select a genre for this user', to='music.genre'),
        ),
        migrations.AddField(
            model_name='userprofile',
            name='preferred_mood',
            field=models.ManyToManyField(help_text='Select a mood for this user', to='music.mood'),
        ),
    ]