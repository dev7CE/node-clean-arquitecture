import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
    main();
})();

async function main() {
    // Connect to Database
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });
    
    // Start express.js server
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
}
