//Data Types and Variables

var name="Engin Demirog"; //string
var num=10; //number
var isItTrue=true; //boolean

//array
var students =["Engin Demirog","Salih Demirog","Tolga Ayas"] 
console.log(students[1]) //array 1.index
students[2]="Tarık Hayat" //array index değeri değiştirme
students.length //array uzunluğu

//array(sonuna) yeni eleman ekleme
students.push("Ahmet")
students[5]="Derin Demirog"

console.log(students)

//object
var people={firstName:"Engin", lastName:"Demirog",city:"Ankara"} //object={property(key):value}
console.log(people.firstName)

//loose typing: tipi belirtilmeyen bir değişken javascriptte farklı bir değişken türüne dönüştürülebilir
var num=10;
num="Ten";
console.log(num)

//dynamic typing
var customer={id:1,contactName:"Engin Demirog"}
customer.city="Ankara" //objeye sonradan bir özellik daha ekleme

