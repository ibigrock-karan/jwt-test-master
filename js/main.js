
var header = {
  "alg": "HS256",
  "typ": "JWT"
};
var data = {
  "id": 4523,
  "username": "Karan Sethi"
};
var secret = "My very confidential secret!!!";
function base64url(source) {
  eSource = CryptoJS.enc.Base64.stringify(source);
  eSource = eSource.replace(/=+$/, '');
  eSource = eSource.replace(/\+/g, '-');
  eSource = eSource.replace(/\//g, '_');
  return eSource;
}
var Header = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
var eheader = base64url(Header);
document.getElementById("header").innerText = eheader;

var Data = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
var edata = base64url(Data);
document.getElementById("payload").innerText = edata;

var signature = eheader + "." + edata;
signature = CryptoJS.HmacSHA256(signature, secret);
signature = base64url(signature);

document.getElementById("signature").innerText = signature;