
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Code, Palette, Camera, Music, TrendingUp, Users, Award } from 'lucide-react';
import { BuyerGigCard } from '@/components/buyer/BuyerGigCard';

const BuyerHome = () => {
  // Mock data for featured gigs
  const featuredGigs = [
    {
      id: '1',
      title: 'I will create a modern responsive website',
      seller: { 
        id: 'seller-1',
        name: 'John Smith', 
        avatar: '/placeholder.svg', 
        rating: 4.9 
      },
      price: 150,
      image: '/placeholder.svg',
      category: 'Web Development',
      reviews: 127
    },
    {
      id: '2',
      title: 'I will design a professional logo',
      seller: { 
        id: 'seller-2',
        name: 'Sarah Johnson', 
        avatar: '/placeholder.svg', 
        rating: 4.8 
      },
      price: 50,
      image: '/placeholder.svg',
      category: 'Graphic Design',
      reviews: 89
    },
    {
      id: '3',
      title: 'I will edit your videos professionally',
      seller: { 
        id: 'seller-3',
        name: 'Mike Davis', 
        avatar: '/placeholder.svg', 
        rating: 4.9 
      },
      price: 75,
      image: '/placeholder.svg',
      category: 'Video Editing',
      reviews: 156
    },
    {
      id: '4',
      title: 'I will compose original music',
      seller: { 
        id: 'seller-4',
        name: 'Emma Wilson', 
        avatar: '/placeholder.svg', 
        rating: 4.7 
      },
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

  const stats = [
    { icon: TrendingUp, title: 'Quality Work', description: '500K+ projects completed' },
    { icon: Users, title: 'Expert Freelancers', description: '100K+ talented professionals' },
    { icon: Award, title: 'Satisfaction', description: '95% client satisfaction rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Buyer Focused */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find the perfect <span className="text-yellow-300">freelancer</span> for your project
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your project done by skilled professionals. From design to development, we have the talent you need.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="What service do you need? (e.g., logo design, web development)"
                className="flex-1 px-6 py-4 text-gray-800 text-lg"
              />
              <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
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

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGigs.map((gig) => (
              <BuyerGigCard key={gig.id} gig={gig} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Post Your Project</h3>
              <p className="text-gray-600">Tell us what you need done and get free quotes from freelancers.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Freelancer</h3>
              <p className="text-gray-600">Compare profiles, reviews, and proposals then hire the perfect freelancer.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Get Your Work Done</h3>
              <p className="text-gray-600">Collaborate and communicate until you're 100% satisfied with the work delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied clients who found the perfect freelancer.</p>
          <Link to="/search">
            <Button size="lg" variant="secondary">
              Find Freelancers Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BuyerHome;
