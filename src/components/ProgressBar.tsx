
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  target: number;
  className?: string;
}

const ProgressBar = ({ current, target, className }: ProgressBarProps) => {
  // Calculate percentage with a cap at 100%
  const percentage = Math.min(Math.round((current / target) * 100), 100);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{percentage}% funded</span>
        <span className="text-gray-500">{current.toLocaleString()} / {target.toLocaleString()} €</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%`, '--progress-value': `${percentage}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
