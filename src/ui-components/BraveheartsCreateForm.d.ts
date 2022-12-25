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
export declare type BraveheartsCreateFormInputValues = {
    email?: string;
};
export declare type BraveheartsCreateFormValidationValues = {
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BraveheartsCreateFormOverridesProps = {
    BraveheartsCreateFormGrid?: FormProps<GridProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BraveheartsCreateFormProps = React.PropsWithChildren<{
    overrides?: BraveheartsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BraveheartsCreateFormInputValues) => BraveheartsCreateFormInputValues;
    onSuccess?: (fields: BraveheartsCreateFormInputValues) => void;
    onError?: (fields: BraveheartsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BraveheartsCreateFormInputValues) => BraveheartsCreateFormInputValues;
    onValidate?: BraveheartsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BraveheartsCreateForm(props: BraveheartsCreateFormProps): React.ReactElement;
