'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  currentStep?: number;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = 0,
}) => {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
            index <= currentStep 
              ? 'bg-primary-green text-white' 
              : 'bg-border-light text-text-secondary'
          }`}>
            {index + 1}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-text-primary">{step.title}</h4>
            <p className="text-text-secondary">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stepper;