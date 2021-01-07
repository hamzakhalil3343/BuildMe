import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'https://www.lacantinadoors.com/images/uploads/catalog/categories/sudano_1007x288.jpg',
 'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1495001963/p/photo/image/2013905/CAM_2_OPTION_1.jpg',
  'https://www.joile.in/upload/SonejiBanner4.jpg'
];

const Slideshow = () => {
    return (
      <div style={{margin:'20px'}}>
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height:'300px',margin:'20px'}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height:'300px',margin:'20px'}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height:'300px',margin:'20px'}}>
              
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;