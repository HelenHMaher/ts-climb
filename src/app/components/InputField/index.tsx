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
    background: var(--light-100-25);
    width: 285px;
    height: 26px;
    border-radius: 10px;
    border-style: none;
    text-align: left;
    padding: 14px 24px;
    color: var(--light-200);
    font-size: 16px;
    ::placeholder {
      color: var(--light-100-50);
      size: 15px;
    }
    :focus {
      background: var(--main-200-50);
      outline: none;
    }
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    text-align: left;
    font-size: 12px;
    width: 285px;
    height: 20px;
    font-size: 13px;
  }
  .inputError {
    color: var(--aux-200);
  }
  .inputMsg {
    color: var(--light-100);
  }
`;
