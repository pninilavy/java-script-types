const sum=()=>{
    let n1=document.querySelector("#num1").value;
    let n2=document.querySelector("#num2").value;
   alert(n1+ " + " + n2 +" = "+(Number(n1)+Number(n2)))
}

const bin=()=>{
    let n1=document.querySelector("#num1").value;
    let n2=document.querySelector("#num2").value;
    alert(n1+ " + " + n2 +" = "+(parseInt(n1,2)+parseInt(n2,2)).toString(2))
}
const mul=()=>{
    let n1=document.querySelector("#num1").value;
    let n2=document.querySelector("#num2").value;
   alert(n1+ " * " + n2 +" = "+(n1*n2))
}

const power=()=>{
    let n1=document.querySelector("#num1").value;
    let n2=document.querySelector("#num2").value;
   alert(n1+ " ^ " + n2 +" = "+(n1**n2))
}
const save=()=>{
    let name=document.querySelector("#name").value||"guess";
    let pass=document.querySelector("#pass").value||"####"
    alert("hello "+name+"!\n"+"your password is: "+pass);
}