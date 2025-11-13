// app/dashboard/page.tsx
'use client'; // dashboard devient un Client Component

import React from 'react';
import ProjectForm from './ProjectForm';

export default function DashboardPage() {
  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center bg-white px-4 md:px-10">
      <div className="z-10 w-full max-w-4xl p-6 rounded-2xl shadow-lg bg-white/90 backdrop-blur-md">
        <ProjectForm />
      </div>
    </section>
  );
}
