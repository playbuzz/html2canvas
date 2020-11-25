import { FilterItem } from '../css/property-descriptors/filter';
export declare const processImage: (img: HTMLImageElement, filter: FilterItem[]) => Promise<{}>;
export declare const isSupportedFilter: (ctx: CanvasRenderingContext2D) => boolean;
