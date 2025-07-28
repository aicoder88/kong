import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Gift, Percent, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import BottomNavigation from "./BottomNavigation";

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      title: "Offre de Bienvenue",
      description: "2$ de rabais sur votre premier achat de 10$ et plus",
      discount: "2$",
      code: "BIENVENUE2",
      validUntil: "Usage unique - En magasin seulement",
      emoji: "🎁",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      id: 2,
      title: "Spécial Ragdoll",
      description: "15% de rabais sur tous les accessoires pour chats",
      discount: "15%",
      code: "RAGDOLL15",
      validUntil: "Valide jusqu'au 31 décembre",
      emoji: "🐱",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: 3,
      title: "Fidélité Montréal",
      description: "Achetez 5 sacs de nourriture, obtenez le 6e gratuit",
      discount: "1 GRATUIT",
      code: "FIDELE6",
      validUntil: "Programme permanent",
      emoji: "🍁",
      color: "from-green-400 to-blue-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: 4,
      title: "Weekend Spécial",
      description: "10% sur tous les jouets et enrichissement",
      discount: "10%",
      code: "WEEKEND10",
      validUntil: "Samedi et dimanche seulement",
      emoji: "🧸",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 5,
      title: "Santé Premium",
      description: "20% de rabais sur tous les suppléments",
      discount: "20%",
      code: "SANTE20",
      validUntil: "Valide tout le mois",
      emoji: "💊",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: 6,
      title: "Nettoyage Écolo",
      description: "Achetez 2 produits de nettoyage, économisez 25%",
      discount: "25%",
      code: "ECOLO25",
      validUntil: "Offre limitée",
      emoji: "🧽",
      color: "from-teal-400 to-green-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />

      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 glass-nav shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="ghost"
                  size="icon"
                  className="glass hover:bg-white/30"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🎁</div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Offres Spéciales
                  </h1>
                  <p className="text-sm text-gray-600">
                    Économisez sur vos produits favoris
                  </p>
                </div>
              </div>
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
          <div className="glass-card rounded-3xl p-8 text-center shadow-2xl bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Offres Exclusives Montréal
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Profitez de nos promotions spéciales pour gâter vos compagnons
            </p>
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
              ⏰ Offres limitées - Ne manquez pas!
            </Badge>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card
                  className={`glass-card border-0 shadow-xl overflow-hidden ${offer.bgColor} ${offer.borderColor} border-2 hover:shadow-2xl transition-all duration-300`}
                >
                  <CardHeader className="relative">
                    <div className="absolute top-4 right-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {offer.emoji}
                    </div>
                    <div
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${offer.color} text-white font-bold text-2xl mb-2`}
                    >
                      {offer.discount}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {offer.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 font-medium">
                      {offer.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg">
                        <span className="text-sm font-medium text-gray-600">
                          Code:
                        </span>
                        <Badge
                          variant="outline"
                          className="font-mono font-bold"
                        >
                          {offer.code}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{offer.validUntil}</span>
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${offer.color} hover:opacity-90 text-white border-0 font-semibold`}
                    >
                      🛒 Utiliser cette offre
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Loyalty Program */}
          <Card className="glass-card border-0 shadow-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                💎 Programme de Fidélité Kong's
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl mb-4">👑</div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rejoignez notre programme de fidélité et accumulez des points à
                chaque achat. Plus vous achetez, plus vous économisez!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-white/70 rounded-2xl">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="font-bold text-lg mb-2">Membre Bronze</h3>
                  <p className="text-sm text-gray-600">
                    5% de rabais après 100$ d'achats
                  </p>
                </div>
                <div className="p-6 bg-white/70 rounded-2xl">
                  <div className="text-4xl mb-3">⭐</div>
                  <h3 className="font-bold text-lg mb-2">Membre Argent</h3>
                  <p className="text-sm text-gray-600">
                    10% de rabais après 250$ d'achats
                  </p>
                </div>
                <div className="p-6 bg-white/70 rounded-2xl">
                  <div className="text-4xl mb-3">💎</div>
                  <h3 className="font-bold text-lg mb-2">Membre Or</h3>
                  <p className="text-sm text-gray-600">
                    15% de rabais après 500$ d'achats
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3"
              >
                🎯 Rejoindre le programme
              </Button>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="glass-card border-0 shadow-xl bg-gradient-to-r from-blue-50/50 to-green-50/50">
            <CardContent className="text-center p-8">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                Restez Informé des Meilleures Offres
              </h3>
              <p className="text-gray-600 mb-6">
                Inscrivez-vous à notre infolettre et soyez le premier à
                connaître nos promotions exclusives
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6">
                  ✉️ S'inscrire
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default OffersPage;
