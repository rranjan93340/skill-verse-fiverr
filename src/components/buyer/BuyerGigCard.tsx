
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MessageSquare, User } from 'lucide-react';

interface Gig {
  id: string;
  title: string;
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  price: number;
  image: string;
  category: string;
  reviews: number;
}

interface BuyerGigCardProps {
  gig: Gig;
}

export const BuyerGigCard: React.FC<BuyerGigCardProps> = ({ gig }) => {
  const navigate = useNavigate();

  const handleViewProfile = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/seller/${gig.seller.id}`);
  };

  const handleMessageSeller = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/messages');
  };

  return (
    <Link to={`/gig/${gig.id}`} className="group">
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
          
          {/* Action buttons */}
          <div className="flex gap-2 mb-3">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleViewProfile}
              className="flex-1"
            >
              <User className="h-3 w-3 mr-1" />
              Profile
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={handleMessageSeller}
              className="flex-1"
            >
              <MessageSquare className="h-3 w-3 mr-1" />
              Message
            </Button>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-500">Starting at</span>
            <span className="text-lg font-bold">${gig.price}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
