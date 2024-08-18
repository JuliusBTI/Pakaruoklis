import { Header } from './components/header/Header';
import { Lives } from './components/lives/Lives';
import { Stand } from './components/stand/Stand';
import { Topic } from './components/topic/Topic';
import { Keyboard } from './components/keyboard/Keyboard';
import { useState } from 'react';
import words from"./wordList.json";
import { Word1 } from"./components/word1/Word1";


function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}


function App() {
 const [wordToGuess, setWordToGuess] = useState(getWord)
 const [guessedLetters, setGuessedLetters] = useState<string[]>([])
 const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))





  return (
      <>
    <Header/>
    <Lives/>
    <Topic topic="Capitals"/>
    <Stand numberOfGuesses = {incorrectLetters.length}/>
    <Word1/>
    <br></br>
    <div style={{alignSelf: "stretch"}}>
    <Keyboard/>
    
    </div>
      </>
  )
}

export default App
