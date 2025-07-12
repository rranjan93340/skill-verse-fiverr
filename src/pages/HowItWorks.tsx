
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MessageSquare, CreditCard, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find the right freelancer",
      description: "Browse through thousands of talented freelancers and find the perfect match for your project.",
    },
    {
      icon: MessageSquare,
      title: "Communicate with ease",
      description: "Use our built-in messaging system to discuss project details and requirements.",
    },
    {
      icon: CreditCard,
      title: "Secure payment",
      description: "Pay safely through our platform. Funds are released only when you're satisfied.",
    },
    {
      icon: Star,
      title: "Leave feedback",
      description: "Rate your experience to help build trust in our community.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">How FreelanceHub Works</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with talented freelancers and get your projects done with ease
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Steps to Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <step.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied clients who found their perfect freelancer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register/buyer">
              <Button size="lg" variant="secondary">
                Hire a Freelancer
              </Button>
            </Link>
            <Link to="/register/seller">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                Become a Freelancer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
