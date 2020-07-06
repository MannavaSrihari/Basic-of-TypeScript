let userInput : unknown;
userInput = 10;
userInput = 'Max';
let userName : string;
if(typeof userInput === 'string') { 
    userName = userInput;
}

function  genrateError (message:string, code: number):never { 
    throw { message: message, error: code};
}

genrateError('An Exception occured!!',500);