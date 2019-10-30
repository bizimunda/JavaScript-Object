// Object Definition
// var person="John Doe";

// var person={
//     firstName: "John",
//     lastName:"Doe",
//     age:50
// }


// ***
// Object Methods
// var person={
//     firstName: "John",
//     lastName:"Doe",
//     id:556,
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// }


// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.id)
// console.log(person.fullName())

// person.getId=function(){
//     return this.firstName+"'s id is: "+this.id;
// }

// console.log(person.getId())

// ***
// Object Accessors

// var person={
//     firstName: "John",
//     lastName:"Doe",
//     language:"en",
//     get lang(){
//         return this.language
//     }
// }

// console.log(person.lang)


// var person={
//     firstName: "John",
//     lastName:"Doe",
//     language:"",
//     set lang(lang){
//        this.language=lang;
//     }
// }
// person.lang="en";

// console.log(person.language)

// ***
// object constructors

// function Person(first, last, age, eye){
//     this.firstName=first;
//     this.lastName=last;
//     this.age=age;
//     this.eyeColor=eye;
// }
// var p= new Person("John", "Doe", 56, "Green");
// p.id=78;
// p.getName=function(){
//     return this.firstName + " "+this.lastName;
// }
// console.log(p.getName());

// ***
// Object prototype
function Person(first, last, age, eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
    this.nationality="Engish";
}

var myFather= new Person("John", "doe", 50, "blue");
var myMother= new Person("Sally", "Rally", 45, "green");

console.log(myFather)


// adding a method to prototype object
Person.prototype.name=function(){
    return this.firstName+" "+this.lastName;
}

// adding a property to prototype object
Person.prototype.address="6th av";



