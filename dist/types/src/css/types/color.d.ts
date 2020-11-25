import { ITypeDescriptor } from '../ITypeDescriptor';
export declare type Color = number;
export declare const color: ITypeDescriptor<Color>;
export declare const isTransparent: (color: number) => boolean;
export declare const asString: (color: number) => string;
export declare const pack: (r: number, g: number, b: number, a: number) => number;
export declare const COLORS: {
    [key: string]: Color;
};
export interface RGBColor {
    r: number;
    g: number;
    b: number;
}
export declare const contrastRGB: (rgb: RGBColor, value: number) => RGBColor;
export declare const grayscaleRGB: (rgb: RGBColor, value: number, mode?: string | null | undefined) => RGBColor;
export declare const brightnessRGB: (rgb: RGBColor, value: number) => RGBColor;
export declare const invertRGB: (rgb: RGBColor, value: number) => RGBColor;
export declare const sepiaRGB: (rgb: RGBColor, value: number) => RGBColor;
export declare const hueRotateRGB: (rgb: RGBColor, value: number) => RGBColor;
export declare const saturateRGB: (rgb: RGBColor, value: number) => RGBColor;
