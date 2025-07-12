
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Search, Code, Palette, Camera, Music } from 'lucide-react';

const Index = () => {
  // Mock data for featured gigs
  const featuredGigs = [
    {
      id: '1',
      title: 'I will create a modern responsive website',
      seller: { name: 'John Smith', avatar: '/placeholder.svg', rating: 4.9 },
      price: 150,
      image: '/placeholder.svg',
      category: 'Web Development',
      reviews: 127
    },
    {
      id: '2',
      title: 'I will design a professional logo',
      seller: { name: 'Sarah Johnson', avatar: '/placeholder.svg', rating: 4.8 },
      price: 50,
      image: '/placeholder.svg',
      category: 'Graphic Design',
      reviews: 89
    },
    {
      id: '3',
      title: 'I will edit your videos professionally',
      seller: { name: 'Mike Davis', avatar: '/placeholder.svg', rating: 4.9 },
      price: 75,
      image: '/placeholder.svg',
      category: 'Video Editing',
      reviews: 156
    },
    {
      id: '4',
      title: 'I will compose original music',
      seller: { name: 'Emma Wilson', avatar: '/placeholder.svg', rating: 4.7 },
      price: 200,
      image: '/placeholder.svg',
      category: 'Music Production',
      reviews: 64
    }
  ];

  const categories = [
    { name: 'Programming', icon: Code, color: 'bg-blue-100 text-blue-800' },
    { name: 'Design', icon: Palette, color: 'bg-purple-100 text-purple-800' },
    { name: 'Photography', icon: Camera, color: 'bg-green-100 text-green-800' },
    { name: 'Music', icon: Music, color: 'bg-yellow-100 text-yellow-800' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find the perfect <span className="text-yellow-300">freelance</span> services for your business
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Millions of people use FreelanceHub to turn their ideas into reality.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Try 'building mobile app'"
                className="flex-1 px-6 py-4 text-gray-800 text-lg"
              />
              <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/search?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-8 pb-6">
                    <div className={`inline-flex p-4 rounded-full ${category.color} mb-4`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGigs.map((gig) => (
              <Link key={gig.id} to={`/gig/${gig.id}`} className="group">
                <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={gig.seller.avatar} />
                        <AvatarFallback>{gig.seller.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{gig.seller.name}</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">{gig.title}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{gig.seller.rating}</span>
                      <span className="text-sm text-gray-500">({gig.reviews})</span>
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {gig.category}
                    </Badge>
                  </CardContent>
                  <CardFooter className="px-4 pb-4 pt-0">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-bold">${gig.price}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Join millions of people who use FreelanceHub to turn their ideas into reality.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary">
                Get Started as a Buyer
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Start Selling
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
