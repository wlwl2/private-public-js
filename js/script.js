// parentFunction Class
function parentFunctionOrClass() {
   this.childFunctionOrObject = function () {
     return "I'm a Child Function or Object!!!";
   };
};

// create child object:
var child = new parentFunctionOrClass();
var childTest = child.childFunctionOrObject();
document.write(childTest);
