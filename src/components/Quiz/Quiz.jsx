import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [choice, setChoice] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans)=> {
        if(choice === false){
            if(question.ans===ans) {
                e.target.classList.add("correct");
                setChoice(true);
            } else{
                e.target.classList.add("wrong");
                setChoice(true);
                option_array[question.ans-1].current.classList.add("correct"); //highlight the correct answer if the user clicks the wrong answer
            }
        }
    }

    const next = () =>{
        
    } 

  return (
    <>
    <div className="container">
        <h1>How well do you know Sailor Moon?</h1>
        <hr />
        <h2>{index+1}. {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button>Next</button>
        <div className="index">{index+1} of 5 questions</div>
    </div>
   <div className="bottom"> </div>
   </>
  )
}

export default Quiz