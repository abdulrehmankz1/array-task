// create a student array
const students = [
    { name: 'Ali', age: 15, class: '8th' },
    { name: 'Taha', age: 19, class: '9th' },
    { name: 'Saad', age: 20, class: '10th' }
];

// create a teacher array
const teachers = [
    { name: 'Sir Ahmed', age: 21, subject: 'English' },
    { name: 'Sir Rehan', age: 22, subject: 'Math' },
    { name: 'Sir Atif', age: 23, subject: 'Urdu' }
];



// Function to render table
function renderTable() {
    // Get table element
    const table = document.getElementById('table');

    // Create table header
    const headers = ['Name', 'Age', 'Class/Subject'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const header = document.createElement('th');
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Add student rows
    students.forEach(student => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const nameText = document.createTextNode(student.name);
        nameCell.appendChild(nameText);
        row.appendChild(nameCell);
        const ageCell = document.createElement('td');
        const ageText = document.createTextNode(student.age);
        ageCell.appendChild(ageText);
        row.appendChild(ageCell);
        const classCell = document.createElement('td');
        const classText = document.createTextNode(student.class);
        classCell.appendChild(classText);
        row.appendChild(classCell);
        table.appendChild(row);
    });

    // Add teacher rows
    teachers.forEach(teacher => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const nameText = document.createTextNode(teacher.name);
        nameCell.appendChild(nameText);
        row.appendChild(nameCell);
        const ageCell = document.createElement('td');
        const ageText = document.createTextNode(teacher.age);
        ageCell.appendChild(ageText);
        row.appendChild(ageCell);
        const subjectCell = document.createElement('td');
        const subjectText = document.createTextNode(teacher.subject);
        subjectCell.appendChild(subjectText);
        row.appendChild(subjectCell);

        table.appendChild(row);
    });
}

// Call renderTable function
renderTable();

