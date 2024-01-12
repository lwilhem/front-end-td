import { Link, useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()

  return (
    <section>
      <span>{id}</span>
      <Link to="/">Home</Link>
    </section>
  )
}
