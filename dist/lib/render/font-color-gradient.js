"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = require("../css/types/image");
var background_clip_1 = require("../css/property-descriptors/background-clip");
exports.isFontColorGradient = function (styles) {
    return (styles.backgroundImage.length === 1 &&
        (image_1.isLinearGradient(styles.backgroundImage[0]) || image_1.isRadialGradient(styles.backgroundImage[0])) &&
        (styles.textFillColor === 0 || styles.color === 0) &&
        styles.backgroundClip.length === 1 &&
        styles.backgroundClip[0] === background_clip_1.BACKGROUND_CLIP.TEXT);
};
//# sourceMappingURL=font-color-gradient.js.map