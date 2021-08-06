let data: number | string = 42; //can be string or number
let data1: any = 23; //can be any type.

data = '42';

export interface Duck {
    name: string;
    numLegs: number;
    makeSound?: (sound: string) => void; //optional
}

const duck1 : Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound : (sound: any) => console.log(sound)
}


const duck2 : Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound : (sound: any) => console.log(sound)
}

duck1.makeSound!('quack'); //overrides optional

export const ducks = [duck1, duck2]