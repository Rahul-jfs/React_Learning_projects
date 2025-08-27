const Progress = ({
  index,
  noOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress
        max={noOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question
        <strong>
          {index + 1}/{noOfQuestions}
        </strong>
      </p>
      <p>
        Points:
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;
