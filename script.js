/*
let x=document.getElementById("box")

x.innerText=1

console.log(x)

let p = 40;

console.log(p);

// let x =0;

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

let name = "anmol";
console.log(name);

let ans = false
console.log(ans)

let student = {
    name : "anmol",
    age : 19, 
    branch : "computer science"
}

console.log(student.branch);
*/ 

let x=document.getElementById("box")
let sum=0
let p
function increase(){
    p = Number(x.innerText)
    p = p+1
    x.innerText =p
}


let t=document.getElementById("s")
btn2.addEventListener("click",function(){
    sum+=p
    t.textContent+="-"+x.textContent
    x.innerText=0
    console.log(sum)
})
