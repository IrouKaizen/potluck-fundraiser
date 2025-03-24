
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import { Clock, Share2, Users, Heart, ChevronRight, AlertCircle } from 'lucide-react';

// This is a mock fundraiser for demonstration
const mockFundraiser = {
  id: '1',
  title: 'Community Garden Renovation',
  description: 'Help us transform an abandoned lot into a beautiful community garden that will provide fresh produce and green space for our neighborhood. This project aims to bring people together, provide educational opportunities, and improve food security in our area.',
  story: `<p>Our neighborhood has long suffered from limited access to fresh produce and green spaces. The vacant lot on Maple Street has been sitting empty for years, collecting trash and becoming an eyesore in our otherwise vibrant community.</p>
  <p>We have secured permission from the city to transform this space into a community garden, but we need your help to make it happen!</p>
  <p>With your support, we will:</p>
  <ul>
    <li>Clean up the lot and prepare the soil for planting</li>
    <li>Build raised garden beds and install irrigation systems</li>
    <li>Purchase seeds, plants, and gardening tools</li>
    <li>Create a community gathering area with benches and tables</li>
    <li>Install educational signage about sustainable gardening practices</li>
  </ul>
  <p>This garden will serve as both a source of fresh food and a place for community building. We plan to host workshops on gardening, cooking, and food preservation, as well as community events throughout the growing season.</p>
  <p>Your contribution, no matter the size, will help bring this vision to life!</p>`,
  image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  currentAmount: 3250,
  targetAmount: 5000,
  daysLeft: 15,
  backers: 42,
  createdBy: 'Green Community Association',
  createdByImage: 'https://images.unsplash.com/photo-1550082849-7f9978fa4a60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  updates: [
    {
      id: 1,
      date: '2023-05-10',
      title: 'Halfway to our goal!',
      content: 'We are thrilled to announce that we have reached the halfway point of our fundraising goal! Thank you to everyone who has contributed so far. We have already started the initial cleanup of the lot and are excited to begin the next phase of the project soon.'
    }
  ],
  comments: [
    {
      id: 1,
      name: 'Jane Smith',
      amount: 100,
      date: '2023-05-09',
      comment: 'This is exactly what our neighborhood needs! Happy to support this wonderful initiative.'
    },
    {
      id: 2,
      name: 'Michael Johnson',
      amount: 50,
      date: '2023-05-07',
      comment: 'I live just down the street and have been hoping something would be done with this lot. Can\'t wait to help plant!'
    }
  ]
};

