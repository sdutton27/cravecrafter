import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, LinearProgress, Typography, SvgIcon } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const steps = ['Order Placed', 'Confirmed by Restaurant', 'Awaiting Pickup', 'Out for Delivery', 'Delivered'];

const CustomStepIcon = ({ active, completed }) => {
  return (
    <SvgIcon style={{color: active ? '#ff4700' : completed ? '#ff4700' : 'gray'}} fontSize="small">
      <CheckCircle />
    </SvgIcon>
  );
};

export const OrderTracker = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[1224px] h-[976px]">
      <p className="text-gray-700 mt-8 mb-16 text-center text-sm font-semibold">Hooray! Your order has been placed successfully, and your food will be delivered soon.</p>

        <div className="mt-8">
          <LinearProgress
            variant="determinate"
            value={(activeStep / (steps.length - 1)) * 100}
            className="mb-4 ml-28 w-[80%]"
            sx={{ backgroundColor: '#9E9E9E', '& .MuiLinearProgress-bar': { backgroundColor: '#FF4700' } }}
          />
          <Stepper className="z-20"
            activeStep={activeStep}
            alternativeLabel
            sx={{ '& .MuiStepConnector-root': { backgroundColor: '#FF4700' } }}
          >
            {steps.map((label, index) => (
              <Step key={index} className="mt-[-28px]">
                <StepLabel StepIconComponent={CustomStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <p className="text-gray-700 mt-14 mb-8 text-center text-sm font-semibold">Your estimated delivery time is 6:47</p>
        

        {/* Google Map */}
        <div className="mt-8 bg-gray-300 rounded-lg p-4 w-[808px] h-[384px] mx-auto">
          {/* Include your Google Map component here */}
          <iframe className="mt-[-16px] ml-[-16px] rounded-lg" width="808" height="384" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=808&amp;height=384&amp;hl=en&amp;q=2200%20212th%20St,%20Oskaloosa+(CraveCrafter)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.acadoo.de/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=96183aa78b256eeabb036390a5c0e82cea89d78f'></script>
          
        </div>

        {/* Next and Previous Buttons */}
        <div className="mt-10 flex justify-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            disabled={activeStep === 0}
            
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
