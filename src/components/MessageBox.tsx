
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Send, AlertTriangle, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface MessageBoxProps {
  conversationId: string;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ conversationId }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock messages data
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: '2',
      senderName: 'John Smith',
      senderAvatar: '/placeholder.svg',
      content: 'Hello! I saw your project requirements and I think I can help you create an amazing website.',
      timestamp: '10:30 AM',
      isCurrentUser: false
    },
    {
      id: '2',
      senderId: '1',
      senderName: user?.name || 'You',
      senderAvatar: user?.avatar || '/placeholder.svg',
      content: 'That sounds great! Can you tell me more about your experience with React development?',
      timestamp: '10:35 AM',
      isCurrentUser: true
    },
    {
      id: '3',
      senderId: '2',
      senderName: 'John Smith',
      senderAvatar: '/placeholder.svg',
      content: 'I have over 5 years of experience with React and have completed more than 200 projects. I can show you my portfolio if you\'d like.',
      timestamp: '10:40 AM',
      isCurrentUser: false
    }
  ]);

  // Contact information detection patterns
  const contactPatterns = [
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, // Email
    /\b(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}\b/g, // Phone numbers
    /\bgmail\b/gi,
    /\byahoo\b/gi,
    /\boutlook\b/gi,
    /\bhotmail\b/gi,
    /\bphone\b/gi,
    /\bcall me\b/gi,
    /\bwhatsapp\b/gi,
    /\btelegram\b/gi,
    /\bskype\b/gi,
    /\bcontact me at\b/gi,
    /\bmy email\b/gi,
    /\bmy number\b/gi
  ];

  const detectContactInfo = (text: string): boolean => {
    return contactPatterns.some(pattern => pattern.test(text));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    if (detectContactInfo(message)) {
      setShowWarning(true);
      return;
    }

    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      senderId: user?.id || '1',
      senderName: user?.name || 'You',
      senderAvatar: user?.avatar || '/placeholder.svg',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });

    // Simulate response after 2 seconds
    setTimeout(() => {
      const responseMessage: Message = {
        id: (messages.length + 2).toString(),
        senderId: '2',
        senderName: 'John Smith',
        senderAvatar: '/placeholder.svg',
        content: 'Thanks for your message! I\'ll get back to you shortly with more details.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isCurrentUser: false
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 2000);
  };

  const handleSendAnyway = () => {
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      senderId: user?.id || '1',
      senderName: user?.name || 'You',
      senderAvatar: user?.avatar || '/placeholder.svg',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    setShowWarning(false);
    
    toast({
      title: "Warning: Contact Information Detected",
      description: "Your message contained contact information. Please be cautious when sharing personal details.",
      variant: "destructive"
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-lg">
      {/* Warning Alert */}
      {showWarning && (
        <Alert className="m-4 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-700">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <strong>Warning:</strong> Do not disclose your email or contact ID. Your account may be deactivated for sharing personal contact information outside the platform.
              </div>
              <div className="flex space-x-2 ml-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => setShowWarning(false)}
                  className="text-red-700 border-red-300 hover:bg-red-100"
                >
                  Edit Message
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive" 
                  onClick={handleSendAnyway}
                >
                  Send Anyway
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setShowWarning(false)}
                  className="p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                msg.isCurrentUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
              }`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={msg.senderAvatar} />
                <AvatarFallback>{msg.senderName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.isCurrentUser
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
            disabled={showWarning}
          />
          <Button onClick={handleSendMessage} disabled={!message.trim() || showWarning}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          <AlertTriangle className="h-3 w-3 inline mr-1" />
          Do not share personal contact information. Keep all communications within the platform.
        </p>
      </div>
    </div>
  );
};
