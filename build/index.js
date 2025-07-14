"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const sessionOneService_1 = require("./service/sessionOneService");
const readline = __importStar(require("readline"));
const sessionOne_Service = new sessionOneService_1.sessionOneService();
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
