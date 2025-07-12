
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Clock, CheckCircle, MessageSquare } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const BuyerDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for buyer's orders
  const [orders] = useState([
    {
      id: '1',
      gigTitle: 'Professional Logo Design',
      seller: 'Sarah Johnson',
      sellerAvatar: '/placeholder.svg',
      amount: 75,
      status: 'in_progress',
      orderDate: '2024-01-15',
      dueDate: '2024-01-22',
      deliveryTime: '7 days'
    },
    {
      id: '2',
      gigTitle: 'Modern Website Development',
      seller: 'John Smith',
      sellerAvatar: '/placeholder.svg',
      amount: 350,
      status: 'completed',
      orderDate: '2024-01-10',
      dueDate: '2024-01-17',
      deliveryTime: '7 days'
    },
    {
      id: '3',
      gigTitle: 'Video Editing Service',
      seller: 'Mike Davis',
      sellerAvatar: '/placeholder.svg',
      amount: 120,
      status: 'pending',
      orderDate: '2024-01-18',
      dueDate: '2024-01-25',
      deliveryTime: '7 days'
    }
  ]);

  const [favorites] = useState([
    {
      id: '1',
      title: 'I will create stunning social media graphics',
      seller: 'Emma Wilson',
      price: 45,
      rating: 4.9,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'I will write SEO optimized articles',
      seller: 'David Brown',
      price: 80,
      rating: 4.8,
      image: '/placeholder.svg'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in_progress': return <ShoppingCart className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Buyer Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Orders</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Messages</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-6">
          <div className="grid gap-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{order.gigTitle}</h3>
                      <p className="text-gray-600 mb-2">Seller: {order.seller}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Amount: ${order.amount}</span>
                        <span>Order Date: {order.orderDate}</span>
                        <span>Due Date: {order.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                        {getStatusIcon(order.status)}
                        {order.status.replace('_', ' ')}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                  
                  {order.status === 'in_progress' && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>In Progress:</strong> Your order is currently being worked on. 
                        Expected delivery: {order.dueDate}
                      </p>
                    </div>
                  )}
                  
                  {order.status === 'completed' && (
                    <div className="bg-green-50 p-4 rounded-lg flex items-center justify-between">
                      <p className="text-sm text-green-800">
                        <strong>Completed:</strong> Your order has been delivered successfully.
                      </p>
                      <Button size="sm" variant="outline">
                        Leave Review
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-6">
          <div className="grid gap-6">
            {favorites.map((gig) => (
              <Card key={gig.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{gig.title}</h3>
                      <p className="text-gray-600 mb-2">by {gig.seller}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>Rating: {gig.rating}</span>
                          <span>•</span>
                          <span>Starting at ${gig.price}</span>
                        </div>
                        <Button size="sm">
                          View Gig
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Reviews</CardTitle>
              <CardDescription>
                Reviews you've left for sellers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-500">No reviews yet. Complete an order to leave your first review!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BuyerDashboard;
