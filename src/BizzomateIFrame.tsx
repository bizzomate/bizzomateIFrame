import { ReactElement, createElement, HTMLAttributeReferrerPolicy } from "react";
import { ValueStatus, DynamicValue } from "mendix";

import classNames from "classnames";

import { BizzomateIFrameContainerProps } from "../typings/BizzomateIFrameProps";
import "./ui/BizzomateIFrame.css";

export function BizzomateIFrame(props: BizzomateIFrameContainerProps): ReactElement {
    const getDynamicValue = <P, T>(alternative: P, dynamicValue?: DynamicValue<T>): T | P => {
        if (dynamicValue && dynamicValue.status === ValueStatus.Available) {
            return dynamicValue.value;
        }
        return alternative;
    };

    const className = classNames(props.class, 'bizzomate-iframe');

    return (
        <iframe
            className={className}
            style={props.style}
            width={props.width}
            height={props.height}
            src={getDynamicValue('about:blank', props.sourceURL)}
            title={getDynamicValue(undefined, props.title)}
            srcDoc={getDynamicValue(undefined, props.sourceDoc)}
            allow={props.allow ? props.allow : undefined}
            sandbox={props.sandbox ? props.sandbox : undefined}
            referrerPolicy={props.referrerPolicy ? props.referrerPolicy as HTMLAttributeReferrerPolicy : undefined}
            loading={props.loading === 'eager' || props.loading === 'lazy' ?  props.loading : undefined}
        />
    );
}