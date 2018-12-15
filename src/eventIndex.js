import React from 'react';
import API from './event_data';
import Score from './score';
import Moment from 'react-moment';

class EventIndex extends React.Component {



  render() {
    const events = API.mockResponse.events;
    return(
      <div className='event-index-wrapper'>
        <div>List of Events</div>
        <div className='category-titles-container'>

          <div className='category-titles'>
            <div className='stream-title'>Stream Name</div>
            <div className='time'>Time</div>
          </div>
        </div>
        <ul className='event-index-list'>
        

        
          {events.map(event => {
            const curdate = new Date();
            curdate.setTime(event.timestamp * 1000);
            return (
              <li className='event-index-container'>
              <div className='stream-title'>
                {/* <div className='stream-title-text'> */}

                {event.videoStream} 
                {/* </div> */}
              </div>
              
              <Moment className='time' format='MMM DD, YYYY @ hh:mm A'>{curdate}</Moment>
              

            </li>
            );
          })}
        </ul>
      </div>
    );
  }



}

export default EventIndex;