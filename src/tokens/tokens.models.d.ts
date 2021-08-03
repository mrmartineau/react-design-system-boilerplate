import { System, SystemType, SystemSpacing } from 'design-system-utils';
export interface MySystemType extends SystemType {
    fontFamily?: {
        [family: string]: string;
    };
    fontFamilyBase?: string;
    fontFamilyHeadings?: string;
    lineHeight?: {
        [name: string]: string | number;
    };
    fontWeight?: {
        [name: string]: string | number;
    };
}
export interface MySystemSpacing extends SystemSpacing {
    baseline: number;
}
export interface MySystem extends System {
    type: MySystemType;
    spacing: MySystemSpacing;
}
