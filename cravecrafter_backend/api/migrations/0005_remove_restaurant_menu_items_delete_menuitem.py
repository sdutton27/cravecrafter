# Generated by Django 4.2.7 on 2023-12-03 16:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_restaurant_menu_items'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='menu_items',
        ),
        migrations.DeleteModel(
            name='MenuItem',
        ),
    ]
