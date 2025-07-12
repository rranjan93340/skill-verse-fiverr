
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Eye, Edit, Trash2, DollarSign, Star, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const SellerDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for seller's gigs and orders
  const [gigs] = useState([
    {
      id: '1',
      title: 'I will create a modern responsive website',
      price: 150,
      status: 'active',
      views: 245,
      orders: 12,
      rating: 4.9,
      image: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'I will design a professional mobile app UI',
      price: 200,
      status: 'active',
      views: 189,
      orders: 8,
      rating: 4.8,
      image: '/placeholder.svg'
    }
  ]);

  const [orders] = useState([
    {
      id: '1',
      gigTitle: 'Modern responsive website',
      buyer: 'Alice Johnson',
      amount: 150,
      status: 'in_progress',
      dueDate: '2024-01-20',
      orderDate: '2024-01-15'
    },
    {
      id: '2',
      gigTitle: 'Mobile app UI design',
      buyer: 'Bob Smith',
      amount: 200,
      status: 'completed',
      dueDate: '2024-01-18',
      orderDate: '2024-01-10'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Seller Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
        </div>
        <Link to="/create-gig">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New Gig
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold">$2,450</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Orders</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold">4.9</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="gigs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="gigs">My Gigs</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="gigs" className="space-y-6">
          <div className="grid gap-6">
            {gigs.map((gig) => (
              <Card key={gig.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4">
                      <img
                        src={gig.image}
                        alt={gig.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{gig.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>Price: ${gig.price}</span>
                          <span>Views: {gig.views}</span>
                          <span>Orders: {gig.orders}</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{gig.rating}</span>
                          </div>
                        </div>
                        <Badge className={`mt-2 ${getStatusColor(gig.status)}`}>
                          {gig.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <div className="grid gap-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{order.gigTitle}</h3>
                      <p className="text-gray-600 mb-2">Buyer: {order.buyer}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Amount: ${order.amount}</span>
                        <span>Order Date: {order.orderDate}</span>
                        <span>Due Date: {order.dueDate}</span>
                      </div>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Your gig performance over the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-500">Analytics dashboard coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SellerDashboard;
