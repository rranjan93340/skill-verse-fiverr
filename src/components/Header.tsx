
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Search, User, LogOut, Plus, BarChart3, ChevronDown } from 'lucide-react';
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
    'Digital Marketing', 
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'AI Services',
    'Consulting',
    'Data',
    'Business',
    'Personal Growth & Hobbies',
    'Photography',
    'Finance',
    'End-to-End Projects'
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-600">
            FreelanceHub
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                {/* Seller Actions */}
                {(user.userType === 'seller' || user.userType === 'both') && (
                  <Link to="/create-gig">
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Gig
                    </Button>
                  </Link>
                )}

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
                      <DropdownMenuItem asChild>
                        <Link to="/seller-dashboard" className="flex items-center">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Seller Dashboard
                        </Link>
                      </DropdownMenuItem>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      Sign In <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/login/buyer">As a Buyer</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/login/seller">As a Seller</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>
                      Join <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/register/buyer">As a Buyer</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/register/seller">As a Seller</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="border-t bg-gray-50">
        <div className="container mx-auto px-4">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex-wrap justify-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-2 p-4 w-96">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/search?category=${encodeURIComponent(category.toLowerCase())}`}
                        className="block p-2 hover:bg-gray-100 rounded text-sm"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Clients</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <Link to="/how-it-works" className="block p-2 hover:bg-gray-100 rounded text-sm">How FreelanceHub Works</Link>
                    <Link to="/success-stories" className="block p-2 hover:bg-gray-100 rounded text-sm">Customer Success Stories</Link>
                    <Link to="/trust-safety" className="block p-2 hover:bg-gray-100 rounded text-sm">Trust & Safety</Link>
                    <Link to="/quality-guide" className="block p-2 hover:bg-gray-100 rounded text-sm">Quality Guide</Link>
                    <Link to="/learn" className="block p-2 hover:bg-gray-100 rounded text-sm">FreelanceHub Learn</Link>
                    <Link to="/guides" className="block p-2 hover:bg-gray-100 rounded text-sm">FreelanceHub Guides</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>For Freelancers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <Link to="/become-freelancer" className="block p-2 hover:bg-gray-100 rounded text-sm">Become a Freelancer</Link>
                    <Link to="/become-agency" className="block p-2 hover:bg-gray-100 rounded text-sm">Become an Agency</Link>
                    <Link to="/community" className="block p-2 hover:bg-gray-100 rounded text-sm">Community Hub</Link>
                    <Link to="/forum" className="block p-2 hover:bg-gray-100 rounded text-sm">Forum</Link>
                    <Link to="/events" className="block p-2 hover:bg-gray-100 rounded text-sm">Events</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Business Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <Link to="/pro" className="block p-2 hover:bg-gray-100 rounded text-sm">FreelanceHub Pro</Link>
                    <Link to="/project-management" className="block p-2 hover:bg-gray-100 rounded text-sm">Project Management</Link>
                    <Link to="/expert-sourcing" className="block p-2 hover:bg-gray-100 rounded text-sm">Expert Sourcing</Link>
                    <Link to="/logo-maker" className="block p-2 hover:bg-gray-100 rounded text-sm">Logo Maker</Link>
                    <Link to="/contact-sales" className="block p-2 hover:bg-gray-100 rounded text-sm">Contact Sales</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
