
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, MessageSquare, Shield } from 'lucide-react';

const SellerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock seller data - in real app, fetch based on seller ID
  const seller = {
    id: id || '1',
    name: 'John Smith',
    avatar: '/placeholder.svg',
    title: 'Full Stack Developer',
    description: 'Experienced developer with 5+ years in React, Node.js, and modern web technologies. I create beautiful, responsive websites and web applications.',
    location: 'New York, USA',
    memberSince: 'January 2020',
    rating: 4.9,
    reviewCount: 127,
    responseTime: '1 hour',
    languages: ['English', 'Spanish'],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    totalOrders: 235,
    activeGigs: 8
  };

  const gigs = [
    {
      id: '1',
      title: 'I will create a modern responsive website',
      price: 150,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 45
    },
    {
      id: '2',
      title: 'I will develop a full stack web application',
      price: 300,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 32
    },
    {
      id: '3',
      title: 'I will fix bugs in your React application',
      price: 75,
      image: '/placeholder.svg',
      rating: 5.0,
      reviews: 28
    }
  ];

  const handleMessageSeller = () => {
    navigate('/messages');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Seller Header */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={seller.avatar} />
              <AvatarFallback className="text-2xl">{seller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{seller.name}</h1>
                  <p className="text-xl text-gray-600 mb-3">{seller.title}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{seller.rating}</span>
                      <span>({seller.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{seller.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Member since {seller.memberSince}</span>
                    </div>
                  </div>
                </div>
                
                <Button onClick={handleMessageSeller} className="mt-4 md:mt-0">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
              </div>
              
              <p className="text-gray-700 mb-4">{seller.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {seller.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Response Time</p>
                  <p className="font-medium">{seller.responseTime}</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Orders</p>
                  <p className="font-medium">{seller.totalOrders}</p>
                </div>
                <div>
                  <p className="text-gray-600">Active Gigs</p>
                  <p className="font-medium">{seller.activeGigs}</p>
                </div>
                <div>
                  <p className="text-gray-600">Languages</p>
                  <p className="font-medium">{seller.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Seller's Gigs */}
      <Card>
        <CardHeader>
          <CardTitle>Active Gigs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gigs.map((gig) => (
              <Card key={gig.id} className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/gig/${gig.id}`)}>
                <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-t-lg">
                  <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{gig.title}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{gig.rating}</span>
                    <span className="text-sm text-gray-500">({gig.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Starting at</span>
                    <span className="text-lg font-bold">${gig.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerProfile;
