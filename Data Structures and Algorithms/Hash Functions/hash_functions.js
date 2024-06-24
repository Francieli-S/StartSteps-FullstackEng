const sampleHash = (string) => {
  let hash= 0;
  for(let char of string) {
      hash += (hash * 23) + char.charCodeAt(0);
  }
  return hash;
}

const generateHash = () => {
  const password = document.getElementById("password").value;
  const hash = sampleHash(password);
  document.getElementById("output").innerHTML = hash;
}