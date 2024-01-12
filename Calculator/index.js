let curDisplay =  '';
document.querySelector('#display').value = curDisplay;

let buttons = document.querySelectorAll('input[type="button"]');
console.log(buttons);
for(button of buttons) {
    button.addEventListener('click', function(event) {
        let value = event.target.value;
        console.log(value);
        if(value === '='){
            curDisplay = eval(curDisplay);
        }
        else if(value === 'AC'){
            curDisplay = '0';
        }
        else if(value === 'del'){
            curDisplay = curDisplay.slice(0,-1);
        }
        else{
            if(curDisplay === '0')
            curDisplay = value
            else{
                curDisplay += value;
            }
        }
        
    document.querySelector('#display').value = curDisplay;
});
}


 
 