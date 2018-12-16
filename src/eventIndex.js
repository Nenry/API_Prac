import React from 'react';
import API from './event_data';
import Score from './score';
import Moment from 'react-moment';
import Modal from 'react-modal';
import Events from './event';
import EventIndexItem from './event_index_item';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


// Modal.setAppElement('#yourAppElement')
class EventIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
    
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    console.log('fucken work');
    this.setState({
      modalIsOpen: false
    });
    console.log(this.state.modalIsOpen);
  }

    styleIt(top, left, height, width) {
      return ({
        container: {
          position: 'absolute',
          top: `${top*100}%`,
          left: `${left*100}%`,
          height: `${height*100}%`,
          width: `${width*100}%`,
          border: '1px solid blue'
        }
      });
    }



  render() {
    const events = API.mockResponse.events;
    return(
      <div className='event-index-wrapper'>
        <div>List of Events</div>
        {/* <div className='category-titles-container'>

          <div className='category-titles'>
            <div className='stream-title'>Stream Name</div>
            <div className='time'>Time</div>
          </div>
        </div> */}
        <ul className='event-index-list'>
        

        
          {events.map((event, idx) => {
            const curdate = new Date();
            const boundaries = event.predictions.map((prediction) => prediction.boundingBox);

            curdate.setTime(event.timestamp * 1000);
            return (
              <li key={idx} >
                <EventIndexItem event={event} boundaries={boundaries}/>
            {/* <div>
              </div>
              <div className='stream-title'>
                <div className='stream-title-text'>

                {event.videoStream} 
                </div>
              </div> */}
              
              {/* <Moment className='time' format='MMM DD, YYYY @ hh:mm A'>{curdate}</Moment> */}
              
              {/* <button className='modal-button' onClick={this.openModal}>Predictions</button> */}

              {/* <Modal */}
                {/* isOpen={this.state.modalIsOpen} */}
                {/* onAfterOpen={this.afterOpenModal} */}
                {/* onRequestClose={this.closeModal} */}
                {/* style={customStyles} */}
                {/* contentLabel="Example Modal" */}
                
              {/* > */}
                {/* <button onClick={this.closeModal}>close</button> */}
                {/* {console.log(event.imageSource)} */}
                {/* <img src={event.imageSource} /> */}
                  {/* <Events /> */}
              {/* </Modal> */}

            </li>
            );
          })}
        </ul>
      </div>
    );
  }



}

export default EventIndex;