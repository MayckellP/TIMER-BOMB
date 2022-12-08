clickShow = (element) => {
  console.log(element.id, element.innerText);
  console.log("index.id");
};

btnChange = (element) => {
  const value = element.innerText;
  switch (value) {
    case "Ja":
      element.textContent = "Nein";
      element.className = "btn btn-danger w-50 rounded-4";
      break;
    case "Nein":
      element.textContent = "Ja";
      element.className = "btn btn-success w-50 rounded-4";
      break;
  }
};
incrementNumber = (element) => {
  var count = parseInt(document.getElementById(element).innerText);
  console.log(count + 1);
  document.getElementById(element).innerText++;
};
restart = () => {
  document.getElementById("number").innerText = "0";
};
mOver = (element) => {
  element.style.backgroundColor = "black";
};
mOut = (element) => {
  element.style.backgroundColor = "blue";
};
deletElement = (element) => {
  document.getElementById(element).remove();
};
