// class ToyotaCar{
//     constructor(){
//         console.log("Hlo,I am constructor !!")
//     }
//     start(){
//         console.log("start car ")
//     }
//     stop(){
//         console.log("stop car")
//     }
//     setBrand(brand){
//         this.BrandName = brand;
//         console.log(brand)
//     }
// };

// let Fortuner = new ToyotaCar();
// Fortuner.start();
// Fortuner.stop();
// Fortuner.setBrand("forntuner")


// class parent{
//     Hlo(){
//     console.log("Hlo")
//     }
// }
// class child extends parent {}

// let obj = new parent();

// obj.Hlo();

let DATA = "secret information"

class user{
    constructor(Name,Email){
        this.Name=Name;
        this.Email=Email;
        console.log(Name,Email);
    }
    viewData(){
        console.log("data = ",DATA);
    }
}
class Admin extends user{
    constructor(Name,Email){
        super(Name,Email)
    }
    editData(){
        DATA= "some add new data"
    }
}

let student1 = new user("khushyal","khushyal9560@gmail.com");
let student2 = new user("karitkey","karitkey9785@gmail.com");

student1.viewData();
student1.viewData();

let obj= new Admin("Admin","Admin@123gmail.com")
obj.viewData();
obj.editData();