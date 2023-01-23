// Copyright (c) 2022 Julienka Sohal All rights reserved
//
// Created by: Julienka Sohal
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment5-JS/sw.js", {
    scope: "/ICS2O-Assignment5-JS/",
  })
}

//process
function myButtonClicked() {
  let n = document.getElementById("typeNumber").value
  let first = 0; 
  let second = 1; 
  let next = 1;
 
  if(n <= 0){
    document.getElementById("fibonacciAns").innerHTML = "Invalid Input"
  }
  else{
    console.log("FIBONACCI SERIES");
    console.log(next);
    
    for(let i = 1; i < n; i++){
    next = first + second;
    console.log(next);
    first = second; 
    second = next; 
    }
    document.getElementById("fibonacciAns").innerHTML = next
  }
}
