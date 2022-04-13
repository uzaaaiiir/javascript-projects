"use strict";

// Input Data by User
totalBill = document.querySelector("#bill");
tipPercent = document.querySelector("#tip");
numberOfPeople = document.querySelector("#people");

// Element to Output
total = document.querySelector(".total");
tip = document.querySelector(".tip");

// Calculate Button
calculateBtn = document.querySelector(".btn");

// Calculate Total Tip
const calculateTip = function () {
    return (tipPercent.value / 100) * totalBill.value;
};

// Calculate Total Bill Per Person
const calculateTotalPerPerson = function () {
    const tipAmount = calculateTip();
    return (tipAmount + totalBill.value) / numberOfPeople.value;
};
