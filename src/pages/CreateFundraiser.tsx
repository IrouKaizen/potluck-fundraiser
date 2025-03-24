
import React from 'react';
import Header from '@/components/Header';
import CreateFundraiserForm from '@/components/CreateFundraiserForm';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreateFundraiser = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight size={16} className="text-gray-400" />
                  <span className="ml-1 text-gray-900 font-medium">Create Fundraiser</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 p-6">
              <h1 className="text-2xl font-bold text-gray-900">Create Your Fundraiser</h1>
              <p className="text-gray-600 mt-2">
                Fill out the form below to create your fundraiser. All fields marked with * are required.
              </p>
            </div>
            
            <div className="p-6">
              <CreateFundraiserForm />
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Tips for a Successful Fundraiser</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Be clear and specific about your fundraising purpose and how funds will be used.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Add a high-quality cover image that represents your fundraiser.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Share personal stories and explain why this cause matters to you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Set a realistic funding goal based on your actual needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Share your fundraiser on social media and with your personal network.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFundraiser;
