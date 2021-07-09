// node modules
const inquirer = require('inquirer');
const fs = require('fs');

// inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },

        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },

        {
            type: 'input',
            message: 'Instructions to be follow',
            name: 'instructions',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },

        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },

        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['The MIT license', 'The GPL License', 'ISC', 'GNU License', 'N/A'],
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },

        {
            type: 'input',
            message: 'Githun username:',
            name: 'git',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },

        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) { return true } else { return 'you need a value to continue' } },
        },
    ]
).then(({
    title,
    installation,
    instructions,
    license,
    git,
    email,
    usage
}) => {
    //template to be used
    const template = `# ${title}
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ### Instructions
    ${instructions}
    ## License
    ${license}

    # Contact
    * GitHub :${git}
    * E-mail :${email}`;
    //Function to creat our readme using fs
    createNewFile(title, template);
}
)
;
// creating our createNewFile function
function createNewFile(fileName, data) {
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}
