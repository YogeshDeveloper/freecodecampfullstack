// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // Your Code Here
  
   if (myObj.hasOwnProperty(checkProp))
   {
        // return myObj(checkProp);
        console.log(myObj(checkProp));

   }
   else{
    //    return "Change Me!";
    console.log("Change Me!");
   }
  
   
  }
  
  // Test your code by modifying these values
  checkObj("pet");
  