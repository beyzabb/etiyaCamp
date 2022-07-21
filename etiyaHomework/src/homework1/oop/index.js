class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}
//prototyping
let customer=new Customer(1,"1234")
customer.name="Murat Ata";
console.log(customer.name)
console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super()
        this.firstName=firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super()
        this.companyName=companyName
    }
}