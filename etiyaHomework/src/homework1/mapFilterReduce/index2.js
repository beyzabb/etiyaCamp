//map: Parametre olarak aldığı fonksiyona, 
//parametre olarak aldığı listenin her elemanını sırasıyla parametre olarak gönderir.
let products=[
    {id:1,name:"Dell Bilgisayar",unitPrice:1000},
    {id:2,name:"ASUS Bilgisayar",unitPrice:8000},
    {id:3,name:"Monster Bilgisayar",unitPrice:5000},
    {id:4,name:"Casper Bilgisayar",unitPrice:3000},
    {id:5,name:"ACER Bilgisayar",unitPrice:2000},

]
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}<li>`))
console.log("<ul>")

//filter: Çağırılan fonksiyonun 
//döndürdüğü değerin true olduğu durumlara göre liste döndürür.
//yeni bir array oluşturur
let filteredProducts= products.filter(product=>product.unitPrice>3000)
console.log(filteredProducts)

//reduce: Verilen bir koşula göre diziden tek bir eleman almak için kullanılır.
let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(cartTotal)


let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(cartTotal2)