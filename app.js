// Student Registration Module
const students = [];

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("studentCourse").value.trim();

    if (students.some(student => student.id === id)) {
        alert("Student ID already exists!");
        return;
    }

    students.push({ id, name, course });

    const li = document.createElement("li");
    li.textContent = `${id} - ${name} - ${course}`;

    document.getElementById("studentList").appendChild(li);

    registrationForm.reset();
    alert("Student registered successfully!");
});