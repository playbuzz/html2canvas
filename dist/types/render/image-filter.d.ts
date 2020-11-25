import { Filter } from '../css/property-descriptors/filter';
export declare const processImage: (img: HTMLImageElement, filter: Filter) => Promise<unknown>;
export declare const isSupportedFilter: (ctx: CanvasRenderingContext2D) => boolean;
