import { Header } from './components/header/Header';
import { Lives } from './components/lives/Lives';
import { Stand } from './components/stand/Stand';
import { Topic } from './components/topic/Topic';
import { Keybord } from './components/keybord/Keybord';
import { useState } from 'react';
import words from"./wordList.json";
import { Word1 } from"./components/word1/Word1";


function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}


function App() {
//  const Capitals = ["abidjan","abuja","accra","adamstown","aden","bissau","bishkek","bratislava","cairo","caracas"];
 const [wordToGuess, setWordToGuess] = useState(getWord)
  console.log(wordToGuess)

  return (
      <>
    <Header/>
    <Lives/>
    <Topic topic="Capitals"/>
    <Stand/>
    <div><Word1></Word1></div>
    <Keybord/>
    
      </>
  )
}

export default App
