import { Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function ProductCard({ product }) {
  return (
    <Card className="w-[340px] m-2">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{new Date(product.date).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <AspectRatio>
            <img src={product.image} alt="test" />
          </AspectRatio>
          <div className="flex items-center justify-between">
            <span className="font-medium">{`${product.price} €`}</span>
            <span className="font-medium">{`${product.quantity} Restants`}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-evenly">
        <Link to={`/product/${product.id}`}>
          <Button>See Product</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
