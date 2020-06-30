export function getContactList() {
  return { type: "@contact/GET_CONTACT_LIST" };
}

export function postContact(payload) {
  return { type: "@contact/POST_CONTACT", payload };
}
