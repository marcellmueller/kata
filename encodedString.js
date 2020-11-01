const urlEncode = (text) => {
  let encoded = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " " && (i === 0 || i === text.length - 1)) {
      encoded = encoded + "";
    } else if (text[i] === " ") {
      encoded = encoded + "%20";
    } else {
      encoded = encoded + text[i];
    }
  }
  return encoded;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
