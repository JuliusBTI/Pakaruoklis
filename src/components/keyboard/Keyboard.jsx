import './Keyboard.css';

const KEYS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
export function Keyboard () {
    return (
        <div className='keyButon'>
            {KEYS.map(key=>{
                return <button disabled className="btn" key={key}>{key}</button>
            })}
        </div>



    )
 
}