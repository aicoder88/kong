import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Globe, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ProductCatalog from "./ProductCatalog";
import BottomNavigation from "./BottomNavigation";
import CartView from "./CartView";

const ProductsPage = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("en");
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const translations = {
    en: {
      title: "Premium Products",
      subtitle: "For all your companions in Montreal",
      shopTitle: "🛍️ Complete Shop",
      shopDesc:
        "Discover our premium selection for dogs, cats, rabbits, hamsters and more",
    },
    fr: {
      title: "Produits Premium",
      subtitle: "Pour tous vos compagnons à Montréal",
      shopTitle: "🛍️ Boutique Complète",
      shopDesc:
        "Découvrez notre sélection premium pour chiens, chats, lapins, hamsters et plus encore",
    },
    zh: {
      title: "优质产品",
      subtitle: "为您在蒙特利尔的所有宠物伙伴",
      shopTitle: "🛍️ 完整商店",
      shopDesc: "探索我们为狗、猫、兔子、仓鼠等提供的优质精选产品",
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />

      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-2xl shadow-2xl border-b transition-all duration-300
                   dark:bg-gray-900/90 dark:border-gray-700/50
                   bg-white/90 border-gray-200/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 sm:px-6 py-4 relative">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <Link to="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass-header hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300
                           dark:text-white text-gray-800 border border-white/20 dark:border-gray-700/50 shrink-0"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <div className="text-2xl sm:text-3xl shrink-0">🐾</div>
                <div className="min-w-0">
                  <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent truncate">
                    {t.title}
                  </h1>
                  <p className="text-xs sm:text-sm dark:text-gray-300 text-gray-600 truncate">
                    {t.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="glass-header hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300
                           dark:text-white text-gray-800 border border-white/20 dark:border-gray-700/50"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger
                  className="w-20 sm:w-24 glass-header border border-white/20 dark:border-gray-700/50
                                        dark:bg-gray-800/50 bg-white/50 dark:text-white text-gray-800"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className="glass-header dark:bg-gray-800/95 bg-white/95 backdrop-blur-xl
                                        dark:border-gray-700 border-gray-200"
                >
                  <SelectItem
                    value="en"
                    className="dark:text-white text-gray-800 dark:hover:bg-gray-700/50 hover:bg-gray-100/50"
                  >
                    EN
                  </SelectItem>
                  <SelectItem
                    value="fr"
                    className="dark:text-white text-gray-800 dark:hover:bg-gray-700/50 hover:bg-gray-100/50"
                  >
                    FR
                  </SelectItem>
                  <SelectItem
                    value="zh"
                    className="dark:text-white text-gray-800 dark:hover:bg-gray-700/50 hover:bg-gray-100/50"
                  >
                    中文
                  </SelectItem>
                </SelectContent>
              </Select>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCartOpen(true)}
                  className="glass-header hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300
                           dark:text-white text-gray-800 border border-white/20 dark:border-gray-700/50"
                >
                  <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {t.shopTitle}
              </h2>
              <p className="text-lg text-gray-600">{t.shopDesc}</p>
            </div>
            <ProductCatalog />
          </div>
        </motion.div>
      </main>

      {/* Cart Slide-in */}
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-full max-w-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CartView onClose={() => setIsCartOpen(false)} />
          </motion.div>
        </motion.div>
      )}

      <BottomNavigation />
    </div>
  );
};

export default ProductsPage;
