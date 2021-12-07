/*
 * File: app.ts
 * Authors: Juhász Zsolt
 * Copyright: 2021, Juhász Zsolt
 * Group: Szoft II/N
 * Date: 2021-12-07
 * Github: https://github.com/ZsoltJuhasz
 * Licenc: GNU GPL
 */
var url = 'http://localhost:3000/cars';
var carPlateList = document.querySelector('#carPlateList');
var baseDatas = function () {
    console.log(" Juhász Zsolt \n 2021-12-07 \n SZOFT2N ");
};
var loadCars = function () {
    var carList = [];
    fetch(url, { method: "GET" })
        .then(function (res) { return res.text(); })
        .then(function (result) {
        JSON.parse(result).map(function (cars) {
            return carList.push(new Car(cars.id, cars.plate, cars.color, cars.brand, cars.year, cars.capacity, cars.fuel, cars.price, cars.sold));
        });
        carList.map(function (car) {
            var li = document.createElement("li");
            li.innerHTML = car.plate;
            li.setAttribute("class", "list-group-item");
            carPlateList.append(li);
        });
    });
};
baseDatas();
loadCars();
