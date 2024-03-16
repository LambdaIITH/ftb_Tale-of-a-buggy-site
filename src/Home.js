import React from 'react';
import "./Home.css";
import { useState, useEffect } from 'react';
const Home = () => { 
  const [words, setWords] = useState(['DEBUGGING this site👾?.', 'But not visible', 'May seem to be visible']);
  const [colors, setColors] = useState(['tomato', 'rebeccapurple', 'lightblue']);
  const [letterCount, setLetterCount] = useState(1);
  const [x, setX] = useState(1);
  const [waiting, setWaiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval1 = setInterval(() => {


      if(letterCount === 0 && !waiting){
        setWaiting(true);
        setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          setX(1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 1000);
      } 
      else if(letterCount === words[0].length + 1 && !waiting){
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount(letterCount + x);
          setWaiting(false);
        }, 1000);
      } 
      
      
      else if(!waiting){
        setLetterCount(letterCount - x);
      }
    }, 120);

    const interval2 = setInterval(() => {
      setVisible((prevState) => !prevState);
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [colors, letterCount, waiting, words, x]);

  return (
    <div className='console-container'>
      <span id='text' style={{ color: colors[0] }}>
        {words[0].substring(0, letterCount)}
      </span>
      <div className={visible ? 'console-underscore' : 'console-underscore hidden'} id='console'>
        &#95;
      </div>
    </div>
  );
};

export default Home;
