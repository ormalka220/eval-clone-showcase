import { useState } from "react";
import Header from "@/components/Header";
import ApplicationForm from "@/components/ApplicationForm";

const Application = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gradient-to-br from-primary via-primary to-primary/90 min-h-screen pb-8">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
              The Evaluation Company Online Application
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ApplicationForm 
                currentStep={currentStep}
                onNextStep={handleNextStep}
                onPrevStep={handlePrevStep}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;