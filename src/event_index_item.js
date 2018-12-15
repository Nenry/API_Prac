import React from 'react';
import Moment from 'react-moment';
import Modal from 'react-modal';
import Score from './score';
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

class EventIndexItem extends React.Component{
 constructor(props) {
   super(props);

   this.state = {
     modalIsOpen: false
   };

   this.openModal = this.openModal.bind(this);
   // this.afterOpenModal = this.afterOpenModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
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


 render() {
    const curdate = new Date();
    curdate.setTime(this.props.event.timestamp * 1000);
   return(
    <div className='event-index-container'>
      <div className='stream-title'>
        <div className='stream-title-text'>

        {this.props.event.videoStream} 
        </div>
      </div> 
      
      <Moment className='time' format='MMM DD, YYYY @ hh:mm A'>{curdate}</Moment>

    <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

     
          <button onClick={this.closeModal}>close</button>
                   <div className='event-wrapper2'>
            {/* <Moment className='time' format='MM/DD/YYYY hh:mm A'>{curdate}</Moment> */}
            <div>{this.props.event.videoStream}</div>
            <div className='event-container'>

              {this.props.boundaries.map((boundary, idx2) => {
                return(
                  
                  <div className='' key={idx2} style={this.styleIt(boundary.top, boundary.left, boundary.height, boundary.width).container}>
                </div>
                ); 
                
              })}
            
              {/* <Moment className='time' format='MM/DD/YYYY hh:mm A'>{curdate}</Moment> */}
              
              <img src={this.props.event.imageSource} className='event-image'/>
            </div>
              
              <Score predictions={this.props.event.predictions} />
          </div>
        </Modal>



    </div>
   );
 }




}


export default EventIndexItem;