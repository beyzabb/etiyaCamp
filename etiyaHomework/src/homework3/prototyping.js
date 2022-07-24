function Customer(first,last,city,country,age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.age = age;
    this.country = country;
}

var someCustomer = new Customer("Beyza","Başaran","Ankara","Turkey",23);

Customer.prototype.eMail = "b@gmail.com";
Customer.prototype.fullName = function(){
    return this.first + " " + this.last;
};

console.log(someCustomer.city);
console.log(someCustomer.eMail);
console.log(someCustomer.fullName());