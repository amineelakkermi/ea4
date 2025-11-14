// app/dashboard/edit/[id]/page.tsx
import UpdateProject from '../../UpdateProject'

export default async function EditProjectByIdPage({ params }: { params: { id: string } }) {
  const { id } = await params; // مباشرة لأن Server Component يمكنه استخدام async

  return (
    <section className="...">
      <UpdateProject id={id} />
    </section>
  )
}
