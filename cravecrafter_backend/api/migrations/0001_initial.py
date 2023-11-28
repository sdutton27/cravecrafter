# Generated by Django 4.2.7 on 2023-11-27 21:50

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, help_text='The unique identifer for this restaurant.', primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('img_url', models.URLField()),
            ],
        ),
    ]