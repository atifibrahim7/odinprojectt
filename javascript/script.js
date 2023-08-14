
function getComputerChoice()
{
    var random_choice = Math.floor(Math.random() * 3);
    if(random_choice == 0 )
    {
        return "rock" ;
    }
    else if(random_choice == 1)
    {
        return "paper" ;
    }
    else
    {
        return "scissors"
    }
}

function playRound(playerSelection,computerSelection)
{
    var playerSelectionButInLower = playerSelection.toLowerCase();
    var computerSelectionButInLower = computerSelection.toLowerCase(); 
    if(playerSelectionButInLower == computerSelectionButInLower)
    {
        return "It's a tie";
    }
    else if((playerSelectionButInLower == "rock" && computerSelectionButInLower == "paper") || (playerSelectionButInLower == "paper" && computerSelectionButInLower == "scissors") || (playerSelectionButInLower == "scissors" && computerSelectionButInLower == "rock") )
    {
            return "You Lose! COmputer +1";
    }
    else {
        return "You Win! Player +1";
    }

}
function game()
{
    for(var i = 0 ; i < 5 ; i++ )
    {
        var playerSelection = prompt("Enter your choice");
        var computerSelection = getComputerChoice();
        console.log("Computer Choice : " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();