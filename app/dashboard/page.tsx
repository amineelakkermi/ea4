// app/dashboard/page.tsx
'use client'; // dashboard devient un Client Component

import React, { useEffect, useState } from 'react';
import ProjectForm from './ProjectForm';

type Session = { user?: { role?: string } } | null;

export default function DashboardPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch('/api/session');
      const data = await res.json();
      setSession(data.session);
      setLoading(false);
    }
    fetchSession();
  }, []);

  if (loading) return <p>Chargement...</p>;

  if (!session) {
    if (typeof window !== 'undefined') window.location.href = '/login';
    return null;
  }

  if (session.user?.role !== 'admin') {
    if (typeof window !== 'undefined') window.location.href = '/';
    return null;
  }

  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-10">
      <div className="z-10 w-full max-w-4xl p-6 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md">
        <ProjectForm />
      </div>
    </section>
  );
}
