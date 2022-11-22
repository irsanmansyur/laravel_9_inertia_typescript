import React, { ComponentType } from 'react';
import { EditorPlugin } from '@draft-js-plugins/editor';
import addImage from './modifiers/addImage';
import { ImageProps } from './Image';
export interface ImagePluginTheme {
    image?: string;
}
export interface ImagePluginConfig {
    decorator?(component: ComponentType<ImageProps>): ComponentType<ImageProps>;
    theme?: ImagePluginTheme;
    imageComponent?: ComponentType<ImageProps>;
}
export declare type ImageEditorPlugin = EditorPlugin & {
    addImage: typeof addImage;
};
declare const _default: (config?: ImagePluginConfig) => ImageEditorPlugin;
export default _default;
export declare const Image: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
