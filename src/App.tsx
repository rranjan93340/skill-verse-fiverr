import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerLogin from "./pages/BuyerLogin";
import SellerLogin from "./pages/SellerLogin";
import BuyerRegister from "./pages/BuyerRegister";
import SellerRegister from "./pages/SellerRegister";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import CreateGig from "./pages/CreateGig";
import GigDetails from "./pages/GigDetails";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import HowItWorks from "./pages/HowItWorks";
import BecomeFreelancer from "./pages/BecomeFreelancer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/buyer" element={<BuyerLogin />} />
                <Route path="/login/seller" element={<SellerLogin />} />
                <Route path="/register" element={<Register />} />
                <Route path="/register/buyer" element={<BuyerRegister />} />
                <Route path="/register/seller" element={<SellerRegister />} />
                <Route path="/seller-dashboard" element={<SellerDashboard />} />
                <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
                <Route path="/create-gig" element={<CreateGig />} />
                <Route path="/gig/:id" element={<GigDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/become-freelancer" element={<BecomeFreelancer />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
