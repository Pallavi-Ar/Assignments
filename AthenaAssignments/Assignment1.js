import '../css/assignment1.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Assignment1() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const [inputText, setInputText] = useState('');
  const [input, setInput] = useState([]);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setClickCount(clickCount + 1);
  };

  const handleAdd = () => {
    if (inputText!== '') {
      setInput([...input, inputText]);
      setInputText('');
    }
  }

  return (
    <div className='assignment1'>
    <div>
      <Button variant='primary' onClick={handleToggle}>Display Details</Button>
      {isVisible && <p className='content'>This is a paragraph toggled by button click</p>}
      <p className='content'>Button clicks: {clickCount}</p>
    </div>

    <div className='part2'>
      <input type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant='primary' onClick={handleAdd}>Add</Button>
    </div>
    <ul>
      {input.map((input, index) => (
        <li key={index} style={{ background: (index + 1) % 5 === 0 ? 'blue' : 'transparent' }}>
          {input}
        </li>
      ))}
    </ul>
    </div>
  )
}
