import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition flex flex-col p-4 h-full"
    >
      {/* Product Image */}
      <div className="w-full flex justify-center mb-3">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-base text-gray-800 mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 capitalize mb-2">
          {product.category}
        </p>
        <div className="mt-auto text-lg font-semibold text-gray-900">
          {product.currency}
          {product.currentPrice}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard


