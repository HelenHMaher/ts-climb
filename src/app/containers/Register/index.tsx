/**
*
* Register
*
*/

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectRegister } from './selectors';
import { registerSaga } from './saga';

interface Props {}


export function Register(props: Props) {
useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registerSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = useSelector(selectRegister);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();


return (
<>
  <Div>
    </Div>
</>
);

};

const Div = styled.div``;
