
/* 
class=(ES6 feature) provides a more structred and cleaner 
        way to works with object.
*/




class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

   displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price+(this.price*salesTax);
    }
}
const salesTax=0.05;
const product1= new Product("Shirt",19.9);
const product2=new Product("underwear",100.0);
product2.displayProduct();

const total=product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);