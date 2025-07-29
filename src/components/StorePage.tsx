import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Mail,
  Car,
  Heart,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import BottomNavigation from "./BottomNavigation";

const StorePage = () => {
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
      title: "Our Store",
      subtitle: "Visit us on Décarie in Montreal",
    },
    fr: {
      title: "Notre Boutique",
      subtitle: "Visitez-nous sur Décarie à Montréal",
    },
    zh: {
      title: "我们的商店",
      subtitle: "欢迎到蒙特利尔Décarie大道拜访我们",
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
                <div className="text-2xl sm:text-3xl shrink-0">🏪</div>
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
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-6 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=1200&q=80"
                alt="Kong's Animalerie - Boutique d'animaux Montréal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 md:p-12 text-white max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Bienvenue chez
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Kong's Animalerie
                    </span>
                  </h2>
                  <p className="text-lg mb-4 text-gray-200">
                    Votre boutique familiale de confiance depuis des années
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="text-blue-600" />
                  📍 Adresse & Localisation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-lg mb-2">
                    Kong's Animalerie
                  </p>
                  <p className="text-gray-600 mb-4">
                    5555 Boulevard Décarie
                    <br />
                    Montréal, QC H3W 3C7
                    <br />
                    Canada
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    🚗 Stationnement gratuit disponible
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    🚇 Accessible en métro - Station Côte-Vertu
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="text-green-600" />
                  🕒 Heures d'Ouverture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span>9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimanche</span>
                    <span>10h00 - 17h00</span>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 w-full justify-center">
                  ✅ Ouvert maintenant - Visiteurs bienvenus!
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Phone className="text-purple-600" />
                  📞 Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="text-blue-600 h-5 w-5" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-gray-600">(514) 555-KONG</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-green-600 h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@kongsanimalerie.ca</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  📞 Appelez-nous maintenant
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="text-red-500" />
                  🐱 Royal Cattery Institute
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Nous sommes fiers de présenter nos magnifiques chats Ragdoll
                  du Royal Cattery Institute, élevés avec amour et expertise.
                </p>
                <div className="space-y-2">
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    🏆 Élevage certifié et reconnu
                  </Badge>
                  <Badge className="bg-pink-100 text-pink-800 border-pink-200">
                    💝 Chats socialisés et en santé
                  </Badge>
                </div>
                <Button variant="outline" className="w-full">
                  🐾 En savoir plus sur nos Ragdolls
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="glass-card border-0 shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                🗺️ Trouvez-nous facilement
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.6786567562047!2d-73.6331195!3d45.4893146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91770ad0fcf2f%3A0x1e70c78b8efb8732!2s5555%20Decarie%20Blvd%2C%20Montreal%2C%20QC%20H3W%203C7!5e0!3m2!1sen!2sca!4v1653508361013!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kong's Animalerie - Localisation Montréal"
              />
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="glass-card border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🌟 Pourquoi Choisir Kong's Animalerie?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    emoji: "👨‍👩‍👧‍👦",
                    title: "Entreprise Familiale",
                    desc: "Passionnés par les animaux",
                  },
                  {
                    emoji: "🍁",
                    title: "Fièrement Montréalais",
                    desc: "Au service de notre communauté",
                  },
                  {
                    emoji: "🎓",
                    title: "Équipe Experte",
                    desc: "Conseils professionnels",
                  },
                  {
                    emoji: "💝",
                    title: "Service Personnalisé",
                    desc: "Attention de boutique locale",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-white/50 hover:bg-white/70 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-3">{item.emoji}</div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default StorePage;
