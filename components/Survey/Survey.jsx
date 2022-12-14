import { useEffect, useState } from "react";
import useAppContext from "../../context/Context";
import { Button, Image, Radio } from "antd";
import styles from "./Survey.module.css";

export default function Survey({ questions }) {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState(0);
  const [finish, setFinish] = useState(false);
  const [cooldown, setCooldown] = useState(questions[step].lifetimeSeconds);
  const { answers } = useAppContext();
  let time = 0;

  const handleNextQuestion = () => {
    clearTimeout(time);
    step === questions.length - 1
      ? (answers.push(value), setFinish(true))
      : (answers.push(value), setStep(step + 1));
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const low = () => {
    !finish && cooldown !== 0 ? setCooldown(cooldown - 1) : null;
  };

  useEffect(() => {
    if (cooldown === 0 && !finish) {
      handleNextQuestion();
    } else {
      !finish && cooldown !== 0 ? (time = setTimeout(low, 1000)) : null;
    }
  }, [cooldown]);

  useEffect(() => {
    setCooldown(questions[step].lifetimeSeconds);
  }, [step]);

  return (
    <>
      {finish ? (
        <>
          <h1 className={styles.title}>Your answers summary</h1>
          <div className={styles.answersContainer}>
            {answers.map((answer, index) => {
              <div className={styles.answer} key={index}>
                <h3>
                  Question number {index + 1}: {questions[index].text}
                </h3>
                <Image height={100} src={questions[index].image} />
                <p>
                  <strong>Answer:</strong> {questions[index].options[answer].text}
                </p>
              </div>;
            })}
          </div>
        </>
      ) : (
        <>
          <p className={styles.cooldown}>Time remaining: {cooldown}</p>
          <div className={styles.surveyContainer}>
            <h1 className="title">{questions[step].text}</h1>
            <div className={styles.imageContainer}>
              <Image height={300} src={questions[step].image} />
            </div>
            <Radio.Group onChange={onChange} value={value}>
              {questions[step].options.map((option, index) => {
                <Radio value={index} key={index}>
                  {option.text}
                </Radio>;
              })}
            </Radio.Group>
          </div>
        </>
      )}
      {finish ? (
        <div></div>
      ) : (
        <Button className="button" onClick={handleNextQuestion}>
          Next question
        </Button>
      )}
    </>
  );
}
