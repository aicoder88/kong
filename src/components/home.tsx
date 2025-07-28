import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  ShoppingBag,
  Heart,
  Star,
  Gift,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
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

const Home = () => {
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
      title: "Kong's Pet Store",
      subtitle: "Your Local Pet Supply Boutique in Montreal",
      heroTitle: "Welcome to Kong's Pet Store",
      heroSubtitle: "& Royal Cattery Institute",
      heroDescription:
        "Premium products at fair prices — for all your companions in Montreal. Discover our beautiful Ragdoll cats from the Royal Cattery Institute.",
      shopNow: "🛒 Shop Now",
      specialOffer: "Special Montreal Offer",
      offerText: "$2 off your first purchase of $10 or more",
      offerNote: "(One-time use. In-store only.)",
      whatWeOffer: "🛒 What We Offer",
      whatWeOfferDesc:
        "Everything your furry, feathered, and four-legged companions need in Montreal",
      visitUs: "📍 Visit Us",
      address: "📌 Address:",
      addressText: "5555 Boulevard Décarie, Montreal, QC H3W 3C7",
      hours: "🕒 Hours:",
      hoursText: "We are open – visitors welcome!",
      contact: "📞 Contact:",
      contactText: "Call us or visit us in store today",
      whyLoveUs: "🐶 Why Pet Parents Love Us",
      featuredProducts: "✨ Featured Products",
      featuredDesc: "Discover our most popular items",
      comeVisit: "Come Say Hello",
      comeVisitDesc:
        "Whether you're stocking up on essentials or spoiling your best friend with something special, we're here for you.",
      callUs: "📞 Call Us",
      directions: "🗺️ Directions",
    },
    fr: {
      title: "Kong's Animalerie",
      subtitle: "Votre Boutique d'Animaux Locale à Montréal",
      heroTitle: "Bienvenue chez Kong's Animalerie",
      heroSubtitle: "& Royal Cattery Institute",
      heroDescription:
        "Produits premium à prix équitables — pour tous vos compagnons à Montréal. Découvrez nos magnifiques chats Ragdoll du Royal Cattery Institute.",
      shopNow: "🛒 Magasiner Maintenant",
      specialOffer: "Offre Spéciale Montréal",
      offerText: "2$ de rabais sur votre premier achat de 10$ et plus",
      offerNote: "(Usage unique. En magasin seulement.)",
      whatWeOffer: "🛒 Ce Que Nous Offrons",
      whatWeOfferDesc:
        "Tout ce dont vos compagnons à poils, à plumes et à quatre pattes ont besoin à Montréal",
      visitUs: "📍 Visitez-Nous",
      address: "📌 Adresse:",
      addressText: "5555 Boulevard Décarie, Montréal, QC H3W 3C7",
      hours: "🕒 Heures:",
      hoursText: "Nous sommes ouverts – visiteurs bienvenus!",
      contact: "📞 Contact:",
      contactText: "Appelez-nous ou visitez-nous en magasin aujourd'hui",
      whyLoveUs: "🐶 Pourquoi les Parents d'Animaux Nous Adorent",
      featuredProducts: "✨ Produits Vedettes",
      featuredDesc: "Découvrez nos articles les plus populaires",
      comeVisit: "Venez Nous Dire Bonjour",
      comeVisitDesc:
        "Que vous fassiez le plein d'essentiels ou que vous gâtiez votre meilleur ami avec quelque chose de spécial, nous sommes là pour vous.",
      callUs: "📞 Appelez-Nous",
      directions: "🗺️ Directions",
    },
  };

  const t = translations[language as keyof typeof translations];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="min-h-screen transition-all duration-500 relative overflow-hidden
                    dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                    bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-400/5 dark:via-purple-400/5 dark:to-pink-400/5
                      bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10"
      />
      <div
        className="absolute top-0 left-0 w-96 h-96 dark:bg-gradient-to-br dark:from-blue-400/10 dark:to-purple-400/10
                      bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 dark:bg-gradient-to-br dark:from-pink-400/10 dark:to-orange-400/10
                      bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🐾
      </motion.div>
      <motion.div
        className="absolute top-40 left-10 text-4xl"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🐕
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-10 text-5xl"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🐱
      </motion.div>

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
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl">🐾</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-sm dark:text-gray-300 text-gray-600">
                  {t.subtitle}
                </p>
              </div>
            </Link>
            <div className="flex items-center space-x-3">
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
                  className="w-24 glass-header border border-white/20 dark:border-gray-700/50
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
                </SelectContent>
              </Select>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CartView
                  isOpen={isCartOpen}
                  onClose={() => setIsCartOpen(false)}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="relative">
            <div
              className="glass-card rounded-3xl overflow-hidden shadow-2xl
                           dark:bg-gray-800/20 bg-white/30 backdrop-blur-lg
                           dark:border-gray-700/20 border-gray-300/30"
            >
              <div className="relative h-96 md:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&q=80"
                  alt="Royal Cattery Institute - Beautiful Ragdoll cat at Kong's Pet Store Montreal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 md:p-12 text-white max-w-2xl">
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      {t.heroTitle}
                      <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {t.heroSubtitle}
                      </span>
                    </motion.h1>
                    <motion.p
                      className="text-xl mb-6 text-gray-100 drop-shadow-md"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      {t.heroDescription}
                    </motion.p>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      <Link to="/products">
                        <Button
                          size="lg"
                          className="glass bg-white/20 hover:bg-white/30 text-white border-white/30 text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          {t.shopNow}
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Special Offer */}
          <motion.section variants={itemVariants}>
            <div
              className="glass-card rounded-3xl p-8 shadow-xl backdrop-blur-lg border
                           dark:bg-gray-800/20 bg-white/40
                           dark:border-yellow-400/20 border-yellow-400/40"
            >
              <div className="flex items-center justify-center space-x-6">
                <div className="text-6xl animate-bounce">🎁</div>
                <div className="text-center">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                    {t.specialOffer}
                  </h2>
                  <p className="text-2xl font-semibold dark:text-white text-gray-800 mb-1">
                    {t.offerText}
                  </p>
                  <p className="dark:text-gray-300 text-gray-600">
                    {t.offerNote}
                  </p>
                </div>
                <div
                  className="text-6xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  💝
                </div>
              </div>
            </div>
          </motion.section>

          {/* What We Offer */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                {t.whatWeOffer}
              </h2>
              <p className="text-xl dark:text-gray-300 text-gray-700">
                {t.whatWeOfferDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🍖",
                  title: "Nourriture & Gâteries",
                  desc: "Pour chats, chiens, lapins, hamsters et plus",
                },
                {
                  icon: "🧸",
                  title: "Jouets & Enrichissement",
                  desc: "Gardez-les actifs et engagés",
                },
                {
                  icon: "💊",
                  title: "Suppléments",
                  desc: "Vitamines et essentiels quotidiens pour la santé",
                },
                {
                  icon: "🧽",
                  title: "Produits de Nettoyage",
                  desc: "Formules sécuritaires et efficaces pour animaux",
                },
                {
                  icon: "🏠",
                  title: "Litière & Couches",
                  desc: "Litière pour chats, tapis d'entraînement et solutions",
                },
                {
                  icon: "🦮",
                  title: "Laisses & Accessoires",
                  desc: "Équipement quotidien pour promenades et style",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group backdrop-blur-lg border
                           dark:bg-gray-800/20 bg-white/40
                           dark:border-gray-700/20 border-gray-300/30"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Badge
                className="glass text-lg px-6 py-2 backdrop-blur-lg border
                              dark:bg-green-500/20 bg-green-500/30
                              dark:text-green-300 text-green-700
                              dark:border-green-400/30 border-green-400/50"
              >
                🍁{" "}
                {language === "en"
                  ? "We offer trusted brands, including natural and Canadian options"
                  : "Nous offrons des marques de confiance, incluant des options naturelles et canadiennes"}
              </Badge>
            </div>
          </motion.section>

          {/* Visit Us */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                {t.visitUs}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="glass-card rounded-3xl overflow-hidden shadow-xl backdrop-blur-lg border
                           dark:bg-gray-800/20 bg-white/40
                           dark:border-gray-700/20 border-gray-300/30"
              >
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=800&q=80"
                    alt="Kong's Pet Store Front - Montreal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-blue-400 h-6 w-6" />
                      <div>
                        <p className="font-semibold dark:text-white text-gray-800">
                          {t.address}
                        </p>
                        <p className="dark:text-gray-300 text-gray-600">
                          {t.addressText}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-green-400 h-6 w-6" />
                      <div>
                        <p className="font-semibold dark:text-white text-gray-800">
                          {t.hours}
                        </p>
                        <p className="dark:text-gray-300 text-gray-600">
                          {t.hoursText}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-purple-400 h-6 w-6" />
                      <div>
                        <p className="font-semibold dark:text-white text-gray-800">
                          {t.contact}
                        </p>
                        <p className="dark:text-gray-300 text-gray-600">
                          {t.contactText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.6786567562047!2d-73.6331195!3d45.4893146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91770ad0fcf2f%3A0x1e70c78b8efb8732!2s5555%20Decarie%20Blvd%2C%20Montreal%2C%20QC%20H3W%203C7!5e0!3m2!1sen!2sca!4v1653508361013!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kong's Animalerie Location - Montreal"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </motion.section>

          {/* Why Pet Parents Love Us */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                {t.whyLoveUs}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  emoji: "❤️",
                  title: "Entreprise Familiale",
                  desc: "Passionnés par les animaux",
                },
                {
                  emoji: "🍁",
                  title: "Fièrement Montréalais",
                  desc: "Au service de notre communauté",
                },
                {
                  emoji: "👩‍⚕️",
                  title: "Équipe Experte",
                  desc: "Compétents et amicaux",
                },
                {
                  emoji: "🐾",
                  title: "Soins Personnalisés",
                  desc: "Sélection de grande surface — soins de boutique locale",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group backdrop-blur-lg border
                           dark:bg-gray-800/20 bg-white/40
                           dark:border-gray-700/20 border-gray-300/30"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="font-bold dark:text-white text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-gray-300 text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Featured Products */}
          <motion.section variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                {t.featuredProducts}
              </h2>
              <p className="text-xl dark:text-gray-300 text-gray-700">
                {t.featuredDesc}
              </p>
            </div>
            <div
              className="glass-card rounded-3xl p-8 shadow-xl backdrop-blur-lg border
                           dark:bg-gray-800/20 bg-white/40
                           dark:border-gray-700/20 border-gray-300/30"
            >
              <ProductCatalog />
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants}>
            <div
              className="glass-card rounded-3xl p-12 text-center shadow-2xl backdrop-blur-lg border
                           dark:bg-gray-800/20 bg-white/40
                           dark:border-gray-700/20 border-gray-300/30"
            >
              <div className="text-6xl mb-6">🐾</div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                {t.comeVisit}
              </h2>
              <p className="text-xl dark:text-gray-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                {t.comeVisitDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/store">
                  <Button
                    size="lg"
                    className="glass backdrop-blur-lg border px-8 py-3 rounded-full transition-all duration-300 hover:scale-105
                             dark:bg-blue-500/20 dark:hover:bg-blue-500/30 dark:text-blue-300 dark:border-blue-400/50
                             bg-blue-500/30 hover:bg-blue-500/40 text-blue-700 border-blue-400/60"
                  >
                    {t.callUs}
                  </Button>
                </Link>
                <Link to="/store">
                  <Button
                    size="lg"
                    className="glass backdrop-blur-lg border px-8 py-3 rounded-full transition-all duration-300 hover:scale-105
                             dark:bg-purple-500/20 dark:hover:bg-purple-500/30 dark:text-purple-300 dark:border-purple-400/50
                             bg-purple-500/30 hover:bg-purple-500/40 text-purple-700 border-purple-400/60"
                  >
                    {t.directions}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Home;
