import { useState, useEffect } from 'react'
import './App.css'
import ButtonGroup from "./components/ButtonGroup";
import Question from "./components/Question";
import { Dimmer, Loader } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [questions, setQuestions] = useState([])


  useEffect(() => {
    const fetchQuestionData = async () => {
      await fetch("https://opentdb.com/api.php?amount=10&encode=url3986")
        .then(response => response.json())
        .then(data => {
          if (data.response_code === 0) setQuestions(data);
          console.log(data);
        })
    };
    fetchQuestionData()
  }, [])
  return (
    <div className="App">
      {(questions.length != 0)
        ?
        <Question className="question" data={questions} />
        : (<div>
          <Dimmer active>
            <Loader> Please refresh...</Loader></Dimmer>
        </div>)}
    </div>
  )
}
export default App



