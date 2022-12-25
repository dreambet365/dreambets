/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Bet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BetUpdateFormInputValues = {
    created?: string;
};
export declare type BetUpdateFormValidationValues = {
    created?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BetUpdateFormOverridesProps = {
    BetUpdateFormGrid?: FormProps<GridProps>;
    created?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BetUpdateFormProps = React.PropsWithChildren<{
    overrides?: BetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bet?: Bet;
    onSubmit?: (fields: BetUpdateFormInputValues) => BetUpdateFormInputValues;
    onSuccess?: (fields: BetUpdateFormInputValues) => void;
    onError?: (fields: BetUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BetUpdateFormInputValues) => BetUpdateFormInputValues;
    onValidate?: BetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BetUpdateForm(props: BetUpdateFormProps): React.ReactElement;
