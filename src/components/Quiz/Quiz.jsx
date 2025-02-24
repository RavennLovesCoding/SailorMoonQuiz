import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';
import sm1 from '../images/sm1.gif'
import sm2 from '../images/sm2.jpg'
import sm3 from '../images/sm3.jpg'
import sm4 from '../images/sm4.jpg'
import sm5 from '../images/sm5.png'

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [choice, setChoice] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let [img, setImg] = useState(null)

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
                setScore(prev=>prev+1);
            } else{
                e.target.classList.add("wrong");
                setChoice(true);
                option_array[question.ans-1].current.classList.add("correct"); //highlight the correct answer if the user clicks the wrong answer
            }
        }
    }

    const scoreImage = ()=> {
        if(score === 5){
            setImg(sm1);
        } else if(score >= 4 ){
            setImg(sm2);
        } else if(score >= 3 ){
            setImg(sm3);
        } else if(score >= 2 ){
            setImg(sm4);
        } else {
            setImg(sm5);
        }
    }

    const next = () =>{
        if (choice===true){
            if(index === data.length - 1) {
                setResult(true);
                scoreImage();
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setChoice(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    } 

    const reset =()=> {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setChoice(false);
        setResult(false);
        setImage(null);
    }


  return (
    <>
    <div className="container">
        <h1>How well do you know Sailor Moon?</h1>
        <hr />
        {result?<>
        <h2>You Scored: {score} out of {data.length}</h2>
        <p><img className="resultImage" src={img} alt="sailor moon icon" /></p>
        <button onClick={reset}>Reset</button></>:<><h2>{index+1}. {question.question}</h2>
        <ul>
            <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="index">{index+1} of {data.length} questions</div>
        </>}
        
        </div>
   <div className="bottom"> </div>
   </>
  )
}

export default Quiz