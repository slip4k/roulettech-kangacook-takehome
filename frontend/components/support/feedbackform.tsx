'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Failed to submit feedback: ${data.message}`);
      }
    } catch (error) {
      setStatus('An error occurred while submitting your feedback.');
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              We would love to hear feedback from you as a valued user! Use the
              form on the right to get into contact with us and we will be sure
              to respond promptly.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-blue-700">
                {' '}
                (310) 780-0582{' '}
              </a>

              <p className="mt-2 not-italic">Justin Shim</p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <Input
                  className="bg-slate-100"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <Input
                  className="bg-slate-100"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <Textarea
                  className="bg-slate-100"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
              </div>

              <div className="mt-4">
                <Button type="submit" className="self-end">
                  Send Enquiry
                </Button>
              </div>
            </form>
            {status && <p className="mt-4 text-sm text-red-500">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
