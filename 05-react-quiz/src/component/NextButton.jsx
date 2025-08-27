const NextButton = ({ dispatch, answer, index, noOfQuestions }) => {
  if (answer === null) return;
  if (index < noOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );

  if (index === noOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "finished" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
};

export default NextButton;
