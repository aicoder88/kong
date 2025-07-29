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
    <div
      className="w-full transition-colors duration-300 p-4 md:p-6
                    dark:bg-transparent bg-transparent"
    >
      <div className="mb-6">
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center
                       bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Product Catalog
        </h2>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <div className="relative flex-grow">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={18}
            />
            <Input
              placeholder="Search products..."
              className="pl-10 h-12 backdrop-blur-lg border transition-all duration-300
                        dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-white dark:placeholder-gray-400
                        bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500
                        focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 h-12 px-6 backdrop-blur-lg border transition-all duration-300 hover:scale-105
                       dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-white dark:hover:bg-gray-700/50
                       bg-white/50 border-gray-300/50 text-gray-900 hover:bg-white/70"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            <span className="hidden sm:inline">Filters</span>
          </Button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div
            className="backdrop-blur-lg border rounded-2xl p-4 sm:p-6 mb-6 transition-all duration-300
                          dark:bg-gray-800/40 dark:border-gray-700/50
                          bg-white/40 border-gray-300/50
                          grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-3 dark:text-white text-gray-800">
                Category
              </label>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger
                  className="h-12 backdrop-blur-lg border transition-all duration-300
                                         dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-white
                                         bg-white/50 border-gray-300/50 text-gray-900"
                >
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent
                  className="backdrop-blur-xl
                                         dark:bg-gray-800/95 dark:border-gray-700
                                         bg-white/95 border-gray-200"
                >
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
              <label className="block text-sm font-semibold mb-3 dark:text-white text-gray-800">
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
                className="w-full h-12 backdrop-blur-lg border transition-all duration-300 hover:scale-105
                           dark:bg-gray-800/50 dark:border-gray-700/50 dark:text-white dark:hover:bg-gray-700/50
                           bg-white/50 border-gray-300/50 text-gray-900 hover:bg-white/70"
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
          <TabsList
            className="w-full overflow-x-auto flex justify-start md:justify-center mb-6 p-1
                               backdrop-blur-lg border
                               dark:bg-gray-800/40 dark:border-gray-700/50
                               bg-white/40 border-gray-300/50"
          >
            <TabsTrigger
              value="all"
              className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              All Pets
            </TabsTrigger>
            <TabsTrigger
              value="dog"
              className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Dogs
            </TabsTrigger>
            <TabsTrigger
              value="cat"
              className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Cats
            </TabsTrigger>
            <TabsTrigger
              value="small_pet"
              className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Small Pets
            </TabsTrigger>
            <TabsTrigger
              value="bird"
              className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Birds
            </TabsTrigger>
            <TabsTrigger
              value="fish"
              className="transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
            >
              Fish
            </TabsTrigger>
          </TabsList>

          {/* Results Count */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-sm font-medium dark:text-gray-300 text-gray-600">
              {filteredProducts.length} products found
            </p>
            {selectedCategory && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1">
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}
              </Badge>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  category={product.category}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-lg font-medium dark:text-gray-300 text-gray-600 mb-2">
                  No products found
                </p>
                <p className="text-sm dark:text-gray-400 text-gray-500">
                  Try adjusting your filters or search terms.
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
