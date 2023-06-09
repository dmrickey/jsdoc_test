import '../types/head.d.ts';

const goFast = (/** @type {Car} */ car) => {
    car.topSpeed = + 10;
    car.accellerate();
    console.log('mph:', car.info.mpg);
    console.log(car.info.doesNotExist);
    car.stop();
}

goFast(new Car(30));