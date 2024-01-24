import { useEffect } from 'react';
import './bracket.scss';

const Bracket = ()=>{
    const bracketData = [
    {text:'PATREON'},
    {text:'X'},
    {text:'YT'},
    {text:'TTV'},
    {text:'IG'}
  ];

    useEffect(()=>{
        const brackets =document.querySelectorAll('.bracket')
        brackets.forEach((bracket) =>{ 
          const bracketLeft = bracket.querySelector('.bracket-left');
          const bracketRight = bracket.querySelector('.bracket-right');
          
          bracket.addEventListener('mouseenter', () => {
            bracketLeft.style.marginRight = '20px';
            bracketRight.style.marginLeft = '20px';
          });
        
          bracket.addEventListener('mouseleave', () => {
            bracketLeft.style.marginRight = '-5px';
            bracketRight.style.marginLeft = '-5px';
          });
        })});

  return(
    <div>
      <div className="Bracket-container"> 
        {bracketData.map((item, index) =>(
            <div className='bracket' key={index}>
            <span className='bracket-left'>[</span>
            <span className='text'>{item.text}</span>
            <span className='bracket-right'>]</span>
            </div>
        ))}
            <div className='TnC-container'>
            <div className='TnC'>
                <span className='TnC-brackets'>[</span>
                <span className='TnC-text'>TERMS AND CONDITIONS</span>
                <span className='TnC-brackets'>]</span>
            </div>
            <p> 2023 — all rights reserved © 
                <br/>
                DSG
            </p>
            </div>
      </div>
    </div>
  )};




export default Bracket;