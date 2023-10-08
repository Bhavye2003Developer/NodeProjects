let arr = [10, 20, 30, 40, 50, 60]
// let arr2 = [...arr, 140, 150, 160]

// arr.push(50)
// console.log(arr, arr2)

// for (let i of  arr){
//     console.log(i)
// }

// for (let i in arr) {
//     console.log(i)
// }

// let [a, , b, ...c] = arr
// console.log(a, b,c)

// objects -> referece type in heap memory, memory ptr in stack

const getName = function () {
    console.log(`My name is : ${this.name}`)
}

const student = {
    name: "Bhavye",
    age: 20,
}
// student.getName()

const student2 = {
    name: "CyberGod",
    age: 999
}
// getName.call(student2)
// getName.call(student)


// console.log(student['age'])

// for (let k in student){
//     console.log(k, student[k])
// }

// for (let key of Object.keys(student)){
//     console.log(key, student[key])
// }



// const k1 = "objkey1"
// const k2 = "objkey2"

// const v1 = "val1"
// const v2 = "val2"

// const obj = {}
// obj[k1] = v1
// obj[k2] = v2
// console.log(obj)


// const obj = {...student, type:"god"}
// console.log(obj)


// const {name} = student
// console.log(name)

const sum = (arr = [1, 2, 3]) => {
    let sum_num = 0
    for (let i of arr) {
        sum_num += i
    }
    console.log(`The sum is : ${sum_num}`)
}

// sum([10, 20, 30, 40, 50])
// sum()

// rest parameters
const mul = (...arr) => {
    let sum_num = 1
    for (let i of arr) {
        sum_num *= i
    }
    console.log(`The mul is : ${sum_num}`)
}

// mul(10,20,30,40,50)


// function getName({ name }) {
//     console.log(`The name is : ${name}`)
// }
// getName(student)


// arr.forEach((val)=>{
//     console.log(val)
// })


// const arr2 = arr.map((val) => {
//     return val * 20
// })
// console.log(arr2)


// const arr2 = arr.filter((val) => {
//     return val % 20 == 0
// })
// console.log(arr2)



// let initial = 0
// const sums = arr.reduce((prev, curr) => {
//     return prev + curr
// }, 10)
// console.log(sums)


// student['getInfo'] = () => {
//     console.log(`Name : ${student['name']}\nAge : ${student.age}`)
// }
// student.getInfo()


const a1 = {
    k1: "v1",
    k2: "v2",
    know() {
        console.log("Know me bhavye")
        console.log(`Key1 : ${this.k1}`)
    }
}
// console.log(a1)
const a2 = Object.create(a1)
a2['name'] = "CyberGod"
a2['k1'] = "version 1"
// console.log(a2.k1)
// console.log(a2)
// a2.know()

// console.log(sum.name)


// function createUser(name, age) {
//     console.log("Creating user...")
//     this.name = name
//     this.age = age
//     this.getInfo = function () {
//         console.log(`Student Name : ${this.name} and age : ${this.age}`)
//     }
// }
// // console.log(createUser.prototype) -> also provides empty object


// const s1 = new createUser("Bhavye", 20)
// // console.log(s1)
// s1.getInfo()
// const s2 = new createUser("CyberGodKiller", 9999)
// s2.getInfo()



class createUser {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getInfo() {
        console.log(`Student Name : ${this.name} and age : ${this.age}`)
    }
}

const u1 = new createUser("Bhavye Jain", 12001)
// console.log(u1)
// u1.getInfo()




class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    walk() {
        console.log(`${this.name} having ${this.type} type is walking...`)
    }
}

// const dog = new animal("Doggy", "Barked")
// const cat = new animal("Cat", "FemaleAnimal")
// dog.walk()
// cat.walk()

class Dog extends Animal {
    constructor(name, type, color) {
        super(name, type)
        this.color = color
    }
    bark() {
        console.log(`${this.name} is barking...`)
    }
    static dogInfo() {
        console.log("This is Dog class. having a static method.")
    }
}

const d1 = new Dog("tommy", "shefferd", "red")
// d1.bark()
// d1.walk()
// Dog.dogInfo()



const giver = new Promise((resolve, reject) => {
    if (true) {
        resolve("Worked")
    }
    else {
        reject("Not worked")
    }
})

giver.then((res) => {
    console.log(`Promise successful -> ${res}`)
})