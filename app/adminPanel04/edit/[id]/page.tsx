 // app/adminPanel04/edit/[id]/page.tsx
import UpdateProject from '../../UpdateProject'

interface EditProjectByIdPageProps {
  params: { id: string }
}

export default async function EditProjectByIdPage({ params }: EditProjectByIdPageProps) {
  const { id } = await params

  return (
    <section className="w-full">
      <UpdateProject id={id} />
    </section>
  )
}
