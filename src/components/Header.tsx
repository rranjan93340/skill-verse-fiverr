import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, User, LogOut, Plus, LayoutDashboard, ShoppingBag, MessageSquare, ChevronDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const categories = [
  {
    name: 'Graphics & Design',
    subcategories: ['Logo Design', 'Brand Style Guides', 'Web & Mobile Design', 'Art & Illustration']
  },
  {
    name: 'Digital Marketing',
    subcategories: ['SEO', 'Social Media Marketing', 'Content Marketing', 'Email Marketing']
  },
  {
    name: 'Writing & Translation',
    subcategories: ['Articles & Blog Posts', 'Translation', 'Proofreading & Editing', 'Creative Writing']
  },
  {
    name: 'Video & Animation',
    subcategories: ['Video Editing', 'Animation', 'Visual Effects', 'Logo Animation']
  },
  {
    name: 'Music & Audio',
    subcategories: ['Music Production', 'Voice Over', 'Sound Design', 'Mixing & Mastering']
  },
  {
    name: 'Programming & Tech',
    subcategories: ['Web Development', 'Mobile App Development', 'AI Services', 'Blockchain']
  },
  {
    name: 'Business',
    subcategories: ['Virtual Assistant', 'Market Research', 'Business Plans', 'Data Analysis']
  }
];

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleMessagesClick = () => {
    navigate('/messages');
  };

  return (
    <div className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 text-xs text-gray-500">
            <div>
              <span>Your marketplace for freelance talent</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/how-it-works" className="hover:text-gray-700">How it works</Link>
              <Link to="/become-freelancer" className="hover:text-gray-700">Become a seller</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-green-600">fiverr</div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="text"
                placeholder="What service are you looking for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 h-12 rounded-l-md border-2 border-gray-300 focus:border-green-500"
              />
              <Button 
                type="submit"
                className="absolute right-0 top-0 h-12 px-6 bg-green-600 hover:bg-green-700 rounded-r-md rounded-l-none"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/how-it-works" className="text-gray-700 hover:text-green-600">
              How it works
            </Link>
            
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  onClick={handleMessagesClick}
                  className="text-gray-700 hover:text-green-600"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-700">{user.name}</span>
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/messages')}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Messages
                    </DropdownMenuItem>
                    {user.userType === 'seller' || user.userType === 'both' ? (
                      <>
                        <DropdownMenuItem onClick={() => navigate('/seller/dashboard')}>
                          <LayoutDashboard className="h-4 w-4 mr-2" />
                          Seller Dashboard
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/create-gig')}>
                          <Plus className="h-4 w-4 mr-2" />
                          Create Gig
                        </DropdownMenuItem>
                      </>
                    ) : null}
                    {user.userType === 'buyer' || user.userType === 'both' ? (
                      <DropdownMenuItem onClick={() => navigate('/buyer/dashboard')}>
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Buyer Dashboard
                      </DropdownMenuItem>
                    ) : null}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/become-freelancer" className="text-gray-700 hover:text-green-600">
                  Become a Seller
                </Link>
                <Link to="/login" className="text-gray-700 hover:text-green-600">
                  Sign in
                </Link>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/register">Join</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="lg:hidden"
            onClick={() => setShowMobileCategories(!showMobileCategories)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Categories Navigation - Desktop */}
        <div className="hidden lg:block border-t border-gray-100">
          <div className="flex items-center space-x-8 py-3 text-sm">
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-600 hover:text-green-600 p-0 h-auto font-normal">
                    {category.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {category.subcategories.map((sub) => (
                    <DropdownMenuItem key={sub} onClick={() => navigate(`/search?category=${encodeURIComponent(sub)}`)}>
                      {sub}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>

        {/* Mobile Categories */}
        {showMobileCategories && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="px-4">
              {categories.map((category) => (
                <div key={category.name} className="mb-4">
                  <h3 className="font-semibold text-gray-700">{category.name}</h3>
                  <ul className="mt-2 space-y-2">
                    {category.subcategories.map((sub) => (
                      <li key={sub}>
                        <Link to={`/search?category=${encodeURIComponent(sub)}`} className="block text-gray-600 hover:text-green-600">
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {user ? (
                <Button variant="outline" className="w-full justify-start" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/login" className="block text-center py-2 text-gray-700 hover:text-green-600">
                    Sign in
                  </Link>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to="/register">Join</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