const FundraiserDetail = () => {
  const { id } = useParams();
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  // In a real app, we would fetch the fundraiser data based on the ID
  // For this demo, we're using the mock data
  const fundraiser = mockFundraiser;
  
  const predefinedAmounts = [20, 50, 100, 250];
  
  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: Record<string, string> = {};
    if (!donationAmount || isNaN(Number(donationAmount)) || Number(donationAmount) <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }
    if (!name.trim() && !isAnonymous) {
      newErrors.name = 'Please enter your name';
    }
    if (!email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowThankYou(true);
      }, 1500);
    }
  };
  
  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Thank You for Your Support!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Your contribution of €{donationAmount} to "{fundraiser.title}" has been received.
            </p>
            <p className="text-gray-600 mb-8">
              A confirmation email has been sent to {email}. Your support makes a real difference!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={`/fundraiser/${id}`}>
                <Button variant="primary">
                  Return to Fundraiser
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline">
                  Go to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8 animate-fade-in">
              <img 
                src={fundraiser.image} 
                alt={fundraiser.title} 
                className="w-full h-72 object-cover"
              />
              
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">{fundraiser.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{fundraiser.description}</p>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={fundraiser.createdByImage} 
                    alt={fundraiser.createdBy} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm text-gray-500">Created by</p>
                    <p className="font-medium text-gray-900">{fundraiser.createdBy}</p>
                  </div>
                </div>
                
                <div className="lg:hidden mb-6">
                  <ProgressBar 
                    current={fundraiser.currentAmount} 
                    target={fundraiser.targetAmount} 
                    className="mb-4"
                  />
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{fundraiser.daysLeft} days left</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{fundraiser.backers} backers</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="w-full btn-contribute mb-4"
                    onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contribute Now
                  </Button>
                  
                  <button className="w-full flex items-center justify-center text-gray-600 hover:text-gray-900 py-2">
                    <Share2 size={18} className="mr-2" />
                    <span>Share this fundraiser</span>
                  </button>
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: fundraiser.story }} />
              </div>
            </div>
            
            {/* Updates Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 animate-fade-in">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Updates</h2>
              
              {fundraiser.updates.length > 0 ? (
                <div className="space-y-6">
                  {fundraiser.updates.map(update => (
                    <div key={update.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">{update.title}</h3>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <p className="text-gray-600">{update.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No updates yet. Check back soon!</p>
              )}
            </div>
            
            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 animate-fade-in">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Recent Contributions</h2>
              
              {fundraiser.comments.length > 0 ? (
                <div className="space-y-6">
                  {fundraiser.comments.map(comment => (
                    <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-green-600 font-medium mb-2">Contributed €{comment.amount}</p>
                      <p className="text-gray-600">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No contributions yet. Be the first to support this fundraiser!</p>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              {/* Progress Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 hidden lg:block animate-fade-in">
                <ProgressBar 
                  current={fundraiser.currentAmount} 
                  target={fundraiser.targetAmount} 
                  className="mb-4"
                />
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{fundraiser.daysLeft} days left</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span>{fundraiser.backers} backers</span>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg"
                  className="w-full btn-contribute mb-4"
                  onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contribute Now
                </Button>
                
                <button className="w-full flex items-center justify-center text-gray-600 hover:text-gray-900 py-2">
                  <Share2 size={18} className="mr-2" />
                  <span>Share this fundraiser</span>
                </button>
              </div>
              
              {/* Donation Form */}
              <div id="donation-form" className="bg-white rounded-2xl shadow-sm p-6 animate-fade-in">
                <h2 className="text-xl font-bold mb-6 text-gray-900">Make a Contribution</h2>
                
                <form onSubmit={handleDonationSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choose an amount (€)
                    </label>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {predefinedAmounts.map(amount => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-2 rounded-lg text-center transition-colors ${
                            donationAmount === amount.toString()
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                          onClick={() => {
                            setDonationAmount(amount.toString());
                            if (errors.amount) {
                              const { amount, ...rest } = errors;
                              setErrors(rest);
                            }
                          }}
                        >
                          €{amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">€</span>
                      <input
                        type="text"
                        value={donationAmount}
                        onChange={(e) => {
                          setDonationAmount(e.target.value);
                          if (errors.amount) {
                            const { amount, ...rest } = errors;
                            setErrors(rest);
                          }
                        }}
                        className={`w-full pl-8 pr-4 py-2 rounded-lg border ${
                          errors.amount ? 'border-red-300' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter amount"
                      />
                    </div>
                    {errors.amount && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.amount}
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <input
                        id="anonymous"
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={() => setIsAnonymous(!isAnonymous)}
                        className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                        Make this donation anonymous
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {isAnonymous ? 'Name (optional)' : 'Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          const { name, ...rest } = errors;
                          setErrors(rest);
                        }
                      }}
                      disabled={isAnonymous}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isAnonymous ? 'bg-gray-100' : ''
                      }`}
                      placeholder={isAnonymous ? 'Anonymous' : 'Your name'}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          const { email, ...rest } = errors;
                          setErrors(rest);
                        }
                      }}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                      Comment (optional)
                    </label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Leave a message of support (optional)"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full mb-4"
                  >
                    Complete Contribution
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By contributing, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraiserDetail;
