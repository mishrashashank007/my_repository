// private in class
class Car{
    start(){
        this.#enginStart();
        console.log("car started")
    }
    #engineStart(){
        console.log("Engine Start");
    }
}
  
const car = new Car();
car.start()