//saf javascript type safe bir dil değildir
//değişkenlerin tipleri ve değerleri değiştirilebilir
var sayi1=10;
sayi1="Beyza";
console.log(sayi1)

//aşağıdaki kod satırı duplicate hatası verecektir
// let sayi2=15;
// let sayi2= "Beyza";
// console.log(sayi2)

let student={id:1,name:"Beyza"}; //object tanımlaması bu şekilde yapılır
console.log(student);

//aşağıdaki fonksiyonun amacı öğrenci bilgilerini kaydederek console'a yazdırmaktır
function save(ogrenci){ //fonksiyon tanımlaması bu şekilde yapılır
    console.log(ogrenci)
}
save(15); //fonksiyon bu şekilde çağırılır

let students=["Merve","Beyza","Büşra"]; //array(dizi) bu şekilde tanımlanır
console.log(students);

let students2=[student,{id:2,name:"Büşra"}];
console.log(students2);


//rest: Rest Parametresi, fonksiyonlara sınır sayısı olmadan parametre 
//geçmemize olanak verir ve bizim isteğimiz harici kalan tüm öğeleri bir dizide toplar.
let showProducts=function (id,...products){
    console.log(id)
    console.log(products)
}
showProducts(1,"Elma","Armut","Karpuz")

//spread: String, Array veya Object değişmezlerini genişletmemize yardımcı olur. 
//Kendisine gönderilen veriyi ayırır.
let points=[1,15,24,3,65,98]
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG")

//destructuring
let populations=[1000,2000,3000]
let [small,medium,high]=populations;
console.log(small)

let category={id:1,name:"İçecek"};
console.log(category.id);
console.log(category["name"])
