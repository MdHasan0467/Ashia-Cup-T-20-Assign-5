
// Disable the select button 

function selectBtnDisable(element){
    document.getElementById(document.querySelector(element).id).disabled = true
}
function findPlayerNumber(playerNumber){
    if (playerNumber <=5 ){
        return playerNumber;
    }
    else{
        return 5;   
    }
}

// Counting and placing element into selected player list
let count = 0;
function myFunction(element, playerName, button) {
    switch(count){
        case 0:
            let firstSelectButton = document.createElement(element);
            let firstSelectButtonValue = document.createTextNode(playerName);
            firstSelectButton.appendChild(firstSelectButtonValue);
            document.getElementById("myList").appendChild(firstSelectButton);
            selectBtnDisable(button);
            count += 1 ;
            break;
        case 1:
            let secondSelectButton = document.createElement(element);
            let secondSelectButtonValue = document.createTextNode(playerName);
            secondSelectButton.appendChild(secondSelectButtonValue);
            document.getElementById("myList").appendChild(secondSelectButton);
            selectBtnDisable(button);
            count += 1;
            break ;
        case 2:
            let thirdSelectButton  = document.createElement(element);
            let thirdSelectButtonValue = document.createTextNode(playerName);
            thirdSelectButton.appendChild(thirdSelectButtonValue);
            document.getElementById("myList").appendChild(thirdSelectButton);
            selectBtnDisable(button);
            count += 1;
            break ;
        case 3:
            let fourthSelectButton = document.createElement(element);
            let fourthSelectButtonValue = document.createTextNode(playerName);
            fourthSelectButton.appendChild(fourthSelectButtonValue);
            document.getElementById("myList").appendChild(fourthSelectButton);
            selectBtnDisable(button);
            count += 1;
            break ;
        case 4:
            let fifthSelectButton = document.createElement(element);
            let fifthSelectButtonValue = document.createTextNode(playerName);
            fifthSelectButton.appendChild(fifthSelectButtonValue);
            document.getElementById("myList").appendChild(fifthSelectButton);
            selectBtnDisable(button);
            count += 1 ;
            break;
        default:
            alert('Your Limit Is Cross.Please Go Back');
            break;
       
    }

    document.getElementById('playerNumber').value = findPlayerNumber(count); 
}

// Calculate the player budget

function calculatePlayersBudget(){
    const person = parseFloat(document.getElementById('playerNumber').value);
    const payment = parseFloat(document.getElementById('perPlayerCost').value);

    if(person >= 0 && payment >= 0){
            let Cost = person * payment;
        if(isNaN(Cost)){
            alert('Please Input The Valid Number');
            return '';
        }
        else{
            return Cost;
        } 
    }
    else{

            let Cost = person * payment;
        if(isNaN(Cost)){
            alert('Please Input The Valid Number');
            return '';
        }
        else{
            alert('Please Input The Number Gratter Than "0" And Avoid Negative Number');
        }     
    }
}

// Calculate the manager and coach budget 

function totalCalculation(){
    const playersCost = calculatePlayersBudget();
    const managerCost = parseFloat(document.getElementById('mangerExpense').value) ;
    const coachCost = parseFloat(document.getElementById('coachExpense').value);

    if(managerCost >= 0 && coachCost >=0 ){

        let totalCost = playersCost + managerCost + coachCost;

        if(isNaN(totalCost)){
            alert('Please Input Must Be Number');
            return ''
        }
        else{
            return totalCost;
        }
    }
    else{

            let totalCost = playersCost + managerCost + coachCost;

        if(isNaN(totalCost)){
            alert('Please Input A Valid Number');
            return '';
        }
        else{
            alert('Please Input The Number Gratter Than "0" And Avoid Negative Number');
        }
    } 
}

// Calculate the total cost

document.getElementById('totalCalculate').addEventListener('click',function(){
    const result = document.getElementById('totalCost');
    result.innerText = totalCalculation();
})
 
// Find the result of player expense

const calcButton =  document.getElementById('calculate');

    calcButton.addEventListener('click', function(){
    const result = document.getElementById('playerExpenses');
    result.innerText = calculatePlayersBudget();
})