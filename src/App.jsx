import { Header } from './components/header/Header';
import { Lives } from './components/lives/Lives';
import { Stand } from './components/stand/Stand';
import { Topic } from './components/topic/Topic'
import { Keybord } from './components/keybord/Keybord'



function App() {



































  return (
      <>
    <Header/>
    <Lives/>
    <Topic topic="Capitals"/>
    <div>
    <Stand/>
    <Keybord/>
    </div>
      </>
  )
}

export default App
