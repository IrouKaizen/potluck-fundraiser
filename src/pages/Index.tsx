
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import FundraiserCard from '@/components/FundraiserCard';
import Button from '@/components/Button';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';

// Sample data for fundraisers
const featuredFundraisers = [
  {
    id: '1',
    title: 'Community Garden Renovation',
    description: 'Help us transform an abandoned lot into a beautiful community garden that will provide fresh produce and green space for our neighborhood.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    currentAmount: 3250,
    targetAmount: 5000,
    daysLeft: 15,
    backers: 42
  },
  {
    id: '2',
    title: 'Scholarship Fund for Underprivileged Students',
    description: 'We aim to provide scholarships to talented students from low-income backgrounds who dream of pursuing higher education.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    currentAmount: 12400,
    targetAmount: 20000,
    daysLeft: 25,
    backers: 87
  },
  {
    id: '3',
    title: 'Animal Shelter Expansion',
    description: 'Our local animal shelter is at capacity. Help us expand our facilities to rescue and care for more abandoned pets in our community.',
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',
    currentAmount: 8600,
    targetAmount: 15000,
    daysLeft: 20,
    backers: 64
  }
];

const recentFundraisers = [
  {
    id: '4',
    title: 'Youth Coding Bootcamp',
    description: 'Providing underprivileged youth with coding skills to prepare them for future careers in tech.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    currentAmount: 1800,
    targetAmount: 10000,
    daysLeft: 30,
    backers: 23
  },
  {
    id: '5',
    title: 'Historic Theater Restoration',
    description: 'Help preserve our town's historic theater, a cultural landmark that has been part of our community for over 80 years.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    currentAmount: 15000,
    targetAmount: 50000,
    daysLeft: 45,
    backers: 112
  },
  {
    id: '6',
    title: 'Clean Water Initiative',
    description: 'Bringing clean, safe drinking water to remote villages without access to this basic necessity.',
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    currentAmount: 7500,
    targetAmount: 25000,
    daysLeft: 60,
    backers: 58
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fundraising Made Simple for Everyone
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Create your fundraiser in minutes and start collecting contributions for your project, cause, or event.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/create">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start a Fundraiser
                </Button>
              </Link>
              <Link to="/discover">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Fundraisers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Platform?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Simple & Fast</h3>
              <p className="text-gray-600">Create your fundraiser in minutes with our intuitive interface and start collecting funds right away.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure & Trusted</h3>
              <p className="text-gray-600">Your data and donations are protected with bank-level security. We verify every fundraiser for authenticity.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Wide Reach</h3>
              <p className="text-gray-600">Share your fundraiser easily across social media and email to maximize your campaign's visibility.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Fundraisers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Fundraisers</h2>
            <Link to="/discover" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
              <span>View all</span>
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredFundraisers.map(fundraiser => (
              <FundraiserCard key={fundraiser.id} {...fundraiser} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Fundraisers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Fundraisers</h2>
            <Link to="/discover" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
              <span>View all</span>
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentFundraisers.map(fundraiser => (
              <FundraiserCard key={fundraiser.id} {...fundraiser} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Fundraiser?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of individuals and organizations who have successfully funded their projects through our platform.
          </p>
          <Link to="/create">
            <Button variant="primary" size="lg">
              Create Your Fundraiser Now
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Fundrise</h3>
              <p className="text-sm">
                A platform dedicated to helping individuals and organizations raise funds for their projects, causes, and events.
              </p>
            </div>
            
            <div>
              <h4 className="text-white text-md font-medium mb-4">Fundraise For</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Personal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Charity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Medical</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-md font-medium mb-4">Learn More</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Common Questions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fees & Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-md font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Fundrise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
