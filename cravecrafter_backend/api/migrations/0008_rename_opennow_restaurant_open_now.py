# Generated by Django 4.2.7 on 2023-12-07 04:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_restaurant_opennow_alter_menuitem_menu'),
    ]

    operations = [
        migrations.RenameField(
            model_name='restaurant',
            old_name='openNow',
            new_name='open_now',
        ),
    ]
