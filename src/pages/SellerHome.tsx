
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, DollarSign, Users, Star, TrendingUp, MessageSquare, Award, Target } from 'lucide-react';

const SellerHome = () => {
  const features = [
    { 
      icon: Plus, 
      title: 'Create Your Gigs', 
      description: 'Showcase your skills and services to millions of buyers',
      color: 'bg-green-100 text-green-600' 
    },
    { 
      icon: DollarSign, 
      title: 'Earn Money', 
      description: 'Set your own prices and get paid for what you love doing',
      color: 'bg-blue-100 text-blue-600' 
    },
    { 
      icon: Users, 
      title: 'Build Your Business', 
      description: 'Grow your client base and establish your reputation',
      color: 'bg-purple-100 text-purple-600' 
    },
    { 
      icon: Star, 
      title: 'Get Reviews', 
      description: 'Build trust with 5-star reviews from satisfied clients',
      color: 'bg-yellow-100 text-yellow-600' 
    }
  ];

  const stats = [
    { icon: TrendingUp, title: 'Average Earnings', value: '$2,000/month' },
    { icon: Users, title: 'Active Buyers', value: '1M+' },
    { icon: Award, title: 'Success Rate', value: '87%' }
  ];

  const quickActions = [
    { title: 'Create New Gig', icon: Plus, link: '/create-gig', color: 'bg-green-600 hover:bg-green-700' },
    { title: 'View Dashboard', icon: Target, link: '/seller/dashboard', color: 'bg-blue-600 hover:bg-blue-700' },
    { title: 'Messages', icon: MessageSquare, link: '/messages', color: 'bg-purple-600 hover:bg-purple-700' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Seller Focused */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Turn your <span className="text-yellow-300">skills</span> into income
            </h1>
            <p className="text-xl mb-8">
              Join thousands of freelancers earning money doing what they love. Create your gigs and start selling today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-gig">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  <Plus className="h-5 w-5 mr-2" />
                  Create Your First Gig
                </Button>
              </Link>
              <Link to="/seller/dashboard">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Button className={`w-full h-20 ${action.color} text-white flex flex-col items-center justify-center space-y-2`}>
                  <action.icon className="h-6 w-6" />
                  <span className="font-medium">{action.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Seller Success Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sell With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className={`inline-flex p-4 rounded-full ${feature.color} mb-4`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tips for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Optimize Your Gigs</h3>
              <p className="text-gray-600">Use clear titles, detailed descriptions, and high-quality images to attract more buyers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Deliver Quality Work</h3>
              <p className="text-gray-600">Always exceed expectations and deliver on time to build your reputation and get repeat clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Communicate Well</h3>
              <p className="text-gray-600">Respond quickly to messages and keep clients updated on project progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start earning?</h2>
          <p className="text-xl mb-8">Create your first gig and join the freelancer community today.</p>
          <Link to="/create-gig">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Plus className="h-5 w-5 mr-2" />
              Create Your First Gig
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SellerHome;
