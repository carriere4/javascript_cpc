var x = 0;
while(x<6){
  x++;
}
document.write(x);


function bake(degrees) {
  var message;

  if (degrees > 500) {
    message = "i'm not a nuclear reactor";
  } else if (degrees < 100) {
    message = "i'm not a refrigerator";
  } else {
    message = "that is a very comfortable temp for me";
    setMode("bake");
    setTemp(degrees);

  }
  return message;
}

function clunk(times) {
  var num = times;
  while (num > 0) {
    display('clunk');
    num = num - 1;
  }
}

function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display('clank');
  }else if (size == 1){
    display('thunk');
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky)
  }

  }
function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
  }
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
