const app = require("../app");
const db = require("../db/db");
require("dotenv").config();

const PORT = process.env.PORT || 3030;

const testDB = async () => {
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        throw new Error(error);
    }
};

(async () => {
    try {
        const isDbConnection = await testDB();
        if (isDbConnection) {
            app.listen(PORT, () => {
                console.log(`Server running on port: ${PORT}`);
            });
        }
    } catch (err) {
        console.error("Unable to connect to the database:", err.message);
    }
})();

process.on("SIGINT", () => {
    db.close();
});
