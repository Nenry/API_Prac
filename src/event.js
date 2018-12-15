import React from 'react'; 
import API from './event_data';
import Score from './score';
import Moment from 'react-moment';

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

    //given data is in order, but just in case. Best to sort by timestamps
    const sortedEvents = events.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });

    // console.log(sortedEvents);

    
    const curdate = new Date();
    
    
    // * 1000 to turn seconds into ms



    // console.log(curdate);
    // console.log(events);
 


    return (
    <div className='all-events-wrapper'>

        <div className='title'>Timeline</div>

      {sortedEvents.map((event, idx) => {
        const boundaries = event.predictions.map((prediction) => prediction.boundingBox);
        // curdate.setTime(event.timestamp * 1000);

        // console.log(curdate);
        // console.log(boundaries);
        
        return(
          <div key={idx} className='event-wrapper2'>
            {/* <Moment className='time' format='MM/DD/YYYY hh:mm A'>{curdate}</Moment> */}
            <div>{event.videoStream}</div>
            <div className='event-container'>

              {boundaries.map((boundary, idx2) => {
                return(
                  
                  <div className='' key={idx2} style={this.styleIt(boundary.top, boundary.left, boundary.height, boundary.width).container}>
                </div>
                ); 
                
              })}
            
              {/* <Moment className='time' format='MM/DD/YYYY hh:mm A'>{curdate}</Moment> */}
              
              <img src={event.imageSource} className='event-image'/>
            </div>
              
              <Score predictions={event.predictions} />
          </div>
          
          );

      })}
      
    </div>
    ); 
  }
}

export default Event;