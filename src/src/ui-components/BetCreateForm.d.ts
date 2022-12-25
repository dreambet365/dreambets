/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BetCreateFormInputValues = {
    created?: string;
};
export declare type BetCreateFormValidationValues = {
    created?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BetCreateFormOverridesProps = {
    BetCreateFormGrid?: FormProps<GridProps>;
    created?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BetCreateFormProps = React.PropsWithChildren<{
    overrides?: BetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BetCreateFormInputValues) => BetCreateFormInputValues;
    onSuccess?: (fields: BetCreateFormInputValues) => void;
    onError?: (fields: BetCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BetCreateFormInputValues) => BetCreateFormInputValues;
    onValidate?: BetCreateFormValidationValues;
} & React.CSSProperties>;
export default function BetCreateForm(props: BetCreateFormProps): React.ReactElement;
