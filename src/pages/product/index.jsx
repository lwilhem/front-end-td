import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '@/store/api'
import { Card, CardContent } from '@/components/ui/card'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState()
  const { data } = useGetProductsQuery()

  useEffect(() => {
    if (data)
      setProduct(data.find(p => p.id === id))
  }, [data, id])

  return (
    <>
      {product && (
        <Card>
          <CardContent>
            <span className="h5">{product.name}</span>
            <span className="body2">{product.description}</span>
            <span className="h6">{`Price: ${product.price}`}</span>
          </CardContent>
        </Card>
      )}
    </>
  )
}
