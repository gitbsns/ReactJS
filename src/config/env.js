const {
  REACT_APP_BASE_URL,
  REACT_APP_REDIRECTION_URL,
  NODE_ENV,
  REACT_APP_ENCRYPT_KEY,
  REACT_APP_DECRYPT_KEY,
  REACT_APP_CRYPTO_JS_KEY,
  REACT_APP_APPOINTMENT_KEY,
} = process.env;

export default Object.freeze({
  baseURL: REACT_APP_BASE_URL,
  redirectionURL: REACT_APP_REDIRECTION_URL,
  nodeENV: NODE_ENV,
  encryptKey: REACT_APP_ENCRYPT_KEY,
  decryptKey: REACT_APP_DECRYPT_KEY,
  cryptoJsKey: REACT_APP_CRYPTO_JS_KEY,
  appointmentKey: REACT_APP_APPOINTMENT_KEY,
});