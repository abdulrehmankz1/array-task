// // create a teacher array
// const teachers = [
//     { name: 'Sir Ahmed', age: 21, subject: 'English' },
//     { name: 'Sir Rehan', age: 22, subject: 'Math' },
//     { name: 'Sir Atif', age: 23, subject: 'Urdu' }
// ];

const students = [
  { name: "Ali", age: 15, class: "8th" },
  { name: "Taha", age: 19, class: "9th" },
  { name: "Saad", age: 20, class: "10th" },
];

function renderTable() {
  const table = document.getElementById("table");
  const tableBody = document.createElement("tbody")
  table.className = "table table-striped";
  const headerRow = document.createElement("tr");
  Object.keys(students[0]).forEach((key) => {
      const headerCell = document.createElement("th");
      headerCell.className = "text-center p-2";
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);
  students.forEach((student) => {
      const row = document.createElement("tr");
      row.className = "text-center  ";
      Object.keys(student).forEach((key) => {
          const cell = document.createElement("td");
          cell.className = "p-2  ";
          cell.textContent = student[key];
          row.appendChild(cell);
          tableBody.appendChild(row)
      });
      table.appendChild(tableBody);
  });
}
renderTable();