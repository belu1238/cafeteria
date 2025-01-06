import app from "./app.js";
import { connetDb } from "./db.js";

connetDb();

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});