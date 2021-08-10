
var readlineSync = require('readline-sync');

var billAmount = "";
while(billAmount=="")
{
    billAmount = readlineSync.question("Pease enter the bill amount of the customer: ");
    console.log()
}

var cashGiven = -1;

while(parseInt(cashGiven)<parseInt(billAmount)){
    cashGiven = readlineSync.question("Please enter the cash given by the user: ")
    if(parseInt(cashGiven)<parseInt(billAmount)){
        console.log("Please enter a valid amount.....");
    }
}
console.log()

var notes = [1, 5, 10, 20, 100, 500, 2000];

if(billAmount==cashGiven){
  console.log("Nothing to be returned !")
}
else{
console.log("Kindly return " + (parseInt(cashGiven)- parseInt(billAmount)) + " to the customer as mentioned below:")
console.log(" ")

}


changeCalulate(parseInt(billAmount),parseInt(cashGiven));


function changeCalulate(bill, cash) 
{
    var balance = cash - bill;
    
    for (var i = notes.length - 1; i >= 0; i--) 
    {   
        var noOfNotes=0;
        while(notes[i]<=balance){
             balance-=notes[i];
             noOfNotes++;
     }
     if(noOfNotes) console.log(notes[i] + " : " + noOfNotes);   
    }
}