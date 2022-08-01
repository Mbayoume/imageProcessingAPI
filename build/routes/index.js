"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
var image_display_1 = __importDefault(require("./api/image_display"));
routes.get('/', function (req, res) {
    res.send('welcome to the main rout (type the image name to process it)');
});
routes.use('/resizedImage', image_display_1.default);
// show the original image in the main route
routes.use('/', express_1.default.static('./images'));
exports.default = routes;
