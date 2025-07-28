import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Heart,
  ShoppingBag,
  MapPin,
  Settings,
  LogOut,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import BottomNavigation from "./BottomNavigation";

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LoginForm = () => (
    <Card className="glass-card border-0 shadow-xl max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🐾 Connexion
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Mot de passe</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          onClick={() => setIsLoggedIn(true)}
        >
          🔐 Se connecter
        </Button>
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-600">Pas encore de compte?</p>
          <Button variant="outline" className="w-full">
            📝 Créer un compte
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const UserDashboard = () => (
    <div className="space-y-6">
      {/* User Profile Header */}
      <Card className="glass-card border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              MJ
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                Marie Jolivet
              </h2>
              <p className="text-gray-600">marie.jolivet@email.com</p>
              <Badge className="mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                <Crown className="h-4 w-4 mr-1" />
                Membre Or - 15% de rabais
              </Badge>
            </div>
            <Button variant="outline" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card border-0 shadow-lg text-center p-4">
          <div className="text-3xl mb-2">🛒</div>
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-sm text-gray-600">Commandes</div>
        </Card>
        <Card className="glass-card border-0 shadow-lg text-center p-4">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-2xl font-bold text-green-600">847$</div>
          <div className="text-sm text-gray-600">Économisé</div>
        </Card>
        <Card className="glass-card border-0 shadow-lg text-center p-4">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-yellow-600">2,450</div>
          <div className="text-sm text-gray-600">Points</div>
        </Card>
        <Card className="glass-card border-0 shadow-lg text-center p-4">
          <div className="text-3xl mb-2">❤️</div>
          <div className="text-2xl font-bold text-red-600">8</div>
          <div className="text-sm text-gray-600">Favoris</div>
        </Card>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="orders">🛍️ Commandes</TabsTrigger>
          <TabsTrigger value="favorites">❤️ Favoris</TabsTrigger>
          <TabsTrigger value="addresses">📍 Adresses</TabsTrigger>
          <TabsTrigger value="pets">🐾 Mes Animaux</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          <Card className="glass-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Commandes Récentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  id: "#2024-001",
                  date: "15 janvier 2024",
                  total: "89.99$",
                  status: "Livrée",
                  items: "Nourriture premium pour chat, Jouet souris",
                },
                {
                  id: "#2024-002",
                  date: "8 janvier 2024",
                  total: "156.50$",
                  status: "En transit",
                  items: "Cage hamster, Litière écologique",
                },
              ].map((order, index) => (
                <div key={index} className="p-4 bg-white/50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{order.total}</p>
                      <Badge
                        className={
                          order.status === "Livrée"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{order.items}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4">
          <Card className="glass-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Produits Favoris</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: "Nourriture Premium Ragdoll",
                    price: "34.99$",
                    image:
                      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&q=80",
                  },
                  {
                    name: "Arbre à Chat Deluxe",
                    price: "129.99$",
                    image:
                      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=300&q=80",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-lg font-bold text-blue-600">
                        {item.price}
                      </p>
                    </div>
                    <Button size="sm">🛒 Ajouter</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses" className="space-y-4">
          <Card className="glass-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Adresses de Livraison</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white/50 rounded-lg border-2 border-blue-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">Domicile</p>
                    <Badge className="bg-blue-100 text-blue-800">
                      Principal
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>
                <p className="text-gray-600">
                  123 Rue Sainte-Catherine
                  <br />
                  Montréal, QC H3B 1A1
                  <br />
                  Canada
                </p>
              </div>
              <Button variant="outline" className="w-full">
                ➕ Ajouter une nouvelle adresse
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pets" className="space-y-4">
          <Card className="glass-card border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Mes Compagnons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Minou",
                  type: "Chat Ragdoll",
                  age: "3 ans",
                  image:
                    "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300&q=80",
                  notes: "Allergique au poulet",
                },
                {
                  name: "Rex",
                  type: "Golden Retriever",
                  age: "5 ans",
                  image:
                    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&q=80",
                  notes: "Très actif, aime les jouets",
                },
              ].map((pet, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                >
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-lg">{pet.name}</p>
                    <p className="text-gray-600">
                      {pet.type} • {pet.age}
                    </p>
                    <p className="text-sm text-gray-500">{pet.notes}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                🐾 Ajouter un animal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Logout */}
      <Card className="glass-card border-0 shadow-lg">
        <CardContent className="p-4">
          <Button
            variant="outline"
            className="w-full text-red-600 border-red-200 hover:bg-red-50"
            onClick={() => setIsLoggedIn(false)}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Se déconnecter
          </Button>
        </CardContent>
      </Card>
    </div>
  );

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
                <div className="text-3xl">👤</div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Mon Compte
                  </h1>
                  <p className="text-sm text-gray-600">
                    Gérez votre profil et commandes
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
        >
          {!isLoggedIn ? <LoginForm /> : <UserDashboard />}
        </motion.div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default AccountPage;
