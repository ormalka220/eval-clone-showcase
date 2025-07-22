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
      <ApplicationForm 
        currentStep={currentStep}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      />
    </div>
  );
};

export default Application;