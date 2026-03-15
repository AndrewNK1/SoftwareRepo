function logNameFromJson(input) {
  const data = typeof input === "string" ? JSON.parse(input) : input;
  console.log(data.name);
}

logNameFromJson({ name: "pierre_sallam_seif" });
