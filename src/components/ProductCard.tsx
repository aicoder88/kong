import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  isOnSale?: boolean;
  discount?: number;
  onAddToCart?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Premium Dog Food",
  price = 24.99,
  image = "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=400&q=80",
  rating = 4.5,
  category = "Dog Food",
  isOnSale = false,
  discount = 0,
  onAddToCart = () => {},
  onViewDetails = () => {},
}: ProductCardProps) => {
  const finalPrice = isOnSale ? price - (price * discount) / 100 : price;

  return (
    <Card className="w-full max-w-[300px] overflow-hidden transition-all hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {isOnSale && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            {discount}% OFF
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{name}</h3>

        <div className="flex items-center mt-2">
          {isOnSale ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                ${finalPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-primary">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onViewDetails(id)}
        >
          Details
        </Button>
        <Button className="flex-1" onClick={() => onAddToCart(id)}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
