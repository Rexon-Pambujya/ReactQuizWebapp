import { useCallback, useRef, useState } from "react";
import QUESTIONS from '../questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz({ }) {


    const [userAns, setUserAns] = useState([]);


    const activeQuestionIndex =userAns.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer

    ) {
        setUserAns((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);


    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null), [handleSelectAnswer]
    });


    if (quizIsComplete) {
        return (
            <Summary userAns={userAns}/>
        );
    }



    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}


            />
        </div>
    );
}