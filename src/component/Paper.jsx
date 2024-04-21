import React from 'react';
import './Paper.css'; // Assuming you have a CSS file for styling

function Paper() {
  return (
    <div className="paper-container">
      <h2 className="paper-header">Explore Our Group's Contributions</h2>
      <ul className="contribution-list">
        <li>
          <span className="bullet">&#9679;</span> Logistic Regression & Random Forest Implementation By <span className="author">Rohan Lambture</span>
        </li>
        <li>
          <span className="bullet">&#9679;</span> SVM Implementation By <span className="author">Sachin Raj</span>
        </li>
        <li>
          <span className="bullet">&#9679;</span> ANN Implementation By <span className="author">Anuj Patil</span>
        </li>
        <li>
          <span className="bullet">&#9679;</span> Naive Bayes Implementation By <span className="author">Ritesh Fageria</span>
        </li>
        <li>
          <span className="bullet">&#9679;</span> Decision Tree Implementation By <span className="author">Yashraj</span>
        </li>
        <li>
          <span className="bullet">&#9679;</span> Report: <a href="https://www.overleaf.com/4795695219szxfgdcvqjhb#15b1d4" target="_blank" rel="noopener noreferrer">Download PDF</a>
        </li>
      </ul>
    </div>
  );
}

export default Paper;
