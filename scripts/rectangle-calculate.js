// console.log('connected');

function calculateRectangleArea(){
  // console.log('calculae rect area')

  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);

  console.log(width);



  const rectanglelLengthInput = document.getElementById('rectangle-length');
  const rectanglelLengthText = rectanglelLengthInput.value;
  const length = parseFloat(rectanglelLengthText);
  console.log(length);


  const rectangleArea = width * length;
  console.log('Area of Rectangle:', rectangleArea);

  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = rectangleArea;
}

