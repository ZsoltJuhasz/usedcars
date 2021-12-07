/*
 * File: car.ts
 * Authors: Juhász Zsolt
 * Copyright: 2021, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2021-12-07
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */
var Car = /** @class */ (function () {
    function Car(id, plate, color, brand, year, capacity, fuel, price, sold) {
        this.id = id;
        this.plate = plate;
        this.color = color;
        this.brand = brand;
        this.year = year;
        this.capacity = capacity;
        this.fuel = fuel;
        this.price = price;
        this.sold = sold;
    }
    return Car;
}());
