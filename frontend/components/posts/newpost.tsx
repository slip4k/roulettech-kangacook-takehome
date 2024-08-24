'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface NewPostProps {
  onPostCreated: (post: any) => void;
}

export default function NewPost({ onPostCreated }: NewPostProps) {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!title || !body) {
      setError('Title and Body are required');
      return;
    }

    const postData = { title, body };

    try {
      const response = await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const newPost = await response.json();
        onPostCreated(newPost);
        setTitle('');
        setBody('');
        setError(null);
        console.log('Post created successfully');
      } else {
        const errorData = await response.json();
        setError(`Error: ${errorData.detail || 'Failed to create post'}`);
      }
    } catch (error) {
      setError('Failed to create post. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col gap-2 border border-gray-300 rounded-md drop-shadow-sm p-4 bg-white">
      <Input
        className="bg-slate-100"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        className="bg-slate-100"
        placeholder="Type your message here ..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button className="self-end w-1/4" onClick={handleSubmit}>
        + Create Post
      </Button>
    </div>
  );
}
