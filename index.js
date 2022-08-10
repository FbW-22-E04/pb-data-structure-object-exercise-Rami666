//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings

//write your code here

const favRecipe = {
title: "Lasagna",
serves: 3,
ingredients: ["pasta", "meat", "tomatos", "cheese", "milk"]

} 



console.log(favRecipe.title);
console.log(`serves: ${favRecipe.serves}`)

for(let i = 0; i < favRecipe.ingredients.length; i++){
    console.log(favRecipe.ingredients[i]);
  }



console.log("--------------------------");

//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.



//write your code here

const books = [
    {
        title: "into the wild",
        author: "Jon Krakauer",
        alreadyRead: true,
        
    },
    {
        title: "will",
        author: "Will Smith",
        alreadyRead: false,
    },
    {
        title: "The Subtle Art of not giving a F",
        author: "Mark Manson",
        alreadyRead: true,
    }
]


for (i = 2; i < books.length; i++) {
    console.log(`"${books[0].title} by ${books[0].author}". `);
}

for (i = 2; i < books.length; i++) {
    console.log(`"${books[1].title} by ${books[1].author}". `);
}

for (i = 2; i < books.length; i++) {
    console.log(`"${books[2].title} by ${books[2].author}". `);
}

console.log("-----------------------");


if (books[0].alreadyRead === true) {
    console.log(`You already read "${books[0].title} by ${books[0].alreadyRead}"`);
}else {
    console.log(`You still need to read ${books[0].title} by ${books[0].alreadyRead}"`);
};


if (books[1].alreadyRead === true) {
    console.log(`You already read "${books[1].title} by ${books[1].alreadyRead}"`);
}else {
    console.log(`You still need to read ${books[1].title} by ${books[1].alreadyRead}"`);
};


if (books[2].alreadyRead === true) {
    console.log(`You already read "${books[2].title} by ${books[2].alreadyRead}"`);
}else {
    console.log(`You still need to read ${books[2].title} by ${books[2].alreadyRead}"`);
};








console.log("----------------------------");







