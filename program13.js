// javascript object


//creating constructor
function Student(name,age,sallery,phone){
    this.name = name;
    this.age = age;
    this.sallery = sallery;
    this.phone = phone;

    this.display = function(){
        document.write("Name:" +this.name +"<br/>");
        document.write("Age:" +this.age +"<br/>");
        document.write("Sallery:" +this.sallery +"<br/>");
        document.write("Phone:" +this.phone +"<br/>" +"<br/>");
    }
}

var Student1 = new Student("Nur", 22, 15000, [987456, 9455357]);
var Student2 = new Student("Jim", 22, 18000, [933456, 9245847]);
var Student3 = new Student("Sahab", 23, 159000, [917536, 9379837]);

Student1.display();
Student2.display();
Student3.display();

