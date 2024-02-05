import { Server } from "./presentation/server";

(() => {
    main();
})();

async function main() {
    // TODO: await Database
    // TODO: start express.js server

    console.log('console.log from main function');

    new Server().start();
}
