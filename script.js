// 1. Use a For Loop to count from 1 to 7 and have each number display in the console/terminal (You will need a console log for this)
        /* EXAMPLE
            (Counts from 1 to 5)
            for (i = 1; i < 6; i++){
                console.log(i);
            }
        */
for (i=1; i<8; i++){
    console.log(i);
}
/* 
RESULT IN TERMINAL:
1
2
3
4
5
6
7
*/

// 2. Use a For Loop to count from 5 to 25 by 4 (Ex: 5, 9, 13, etc.) and have each number display in the console/terminal (You will need a console log for this)
         /* EXAMPLE
            (Counts from 0 to 10 by 2 (AKA Even Numbers))
            for (i = 0; i <= 10; i += 2){
                console.log(i);
            }
        */
for (i = 5; i <= 25; i +=4){
    console.log(i);
}
/* 
RESULT IN TERMINAL:
5
9
13
17
21
25
*/

// 3a. Create a const variable named wizards and set the value of the variable to the following array items "Harry Potter", "Hermione Granger", and "Ron Weasley"
const wizards =[
    "Harry Potter", 
    "Hermione Granger",
    "Ron Weasley"
];

// 3b. Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)
           /* EXAMPLE (Loops through an Array)
                const topics = [
                    `Terminal`,
                    `Git`,
                    `Bootstrap`,
                    `CSS`,
                    `HTML`
                ];
                for (i = 0; i < topics.length; i++){
                    console.log(topics[i]);
                }
            */
// ! Wrong: Wanted forLoop
    /* for (i = 0; i < wizards.length; i++){
    console.log(wizards[i]);
    };
    */
  for (nom of wizards) {
    console.log(nom);
  };

/*! Jamie assisted: 
"When considering a For Of Loop, think of the "for" as describing all, the new variable then of as calling up the items in the array"
*/

/* 
RESULT IN TERMINAL:
Harry Potter
Hermione Granger
Ron Weasley
*/

// 4a. Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).
let harryPotterMovies = 0

// 4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.
                /* Example (Counts from 1 to 3)
                let number = 1;
                while (number <= 3){
                console.log(number);
                number++;
                }
                */
while (harryPotterMovies <=8) {
    console.log(harryPotterMovies);
    harryPotterMovies++;
}

/* 
RESULT IN TERMINAL:
0
1
2
3
4
5
6
7
8
*/
// 4c. After the while loop in your file create a console log to display the value of the harryPotterMovies variable in the terminal (The value should be 8)
while (harryPotterMovies <8) {
    harryPotterMovies++;
};
console.log(harryPotterMovies);




// BONUS

//B-5a. Create a const variable named hogwartsHouses and set the value of the variable to the following array items "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin".
const hogwartsHouses = [
    "Gryffindor", 
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];

// B-5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time (You will need a console log for this).
            /* 
            EXAMPLE 1 of 2:
            (Displays `I Love Pizza!` vertically in the Terminal)
                const pizza = `I Love Pizza!`;
                for (char of pizza){
                    console.log(char);
                }
            EXAMPLE 2 of2:
            Displays the string/value at each index of the nested arrays in the pizzaToppings array each time through the Outer Loop (Loops through the Outer Loop four times and also loops through the Nested Loop three times for each loops through the Outer Loop)
                const pizzaToppings = [
                    [`Sausage`, `Bacon`, `Pepperoni`],
                    [`Mozzarella`, `Parmesan`, `Provolone`],
                    [`Pineapple`, `Broccoli`, `Basil`],
                    [`Garlic Butter`, `Ranch`, `Marinara`]
                ];
            Outer Loop
                for (category of pizzaToppings){
            Nested Loop
                    for (topping of category){
                        console.log(topping);
                    }
                }
            */
  
    for (char of hogwartsHouses) {
        for (letters of char) {
            console.log(letters);
        }
    }

    /* ADDITION: (ADDS A SEPARATOR TO EACH HOUSE)
        for (char of hogwartsHouses) {
        for (letters of char) {
            console.log(letters);
        }
        console.log(`======================`);
    }
    */

// B-6a. Create a const variable named quote and set the value of the variable to the following array items "Yer", "A", "Wizard", "Harry".
const quote = [
    "Yer", 
    "A",
    "Wizard,", 
    "Harry."
];

// B-6b. Using a loop (You can decide which one you want to use) and the QUOTE array have the message "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words when it is displayed. Also, You will need a console log for this)(HINT: You will need to create another variable)
// ! INCORRECT ANSWER: WAS NOT WHAT THEY ASKED FOR
/*
let hagridQuote = quote.join(" "); 
console.log(hagridQuote);
*/
let magicQuote = ``;
for (i=0; i=quote.length; i++) {
    magicQuote += ` ${quote[i]}`
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

/*

 DISPLAY IN TERMINAL: 
 Yer A Wizard, Harry.
 */

 // ! Note: Requested assistance: 
 /* Jamie: You were on the right track by declaring a variable, but what would happen if you created one that was an empty string to start? You could then use a for loop to modify that variable by having it go through the array of quote.
 The last hint I will give you is we will need to put template literals somewhere into play here or the ${}
 
 Austin: ...you can use a for loop to get started and for the 1st statement think about indexes (start with 0). You basically want to create a variable with an empty string and if the variable (i) is less than the total length of the quote variable, you want to add each index to that empty string.
The secret sauce is what is inside the {} after your for loop...the hint I will give is ${}
*/

// B-7. Create a For Loop that displays numbers 1 to 25 (AKA Counts from 1 to 25) in the terminal/console when the file is run. However, for numbers that are multiples of 3 (3, 6, 9, etc.) have the string value of "Expecto" display instead of the number. Also, for numbers that are multiples of 5 (5, 10, 15, etc.) have the string value of "Patronum" display instead of the number. Finally, for numbers that are multiples of 3 & 5 have the string value of "Expecto Patronum" display instead of the number.
// ! Note: Requested assistance: 
            /*
            Example 1 of 4 (Counts from 1 to 5)
                for (i = 1; i < 6; i++){
                    console.log(i);
                }
            Example 2 of 4 (Counts by 3s/5s)
            (Counts from 0 to 10 by 2 (AKA Even Numbers))
                for (i = 0; i <= 10; i += 2){
                    console.log(i);
                }
            Example 3 of 4 (Replace a string value with another)
            Example 4 of 4 (Nesting Loops)
 
 /* Jamie: ...you are on the right track with that first example of using a for loop to start off. However after that you might be over engineering a bit after that point.
I would say start with that for loop and know that inside of that you will need at least 2 things, the modulus or % and if/else if/else statements. 
There is a very common interview question called "FizzBuzz" that you might want to look into as well. That's what this question is based off of
 
Austin: You’ll need to use modulus % a bit on this. Google fizzbuzz and see what you find.*/
// ! DID NOT COMPLETE: DID NOT COMPLETE:
// ! Below is correct answer:
/*
for (i=1; i<=25; i++) {
    console.log(i);
    for (x=3; x<=25; y+5) {
        console.log(`$`)
    }
}
*/

for (i=1; i<=25; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log(`Expectro Patronum`);
    } else if ( i % 3 === 0) {
        console.log(`Expecto`);
    } else if ( i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}

// ! FIZZ_BUZZ: a common interview question with scenario similar to this question...