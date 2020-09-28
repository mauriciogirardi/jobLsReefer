const result = document.querySelector("button[type=submit]");
const addResHtml = document.querySelector(".result");

result.addEventListener("click", (e) => {
  e.preventDefault();

  let width = document.querySelector("input[name=widthL]").value;
  let height = document.querySelector("input[name=heightC]").value;
  let areaName = document.querySelector("input[name=areaName]").value;
  let person = document.querySelector("input[name=person]").value;
  let solar = document.querySelector("select[name=solar]").value;
  let windowQtd = document.querySelector("input[name=windowQtd]").value;

  const area = Number(width) * Number(height);
  const areaTotal = area * 800;

  if (solar === "morning" || solar === "afternoon") {
    solar = 800;
  } else {
    solar = "";
  }

  if (person >= 2) {
    person = (person - 1) * 800;
  } else {
    person = "";
  }

  if (windowQtd >= 1) {
    windowQtd = windowQtd * 600;
  } else {
    windowQtd = "";
  }

  let res =
    Number(areaTotal) + Number(person) + Number(windowQtd) + Number(solar);

  addResHtml.innerHTML = ` ${
    !areaName ? "Ambiente" : areaName
  } precisa de um ar de ${res} BTUs.`;

  width = document.querySelector("input[name=widthL]").value = "";
  height = document.querySelector("input[name=heightC]").value = "";
  areaName = document.querySelector("input[name=areaName]").value = "";
  person = document.querySelector("input[name=person]").value = 0;
  windowQtd = document.querySelector("input[name=windowQtd]").value = 0;
});
