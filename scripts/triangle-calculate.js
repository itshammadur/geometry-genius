// console.log('connected');

/**
 * Objective: get base and height of a Triangle. Calculate the area by using the provided formula, and then display the area.
 *   step-1:- get the base value of the triangle 
 *   step-2:- added ID in the base input field 
 *   step-3:- Use getElementById to access the input field
 *   step-4:- get value from the input field.( value is string now )
 *   step-5:- Use parseFloat to convert from the string value to Number value  
 
 */

function calculateTriangleArea (){
// get base triangle value------
    const triangleBaseInput = document.getElementById('triangle-base')
    // console.log(triangleBaseInput);
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
      console.log(base)

    const triangleHeightInput = document.getElementById('triangle-height')
    //console.log(triangleHeightInput);
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
      console.log(height);

    // console.log area------
      const area = .5 * base * height
      console.log('area of triangle is',  area);

    // display triangle area----
    const triangleAreaSpan = document.getElementById('triangle-area');
     triangleAreaSpan.innerText = area;   
 

}