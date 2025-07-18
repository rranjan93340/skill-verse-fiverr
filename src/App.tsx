import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import BuyerLogin from './pages/BuyerLogin';
import SellerLogin from './pages/SellerLogin';
import BuyerRegister from './pages/BuyerRegister';
import SellerRegister from './pages/SellerRegister';
import SellerProfileSetup from './pages/SellerProfileSetup';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import CreateGig from './pages/CreateGig';
import GigDetails from './pages/GigDetails';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import HowItWorks from './pages/HowItWorks';
import BecomeFreelancer from './pages/BecomeFreelancer';
import SellerProfile from './pages/SellerProfile';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/ui/toaster';
import BuyerHome from './pages/BuyerHome';
import SellerHome from './pages/SellerHome';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/buyer-home" element={<BuyerHome />} />
              <Route path="/seller-home" element={<SellerHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/buyer/login" element={<BuyerLogin />} />
              <Route path="/seller/login" element={<SellerLogin />} />
              <Route path="/buyer/register" element={<BuyerRegister />} />
              <Route path="/seller/register" element={<SellerRegister />} />
              <Route path="/seller/profile-setup" element={<SellerProfileSetup />} />
              <Route path="/seller/dashboard" element={<SellerDashboard />} />
              <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
              <Route path="/create-gig" element={<CreateGig />} />
              <Route path="/gig/:id" element={<GigDetails />} />
              <Route path="/seller/:id" element={<SellerProfile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/become-freelancer" element={<BecomeFreelancer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
