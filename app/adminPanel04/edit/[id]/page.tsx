 // app/adminPanel04/edit/[id]/page.tsx
import UpdateProject from '../../UpdateProject'

interface EditProjectByIdPageProps {
  params: { id: string }
}

export default function EditProjectByIdPage({ params }: EditProjectByIdPageProps) {
  const { id } = params

  return (
    <section className="w-full">
      <UpdateProject id={id} />
    </section>
  )
}
