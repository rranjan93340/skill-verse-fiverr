
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Star, Search as SearchIcon, Filter } from 'lucide-react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('relevance');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');

  // Mock search results
  const [results] = useState([
    {
      id: '1',
      title: 'I will create a modern responsive website',
      seller: { name: 'John Smith', avatar: '/placeholder.svg', rating: 4.9 },
      price: 150,
      image: '/placeholder.svg',
      category: 'Web Development',
      reviews: 127,
      tags: ['React', 'Node.js', 'Responsive']
    },
    {
      id: '2',
      title: 'I will design a professional logo',
      seller: { name: 'Sarah Johnson', avatar: '/placeholder.svg', rating: 4.8 },
      price: 50,
      image: '/placeholder.svg',
      category: 'Graphic Design',
      reviews: 89,
      tags: ['Logo', 'Branding', 'Design']
    },
    {
      id: '3',
      title: 'I will edit your videos professionally',
      seller: { name: 'Mike Davis', avatar: '/placeholder.svg', rating: 4.9 },
      price: 75,
      image: '/placeholder.svg',
      category: 'Video Editing',
      reviews: 156,
      tags: ['Video', 'Editing', 'Motion Graphics']
    },
    {
      id: '4',
      title: 'I will write SEO optimized content',
      seller: { name: 'Emma Wilson', avatar: '/placeholder.svg', rating: 4.7 },
      price: 40,
      image: '/placeholder.svg',
      category: 'Writing',
      reviews: 64,
      tags: ['SEO', 'Content', 'Copywriting']
    },
    {
      id: '5',
      title: 'I will develop a mobile app',
      seller: { name: 'Alex Chen', avatar: '/placeholder.svg', rating: 4.8 },
      price: 300,
      image: '/placeholder.svg',
      category: 'Mobile Development',
      reviews: 92,
      tags: ['Mobile', 'iOS', 'Android']
    },
    {
      id: '6',
      title: 'I will create social media graphics',
      seller: { name: 'Lisa Brown', avatar: '/placeholder.svg', rating: 4.6 },
      price: 25,
      image: '/placeholder.svg',
      category: 'Graphic Design',
      reviews: 78,
      tags: ['Social Media', 'Graphics', 'Instagram']
    }
  ]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'web development', label: 'Web Development' },
    { value: 'graphic design', label: 'Graphic Design' },
    { value: 'video editing', label: 'Video Editing' },
    { value: 'writing', label: 'Writing' },
    { value: 'mobile development', label: 'Mobile Development' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (category !== 'all') params.set('category', category);
    setSearchParams(params);
  };

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const filteredResults = results.filter(result => {
    const matchesQuery = !searchQuery || 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = category === 'all' || 
      result.category.toLowerCase() === category.toLowerCase();
    
    const matchesPrice = result.price >= priceRange[0] && result.price <= priceRange[1];
    
    return matchesQuery && matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Input
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-12"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            {searchQuery ? `Results for "${searchQuery}"` : 'Browse Services'}
            <span className="text-gray-500 font-normal text-base ml-2">
              ({filteredResults.length} services available)
            </span>
          </h1>
          <div className="flex items-center space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setPriceRange([0, 1000]);
                    setCategory('all');
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          {filteredResults.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No services found</p>
              <p className="text-gray-400">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResults.map((gig) => (
                <Link key={gig.id} to={`/gig/${gig.id}`} className="group">
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
                      <div className="flex flex-wrap gap-1 mb-3">
                        {gig.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-4 pb-4 pt-0">
                      <div className="flex items-center justify-between w-full">
                        <Badge variant="outline">{gig.category}</Badge>
                        <span className="text-lg font-bold">${gig.price}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
