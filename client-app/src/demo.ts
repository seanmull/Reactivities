/*let data = 42; //isloation error
//data : type (number | string) example

data = "42"; //cannot change type*/

export interface Duck{
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void;  //you can make it optional by adding "?"
}


const duck1: Duck = {
    name : "huey",
    numLegs: 2,
    makeSound: ((sound : any) => console.log(sound))
}


const duck2: Duck = {
    name : "duey",
    numLegs: 2,
    makeSound: ((sound : any) => console.log(sound))
}

duck1.makeSound('quack');  //when you make it optional you have to override this by adding "!"

export const ducks = [duck1, duck2]