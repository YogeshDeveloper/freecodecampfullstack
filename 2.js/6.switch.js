function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
  
    switch (val){
      case "a":
      case "b":
      case "c":
            answer="Low";
            break;
      case "d":
      case "e":
      case "f":
             answer="Mid";
             break;
      case "g":
      case "h":
      case "i":
             answer="High";
                    
                      
    }
  
    // Only change code above this line
    return answer;
  }
  
  // Change this value to test
  sequentialSizes(1);
  