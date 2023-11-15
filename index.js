/*let acceuil = alert("bienvenue sur ma page d'acceuil")
let option1 = 1;
let option2 = 2;
let option3 = 3;
let option4 = 4;
let option5 = 5;
let option6 = 6;
do 
{
    let option = parseInt(prompt(+option1 + "calcul de la surface" + '\n' + option2 + "division par zero" + '\n' + option3 + "calcul de la tranche d'age" + '\n' + option4 + "operations arithmetiques" + '\n' + option5 + "palindrome" + '\n' + option6 + "quitter" +'\n'));
switch (option) {
    case 1:
        let rayon = 4;
        const PI = 3.14;
        let surface = PI * (rayon) ** 2
        alert(surface);
        break;
    case 2:
        let chiffre1 = 10;
        alert(chiffre1);
        let chiffre2 = 0;
        if (chiffre2 == 0) {
            alert('division par zero interdite');
        }
        else {
            let division = chiffre1 / chiffre2;
            alert('division');
        }

        break;
    case 3:
        let age = 22;

        if (age >= 35) {
            alert("a le droit d'avoir des travaux lourds");
        }
        else if (age >= 18) {
            alert("il peut effectuer toutes les taches");
        }
        else if (age < 18) {
            alert("doit retourner a l'ecole");
        }

        break;
    case 4:
        let nombre1 = parseInt(prompt('ajoutez un nombre'));
        let nombre2 = parseInt(prompt('ajoutez un nombre'));

        if (nombre1 > 0 && nombre2 > 0) {
            let nombresAdditionnees = Number(nombre1) + Number(nombre2);
            alert("l'addition de deux nombres donne" + nombresAdditionnees);

            let nombresSoustraits = nombre1 - nombre2
            alert("la soustraction de deux nombres donne" + nombresSoustraits);

            let nombresMultipliees = nombre1 * nombre2
            alert("la multiplication de deux nombres donne" + nombresMultipliees);

            let nombresDivisees = nombre1 / nombre2
            alert("la division de deux nombres donne" + nombresDivisees.toFixed(2));
        }

        break;
        case 5 : 
        function devinette(params) {
            
        }
    default:        
        break;
} } while (option6 != option); */
/*if (option1==1) {
let rayon = 4;
const PI = 3.14;
let surface = PI*(rayon)**2
 alert (surface);
}
if (option2==2) {
let chiffre1 = 10;
alert(chiffre1);
let chiffre2 = 0;
if (chiffre2 == 0){
    alert('division par zero interdite');
}
else {
    let division = chiffre1/chiffre2;
    alert('division');
}
}
if (option3==3) {
    
let age = 22;

if (age>=35){
    alert("a le droit d'avoir des travaux lourds");
}
else if (age>=18) {
alert("il peut effectuer toutes les taches");
}
else if (age<18) {
alert("doit retourner a l'ecole");
}
}
if (option4==4) {
let nombre1 = parseInt (prompt('ajoutez un nombre'));
let nombre2 = parseInt (prompt('ajoutez un nombre'));

if(nombre1>0 && nombre2>0){
let nombresAdditionnees = Number(nombre1) + Number(nombre2);
alert("l'addition de deux nombres donne"+nombresAdditionnees);

let nombresSoustraits = nombre1  - nombre2
alert("la soustraction de deux nombres donne"+nombresSoustraits);

let nombresMultipliees= nombre1  * nombre2
alert("la multiplication de deux nombres donne"+nombresMultipliees);

let nombresDivisees= nombre1  / nombre2
alert("la division de deux nombres donne"+nombresDivisees.toFixed(2));
}
}
}
// valeur a recuperer 
/*var diviseur;
var dividende;
var resultat;
do {
diviseur = prompt('nombre a diviser:');
dividende = prompt('nombre divise:');
} while (isNaN(diviseur) || isNaN(dividende));


    
//verifier que la division peut se faire
if(dividende == 0){
    alert("pas d'operation possible");
}

else {
    //operation de division
    resultat = diviseur / dividende;
    //voir le resulat de la division
    alert("division donne "+ resultat);
}
*/
/*
const SIZE = 20
let generate_notes = new Array(SIZE).fill(0).map((v,k) => k + 1)
console.log(generate_notes);

function carre(notes) {
const length = notes.length
let return_notes = []
for (let i=0; i<length; i++); {

    return_notes.push(notes[i]**2);   
}
return return_notes
}
const return_notes = carre([1,2,3,4,5,7,9]);
console.log(return_notes);*/

