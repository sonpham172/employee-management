import {all} from "redux-saga/effects";
import employeeSagas from "./employeeSagas";

export default function* rootSaga() {
  yield all([
    employeeSagas()
  ]);
}
