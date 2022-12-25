/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Bravehearts } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function HeroLayout4(props) {
  const { title, overrides, ...rest } = props;
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: { email: textFieldValue },
    model: Bravehearts,
    schema: schema,
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout4")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Coming Soon"
          {...getOverrideProps(overrides, "LOREM IPSUM")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Dream Bet 365"
          {...getOverrideProps(
            overrides,
            "Ut enim ad minim veniam quis nostrud"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="800"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Enter your email address below to sign up for early-access preview."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.29766572"
          )}
        ></Text>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Form")}
        >
          <TextField
            shrink="0"
            placeholder="email@domain.com"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            value={textFieldValue}
            onChange={(event) => {
              setTextFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
          <Button
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Sing-up"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="566px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Got a question? dreambetdev@gmail.com"
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.29766576"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
