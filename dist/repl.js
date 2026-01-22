import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands.js";
const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex  > ",
});
export function cleanInput(input) {
    return input.trim().split("  ");
}
export function startREPL() {
    console.log("Welcome to the Pokedex!");
    rl.prompt();
    rl.on("line", (input) => {
        const commands = cleanInput(input);
        if (commands.length === 0) {
            rl.prompt();
        }
        else {
            const command = commands[0];
            const commandMap = getCommands();
            if (commandMap[command]) {
                commandMap[command].callback(commandMap);
            }
            else {
                console.log(`Unknown command`);
            }
            rl.prompt();
        }
    });
}
