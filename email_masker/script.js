const email = "apple.pie@example.com";

function maskEmail(str) {
  const [name, domain] = str.split("@");
  const maskedName =
    name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
  return `${maskedName}@${domain}`;
}

console.log(maskEmail(email));
