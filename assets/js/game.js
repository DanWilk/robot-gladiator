var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
 //   console.log(enemyNames[i]);
 //   console.log(i);
 //   console.log(enemyNames[i] + " is at " + i + " index");
//}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
        
    while(enemyHealth > 0 && playerHealth > 0) {
        window.alert("welcome to Robot Gladiators!");

            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or SKIP to choose.");

            // If the player chooses to fight, then fight
            if (promptFight === 'fight' || promptFight === 'FIGHT') {

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;

            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaning."
            );
        
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack
            // Log a resulting message to the console so we know that it worked. 
            console.log(
                enemyName + " attacked " + playerName + ". " +  playerName + " now has " + playerHealth + " health remaining."
            );
   
            // check the player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        // if player choses to skip
        } else if (promptFight === 'skip' || promptFight === 'SKIP') {

            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                // subtract money from the playerMoney
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } 
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
    

};



for(var i = 0; i < enemyNames.length; i++) {
    var pickedenemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}
//Game States
//"WIN" - Player robot has defeated all enemy robots


// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

