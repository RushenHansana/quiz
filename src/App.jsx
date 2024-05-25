import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

import Quiz from "./Quiz";
const App = ({ questions , token }) => {
  return <Quiz questions={questions} token={token}/>;
};

// Add prop type validation for the 'questions' prop
App.propTypes = {
  questions: PropTypes.array.isRequired, 
};

export default App;
