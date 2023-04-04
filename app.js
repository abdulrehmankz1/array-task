// // create a teacher array
// const teachers = [
//     { name: 'Sir Ahmed', age: 21, subject: 'English' },
//     { name: 'Sir Rehan', age: 22, subject: 'Math' },
//     { name: 'Sir Atif', age: 23, subject: 'Urdu' }
// ];

// const students = [
//     { name: "Ali", age: 15, class: "8th" },
//     { name: "Taha", age: 19, class: "9th" },
//     { name: "Saad", age: 20, class: "10th" },
// ];

// function renderTable() {
//     const table = document.getElementById("table");
//     const tableBody = document.createElement("tbody")
//     table.className = "table table-striped";
//     const headerRow = document.createElement("tr");
//     Object.keys(students[0]).forEach((key) => {
//         const headerCell = document.createElement("th");
//         headerCell.className = "text-center p-2";
//         headerCell.textContent = key;
//         headerRow.appendChild(headerCell);
//     });
//     table.appendChild(headerRow);
//     students.forEach((student) => {
//         const row = document.createElement("tr");
//         row.className = "text-center  ";
//         Object.keys(student).forEach((key) => {
//             const cell = document.createElement("td");
//             cell.className = "p-2  ";
//             cell.textContent = student[key];
//             row.appendChild(cell);
//             tableBody.appendChild(row)
//         });
//         table.appendChild(tableBody);
//     });
// }
// renderTable();

// function renderTable(items, elementId) {
//   const container = document.getElementById(elementId);
//   container.className = "table table-striped";
//   const table = document.createElement("table");
//   const tableHead = document.createElement("thead");
//   const headerRow = document.createElement("tr");
//   Object.keys(items[0]).forEach((key) => {
//     const headerCell = document.createElement("th");
//     headerCell.className = "text-center p-2";
//     headerCell.textContent = key.charAt().toUpperCase() + key.slice(1);
//     headerRow.appendChild(headerCell);
//   });
//   tableHead.appendChild(headerRow);
//   table.appendChild(tableHead);

//   const tableBody = document.createElement("tbody");
//   items.forEach((item) => {
//     const row = document.createElement("tr");
//     row.className = "text-center";
//     Object.keys(item).forEach((key) => {
//       const cell = document.createElement("td");
//       cell.className = "p-2";
//       cell.textContent = item[key];


//       row.appendChild(cell);
//       tableBody.appendChild(row);
//     });
//     const deleteCell = document.createElement("td");
//     const deleteButton = document.createElement("button");
//     deleteButton.className = "btn btn-secondary btn-sm";
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => {
//       tableBody.removeChild(row);
//     });
//     deleteCell.appendChild(deleteButton);
//     row.appendChild(deleteCell);
//     table.appendChild(tableBody);
//     container.appendChild(table);
//   });
// }

function renderTable(items, elementId) {
  const container = document.getElementById(elementId);
  container.className = "table table-striped";
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  Object.keys(items[0]).forEach((key) => {
    const headerCell = document.createElement("th");
    headerCell.className = "text-center p-2"; ``
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

      // remove table body cell
      // cell.addEventListener("click", () => {
      //   cell.parentNode.removeChild(cell);
      //   console.log(cell)
      // });

      row.appendChild(cell);
      tableBody.appendChild(row);
    });
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-secondary btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      // tableBody.removeChild(row);
      console.log(index);
      console.log(items);


    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    table.appendChild(tableBody);
    container.appendChild(table);
  });
}



const students = [
  { name: "Ali", age: 15, class: "8th", subject: "Arabic" },
  { name: "Taha", age: 19, class: "9th", subject: "Urdu" },
  { name: "Saad", age: 20, class: "10th", subject: "Eng" },
  { name: "Taha", age: 19, class: "9th", subject: "Math" },
];
renderTable(students, "students-table");

const teachers = [
  { name: "Sir  Ali", age: 15, class: "8th" },
  { name: "Sir Taha", age: 19, class: "9th" },
  { name: "Sir Saad", age: 20, class: "10th" },
  { name: "Sir Taha", age: 19, class: "9th" },
];
renderTable(teachers, "teachers-table");
