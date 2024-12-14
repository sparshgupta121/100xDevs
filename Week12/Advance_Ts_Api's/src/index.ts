interface User{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

function sumOfAge(user1:User, user2:User){

    return user1.age+user2.age;

}

type UpdateProps = Pick<User,"name"|"age"|"password">

type UpdatePropsOptional = Partial<UpdateProps>

function Updateuser(Updationprops:UpdatePropsOptional){
    //db call
}

type Person= {
    name:string,
    age:number
}

const Me:Person={
    name:"Sparsh",
    age:21

}

Me.age=23 // can be done but if want to prevent this then can use read only


type People= {
    readonly name:string,
    readonly age:number
}
//one way add readonly with keys
//otherway add readonly to complete object

const Brother:Readonly<People>={
    name:"Aman",
    age:25
}

type Customer={
    id:string,
    name:string

}

type Customers = {
    [key:string]:Customer
}

//both the customers and customerzz are same

type Customerzzz = {
    [key:string]:{
        id:string,
        name:string
    
    }
}

const Customer1={
    "rsfg@12":{
        id:"1",
        name:"Sparsh"
    }
}

//records and map

type customerx = Record<string,Customer>

const user= new Map();
user.set( "rsfg@12",{id:"1",name:"Sparsh"})

user.get("rsfg@12")
