 // app/dashboard/edit/[id]/page.tsx
import { Suspense } from 'react';
import UpdateProject from '../../UpdateProject'

export default async function EditProjectByIdPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
   <Suspense fallback={<div>Loading ...</div>}>
      <UpdateProject id={id} />
   </Suspense>
  )
}
