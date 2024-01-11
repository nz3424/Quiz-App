
export default function QuestionFeedback({ type }) {
    const typeMap = {
        "correct": "Correct!",
        "incorrect": "Incorrect",
        "end": "Game over!"
    }
    return <div className={type} >
        <div className="message">
            <p> {typeMap[type]}</p>
        </div>
    </div>
}