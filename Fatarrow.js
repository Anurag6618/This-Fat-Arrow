let x=function(){
    this.val=1
    setTimeout(()=>{
        this.val++;
        console.log(this.val)
    },1 )

};

let xx=new x()

//
class Student {
    static count=0;
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }

    static CounStudent(){
        return (Student.count++);
    }
    Placementage(minAge){
        return (minmarks)=>{
            if (this.marks>minmarks &&this.age>minAge){
                console.log('Ready')
            }
            else{
                console.log('Not ready')
            }
        }
    }


}



const Student1=new Student('Kirti','23','56')
const Student2=new Student('Ankit','18','32')
const Student3=new Student('Shyam','56','67')

Student1.Placementage(25)(40);
Student2.Placementage(25)(50);
Student3.Placementage(25)(50);


