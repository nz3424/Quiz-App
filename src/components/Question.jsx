import { useState } from 'react';
import QuestionBox from "./QuestionBox";
import QuestionFeedback from "./QuestionFeedback";
import { Button } from "semantic-ui-react";

export default function Question({ data }) {

    const [currQuestion, setCurrQuestion] = useState(0);
    const [boxType, setBoxType] = useState("question");
    const [score, setScore] = useState(0);


    function handleOnClick(input) {
        (input === data.results[currQuestion].correct_answer)
            ? (setBoxType("correct"), setScore(score + 1))
            : (setBoxType("incorrect"))
        setTimeout(() => {
            setBoxType("question");
            (currQuestion >= 9) ? setBoxType("end") : setCurrQuestion(currQuestion + 1)
        }, 1000);

    }

    function handleRefresh() {
        window.location.reload();
    }

    return <>
        {(boxType === "question") ? <QuestionBox data={data} currQuestion={currQuestion} onClick={handleOnClick} />
            : <QuestionFeedback type={boxType} />}
        <div className="question-number-flex">
            {Array(10).fill().map((x, idx) => <div key={idx}
                className={(currQuestion === idx) ? "curr-question-number" :
                    (currQuestion > idx) ? "past-question-number" : "inactive-question-number"}> </div>)}</div>
        <div className="score"> Score: {score}</div>
        {(boxType === "end") && <Button className="button" inverted color="grey" circular icon={"refresh"} onClick={handleRefresh} />
        }
    </>

}