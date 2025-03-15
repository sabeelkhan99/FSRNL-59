
function fun() {
    let a = 100;

    function increment() {
        a = a + 1;
        console.log(a);
    }

    return increment;
}

// c1: {a: 100}
const f = fun();

// c2: {a: 100}
const x = fun();

f();
f();
f();
f();

x();
x();