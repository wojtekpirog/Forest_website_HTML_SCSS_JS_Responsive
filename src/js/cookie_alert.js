import { cookieAlertBox } from "./main.js";

export const checkCookie = () => {
  const cookieAccepted = localStorage.getItem("cookieAccepted");

  if (cookieAccepted === "true") {
    cookieAlertBox.remove();
  } else {
    cookieAlertBox.setAttribute("tabindex", "-1");
    cookieAlertBox.focus();
  }
}

export const handleCookieAlert = () => {
  localStorage.setItem("cookieAccepted", "true");
  cookieAlertBox.remove();
}