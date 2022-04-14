"use strict";

// Element to Output
const total = document.querySelector(".total");
const tip = document.querySelector(".tip");

// Calculate Button
const form = document.querySelector(".input-section");
console.log(form);
const calculateBtn = document.querySelector(".input-section");
// const submitBtn = document.getElementById("submit");

// Input Data by User
let totalBill = form.elements[0];
let tipPercent = form.elements[1];
let numberOfPeople = form.elements[2];
console.log(totalBill);
console.log(tipPercent);
// const totalBill = document.querySelector("#bill");
// const tipPercent = document.querySelector("#tip");
// const numberOfPeople = document.querySelector("#people");

// Calculate Total Tip
const calculateTip = function () {
    return (Number(tipPercent.value) / 100) * Number(totalBill.value);
};

// Calculate Total Bill Per Person
const calculateTotalPerPerson = function () {
    const tipAmount = calculateTip();
    return (tipAmount + Number(totalBill.value)) / Number(numberOfPeople.value);
};

const output = function () {
    console.log(totalBill.value, tipPercent.value);
    const tipTotal = calculateTip();
    console.log(tipTotal);
    const totalAmount = calculateTotalPerPerson();
    console.log(totalAmount);
    total.textContent = totalAmount;
    tip.textContent = tipTotal;
};

calculateBtn.addEventListener("click", output);
// submitBtn.addEventListener("click", output);
