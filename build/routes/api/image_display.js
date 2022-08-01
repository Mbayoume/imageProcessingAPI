"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.originImagePath = exports.resizedImagePath = void 0;
var express_1 = __importDefault(require("express"));
var image_resizer_1 = __importDefault(require("../../util/image_resizer"));
var path_1 = __importDefault(require("path"));
var image_display = (0, express_1.default)();
var resizedImagePath = path_1.default.resolve('./') + '/images/resizedImage';
exports.resizedImagePath = resizedImagePath;
var originImagePath = path_1.default.resolve('./') + '/images';
exports.originImagePath = originImagePath;
// the image name from the images dir
var images = 'creed';
// set up the get object
image_display.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageName, height, width, resizedImage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageName = req.query.image;
                height = parseInt(req.query.height);
                width = parseInt(req.query.width);
                //validate the inputs
                if (!imageName || images != 'creed') {
                    return [2 /*return*/, res.status(400)
                            .send("something went wrong ! try to check if the image name is exist,\n         there is only one image {creed.jpg} ")];
                }
                if (height <= 0 && width <= 0) {
                    return [2 /*return*/, res.status(400).send('Error: unvalid width or height')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                // resizing the image with the image_resizer module
                return [4 /*yield*/, (0, image_resizer_1.default)(imageName, width, height)];
            case 2:
                // resizing the image with the image_resizer module
                _a.sent();
                resizedImage = "".concat(resizedImagePath, "/").concat(imageName, "_").concat(width, "_").concat(height, ".jpg");
                // adding the image to resized image file and view it in the browser
                res.sendFile(resizedImage);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(400);
                res.send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = image_display;
