"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../css/types/color");
var stack_blur_1 = require("../css/types/functions/stack-blur");
exports.processImage = function (img, filter) {
    return new Promise(function (resolve, reject) {
        if (!img || !('naturalWidth' in img)) {
            return resolve();
        }
        var w = img['naturalWidth'];
        var h = img['naturalHeight'];
        var canvas = document.createElement('canvas');
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = w * 2;
        canvas.height = h * 2;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, w, h);
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
        var imageData = context.getImageData(0, 0, w, h);
        handlePerPixel(imageData, filter);
        var blurFilter = filter.find(function (item) { return item.name === 'blur'; });
        if (blurFilter) {
            imageData = stack_blur_1.stackBlurImage(imageData, w, h, blurFilter.value.number * 2, 1);
        }
        context.putImageData(imageData, 0, 0);
        img.crossOrigin = 'anonymous';
        img.src = canvas.toDataURL();
        img.onload = function () { return resolve(img); };
        img.onerror = reject;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () { return resolve(img); }, 500);
        }
    });
};
function handlePerPixel(imageData, filter) {
    for (var _j = 0; _j < imageData.height; _j++) {
        var _loop_1 = function (_i) {
            var index = _j * 4 * imageData.width + _i * 4;
            var rgb = {
                r: imageData.data[index],
                g: imageData.data[index + 1],
                b: imageData.data[index + 2]
            };
            filter.forEach(function (item) {
                switch (item.name) {
                    case 'contrast':
                        rgb = color_1.contrastRGB(rgb, item.value.number);
                        break;
                    case 'hue-rotate':
                        rgb = color_1.hueRotateRGB(rgb, item.value.number);
                        break;
                    case 'grayscale':
                        rgb = color_1.grayscaleRGB(rgb, item.value.number);
                        break;
                    case 'brightness':
                        rgb = color_1.brightnessRGB(rgb, item.value.number);
                        break;
                    case 'invert':
                        rgb = color_1.invertRGB(rgb, item.value.number);
                        break;
                    case 'saturate':
                        rgb = color_1.saturateRGB(rgb, item.value.number);
                        break;
                    case 'sepia':
                        rgb = color_1.sepiaRGB(rgb, item.value.number);
                        break;
                    default:
                        break;
                }
            });
            imageData.data[index] = rgb.r;
            imageData.data[index + 1] = rgb.g;
            imageData.data[index + 2] = rgb.b;
        };
        for (var _i = 0; _i < imageData.width; _i++) {
            _loop_1(_i);
        }
    }
}
exports.isSupportedFilter = function (ctx) { return 'filter' in ctx; };
//# sourceMappingURL=image-filter.js.map