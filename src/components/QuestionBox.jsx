
export default function QuestionBox({ data, currQuestion, onClick }) {
    const toTitle = (string) => {
        return string.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

    const answerList = data.results[currQuestion].incorrect_answers.slice();
    answerList.push(data.results[currQuestion].correct_answer);
    answerList.sort(() => Math.random() - 0.5);

    return <>
        <div className="main">
            <div className="top">
                <p className="top-text-l"> {currQuestion + 1}. {decodeURIComponent(data.results[currQuestion].category)}</p>
                <div className="top-text-r">
                    <p className="top-text-r-item">Diffculty: {toTitle(data.results[currQuestion].difficulty)}</p>
                    <p className="top-text-r-item"> Type: {toTitle(data.results[currQuestion].type)}</p>
                </div>
            </div>
            <div className="flex">
                <p>{decodeURIComponent(data.results[currQuestion].question)}</p>
            </div>
            <div className="answers">
                {answerList.map((ans) =>
                    <button key={ans} className="button" onClick={() => onClick(ans)}> {decodeURIComponent(ans)}
                    </button>)}
            </div>
        </div>

    </>
}