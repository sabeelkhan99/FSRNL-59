// class Transaction{

//     static name = "This is a Transaction class";
    
//     constructor(id, status, amount, paymentMethod) {
//         this.id = id;
//         this.status = status;
//         this.amount = amount;
//         this.paymentMethod = paymentMethod;
//     }

//     // getter and setter methods

//     get getId() {
//         return this.id;
//     }

//     get getStatus() {
//         return this.status;
//     }

//     get getAmount() {
//         return this.amount;
//     }

//     get getPaymentMethod() {
//         return this.paymentMethod;
//     }

//     // Setters

//     set setId(newId) {
//         // perform validation
//         this.id = newId;
//     }

//     set setStatus(newStatus) {
//         this.status = newStatus;
//     }

//     set setAmount(newAmount) {
//         if (newAmount < 0) {
//             throw new Error('Invalid amount');
//         }
//         this.amount = newAmount;
//     }

//     set setPaymentMethod(newPaymentMethod) {
//         this.paymentMethod = newPaymentMethod;
//     }

//     // Methods
//     print() {
//         console.log("-----------");
//         console.log(this.getId);
//         console.log(this.getStatus);
//         console.log(this.getAmount);
//         console.log(this.getPaymentMethod);
//         console.log("-----------");
//     }

// }

// const t1 = new Transaction("TXN1234", "SUCCESS", 299.99, "CC");
// const t2 = new Transaction("TXN1235", "SUCCESS", 299.99, "CC");

// t2.print();


// // console.log(t1);
// // console.log(t2);



// class NotFoundError extends Error{
//     constructor(message = 'Not found') {
//         super(message);
//         this.status = 404;
//     }
// }

// if (true) {
//     throw new NotFoundError();
// }


// class A{
//     constructor(x) {
//         this.x = x;
//     }
// }


// class B extends A{
//     constructor(x, y) {
//         super(x);
//         this.y = y;
//     }
// } 


class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    distanceMethod(point) {
        const dy = this.x - point.x;
        const dx = this.y - point.y;
        return Math.hypot(dy, dx);
    }

    static distance(p1, p2) {
        const dy = p1.x - p2.x;
        const dx = p1.y - p2.y;
        return Math.hypot(dy, dx);
    }
}


const p1 = new Point(1, 2);
const p2 = new Point(5, 5);

console.log(p1.distanceMethod(p2));
console.log(Point.distance(p1, p2));