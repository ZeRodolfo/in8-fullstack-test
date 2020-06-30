import { put, call, select, all, takeLatest } from "redux-saga/effects";
import { notification } from "antd";

import * as repository from "./repository";

function* getContactListSaga() {
  try {
    const { data: contacts } = yield call(repository.contacts);

    yield put({
      type: "@contact/SET_CONTACT_LIST_SUCCESS",
      payload: contacts,
    });
  } catch (err) {
    notification.error({
      message: "Atenção",
      description: err.response.data.message,
    });
  }
}

function* postContactSaga({ payload }) {
  try {
    const errors = [];
    if (!!payload.name.trim() === false) {
      errors.push("Nome não pode ficar em branco.");
    }

    if (!!payload.email.trim() === false) {
      errors.push("Email não pode ficar em branco.");
    }

    if (!!payload.birthdate.trim() === false) {
      errors.push("Nascimento não pode ficar em branco.");
    }

    if (!!payload.phone.trim() === false) {
      errors.push("Telefone não pode ficar em branco.");
    }

    if (!errors.length) {
      const { list: contacts } = yield select(state => state.home);
      const { data: contact } = yield call(repository.postContact, payload);

      yield put({
        type: "@contact/SET_CONTACT_LIST_SUCCESS",
        payload: [...contacts, contact[0]],
      });

      notification.success({
        message: "Sucesso",
        description: "Salvo com sucesso.",
      });
    } else {
      notification.error({
        message: "Atenção",
        description: errors.join("\n"),
      });
    }
  } catch (err) {
    notification.error({
      message: "Atenção",
      description: err.response.data.message,
    });
  }
}

export default all([
  takeLatest("@contact/GET_CONTACT_LIST", getContactListSaga),
  takeLatest("@contact/POST_CONTACT", postContactSaga),
]);
