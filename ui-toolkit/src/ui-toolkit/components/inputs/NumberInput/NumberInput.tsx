import React from "react";
import styled from "ui-toolkit/styled-components";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { TextField, ITextFieldProps } from "office-ui-fabric-react/lib/TextField";

export function NumberInput({
  value,
  onChange,
  step = 1,
  disabled,
  min,
  max,
  ...rest
}: NumberInputProps) {
  const incrementValue = () => {
    onChange(value + step);
  };
  const decrementValue = () => {
    onChange(value - step);
  };

  const UpDownButtons = () => {
    return (
      <div className="button-wrapper">
        <IconButton
          iconProps={{ iconName: "CalculatorSubtract" }}
          onClick={decrementValue}
          disabled={disabled}
        />
        <IconButton iconProps={{ iconName: "Add" }} onClick={incrementValue} disabled={disabled} />
      </div>
    );
  };

  // TODO: deal with min max and show message

  const getErrorMessage = (value: number) => {
    if (min && value < min) {
      return `Value must be greater than or equal to ${min}`;
    } else if (max && value > max) {
      return `Value must be less than or equal to ${max}`;
    } else {
      return "";
    }
  };

  return (
    <StyledNumberInput>
      <TextField
        type="number"
        value={value + ""}
        onChange={(event, newValue) => onChange(parseFloat(newValue))}
        onRenderSuffix={() => UpDownButtons()}
        disabled={disabled}
        onGetErrorMessage={() => getErrorMessage(value)}
        {...rest}
      />
    </StyledNumberInput>
  );
}
export default React.memo(NumberInput);

export interface FabricTextFieldProps extends ITextFieldProps {}

export interface NumberInputProps extends Omit<ITextFieldProps, "value" | "onChange"> {
  value: number;
  onChange: (newValue: number) => void;
  /**Number to increment/decrement by */
  step?: number;
  [key: string]: any;
}

const StyledNumberInput = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .button-wrapper {
    height: 100%;
    button {
      height: 100%;
    }
  }
`;
