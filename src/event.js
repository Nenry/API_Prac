import React from 'react'; 
import API from './event_data';
import Score from './score';

class Event extends React.Component  {
  // constructor(props) {
  //   super(props);
  // }

  styleIt(top, left, height, width) {
    return ({container: {
      position: 'absolute',
      top: `${top*100}%`,
      left: `${left*100}%`,
      height: `${height*100}%`,
      width: `${width*100}%`,
      border: '1px solid blue'
    }});
  }


  render() {
    const events = API.mockResponse.events;
    const curdate = new Date();
    
    curdate.setTime(1506866940 * 1000);
    // * 1000 to turn seconds into ms



    console.log(curdate);
    console.log(events);
 


    return (
    <div>



      {events.map((event, idx) => {
        const boundaries = event.predictions.map((prediction) => prediction.boundingBox);
        
        console.log(boundaries);
        
        return(
          <div key={idx} className='event-wrapper'>

            {boundaries.map((boundary) => {
              return(

                <div className='' style={this.styleIt(boundary.top, boundary.left, boundary.height, boundary.width).container}>
              </div>
              ); 

            })}
            
  
              <img src={event.imageSource} className='event-image'/>
              
              <Score predictions={event.predictions} />

          </div>
          
          );

      })}
      
    </div>
    ); 
  }
}

export default Event;