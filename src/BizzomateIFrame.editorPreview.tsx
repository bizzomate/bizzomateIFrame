import { ReactElement, createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";
import { BizzomateIFramePreviewProps } from "../typings/BizzomateIFrameProps";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}



export function preview(props: BizzomateIFramePreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <iframe
                className={props.className}
                style={parseInlineStyle(props.style)}
                width={props.width}
                height={props.height}
            />
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/BizzomateIFrame.css");
}
