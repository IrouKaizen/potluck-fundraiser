
import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { Clock, Users } from 'lucide-react';

interface FundraiserCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  currentAmount: number;
  targetAmount: number;
  daysLeft: number;
  backers: number;
}

const FundraiserCard = ({
  id,
  title,
  description,
  image,
  currentAmount,
  targetAmount,
  daysLeft,
  backers,
}: FundraiserCardProps) => {
  return (
    <Link 
      to={`/fundraiser/${id}`}
      className="fundraiser-card block bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-1 mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 h-10">{description}</p>
        
        <ProgressBar 
          current={currentAmount} 
          target={targetAmount} 
          className="mb-4"
        />
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{daysLeft} days left</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{backers} backers</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FundraiserCard;
