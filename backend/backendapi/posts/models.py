from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']  
