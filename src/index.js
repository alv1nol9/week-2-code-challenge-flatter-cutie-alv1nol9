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
 git 