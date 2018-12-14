import React from 'react'; 
import API from './event_data';
import Score from './score';

class Event extends React.Component  {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const events = API.mockResponse.events;
    const curdate = new Date();
    
    curdate.setTime(1506866940 * 1000);
    // * 1000 to turn seconds into ms
    console.log(events);
    console.log(events[0]);
    console.log(events[0].videoStream);
    console.log(events[0]);

    // console.log(curdate.getTime());
    console.log(curdate);
    
    // console.log(curdate.getFullYear());
    // console.log(curdate.getYear());
    // console.log(curdate.getDate());
    

    return (
    <div>



      {events.map((event, idx) => {
        return(
          <div key={idx} className='event-wrapper'>


            <div className='highlighter1'>
            </div>
            
            <div className='highlighter2'>
            </div>
  
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