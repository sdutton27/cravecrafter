# Generated by Django 4.2.7 on 2023-12-03 17:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0005_remove_restaurant_menu_items_delete_menuitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restaurant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.RESTRICT, to='api.restaurant')),
            ],
        ),
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price_in_cents', models.IntegerField()),
                ('img_url', models.URLField()),
                ('description', models.CharField(max_length=200)),
                ('favoriters', models.ManyToManyField(blank=True, related_name='favorite_menu_items', to=settings.AUTH_USER_MODEL)),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.menu')),
            ],
        ),
    ]
