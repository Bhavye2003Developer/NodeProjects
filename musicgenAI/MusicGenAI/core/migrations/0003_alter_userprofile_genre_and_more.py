# Generated by Django 4.2.3 on 2023-08-15 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
        ('core', '0002_userprofile_genre_userprofile_preferred_mood'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='genre',
            field=models.ManyToManyField(blank=True, help_text='Select a genre for this user', null=True, to='music.genre'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='preferred_mood',
            field=models.ManyToManyField(blank=True, help_text='Select a mood for this user', null=True, to='music.mood'),
        ),
    ]