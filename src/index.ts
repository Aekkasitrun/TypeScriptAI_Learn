import { sessionOneService } from './service/sessionOneService';
import * as readline from 'readline';

const sessionOne_Service = new sessionOneService();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    await new Promise<void>((resolve) => {
        rl.question('Please select mode (1 or 2): ', (answer) => {
            if (answer === '1') {
                sessionOne_Service.printResultHomework1();
            } else if (answer === '2') {
                sessionOne_Service.printResultHomework2();
            } else {
                console.log('Invalid mode selected.');
            }
            rl.close();
            resolve();
        });
    });  
})();

// sessionOne_Service.printResultHomework1(); // Print all results
// sessionOne_Service.printResultHomework2(); // Print all results for Exercise 2
