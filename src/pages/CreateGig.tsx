
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateGig = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    basicPrice: '',
    standardPrice: '',
    premiumPrice: '',
    basicDeliveryTime: '',
    standardDeliveryTime: '',
    premiumDeliveryTime: '',
    basicDescription: '',
    standardDescription: '',
    premiumDescription: ''
  });

  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Graphic Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Business',
    'Lifestyle'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim()) && tags.length < 5) {
      setTags(prev => [...prev, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(prev => [...prev, ...files].slice(0, 5)); // Max 5 images
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.category || !formData.description || !formData.basicPrice) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      // Here you would typically upload images and submit to your backend
      console.log('Creating gig:', { ...formData, tags, images });
      
      toast({
        title: "Success",
        description: "Your gig has been created successfully!",
      });
      
      navigate('/seller-dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create gig. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create a New Gig</h1>
        <p className="text-gray-600 mt-1">Share your skills with the world</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Gig Overview</CardTitle>
            <CardDescription>
              Provide the basic information about your service
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Gig Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="I will..."
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select onValueChange={handleCategoryChange} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your service in detail..."
                className="min-h-32"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Tags (up to 5)</Label>
              <div className="flex space-x-2 mb-2">
                <Input
                  placeholder="Add a tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} disabled={tags.length >= 5}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing & Packages */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing & Packages</CardTitle>
            <CardDescription>
              Set up your service packages and pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Package */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Basic</h3>
                <div className="space-y-2">
                  <Label htmlFor="basicPrice">Price ($) *</Label>
                  <Input
                    id="basicPrice"
                    name="basicPrice"
                    type="number"
                    placeholder="25"
                    value={formData.basicPrice}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="basicDeliveryTime">Delivery Time (days)</Label>
                  <Input
                    id="basicDeliveryTime"
                    name="basicDeliveryTime"
                    type="number"
                    placeholder="3"
                    value={formData.basicDeliveryTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="basicDescription">Package Description</Label>
                  <Textarea
                    id="basicDescription"
                    name="basicDescription"
                    placeholder="What's included in the basic package..."
                    value={formData.basicDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Standard Package */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Standard</h3>
                <div className="space-y-2">
                  <Label htmlFor="standardPrice">Price ($)</Label>
                  <Input
                    id="standardPrice"
                    name="standardPrice"
                    type="number"
                    placeholder="50"
                    value={formData.standardPrice}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="standardDeliveryTime">Delivery Time (days)</Label>
                  <Input
                    id="standardDeliveryTime"
                    name="standardDeliveryTime"
                    type="number"
                    placeholder="5"
                    value={formData.standardDeliveryTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="standardDescription">Package Description</Label>
                  <Textarea
                    id="standardDescription"
                    name="standardDescription"
                    placeholder="What's included in the standard package..."
                    value={formData.standardDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Premium Package */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Premium</h3>
                <div className="space-y-2">
                  <Label htmlFor="premiumPrice">Price ($)</Label>
                  <Input
                    id="premiumPrice"
                    name="premiumPrice"
                    type="number"
                    placeholder="100"
                    value={formData.premiumPrice}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="premiumDeliveryTime">Delivery Time (days)</Label>
                  <Input
                    id="premiumDeliveryTime"
                    name="premiumDeliveryTime"
                    type="number"
                    placeholder="7"
                    value={formData.premiumDeliveryTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="premiumDescription">Package Description</Label>
                  <Textarea
                    id="premiumDescription"
                    name="premiumDescription"
                    placeholder="What's included in the premium package..."
                    value={formData.premiumDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Gallery</CardTitle>
            <CardDescription>
              Upload images to showcase your work (up to 5 images)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                disabled={images.length >= 5}
              />
              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={() => navigate('/seller-dashboard')}>
            Cancel
          </Button>
          <Button type="submit">
            Create Gig
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateGig;
