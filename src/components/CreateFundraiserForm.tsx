
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { Upload, AlertCircle } from 'lucide-react';

interface FormData {
  title: string;
  targetAmount: string;
  description: string;
  endDate: string;
  coverImage: File | null;
}

const CreateFundraiserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    targetAmount: '',
    description: '',
    endDate: '',
    coverImage: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        coverImage: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.targetAmount.trim()) {
      newErrors.targetAmount = 'Target amount is required';
    } else if (isNaN(Number(formData.targetAmount)) || Number(formData.targetAmount) <= 0) {
      newErrors.targetAmount = 'Please enter a valid amount';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    } else {
      const selectedDate = new Date(formData.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate <= today) {
        newErrors.endDate = 'End date must be in the future';
      }
    }
    
    if (!formData.coverImage) {
      newErrors.coverImage = 'Cover image is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/fundraiser/new-fundraiser-id');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Fundraiser Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${errors.title ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Give your fundraiser a clear, attention-grabbing title"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.title}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700 mb-1">
          Target Amount (€) *
        </label>
        <input
          type="text"
          id="targetAmount"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${errors.targetAmount ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="2500"
        />
        {errors.targetAmount && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.targetAmount}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-2 rounded-lg border ${errors.description ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Tell people about your fundraiser and why it matters..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.description}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
          End Date *
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border ${errors.endDate ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.endDate && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.endDate}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cover Image *
        </label>
        <div className={`border-2 border-dashed rounded-lg p-4 text-center ${errors.coverImage ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50 hover:bg-blue-50'} transition-colors`}>
          {imagePreview ? (
            <div className="relative">
              <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg object-contain" />
              <button
                type="button"
                onClick={() => {
                  setImagePreview(null);
                  setFormData(prev => ({ ...prev, coverImage: null }));
                }}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="py-8">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Click or drag image to upload</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
            </div>
          )}
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            onChange={handleImageChange}
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        {errors.coverImage && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.coverImage}
          </p>
        )}
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          isLoading={isSubmitting}
          className="w-full"
        >
          Create Fundraiser
        </Button>
      </div>
    </form>
  );
};

export default CreateFundraiserForm;
