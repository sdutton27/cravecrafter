# Generated by Django 4.2.7 on 2023-12-07 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_rename_opennow_restaurant_open_now'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuitem',
            name='available',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]