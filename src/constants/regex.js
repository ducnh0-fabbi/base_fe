// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// eslint-disable-next-line no-useless-escape
export const PASSWORD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*"?\s&_()-.,|`+=>\<{}~\/:^;\'\][\\\\])[A-Za-z\d@#$!%*?\s&_()-:.,|`+=>\<{}~\/:^;"\'\][\\\\]{8,}$/;