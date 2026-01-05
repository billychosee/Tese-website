'use client';

import React from 'react';

interface PaymentBadgeProps {
  name: string;
  logo?: React.ReactNode;
  className?: string;
}

const PaymentBadge: React.FC<PaymentBadgeProps> = ({
  name,
  logo,
  className = '',
}) => {
  return (
    <div className={`flex items-center space-x-3 bg-white border border-border-light rounded-lg px-4 py-2 shadow-sm ${className}`}>
      {logo && (
        <div className="w-8 h-8 flex items-center justify-center">
          {logo}
        </div>
      )}
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </div>
  );
};

export default PaymentBadge;