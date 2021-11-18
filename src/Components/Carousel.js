import React from 'react';
import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Carousel.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Before',
    imgPath:
      'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/252903932_128446992900958_7728160501529784479_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Qkr3uuVwVHEAX_yIRxv&_nc_ht=scontent-lcy1-1.xx&oh=2db29f8cd972c41d34e9761ad6b4a3f5&oe=61AE0878',
  },
  {
    label: 'After',
    imgPath:
      'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/252489541_128446999567624_5663279099961719649_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PGT2RQwwIb4AX9pOPuJ&tn=moUwSVen277wi43D&_nc_ht=scontent-lcy1-1.xx&oh=f629ca38da1adaa71a5a35737b135e9a&oe=61AEC413',
  },
  {
    label: 'Before',
    imgPath:
      'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/254012893_128446926234298_7751352697762091997_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1-bhCQDJbWoAX8sEhoO&_nc_ht=scontent-lcy1-1.xx&oh=cb2d95b88651c6c36cbfc702169c7c69&oe=61AE48D3',
  },
  {
    label: 'After',
    imgPath:
      'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/253691473_128446936234297_9071116466090382530_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=d4547YtmkrwAX_aDi16&_nc_ht=scontent-lcy1-1.xx&oh=e20676bc7a83afa362d24aa60454a0e4&oe=61AF4F46',
  },
];





function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleStepChange = (step) => {
    setActiveStep(step);
  }



  return (
    <Box className='carousel'>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <h2 className='carousel-title'>{step.label}</h2>
            {Math.abs(activeStep - index) <= 2 ? ( 
              <div classname='carousel' style={{
                   height:450,
                   display: 'block',
                   maxWidth: '100%',
                   overflow: 'hidden',
                   width: '100%', }}>
                 <img className='carousel-image' src={step.imgPath} alt={step.label} />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
    </Box>
  );
}


export default Carousel;