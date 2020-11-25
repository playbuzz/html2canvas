"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IPropertyDescriptor_1 = require("../IPropertyDescriptor");
var parser_1 = require("../syntax/parser");
var length_1 = require("../types/length");
exports.filter = {
    name: 'filter',
    initialValue: 'none',
    prefix: true,
    type: IPropertyDescriptor_1.PropertyDescriptorParsingType.LIST,
    parse: function (tokens) {
        if (tokens.length === 1 && parser_1.isIdentWithValue(tokens[0], 'none')) {
            return null;
        }
        var filter = [];
        var hasFilter = false;
        tokens.filter(parser_1.isCSSFunction).forEach(function (token) {
            switch (token.name) {
                case 'contrast':
                case 'hue-rotate':
                case 'grayscale':
                case 'brightness':
                case 'blur':
                case 'invert':
                case 'saturate':
                case 'sepia':
                    for (var index = 0; index < token.values.length; index++) {
                        var value = token.values[index];
                        if (length_1.isLength(value)) {
                            hasFilter = true;
                            filter.push({ name: token.name, value: value });
                        }
                    }
                    break;
                default:
                    break;
            }
        });
        if (hasFilter) {
            return filter;
        }
        else {
            return null;
        }
    }
};
//# sourceMappingURL=filter.js.map