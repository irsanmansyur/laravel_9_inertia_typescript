import React, { ImgHTMLAttributes } from 'react';
import { ContentBlock, ContentState } from 'draft-js';
import { ImagePluginTheme } from '.';
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    block: ContentBlock;
    className?: string;
    theme?: ImagePluginTheme;
    contentState: ContentState;
    blockStyleFn: unknown;
    blockProps: unknown;
    customStyleMap: unknown;
    customStyleFn: unknown;
    decorator: unknown;
    forceSelection: unknown;
    offsetKey: unknown;
    selection: unknown;
    tree: unknown;
    preventScroll: unknown;
}
declare const _default: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export default _default;
