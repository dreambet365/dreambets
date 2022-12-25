/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Bravehearts } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BraveheartsUpdateFormInputValues = {
    email?: string;
    createdOn?: string;
};
export declare type BraveheartsUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    createdOn?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BraveheartsUpdateFormOverridesProps = {
    BraveheartsUpdateFormGrid?: FormProps<GridProps>;
    email?: FormProps<TextFieldProps>;
    createdOn?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BraveheartsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BraveheartsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bravehearts?: Bravehearts;
    onSubmit?: (fields: BraveheartsUpdateFormInputValues) => BraveheartsUpdateFormInputValues;
    onSuccess?: (fields: BraveheartsUpdateFormInputValues) => void;
    onError?: (fields: BraveheartsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BraveheartsUpdateFormInputValues) => BraveheartsUpdateFormInputValues;
    onValidate?: BraveheartsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BraveheartsUpdateForm(props: BraveheartsUpdateFormProps): React.ReactElement;
