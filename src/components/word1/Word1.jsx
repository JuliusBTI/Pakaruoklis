


export function Word1 () {
    const word = "kaunas"
    const guessedLetters = ["","",""];
return (
<div style={{display:"flex", gap: ".25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", justifyContent:"center" }}>
    {word.split("").map((letter, index) => (
        <span style={{ borderBottom:'.1em solid black'}} key={index} >
            <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
                {letter}


        </span>
        </span>      
    ))}
        </div>
    );
};