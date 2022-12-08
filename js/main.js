const naame = document.getElementById("cont-name");
const order = document.getElementById("cont-order");
const dato = document.getElementById("cont-nummer");
const alt = document.getElementById("cont-alt");
const tag = document.getElementById("tag");
const erlaubt = document.getElementById("erlaubt");
const conUser = document.getElementById("cont-user");
const formulario = document.getElementById("formulario");

const resConverter = document.getElementById("resConverter");
const resOrder = document.getElementById("cont-res");
const resAlt = document.getElementById("resAlt");
const resTag = document.getElementById("cont-sale");
const resTbl = document.getElementById("cont-tbl");
const resTbl2 = document.getElementById("cont-tbl2");
const resClient = document.getElementById("resClient");

const rabatt = [5, 15, 20, 40, 80, 10, 60];

//------------------------------------------------------------------------------------------------------------PIZZERIA
newOrder = () => {
  const client = naame.value;
  const nameClient = client[0].toUpperCase() + client.substring(1);
  console.log(`Herr. ${nameClient} hat ein/eine ${order.value} bestellt`);

  showOrder();
};

saleTage = (tag) => {
  const newTag = tag.value;
  switch (newTag) {
    case "Montag":
      resTag.innerHTML = " ";
      const show1 = `<p>Sie haben <b>${rabatt[0]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show1;
      break;
    case "Dienstag":
      resTag.innerHTML = " ";
      const show2 = `<p>Sie haben <b>${rabatt[1]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show2;
      break;
    case "Mittwoch":
      resTag.innerHTML = " ";
      const show3 = `<p>Sie haben <b>${rabatt[2]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show3;
      break;
    case "Donnerstag":
      resTag.innerHTML = " ";
      const show4 = `<p>Sie haben <b>${rabatt[3]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show4;
      break;
    case "Freitag":
      resTag.innerHTML = " ";
      const show5 = `<p>Sie haben <b>${rabatt[4]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show5;
      break;
    case "Samstag":
      resTag.innerHTML = " ";
      const show6 = `<p>Sie haben <b>${rabatt[5]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show6;
      break;
    case "Sonntag":
      resTag.innerHTML = " ";
      const show7 = `<p>Sie haben <b>${rabatt[6]}%</b> Rabatt erhalten</p`;
      resTag.innerHTML += show7;
  }
};

showOrder = () => {
  if (naame.value === "" || order.value === "" || tag.value === "") {
    alert("Musst etwas schreiben!!");
    console.log("Error");
  } else {
    const client = naame.value;
    const nameClient = client[0].toUpperCase() + client.substring(1);
    resOrder.innerHTML = "";
    const textShow = `<p>Herr. <b>${nameClient}</b> hat ein/eine <b>${order.value}</b> bestellt</p`;
    resOrder.innerHTML += textShow;
  }
  saleTage(tag);
};

closeTable = () => {
  resTbl.innerHTML = `<div id="cont-tbl">
  <a onclick="showTable()">Open Table<img src="images/visibility.png" class="ms-1"></a></div>
  <div id="cont-tbl2">
  </div>`;
};

showTable = () => {
  resTbl.innerHTML = " ";
  const showTbl = `<table>
      <tr>
        <td></td>
        <td><b>M</b</td>
        <td><b>D</b</td>
        <td><b>M</b</td>
        <td><b>D</b</td>
        <td><b>F</b</td>
        <td><b>S</b</td>
        <td><b>S</b</td> 
      </tr>
      <tr>
        <td><b>Rabatt</b></td>
        <td>${rabatt[0]}%</td>
        <td>${rabatt[1]}%</td>
        <td>${rabatt[2]}%</td>
        <td>${rabatt[3]}%</td>
        <td>${rabatt[4]}%</td>
        <td>${rabatt[5]}%</td>
        <td>${rabatt[6]}%</td>
      </tr>
    </table>
    <div id="cont-tbl2">
          <a onclick="closeTable();"><img src="images/hidden.png" class="mt-2"></a>
        </div>`;
  resTbl.innerHTML += showTbl;
};

//------------------------------------------------------------------------------------------------------------CONVERTER
converterMiles = () => {
  const res = dato.value * 1.609;
  console.log(`Deine Resultät ist: ${res}`);
  showInput();
};

showInput = () => {
  const res = dato.value * 1.609;
  if (dato.value === "") {
    alert("Musst etwas schreiben!!");
  } else if (dato.value.length >= 3) {
    alert("Schreib nur ab 1 bis 99");
  } else {
    resConverter.innerHTML = "";
    const textShow = `<p>Dein Wert ist: <b>${res}</b></p`;
    resConverter.innerHTML += textShow;
  }
};

//------------------------------------------------------------------------------------------------------------FRAGEN/RAUCHEN
showAlt = () => {
  resAlt.innerHTML = " ";
  if (alt.value === "") {
    alert("Musst etwas schreiben!!");
  } else if (alt.value <= 17 && erlaubt.value != "Ja") {
    const textShow = `<p class="resp-neg">Du kannst nicht, Du hast: <b>${alt.value}</b> Jahre Alt. Du bist sehr Junge</p`;
    resAlt.innerHTML += textShow;
  } else {
    const textShow = `<p class="resp-pos">Ja, Du kannst.</p`;
    resAlt.innerHTML += textShow;
  }
};

//------------------------------------------------------------------------------------------------------------DATABANKEN
const Clients = [];

//---------------------------------------------------------------------------DELETE
deleteClient = (index) => {
  console.log(index);
  Clients.splice(index, 1);
  showClient();
};

//---------------------------------------------------------------------------ADD
addClient = () => {
  if (conUser.value === "" || conUser.value === " ") {
    alert("Müssen Sie etwas schreiben!");
  } else {
    Clients.push(conUser.value);
    console.log(Clients);
    formulario.reset();
    showClient();
  }
};

//---------------------------------------------------------------------------EDIT
editClient = (index) => {
  const newValue = prompt("Neue Name: ");
  Clients[index] = newValue;
  showClient();
};

//---------------------------------------------------------------------------SHOW
showClient = () => {
  resClient.innerHTML = " ";
  for (let i = 0; i < Clients.length; i++) {
    const showTbl = `<tr>
      <td class="list py-1">
      <button class="edit" onclick="editClient(${i});" ><img src="images/edit.png"></button>
      ${Clients[i]}
      <button onclick="deleteClient(${i});" ><img src="images/delete.png"></button>
      </td>
      </tr>`;
    resClient.innerHTML += showTbl;
  }
};

const nombre = document.getElementById("act-name");
const age = document.getElementById("act-alt");
const activ = document.getElementById("act-activ");
const date = document.getElementById("act-time");
const formAct = document.getElementById("form-act");

const newName = document.getElementById("newValue-name");
const newAge = document.getElementById("newValue-number");
const newActiv = document.getElementById("newValue-activ");
const newDate = document.getElementById("newValue-date");

const oldwName = document.getElementById("oldName");
const oldwAge = document.getElementById("oldNumber");
const oldwActiv = document.getElementById("oldActiv");
const oldwDate = document.getElementById("oldDate");
const showID = document.getElementById("modal-cont");

const resUser = document.getElementById("resUser");
const resModal = document.getElementById("modal");
const forModal = document.getElementById("form-modal");

const Activities = [];
var newIDs = undefined;

//---------------------------------------------------------------------------GENERATE ID
function generateID() {
  // Función para Gnerar un ID aleatorio.

  const id = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
  return id;
}

//---------------------------------------------------------------------------ADD
addActiv = () => {
  if (
    nombre.value === "" ||
    age.value === "" ||
    activ.value === "" ||
    date.value === ""
  ) {
    alert("Müssen Sie etwas schreiben!");
  } else {
    Activities.push(
      (User = {
        id: generateID(),
        name: nombre.value,
        age: age.value,
        activity: activ.value,
        date: date.value,
      })
    );
    formAct.reset();
    showActiv();
  }
};

//---------------------------------------------------------------------------DELETE
deleteActiv = (index) => {
  Activities.splice(index, 1);
  showActiv();
};

//---------------------------------------------------------------------------SHOW EDIT
showEdit = (index) => {
  console.log(Activities[index].id);
  showID.innerHTML = `<h2>${Activities[index].id}</h2>`;
  oldName.innerHTML = `<label><b>${Activities[index].name}:</b></label>`;
  oldAge.innerHTML = `<label><b>${Activities[index].age}:</b></label>`;
  oldActiv.innerHTML = `<label><b>${Activities[index].activity}:</b></label>`;
  oldDate.innerHTML = `<label><b>${Activities[index].date}:</b></label>`;
  newIDs = Activities[index].id;
  forModal.reset();
};

//---------------------------------------------------------------------------ADD EDIT
addEdit = () => {
  for (let i = 0; i < Activities.length; i++) {
    if (Activities[i].id === newIDs) {
      Activities[i].name = newName.value;
      Activities[i].age = newAge.value;
      Activities[i].activity = newActiv.value;
      Activities[i].date = newDate.value;
      showActiv();
    }
    alert("Bearbeitete Activtät.");
  }
};

//---------------------------------------------------------------------------SHOW
showActiv = () => {
  resUser.innerHTML = " ";
  for (let i = 0; i < Activities.length; i++) {
    const showTbl = `<tr>
    <td>
    <button class="edit-user" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showEdit(${i})"><img src="images/edit.png"></button>
    </td>
    <td id="list-name">${Activities[i].name}</td>
    <td id="list-age">${Activities[i].age}</td>
    <td id="list-act">${Activities[i].activity}</td>
    <td id="list-date">${Activities[i].date}</td>
    <td>
    <button class="delete-user" onclick="deleteActiv(${i});" ><img src="images/delete.png"></button>
    </td>
  </tr>
  
  `;
    resUser.innerHTML += showTbl;
  }
};
