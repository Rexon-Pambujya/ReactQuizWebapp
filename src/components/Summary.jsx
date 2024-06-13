import quizCompleteImg from '../assets/quiz-logo.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAns }) {
const skippedAnswers = userAns.filter(answer => answer ===null);
const correctAnswers = userAns.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
    );
const skippedAnswersShare = Math.round((skippedAnswers.length / userAns.length)*100);

const correctAnswersShare = Math.round((skippedAnswers.length / userAns.length)*100);

const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare

    return (
        <div id="summary">
            <img src={quizCompleteImg} />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersShare}%</span>
                    <span className='tex'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswersShare}%</span>
                    <span className='tex'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersShare}%</span>
                    <span className='tex'>Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAns.map((answer, index) => {
                    let cssClasses = 'user-answer';
                    if(answer === null){
                        cssClasses += ' skipped';
                    }else if(answer === QUESTIONS[index].answers[0]){
                        cssClasses += ' correct';
                    }else{
                        cssClasses += 'wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className='user-answer'>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}

            </ol>
        </div>
    );
}