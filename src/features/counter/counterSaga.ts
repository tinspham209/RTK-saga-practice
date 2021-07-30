import { takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('log:', action);
}

export default function* counterSaga() {
  console.log("counter saga");

  yield takeEvery(increment().type, log);
}