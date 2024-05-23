// TODO: Include packages needed for this application

const  inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const {writeFile} = require("fs").promises
// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: 'title',
        message: "what is the title of your project?"
    },

    {
        type: `input`,
        name: 'description',
        message: " provide a brief decription of project?"
    },
    
     {
         type: `input`,
         name: 'use',
      message: " what is the intented use for this project?"
     },
    
     {
        type: `input`,
        name: 'install',
        message: " how do you install your application ?"
    },
    
    

    {
        type: `input`,
        name: 'contributions',
        message: "who collabarated with you on this project?"
    },

    {
        type: `input`,
        name: 'github',
        message: "what is your github username?"
    },

    {
        type: `input`,
        name: 'email',
        message: "what is the title of your email?"
    },
    
    {
        type: `input`,
        name: 'tests ',
        message: "How do you test your aplication ?"
    },

    
    {
        type: `list`,
        message: 'What license are you using ?',
        choices: ["Mit", "Aphche", "IBM","None"],
        name: "license",
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init () {
    const response = await inquirer.prompt(questions)    
    const readme = generateMarkdown(response)
    await writeFile ("README.md",readme)
    console.log("job done");
}

// Function call to initialize app
init();
