// how to set the arg type
function greet(name: string){
    console.log("Good Morning "+ name);
}
greet("shreya");

//how to set the return type
function sum(a:number ,b:number): number{
    return (a+b)
}
const ans=sum(2,3)
console.log(ans)

//return true or false based on if 18+
//if we dont write :boolean , it will implicitely infer this type
function validAge(n:number):boolean{
    if(n>18){
        return true;
    }else{
        return false;
    }
}

const age=validAge(23);
console.log(age)