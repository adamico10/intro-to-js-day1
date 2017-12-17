// Exercise 1
var userAge = prompt('Please state your age');

if (userAge < 18) {
    alert('You cannot have a drink');
}
else {
    alert('DRINK UP!');
}


// Exercise 2
var citizenship = prompt('State your nationality!').toLowerCase();

if (citizenship === 'israeli' || citizenship === 'israel'){
    alert('You can pass');
}
else {
    alert('YOU CANNOT PASS');
}


// Exercise 3
var userGender = prompt('Are you a Male or a Female?').toLowerCase();
var drinkAge = prompt('What is your age?');


if (userGender === 'female' && drinkAge > 18){
    alert('Ladies Night! Drink for FREE!');
}
else if (userGender === 'male' && drinkAge > 18){
    alert('You can drink sir, but you have to pay');
}
else if (drinkAge < 18){
    alert('You will have to wait until you are legit');
}
else {
    alert('Wrong Input');
}

// FIZZ BUZZ

for (var i = 0; i <= 20; i++)
{
    if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
    }
    else if (i % 5 === 0){
        console.log('fizz');
    }
    else if (i % 3 === 0){
        console.log('buzz');
    }
    else {
        console.log(i);
    }
}

