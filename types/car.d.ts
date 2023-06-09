export {};

declare global {
    class Car {
        topSpeed: number;

        constructor(topSpeed: number) {
            this.topSpeed = topSpeed;
        }

        info: { mpg: number };

        /**
         * Tells the car to accelerate.
         */
        accellerate(): void;
    }
}
