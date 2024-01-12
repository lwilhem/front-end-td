import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '@/store/api'
import { ProductCard } from '@/components/compos'

export default function HomePage() {
  const { data: products } = useGetProductsQuery()

  return (
    <main className="w-full max-w-full min-h-screen">
      <header className="mb-8 flex items-center justify-start px-4 w-full max-w-full h-12 border-b-[1px] border-slate-200">
        <Link to="/">
          <span className="font-bold text-2xl">Products</span>
        </Link>
      </header>
      <section className="flex items-center justify-center flex-wrap">
        {products && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
