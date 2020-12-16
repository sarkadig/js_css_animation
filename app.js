function _load(){

  let rootE = document.getElementById("root");

  let myObjects = [
  { tag : "h1",
    content : "Gergő"
  },
  {
    tag : "p",
    content : "Frontend Developer" 
  }
  ];
  //console.log(myObjects);

  //for (let i = 0; i < myObjects.length; i++) {}

  //let rootE = document.getElementById("root");
  //rootE.insertAdjacentHTML("beforeend", `
  //<h1>Gergő</h1>
  //<p>Frontend Developer</p>
  // `);

  for (myObject of myObjects) {
    //console.log(myObjects.tag);
    rootE.insertAdjacentHTML("beforeend", `
    <${myObject.tag}>${myObject.content}</${myObject.tag}>
    `);
}

rootE.addEventListener("click", function() {
  rootE.classList.toggle("clicked");
});









}

window.addEventListener("load", _load);