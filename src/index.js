// Your code here
//Your code here

 //fetch & display character names
 //show character details when clicked
 //handle votes properly
 //adding new characters
 //updating server with votes
 //>>>fetch
 
 document.addEventListener("DOMContentLoaded", getCharacters)
 
 function getCharacters() {
     fetch("https://json-chi-six.vercel.app/characters")
     .then(response=>response.json() )
     .then( data => {
        const characterBar= document.getElementById("character-bar")
        characterBar.innerHTML="";
    
        data.forEach(character=>{
            const span =document.createElement("span");
            span.textContent = character.name;
            span.addEventListener("click",()=>showCharacterDetails(character));
            characterBar.appendChild(span);            
        })
     })    
     .catch(error=>console.log("Characters not fetched",error));    
 }
 
 
 
 //>>>>>>done fetching
 
 // display character details
 function showCharacterDetails(character){
    const name=document.getElementById("name")
    const image = document.getElementById("image")
    const voteCount = document.getElementById("vote-count")
 //updating 
 name.textContent=character.name
 image.src=character.image
 image.alt=character.name
 voteCount.textContent =character.votes 
}

document.getElementById("votes-form").addEventListener("submit",(event)=>{
 event.preventDefault()
 const votesInput = document.getElementById("votes")
const voteCount = document.getElementById("vote-count")

let newVotes= parseInt(votesInput.value)||0
 votesInput.textContent=parseInt(voteCount.textContent)+newVotes 

votesInput.value=""
})

const voteForm = document.getElementById("votes-form");

voteForm.addEventListener("submit", (event) => {
event.preventDefault();

const votesInput = parseInt(document.getElementById("votes").value) || 0;
const currentVotes = parseInt(voteCountElement.textContent);
const updatedVotes = currentVotes + votesInput;

voteCountElement.textContent = updatedVotes;


fetch(`${baseUrl}/${selectedCharacter.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ votes: updatedVotes })
})
.catch(err => console.error("Error updating votes:", err));

event.target.reset(); 
});                                     