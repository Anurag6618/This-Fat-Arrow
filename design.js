//this in global scope

this.table='window table';

this.garage={ 
    table:'garage table'
}
console.log(this.garage.table)

//this inside an object
let Johnroom={
    table:'Johns table'
}

console.log(Johnroom.table);

//this inside a method

this.table1='window table';

this.garage1={ 
    table:'garage table',
    cleanTable(){
        console.log(`cleaning this ${this.table}`)
    }
}


let Johnroom1={
    table:'Johns table',
    cleanTable(){
        console.log(`cleaning this ${this.table}`)
    }
}

Johnroom1.cleanTable();
this.garage1.cleanTable();

//this inside a function-using call function
this.table2='window table';
const cleanTable2=function(soap){
    console.log(`cleaning ${this.table2} using ${soap}`)
}

this.garage2={table2: 'garage table'}
let Johnroom2={
    table2:'Johns table'
}

cleanTable2.call(this,'some soap');
cleanTable2.call(this.garage2,'some soap')
cleanTable2.call(Johnroom2,'some soap')

//this inside an inner function 

this.table3='window table';
const cleanTable3=function(soap){
    const innerfunction=(_soap)=>{
        console.log(`cleaning ${this.table3} using ${soap}`)
    }
    innerfunction(soap);
}

this.garage3={table3: 'garage table'}
let Johnroom3={
    table3:'Johns table'
}

cleanTable3.call(this,'some soap');
cleanTable3.call(this.garage3,'some soap')
cleanTable3.call(Johnroom3,'some soap')

//this inside a constructor

this.table4='window table';


this.garage4={table4: 'garage table'}

let createRoom=function name(name){
    this.table4=`${name}s table`
}

const Jillname=new createRoom('Jill');
const Jackname=new createRoom('Jack');

createRoom.prototype.cleanTable4=function(soap){
    console.log(`cleaning ${this.table4} using ${soap}`)
}

Jillname.cleanTable4('some soap');
Jackname.cleanTable4('some Soap');


//How will you design a Student class which stores the name , age , phone number,
// board marks of each student. Make a constructor to initialize the values.

class Student {
    static count=0;
    constructor(name,age,phone_no){
        this.name=`${name}`
        this.age=`${age}`
        this.phone_no=`${phone_no}`
    }

    static CounStudent(){
        return (Student.count++);
    }

    Eligibility(marks){
        if (marks>40){
            console.log(`${this.name} is eligible`)
        }

        else{
            console.log(`${this.name} is not eligible`)
        }
    }
}



const Student3=new Student('Kirti','23','2354362')
const Student4=new Student('Ankit','18','4256')
const Student5=new Student('Shyam','56','264')
console.log(Student.CounStudent())
const Student1=new Student('Anurag','25','7377198615')
console.log(Student.CounStudent())
const Student2=new Student('Rohan','45','4209')
console.log(Student.CounStudent())

