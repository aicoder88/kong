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
    <Card
      className="w-full max-w-[300px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group
                     backdrop-blur-lg border
                     dark:bg-gray-800/40 dark:border-gray-700/50 dark:hover:bg-gray-800/60
                     bg-white/80 border-gray-200/50 hover:bg-white/90"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isOnSale && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg animate-pulse">
            {discount}% OFF
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 left-3 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <Badge
            variant="outline"
            className="text-xs font-medium px-2 py-1
                                              dark:border-gray-600 dark:text-gray-300
                                              border-gray-300 text-gray-600"
          >
            {category}
          </Badge>
          <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium dark:text-yellow-300 text-yellow-700">
              {rating}
            </span>
          </div>
        </div>

        <h3
          className="font-bold text-lg mb-2 line-clamp-2 transition-colors duration-300
                       dark:text-white text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-400"
        >
          {name}
        </h3>

        <div className="flex items-center mt-3">
          {isOnSale ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ${finalPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${price.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          className="flex-1 transition-all duration-300 hover:scale-105
                     dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700
                     border-gray-300 text-gray-700 hover:bg-gray-50"
          onClick={() => onViewDetails(id)}
        >
          Details
        </Button>
        <Button
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                     text-white border-0 transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => onAddToCart(id)}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
