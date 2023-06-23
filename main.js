document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", displayData);

  function displayData() {
    const getValue = (id) => document.getElementById(id).value;
    const getCheckedValue = (name) => {
      const inputs = document.getElementsByName(name);
      const checkedInput = Array.from(inputs).find((input) => input.checked);
      return checkedInput ? checkedInput.value : "";
    };
    const getCheckedValues = (name) => {
      const inputs = document.getElementsByName(name);
      return Array.from(inputs)
        .filter((input) => input.checked)
        .map((input) => input.value);
    };

    const rowData = [
      { label: "Ім'я", value: getValue("firstName") },
      { label: "Прізвище", value: getValue("lastName") },
      { label: "Дата народження", value: getValue("birthDate") },
      { label: "Стать", value: getCheckedValue("gender") },
      { label: "Місто", value: getValue("city") },
      { label: "Адреса", value: getValue("address") },
      {
        label: "Мови, якими володіє",
        value: getCheckedValues("languages").join(", "),
      },
    ];

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    rowData.forEach(({ label, value }) => {
      const row = document.createElement("tr");

      const labelCell = document.createElement("th");
      labelCell.textContent = label;

      const valueCell = document.createElement("td");
      valueCell.textContent = value;

      row.appendChild(labelCell);
      row.appendChild(valueCell);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    const form = document.getElementById("registrationForm");
    form.replaceWith(table);
  }
});
