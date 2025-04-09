const fs = require('fs');
const readline = require('readline');

function readFile() {
    fs.readFile('name.txt', 'utf8', (error, data) => {
        if (error) {
            console.log("Error while reading file:", error);
        } else {
            console.log("File Content:\n", data);
        }
    })
    mainmenu();
}

function writeFile(input) {
    fs.writeFile('name.txt', input, (error) => {
        if (error) {
            console.log("Error while writing file:", error);
        } else {
            console.log("File written successfully");
            readFile(); 
        }
    })
    mainmenu();
}

function appendfile(input) {
    fs.appendFile('name.txt', input, (error) => {
        if (error) {
            console.log("Error while appending file:", error);
        } else {
            console.log("File appended successfully");
            readFile(); 
        }
    })
    mainmenu();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainmenu() {
    rl.question('1. Read File\n2. Write File\n3. Append File\nChoose an option: ', (choice) => {
        switch(choice){
            case '1':
                readFile();
                break;
            case '2':
                rl.question("Enter the content to write into the file: ", (input) => {
                    writeFile(input);
                });
                break;
            case '3':
                rl.question("Enter the content to append to the file: ", (input) => {
                    appendfile(input);
                });
                break;
            default:
                console.log("Invalid choice");
                rl.close();
                break;
        }
    });
}

mainmenu();