import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  petType: string;
  rating: number;
  inStock: boolean;
}

interface ProductCatalogProps {
  products?: Product[];
}

const ProductCatalog = ({ products = [] }: ProductCatalogProps) => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Default products if none are provided
  const defaultProducts: Product[] = [
    {
      id: "1",
      name: "Premium Dog Food",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80",
      category: "food",
      petType: "dog",
      rating: 4.5,
      inStock: true,
    },
    {
      id: "2",
      name: "Cat Scratching Post",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&q=80",
      category: "toys",
      petType: "cat",
      rating: 4.2,
      inStock: true,
    },
    {
      id: "3",
      name: "Hamster Cage",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&q=80",
      category: "accessories",
      petType: "small_pet",
      rating: 4.0,
      inStock: true,
    },
    {
      id: "4",
      name: "Bird Seed Mix",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?w=400&q=80",
      category: "food",
      petType: "bird",
      rating: 4.7,
      inStock: true,
    },
    {
      id: "5",
      name: "Dog Leash",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80",
      category: "accessories",
      petType: "dog",
      rating: 4.3,
      inStock: false,
    },
    {
      id: "6",
      name: "Cat Food",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80",
      category: "food",
      petType: "cat",
      rating: 4.8,
      inStock: true,
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  // Filter products based on active tab, search query, and other filters
  const filteredProducts = displayProducts.filter((product) => {
    // Filter by pet type tab
    if (activeTab !== "all" && product.petType !== activeTab) return false;

    // Filter by search query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;

    // Filter by category
    if (selectedCategory && product.category !== selectedCategory) return false;

    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;

    return true;
  });

  return (
    <div className="w-full dark:bg-gray-900 bg-gray-50 p-4 md:p-6 transition-colors duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-800">
          Product Catalog
        </h2>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </Button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="dark:bg-gray-800 bg-white p-4 rounded-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 border dark:border-gray-700 border-gray-200">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white text-gray-800">
                Category
              </label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  <SelectItem value="food">Food & Treats</SelectItem>
                  <SelectItem value="toys">Toys & Enrichment</SelectItem>
                  <SelectItem value="supplements">Supplements</SelectItem>
                  <SelectItem value="cleaning">Cleaning Products</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white text-gray-800">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>

            <div className="flex items-end">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedCategory("");
                  setPriceRange([0, 100]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}

        {/* Pet Type Tabs */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full overflow-x-auto flex justify-start md:justify-center mb-6">
            <TabsTrigger value="all">All Pets</TabsTrigger>
            <TabsTrigger value="dog">Dogs</TabsTrigger>
            <TabsTrigger value="cat">Cats</TabsTrigger>
            <TabsTrigger value="small_pet">Small Pets</TabsTrigger>
            <TabsTrigger value="bird">Birds</TabsTrigger>
            <TabsTrigger value="fish">Fish</TabsTrigger>
          </TabsList>

          {/* Results Count */}
          <div className="mb-4 flex justify-between items-center">
            <p className="text-sm dark:text-gray-300 text-gray-600">
              {filteredProducts.length} products found
            </p>
            {selectedCategory && (
              <Badge variant="outline" className="flex items-center gap-1">
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}
              </Badge>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  inStock={product.inStock}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="dark:text-gray-300 text-gray-600">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductCatalog;
