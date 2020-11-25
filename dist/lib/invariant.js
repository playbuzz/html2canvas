"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invariant = void 0;
exports.invariant = function (assertion, error) {
    if (!assertion) {
        console.error(error);
    }
};
//# sourceMappingURL=invariant.js.map