/*function sort(notes) {
    const length = notes.length
    for (let i = 0; i < length; i++) {
        console.log();
        f
        
    }
    for (let j = 0; j <=length -1; j++) {
    
        
    }
}

const return_result = sort([10,1,2,6,7,8,9,15]);
console.log(return_result);
*/
// function ket(valeur) {
//     alert(valeur+ "est ket")
// }
// function aser(valeur) {
//     alert(valeur+ "est aser")
// }
// function je_suis(value , callback1, callback2) {
//     if (value%2==0) {
//         callback1(value);
//     }
//     else {
//         callback2(value);
//     }
// }
// je_suis(1,ket ,aser)
// let string="jerry est tres beau"
// let voyelle =["a","e","i","o","u","y"]
// let result= string.split("").reduce(function(accumulator,currentValue){
//     if (!voyelle.includes(currentValue)) {

//         return accumulator+currentValue;
//     }
//     return accumulator
// },"")
// console.log(result);
// let acceuil = alert("veuillez consultez vos taches")
// let tache1 = 1
// let tache2 = 2
// let tache3 = 3
// let tache4 = 4
// let tache5 = 5

//let menu = parseInt(prompt(+tache1 + ".list task" + "\n" + tache2 + ".Add task" + "\n" + tache3 + ".remove task" + "\n" + tache4 + ".completed" + "\n" + tache5 + ".exit" + "\n"))
// let mesTaches = [];
// function ajouter(mesTaches, taches) {
//     taches = prompt("saisissez vos taches")
//     mesTaches.push(taches)

//     return mesTaches;
// }

// console.log(ajouter());
// Don't remove this lines
// Don't remove this lines


//let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Your code here
// secretMessage.pop("javascript");
// console.log(secretMessage.length);
// secretMessage.push("to","program");
// secretMessage.splice(7, 1,'right');
// console.log(secretMessage);
// console.log(secretMessage.join(' '));

// const element = {
//     valeur: 0,
//     get prix() { return this.valeur + '$'; },
//     set prix(prix) { this.valeur = parseFloat(prix); }
// }
// console.log(element.prix)
// const car ={
//     numDoors : 4,
//     isDirty : true ,
//     color : 'red',
// }
// for (let key in car) {
// console.log(key);
// }
// let taskList = document.getElementById('taskList');

// function addTask() {
//     let myInput = document.getElementById('addTask');
//     let textTask = myInput.value;

//     if (textTask === "") {
//         return;
//     }

//     let li = document.createElement('li');
//     li.innerHTML = textTask;

//     let completedButtunoneclick = document.createElement('completedButton');
//     completedButtunoneclick.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'

//     completedButtun.oneClick = function () {
//         completedTask 
//     }
//     let deleteButton = document.createElement('deleteButton');
//     deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'

//     deleteButton.oneClick = function () {
//         deleteTask 
//     }

// }
let myInput, addTask, list_task;
let  tasksUser = [];

myInput  document.getElementById('myInput')
addTask = document.querySelector('button');
list_task = document.getElementById('list_task');
 


onClick = function () {
    if (myInput.value != "") {
        let paragraphe = document.createElement('p')
    }
    paragraphe.innerText = myInput.value ;
}




























// let myInput, button, taskList;
// let tasksUser = [];

// myInput = document.querySelector('#myInput' );
// button = document.querySelector('button');
// taskList = document.querySelector('#taskList');
// button.addEventListener('click', addTask);

// function addTask() {
    

//     let list_item = document.createElement('li')
//     taskList.appendChild(list_item);
//     list_item.innerHTML = `<p>${myInput.value}</p><button>delete</button><button>completed</button>`
//     let btn = document.createElement('li')
//     button.appendChild(btn)
 
// }


