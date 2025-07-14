import { sessionOneService } from './service/sessionOneService';
import * as readline from 'readline';

const sessionOne_Service = new sessionOneService();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt() {
    rl.question('Please select mode (1 or 2 or 3), or type "exit" to quit: ', (answer) => {
        if (answer === '1') {
            sessionOne_Service.printResultHomework1();
        } 
        else if (answer === '2') {
            sessionOne_Service.printResultHomework2();
        }
        else if (answer === '3') {
            sessionOne_Service.testCasesHomework3();
        }
        else if (answer.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        else {
            console.log('Invalid mode selected.');
        }
        prompt(); // ask again
    });
}

prompt();
