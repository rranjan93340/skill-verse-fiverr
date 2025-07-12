
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, User, LogOut, Plus, BarChart3, ChevronDown, Globe } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const categories = [
    'Graphics & Design',
    'Programming & Tech', 
    'Digital Marketing',
    'Video & Animation',
    'Writing & Translation',
    'Music & Audio',
    'Business',
    'Finance',
    'AI Services'
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-600">
            fiverr<span className="text-black">.</span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                placeholder="What service are you looking for today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12 h-12 border-gray-300 focus:border-green-500"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-gray-900 hover:bg-gray-800"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Right Navigation */}
          <nav className="flex items-center space-x-6">
            {/* Fiverr Pro */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  Fiverr Pro <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/pro">I'm looking to hire</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pro-freelancer">I want to offer Pro services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Explore */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-green-600">
                  Explore <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/discover">Discover</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/community">Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/guides">Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/podcast">Podcast</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/learn">Learn</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/logo-maker">Logo Maker</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language */}
            <Button variant="ghost" size="sm" className="text-gray-700">
              <Globe className="h-4 w-4 mr-1" />
              EN
            </Button>

            {/* Become a Seller */}
            <Link to="/become-freelancer" className="text-gray-700 hover:text-green-600 text-sm font-medium">
              Become a Seller
            </Link>

            {user ? (
              <>
                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    {(user.userType === 'buyer' || user.userType === 'both') && (
                      <DropdownMenuItem asChild>
                        <Link to="/buyer-dashboard" className="flex items-center">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Buyer Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {(user.userType === 'seller' || user.userType === 'both') && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link to="/seller-dashboard" className="flex items-center">
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Seller Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/create-gig" className="flex items-center">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Gig
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuItem onClick={logout} className="flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-gray-700 hover:text-green-600 text-sm font-medium">
                  Sign in
                </Link>
                <Link to="/register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Join
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>

        {/* Categories Navigation */}
        <div className="border-t py-2">
          <div className="flex items-center space-x-8 overflow-x-auto">
            <div className="flex items-center text-orange-500 font-medium text-sm whitespace-nowrap">
              <span className="mr-2">🔥</span>
              Trending
            </div>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/search?category=${encodeURIComponent(category.toLowerCase())}`}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium whitespace-nowrap transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
