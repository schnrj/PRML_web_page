import React from 'react';
import './Problem.css'; // Assuming you have a CSS file for styling

function Problem() {
  return (
    <div className="problem-container">
      <h1 className='header_Problem'>Challenges and Solutions in Sentiment Analysis</h1>
      {/* Uncomment the following line if you want to include the 'intro' image */}
      {/* <img src={intro} alt="Introduction" className='pro_imag'/> */}
      <div className="challenge">
        <h2>Feature Representation</h2>
        <p><strong>Problem:</strong> Choosing the right features that effectively capture sentiment can be challenging.</p>
        <p><strong>Solution:</strong> We have considered only those columns which contribute most to give us better result for sentiment analysis so we removed all the other columns except 'text' and 'sentiment'.</p>
      </div>
      <div className="challenge">
        <h2>Data Imbalance</h2>
        <p><strong>Problem:</strong> Sentiment analysis datasets often suffer from class imbalance.</p>
        <p><strong>Solution:</strong> Instead of directly addressing data imbalance, we focused on text preprocessing techniques. We removed stop words and utilized Bag-of-Words (BoW) representation. Additionally, we applied Term Frequency-Inverse Document Frequency (TF-IDF) vectorization to the text data.</p>
        <p><strong># Step 2:</strong> Vectorize the text data using TF-IDF</p>
        <code>tfidf_vectorizer = TfidfVectorizer(max_features=5000)</code> {/* Limiting to top 5000 features */}
      </div>
      <div className="challenge">
        <h2>Model Selection</h2>
        <p><strong>Problem:</strong> Choosing the right model architecture that balances complexity and performance can be challenging.</p>
        <p><strong>Solution:</strong> Experimentation with various algorithms such as SVM, Decision Trees, Random Forests, and ANNs is necessary. Hyperparameter tuning via techniques like grid search or random search can further optimize model performance.</p>
      </div>
    </div>
  );
}

export default Problem;
