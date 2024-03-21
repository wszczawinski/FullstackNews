"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const { PORT, MY_SQL_DB_HOST, MY_SQL_DB_USER, MY_SQL_DB_PASSWORD, MY_SQL_DB_DATABASE, } = process.env;
const db = mysql_1.default.createConnection({
    host: MY_SQL_DB_HOST,
    user: MY_SQL_DB_USER,
    password: MY_SQL_DB_PASSWORD,
    database: MY_SQL_DB_DATABASE,
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello");
});
app.get("/posts", (req, res) => {
    const query = "SELECT * FROM posts";
    db.query(query, (err, data) => {
        if (err)
            res.json(err);
        return res.json(data);
    });
});
app.post("/posts", (req, res) => {
    const q = "INSERT INTO posts (`title`, `desc`, `cover`) VALUES (?)";
    const values = [req.body.title, req.body.desc, req.body.cover];
    db.query(q, [values], (err, data) => {
        if (err)
            res.json(err);
        return res.json(data);
    });
});
app.listen(PORT, () => {
    console.log(`🚀[server]: App running at http://localhost:${PORT}`);
});
