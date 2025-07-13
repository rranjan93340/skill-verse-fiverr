import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { User, FileText, ArrowRight, ArrowLeft, Upload } from 'lucide-react';

const SellerProfileSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [step1Data, setStep1Data] = useState({
    name: '',
    description: '',
    skills: '',
    profileImage: '',
  });

  const [step2Data, setStep2Data] = useState({
    occupation: '',
    additionalSkills: '',
    qualification: '',
    certification: '',
    websiteLink: '',
  });

  const handleStep1Change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStep1Data({
      ...step1Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleStep2Change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStep2Data({
      ...step2Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!step1Data.name || !step1Data.description || !step1Data.skills) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleComplete = async () => {
    setLoading(true);
    try {
      // Here you would save the profile data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      toast({
        title: "Profile Setup Complete!",
        description: "Your freelancer profile has been created successfully.",
      });
      navigate('/seller/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const progressValue = (currentStep / 2) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
              {currentStep === 1 ? (
                <User className="h-8 w-8 text-white" />
              ) : (
                <FileText className="h-8 w-8 text-white" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold">
              {currentStep === 1 ? 'Profile Information' : 'Professional Details'}
            </CardTitle>
            <CardDescription className="text-lg">
              {currentStep === 1 
                ? 'Let\'s start with your basic profile information'
                : 'Add your professional qualifications and experience'
              }
            </CardDescription>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep} of 2</span>
              <span>{Math.round(progressValue)}% Complete</span>
            </div>
            <Progress value={progressValue} className="h-2" />
          </div>
        </CardHeader>

        <CardContent>
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={step1Data.name}
                  onChange={handleStep1Change}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Professional Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your experience, expertise, and what makes you unique as a freelancer..."
                  value={step1Data.description}
                  onChange={handleStep1Change}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Core Skills *</Label>
                <Input
                  id="skills"
                  name="skills"
                  placeholder="e.g. Web Development, React, Node.js, UI/UX Design"
                  value={step1Data.skills}
                  onChange={handleStep1Change}
                  required
                />
                <p className="text-sm text-muted-foreground">Separate skills with commas</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profileImage">Profile Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="profileImage"
                    name="profileImage"
                    placeholder="https://example.com/your-photo.jpg"
                    value={step1Data.profileImage}
                    onChange={handleStep1Change}
                  />
                  <Button variant="outline" size="icon">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Add a professional photo to build trust with clients</p>
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={handleNextStep} className="min-w-32">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="occupation">Current Occupation</Label>
                <Input
                  id="occupation"
                  name="occupation"
                  placeholder="e.g. Senior Frontend Developer, UX Designer, Marketing Specialist"
                  value={step2Data.occupation}
                  onChange={handleStep2Change}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalSkills">Additional Skills & Technologies</Label>
                <Textarea
                  id="additionalSkills"
                  name="additionalSkills"
                  placeholder="List any additional skills, tools, or technologies you're proficient in..."
                  value={step2Data.additionalSkills}
                  onChange={handleStep2Change}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="qualification">Education & Qualifications</Label>
                <Input
                  id="qualification"
                  name="qualification"
                  placeholder="e.g. Bachelor's in Computer Science, Master's in Design"
                  value={step2Data.qualification}
                  onChange={handleStep2Change}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certification">Certifications</Label>
                <Input
                  id="certification"
                  name="certification"
                  placeholder="e.g. AWS Certified, Google Analytics Certified, Adobe Certified Expert"
                  value={step2Data.certification}
                  onChange={handleStep2Change}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteLink">Personal Website/Portfolio</Label>
                <Input
                  id="websiteLink"
                  name="websiteLink"
                  placeholder="https://yourportfolio.com"
                  value={step2Data.websiteLink}
                  onChange={handleStep2Change}
                />
                <p className="text-sm text-muted-foreground">Showcase your work and build credibility</p>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={handlePreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={handleComplete} disabled={loading} className="min-w-32">
                  {loading ? 'Setting up...' : 'Complete Setup'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerProfileSetup;