/**
 *
 * InputField
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  msg: { msg: string; err: boolean };
  value: string;
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField(props: Props) {
  return (
    <StyledInputField>
      <input
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      ></input>
      <p className={props.msg.err ? 'inputError' : 'inputMsg'}>
        {props.msg.msg}
      </p>
    </StyledInputField>
  );
}

const StyledInputField = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin: 5px;
    background: var(--dark-900-25);
    width: 285px;
    height: 24px;
    border-radius: 10px;
    border-style: none;
    text-align: left;
    padding: 12px 24px;
    color: var(--light-100);
    font-size: 15px;
    ::placeholder {
      color: var(--light-500);
      size: 15px;
    }
    :focus {
      background: var(--dark-900-50);
      outline: none;
    }
  }
  p {
    text-align: left;
    width: 300px;
    height: 20px;
    font-size: 13px;
  }
  .inputError {
    color: var(--error-500);
  }
  .inputMsg {
    color: var(--light-100);
  }
`;
