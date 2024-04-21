import React from 'react';
import './Abstract.css'; // Assuming you have a CSS file for styling

function Abstract() {
  return (
    <div className="abstract-container">
      <p className='abstract-header'>Abstract</p>
      <p className='abstract-content'>
        This project dives into sentiment analysis, a way of figuring out feelings from written text. We've used different smart computer techniques like Support Vector Machines (SVM), Artificial Neural Networks (ANN), Naive Bayes, Decision Trees, and Random Forest to do this. We've tried these methods on various kinds of text to see which one works best. By doing this, we've learned a lot about how these methods perform and when to use them. Our findings give a clear picture of which method might be best for different situations. This research is helpful for anyone interested in understanding emotions from written text, like in social media or customer reviews.
      </p>
    </div>
  );
}

export default Abstract;
