import React from 'react'
import './About.css'
import kitchen from './images/kitchen-wall.png'

function About() {
    return (
        <div >
            <h2 className='about-header'>What We Do</h2> 

           <div className='about-container'>
           <img className='left-image' src={kitchen} />
           <div>
            <h3 className='about-title'>sajhkashdkashdk</h3>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Mauris in aliquam sem fringilla ut. Eget egestas purus viverra accumsan.
             Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Natoque penatibus
              et magnis dis parturient.  Augue eget arcu dictum varius. Justo eget magna fermentum 
              iaculis eu. In dictum non consectetur a erat nam at. Malesuada nunc vel risus commodo 
              viverra maecenas accumsan lacus. Amet dictum sit amet justo donec. Eleifend mi in nulla 
              posuere. Venenatis lectus magna fringilla urna porttitor.  </p>
</div>
</div>
<div className='desktop-section'>
<div>
 <h3 className='about-title-right title-right'>sajhkashdkashdk</h3>
 <p className='about-text-middle text-middle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Mauris in aliquam sem fringilla ut. Eget egestas purus viverra accumsan.
  Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Natoque penatibus
   et magnis dis parturient.  Augue eget arcu dictum varius. Justo eget magna fermentum 
   iaculis eu. In dictum non consectetur a erat nam at. Malesuada nunc vel risus commodo 
   viverra maecenas accumsan lacus. Amet dictum sit amet justo donec. Eleifend mi in nulla 
   posuere. Venenatis lectus magna fringilla urna porttitor.  </p><div>
</div>
</div>
<img className='right-image'  src={kitchen} />
</div>


<div className='about-container'>
<img className='left-image' src={kitchen} />
<div>
 <h3 className='about-title'>sajhkashdkashdk</h3>
 <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Mauris in aliquam sem fringilla ut. Eget egestas purus viverra accumsan.
  Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Natoque penatibus
   et magnis dis parturient.  Augue eget arcu dictum varius. Justo eget magna fermentum 
   iaculis eu. In dictum non consectetur a erat nam at. Malesuada nunc vel risus commodo 
   viverra maecenas accumsan lacus. Amet dictum sit amet justo donec. Eleifend mi in nulla 
   posuere. Venenatis lectus magna fringilla urna porttitor.  </p>
</div>
</div>

<div className='mobile-section'>
<img className='left-image' src={kitchen} />
<div>
 <h3 className='about-title'>sajhkashdkashdk</h3>
 <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Mauris in aliquam sem fringilla ut. Eget egestas purus viverra accumsan.
  Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Natoque penatibus
   et magnis dis parturient.  Augue eget arcu dictum varius. Justo eget magna fermentum 
   iaculis eu. In dictum non consectetur a erat nam at. Malesuada nunc vel risus commodo 
   viverra maecenas accumsan lacus. Amet dictum sit amet justo donec. Eleifend mi in nulla 
   posuere. Venenatis lectus magna fringilla urna porttitor.  </p>
</div>
</div>
        </div>
    )
}

export default About;