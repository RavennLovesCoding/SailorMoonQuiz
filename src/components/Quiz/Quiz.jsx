import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [choice, setChoice] = useState(false);

    const checkAns = (e, ans)=> {
        if(choice === false){
            if(question.ans===ans) {
                e.target.classList.add("correct");
                setChoice(true);
            } else{
                e.target.classList.add("wrong");
                setChoice(true);
            }
        }
    }

  return (
    <>
    <div className="container">
        <h1>How well do you know Sailor Moon?</h1>
        <hr />
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">{index+1} of 5 questions</div>
    </div>
   <div className="bottom"> </div>
   </>
  )
}

export default Quiz