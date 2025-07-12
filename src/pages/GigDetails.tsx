
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Heart, Share2, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GigDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState('basic');
  
  // Mock gig data
  const gig = {
    id: id,
    title: 'I will create a modern responsive website with React and Node.js',
    seller: {
      name: 'John Smith',
      avatar: '/placeholder.svg',
      rating: 4.9,
      reviewCount: 127,
      level: 'Level 2 Seller',
      responseTime: '1 hour',
      location: 'United States'
    },
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB', 'Responsive Design'],
    description: `I will create a modern, responsive website using the latest technologies including React.js for the frontend and Node.js for the backend.

What you'll get:
• Modern and responsive design
• Clean, maintainable code
• SEO optimized
• Fast loading times
• Cross-browser compatibility
• Mobile-friendly design

I have over 5 years of experience in web development and have completed 200+ projects successfully. I specialize in creating websites that not only look great but also perform exceptionally well.`,
    packages: {
      basic: {
        name: 'Basic',
        price: 150,
        deliveryTime: 7,
        description: 'A simple responsive website with up to 5 pages',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Basic SEO',
          '1 revision'
        ]
      },
      standard: {
        name: 'Standard',
        price: 300,
        deliveryTime: 10,
        description: 'A professional website with advanced features',
        features: [
          'Up to 10 pages',
          'Responsive design',
          'Advanced SEO',
          'Contact form',
          'Social media integration',
          '3 revisions'
        ]
      },
      premium: {
        name: 'Premium',
        price: 500,
        deliveryTime: 14,
        description: 'A complete web solution with backend integration',
        features: [
          'Unlimited pages',
          'Responsive design',
          'Advanced SEO',
          'Backend integration',
          'Database setup',
          'Admin panel',
          'Unlimited revisions'
        ]
      }
    },
    reviews: [
      {
        id: '1',
        user: 'Alice Johnson',
        avatar: '/placeholder.svg',
        rating: 5,
        date: '2024-01-10',
        comment: 'Excellent work! John delivered exactly what I needed and more. The website looks professional and works perfectly.'
      },
      {
        id: '2',
        user: 'Bob Wilson',
        avatar: '/placeholder.svg',
        rating: 5,
        date: '2024-01-05',
        comment: 'Great communication and fast delivery. Highly recommended!'
      }
    ]
  };

  const handleOrderNow = () => {
    const selectedPkg = gig.packages[selectedPackage as keyof typeof gig.packages];
    toast({
      title: "Order Placed!",
      description: `You've ordered the ${selectedPkg.name} package for $${selectedPkg.price}`,
    });
  };

  const handleContactSeller = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the seller",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Gallery */}
          <div className="space-y-4">
            <img
              src={gig.images[0]}
              alt={gig.title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="grid grid-cols-3 gap-2">
              {gig.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Title and Basic Info */}
          <div>
            <Badge className="mb-2">{gig.category}</Badge>
            <h1 className="text-2xl font-bold mb-4">{gig.title}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={gig.seller.avatar} />
                  <AvatarFallback>{gig.seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{gig.seller.name}</span>
                <Badge variant="secondary">{gig.seller.level}</Badge>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{gig.seller.rating}</span>
                <span className="text-gray-500">({gig.seller.reviewCount})</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Response time: {gig.seller.responseTime}</span>
              <span>From: {gig.seller.location}</span>
            </div>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About This Gig</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {gig.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {gig.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Reviews ({gig.reviews.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {gig.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">{review.user}</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Package Selection */}
          <Card className="sticky top-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Choose a Package</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={selectedPackage} onValueChange={setSelectedPackage}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="standard">Standard</TabsTrigger>
                  <TabsTrigger value="premium">Premium</TabsTrigger>
                </TabsList>
                
                {Object.entries(gig.packages).map(([key, pkg]) => (
                  <TabsContent key={key} value={key}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{pkg.name}</h3>
                        <span className="text-2xl font-bold">${pkg.price}</span>
                      </div>
                      <p className="text-gray-600">{pkg.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.deliveryTime} days delivery</span>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-2">
                        <Button onClick={handleOrderNow} className="w-full">
                          Continue (${pkg.price})
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={handleContactSeller}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Seller Info */}
          <Card>
            <CardHeader>
              <CardTitle>About the Seller</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={gig.seller.avatar} />
                  <AvatarFallback>{gig.seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{gig.seller.name}</h3>
                  <Badge variant="secondary">{gig.seller.level}</Badge>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{gig.seller.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Response time</span>
                  <span>{gig.seller.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span>{gig.seller.location}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
