"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
// set up the port
var port = 8080;
// api middleware
app.use('/api', index_1.default);
app.get('/', function (req, res) {
    res.send('server ON');
});
// listen to the server response
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
