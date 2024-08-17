import './Keybord.css';


export function Keybord () {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
       
       <button key={ltr}>
            {ltr}
        </button>
        
    )
    )
}