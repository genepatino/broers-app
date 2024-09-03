export const PRIVATE_API_KEY = import.meta.env.VITE_PRIVATE_API_KEY;
export const PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
export const RECAPTCHA_KEY = import.meta.VITE_RECAPTCHA;
export const API_URL = import.meta.env.VITE_APIURL;
export const USERNAME = import.meta.env.VITE_USERNAME;
export const PASSWORD = import.meta.env.VITE_PASSWORD;

export const timestamp = Date.now().toString();
export const hash = timestamp + PRIVATE_API_KEY + PUBLIC_API_KEY;
