
// const b = 200;

// function fun() {
//     const a = 100;

//     function xyz() {
//         // const c = 300;
//         console.log(c);
//     }

//     xyz();
//     console.log(a);
// }

// fun();

var a = 100;

const name = 'Sarah'; //For const & let variable outermost scope is the script scope

function sayName() {
    console.log(name);
}

function fun() {
    const name = 'Max'; //functional scope
    sayName();
    console.log(name);
}

fun();

const b = 88;

{
    const b = 33;
    console.log(b);
}

console.log(b);





