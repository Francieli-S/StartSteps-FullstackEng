'use client';

import * as React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store: Store<StudentState, StudentAction> = configureStore({ reducer });

const StoreStudentWrapper = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreStudentWrapper;
