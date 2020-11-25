"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCloner = void 0;
var DocumentCloner = /** @class */ (function () {
    function DocumentCloner() {
        // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
        this.clonedReferenceElement = {};
    }
    DocumentCloner.prototype.toIFrame = function () {
        return Promise.resolve({});
    };
    DocumentCloner.destroy = function () {
        return true;
    };
    return DocumentCloner;
}());
exports.DocumentCloner = DocumentCloner;
//# sourceMappingURL=document-cloner.js.map