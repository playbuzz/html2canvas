import { IPropertyListDescriptor } from '../IPropertyDescriptor';
import { Length } from '../types/length';
export declare type Filter = FilterItem[];
export interface FilterItem {
    name: string;
    value: Length;
}
export declare const filter: IPropertyListDescriptor<Filter | null>;
