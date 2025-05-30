# Generated by Django 5.1.6 on 2025-02-24 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Association',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('postal_code', models.CharField(max_length=6)),
                ('city', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=255)),
                ('website', models.URLField(blank=True, max_length=255)),
                ('license', models.CharField(blank=True, max_length=255)),
            ],
        ),
    ]
