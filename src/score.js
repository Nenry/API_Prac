import React from 'react';

class Score extends React.Component {




  render() {
    const predictions = this.props.predictions;

    // console.log(scores);
    // const scores = predictions.map(prediction => {
    //   if (prediction.hasOwnProperty('scores')) {
    //     return prediction;
    //   }
    // });
    
    // console.log(scores);
    // console.log(predictions);
    return(
    <div className='score'>
        <ul>
      {predictions.map((prediction, idx) => {
        // console.log('scoreObj', scoreObj);
        return (

          

          prediction.scores.map((scoreObj, idx1) => {
            return (
              <li key={idx1} className='score'>{scoreObj.label}, Score: {scoreObj.score}</li>
              );
            })
          
        
          );
          
        })}
      
        </ul>
    
    </div>
    );
  }
}

export default Score;