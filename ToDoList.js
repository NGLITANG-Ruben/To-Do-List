const inputBox = document.getElementById('input-box');
const listeTaches = document.getElementById('listeDesTaches');

function ajout() {
  
  if (inputBox.value === '') {
    // Un message qui s'affiche lorsqu'on entre pas de texte
    alert("Write somethings");
  } else {
    // Création d'un élément ayant comme tag nage "li"
    let li = document.createElement("li");
    // Attribution de la valeur de input à l'élément li qu'on vient de créer
    li.innerHTML = inputBox.value;
    //Affichage de l'élément li sur l'écran
    listeTaches.appendChild(li);
    
    // Création d'un élément ayant comme tag nage "Span"
    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  // Suppression du contenu de input apres l'ajout d'un élément
  inputBox.value = '';
  sauvegarde();
  
}

//Création d'une fonction pour la suppression
listeTaches.addEventListener("click", function(e){
  if (e.target.tagName === "LI") {
    //Lorsqu'on va clicquer sur un tag Name "li", sa propriété va changé 
    // celle definie comme class name "coche"
    e.target.classList.toggle("coche");
    sauvegarde();
  } 
  else if (e.target.tagName === "SPAN") {
    //Lorsquon va cliquer sur un tag Name "span", on va supprimer toute la ligne de "li"
    e.target.parentElement.remove();
    sauvegarde();
  }
}, false);

// Création d'une fonction permettant la sauvegarde des données lorsqu'on raffraichit la page
function sauvegarde(){
  localStorage.setItem("data", listeTaches.innerHTML);
}

// Création d'une fonction permettant la sauvegarde des données lorsqu'on redemare le navigateur
function enregistre() {
  listeTaches.innerHTML = localStorage.getItem("data");
}
enregistre();

 