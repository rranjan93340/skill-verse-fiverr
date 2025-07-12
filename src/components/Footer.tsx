
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/search?category=graphics-design" className="text-gray-600 hover:text-green-600 text-sm">Graphics & Design</Link></li>
              <li><Link to="/search?category=digital-marketing" className="text-gray-600 hover:text-green-600 text-sm">Digital Marketing</Link></li>
              <li><Link to="/search?category=writing-translation" className="text-gray-600 hover:text-green-600 text-sm">Writing & Translation</Link></li>
              <li><Link to="/search?category=video-animation" className="text-gray-600 hover:text-green-600 text-sm">Video & Animation</Link></li>
              <li><Link to="/search?category=music-audio" className="text-gray-600 hover:text-green-600 text-sm">Music & Audio</Link></li>
              <li><Link to="/search?category=programming-tech" className="text-gray-600 hover:text-green-600 text-sm">Programming & Tech</Link></li>
              <li><Link to="/search?category=ai-services" className="text-gray-600 hover:text-green-600 text-sm">AI Services</Link></li>
              <li><Link to="/search?category=consulting" className="text-gray-600 hover:text-green-600 text-sm">Consulting</Link></li>
              <li><Link to="/search?category=data" className="text-gray-600 hover:text-green-600 text-sm">Data</Link></li>
              <li><Link to="/search?category=business" className="text-gray-600 hover:text-green-600 text-sm">Business</Link></li>
              <li><Link to="/search?category=personal-growth" className="text-gray-600 hover:text-green-600 text-sm">Personal Growth & Hobbies</Link></li>
              <li><Link to="/search?category=photography" className="text-gray-600 hover:text-green-600 text-sm">Photography</Link></li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-green-600 text-sm">How FreelanceHub Works</Link></li>
              <li><Link to="/success-stories" className="text-gray-600 hover:text-green-600 text-sm">Customer Success Stories</Link></li>
              <li><Link to="/trust-safety" className="text-gray-600 hover:text-green-600 text-sm">Trust & Safety</Link></li>
              <li><Link to="/quality-guide" className="text-gray-600 hover:text-green-600 text-sm">Quality Guide</Link></li>
              <li><Link to="/learn" className="text-gray-600 hover:text-green-600 text-sm">FreelanceHub Learn - Online Courses</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-green-600 text-sm">FreelanceHub Guides</Link></li>
              <li><Link to="/answers" className="text-gray-600 hover:text-green-600 text-sm">FreelanceHub Answers</Link></li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Freelancers</h3>
            <ul className="space-y-3">
              <li><Link to="/become-freelancer" className="text-gray-600 hover:text-green-600 text-sm">Become a FreelanceHub Freelancer</Link></li>
              <li><Link to="/become-agency" className="text-gray-600 hover:text-green-600 text-sm">Become an Agency</Link></li>
              <li><Link to="/equity-program" className="text-gray-600 hover:text-green-600 text-sm">Freelancer Equity Program</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-green-600 text-sm">Community Hub</Link></li>
              <li><Link to="/forum" className="text-gray-600 hover:text-green-600 text-sm">Forum</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-green-600 text-sm">Events</Link></li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Business Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/pro" className="text-gray-600 hover:text-green-600 text-sm">FreelanceHub Pro</Link></li>
              <li><Link to="/project-management" className="text-gray-600 hover:text-green-600 text-sm">Project Management Service</Link></li>
              <li><Link to="/expert-sourcing" className="text-gray-600 hover:text-green-600 text-sm">Expert Sourcing Service</Link></li>
              <li><Link to="/clearvoice" className="text-gray-600 hover:text-green-600 text-sm">ClearVoice - Content Marketing</Link></li>
              <li><Link to="/working-not-working" className="text-gray-600 hover:text-green-600 text-sm">Working Not Working - Creative Talent</Link></li>
              <li><Link to="/autods" className="text-gray-600 hover:text-green-600 text-sm">AutoDS - Dropshipping Tool</Link></li>
              <li><Link to="/ai-store-builder" className="text-gray-600 hover:text-green-600 text-sm">AI store builder</Link></li>
              <li><Link to="/logo-maker" className="text-gray-600 hover:text-green-600 text-sm">FreelanceHub Logo Maker</Link></li>
              <li><Link to="/contact-sales" className="text-gray-600 hover:text-green-600 text-sm">Contact Sales</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-green-600 text-sm">About FreelanceHub</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-green-600 text-sm">Help & Support</Link></li>
              <li><Link to="/social-impact" className="text-gray-600 hover:text-green-600 text-sm">Social Impact</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-green-600 text-sm">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-green-600 text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-green-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/do-not-sell" className="text-gray-600 hover:text-green-600 text-sm">Do not sell or share my personal information</Link></li>
              <li><Link to="/partnerships" className="text-gray-600 hover:text-green-600 text-sm">Partnerships</Link></li>
              <li><Link to="/creator-network" className="text-gray-600 hover:text-green-600 text-sm">Creator Network</Link></li>
              <li><Link to="/affiliates" className="text-gray-600 hover:text-green-600 text-sm">Affiliates</Link></li>
              <li><Link to="/invite-friend" className="text-gray-600 hover:text-green-600 text-sm">Invite a Friend</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-green-600 text-sm">Press & News</Link></li>
              <li><Link to="/investor-relations" className="text-gray-600 hover:text-green-600 text-sm">Investor Relations</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-green-600">
              FreelanceHub
            </Link>
            <span className="text-gray-500 text-sm">© FreelanceHub International Ltd. 2024</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Social Media</span>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.745.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-sm text-gray-600">English</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">$ USD</span>
              </div>
              
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
