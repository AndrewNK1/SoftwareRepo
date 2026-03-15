function logPhoneNumber(input) {
  const data = typeof input === "string" ? JSON.parse(input) : input;
  console.log(data.phoneNumber);
}

logPhoneNumber({ phoneNumber: "555-123-4567" });
