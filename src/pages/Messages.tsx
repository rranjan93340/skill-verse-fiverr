
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, MessageSquare, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { MessageBox } from '@/components/MessageBox';

const Messages = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock conversations data
  const conversations = [
    {
      id: '1',
      participantName: 'John Smith',
      participantAvatar: '/placeholder.svg',
      participantType: 'seller',
      lastMessage: 'Thank you for your interest in my gig. I can definitely help you with this project.',
      lastMessageTime: '2 hours ago',
      unreadCount: 2,
      gigTitle: 'Modern Website Development',
      isOnline: true
    },
    {
      id: '2',
      participantName: 'Sarah Johnson',
      participantAvatar: '/placeholder.svg',
      participantType: 'buyer',
      lastMessage: 'When can you start working on the logo design?',
      lastMessageTime: '1 day ago',
      unreadCount: 0,
      gigTitle: 'Professional Logo Design',
      isOnline: false
    },
    {
      id: '3',
      participantName: 'Mike Davis',
      participantAvatar: '/placeholder.svg',
      participantType: 'seller',
      lastMessage: 'I have completed the initial draft. Please check and let me know your feedback.',
      lastMessageTime: '3 days ago',
      unreadCount: 1,
      gigTitle: 'Video Editing Service',
      isOnline: true
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.participantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.gigTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedConversation) {
    const conversation = conversations.find(c => c.id === selectedConversation);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedConversation(null)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Messages
          </Button>
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={conversation?.participantAvatar} />
              <AvatarFallback>{conversation?.participantName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{conversation?.participantName}</h2>
              <p className="text-sm text-gray-600">{conversation?.gigTitle}</p>
            </div>
            {conversation?.isOnline && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Online
              </Badge>
            )}
          </div>
        </div>
        <MessageBox conversationId={selectedConversation} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-gray-600">Manage your conversations with {user?.userType === 'buyer' ? 'sellers' : 'buyers'}</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="space-y-4">
        {filteredConversations.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No conversations yet</h3>
              <p className="text-gray-600">
                {user?.userType === 'buyer' 
                  ? 'Start messaging sellers to discuss your projects' 
                  : 'Buyers will message you about your gigs'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredConversations.map((conversation) => (
            <Card 
              key={conversation.id} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.participantAvatar} />
                        <AvatarFallback>{conversation.participantName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conversation.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold truncate">{conversation.participantName}</h3>
                        <Badge variant="outline" className="text-xs">
                          {conversation.participantType}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1 truncate">{conversation.gigTitle}</p>
                      <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="text-xs text-gray-500">{conversation.lastMessageTime}</span>
                    {conversation.unreadCount > 0 && (
                      <Badge className="bg-blue-500 text-white text-xs px-2 py-1">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
