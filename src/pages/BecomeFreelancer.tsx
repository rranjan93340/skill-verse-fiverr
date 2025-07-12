
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, DollarSign, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const BecomeFreelancer = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Set your own rates and keep 85% of what you earn",
    },
    {
      icon: Clock,
      title: "Work Flexibly",
      description: "Choose when and where you work",
    },
    {
      icon: Users,
      title: "Global Clients",
      description: "Access to millions of clients worldwide",
    },
    {
      icon: Briefcase,
      title: "Build Your Brand",
      description: "Create a professional profile and portfolio",
    },
  ];

  const categories = [
    'Graphics & Design',
    'Digital Marketing', 
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'AI Services',
    'Consulting',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Start Your Freelancing Journey</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of freelancers who are building successful careers on FreelanceHub
          </p>
          <Link to="/register/seller">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Selling Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FreelanceHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-lg py-2 px-4">
                {category}
              </Badge>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Whatever your skill, there's a place for you on FreelanceHub
            </p>
            <Link to="/register/seller">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                skill: "Graphic Designer",
                earning: "$5,000+/month",
                story: "I've been able to work with amazing clients and build my dream portfolio while earning more than my full-time job."
              },
              {
                name: "Michael Chen",
                skill: "Web Developer",
                earning: "$8,000+/month",
                story: "FreelanceHub gave me the freedom to work on projects I'm passionate about while supporting my family."
              },
              {
                name: "Emma Rodriguez",
                skill: "Content Writer",
                earning: "$3,500+/month",
                story: "The flexibility to work from anywhere has allowed me to travel the world while building my writing career."
              }
            ].map((story, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.skill} • {story.earning}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeFreelancer;
