
fetch("https://apis.explorebtk.com/api/v1/categories")
  .then((response) => response.json())
  .then((categories) => renderTable(categories, "api-data"))
  .catch((error) => console.error(error));

function renderTable(items, elementId) {
  container = document.getElementById(elementId);
  container.className = "table table-striped";
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  Object.keys(items[0]).forEach((key) => {
    const headerCell = document.createElement("th");
    headerCell.className = "text-center p-2";
    headerCell.textContent = key.charAt().toUpperCase() + key.slice(1);
    headerRow.appendChild(headerCell);
  });
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  const tableBody = document.createElement("tbody");
  items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.className = "text-center";
    Object.keys(item).forEach((key) => {
      const cell = document.createElement("td");
      cell.className = "p-2";
      cell.textContent = item[key];
      row.appendChild(cell);
      tableBody.appendChild(row);
    });
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-secondary btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      console.log(index, items, elementId);
      const updatedItems = items.splice(index, 1);
      console.log(updatedItems);
      console.log(items);
      container.removeChild(table);
      renderTable(items, elementId);
    });
    const editCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.className = "btn btn-secondary btn-sm";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const editRow = document.createElement("tr");
      editRow.className = "text-center";
      Object.keys(item).forEach((key) => {
        const editCell = document.createElement("td");
        editCell.className = "p-2";
        const editInput = document.createElement("input");
        // editInput.type = "text";
        editInput.value = item[key];
        editCell.appendChild(editInput);
        editRow.appendChild(editCell);
      });
      const saveCell = document.createElement("td");
      const saveButton = document.createElement("button");
      saveButton.className = "btn btn-secondary btn-sm";
      saveButton.textContent = "Save";
      saveButton.addEventListener("click", () => {
        const editInputs = editRow.querySelectorAll("input");
        editInputs.forEach((editInput, i) => {
          item[Object.keys(item)[i]] = editInput.value;
        });
        container.removeChild(table);
        renderTable(items, elementId);
      });
      saveCell.appendChild(saveButton);
      editRow.appendChild(saveCell);
      row.parentNode.insertBefore(editRow, row.nextSibling);
      row.style.display = "none";
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    editCell.appendChild(editButton);
    row.appendChild(editCell);
    table.appendChild(tableBody);
    container.appendChild(table);
  });
}
