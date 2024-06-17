var newCode = "", pattern = "", countLocal=0;

function entry(value, pattern) {
    countLocal ++;
    if(pattern.length == 0){
        console.log("First- Count: "+ countLocal+ " Pattern: "+pattern.length);
        addNewCode(value);
        countLocal = 0;
    }
    else{
        console.log("Other- Count: "+ countLocal+ " Pattern: "+pattern.length);
        if(countLocal>pattern.length){
                console.log("To Add");
                addNewCode(value);
                countLocal = 0;
            }
        else{
            console.log("To validate");
            for(var i=1; i<=pattern.length;i++){
                if(pattern.length == i){
                    console.log("End of pattern: " +pattern.length+" and i: "+ i);
                    code(value);
                    validateEntry(i,value);
                }
                else{
                    console.log("Not end of pattern: " +pattern.length+" and i: "+ i);
                    code(value);
                    validateEntry(i,value);
                }
            }
        }
    }
    
}

function code(value){
    switch (value) {
        case "ArrowUp":
            case "green" : 
            var newCode = 'G';
          break;
        case "ArrowDown":
            case "blue" : 
            var newCode = 'B';
          break;
        case "ArrowLeft":
            case "red" :   
            var newCode = 'R';
          break;
        case "ArrowRight":
            case "yellow" :  
            var newCode = 'Y';
          break;
        default :
          break;
    }
    makeSound(newCode);
    return newCode;
}

function addNewCode(value){
    switch (value) {
        case "ArrowUp":
            case "green" : 
            var newCode = 'G';
          break;
        case "ArrowDown":
            case "blue" : 
            var newCode = 'B';
          break;
        case "ArrowLeft":
            case "red" :   
            var newCode = 'R';
          break;
        case "ArrowRight":
            case "yellow" :  
            var newCode = 'Y';
          break;
        default :
          break;
    }
    makeSound(newCode);
    newPattern(newCode)
    return newCode;
}

function validateEntry(i, value){
    console.log(value);
    switch (value) {
        case "ArrowUp":
            case "green" : 
            var newCode = 'G';
          break;
        case "ArrowDown":
            case "blue" : 
            var newCode = 'B';
          break;
        case "ArrowLeft":
            case "red" :   
            var newCode = 'R';
          break;
        case "ArrowRight":
            case "yellow" :  
            var newCode = 'Y';
          break;
        default :
          break;
    }

    if(pattern[i-1] == newCode){
        console.log("Correct answer: "+ pattern[i-1] + " = " + newCode);
    }
    else{
        var audio = new Audio('sounds/wrong.mp3');
        alert("reload");
        //location.reload();
    }

}

function makeSound(newCode){
    switch (newCode) {
        case 'G':
            var audio = new Audio('sounds/green.mp3');
          break;
        case 'B':
            var audio = new Audio('sounds/blue.mp3');
          break;
        case 'R':
            var audio = new Audio('sounds/red.mp3');
          break;
        case 'Y':
            var audio = new Audio('sounds/yellow.mp3');
          break;
        default : var audio = new Audio('sounds/wrong.mp3');
          break;
    }
    audio.play();
}

function buttonClicked(value){
    entry(value, pattern);
}

document.addEventListener("keydown", function(event){
    entry(event.key, pattern);
});


function newPattern(code){
    console.log('Pattern:'+ pattern +' and code: '+code);
    pattern += code;
    console.log('Pattern:'+ pattern);
 return pattern;
}