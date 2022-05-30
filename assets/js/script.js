'use strict';
let employeeName = document.getElementById('employeeName');
let employeeDepartment = document.getElementById('employeeDepartment');
let employeeAge = document.getElementById('employeeAge');
let employeeSalary = document.getElementById('employeeSalary');
let employeesData = document.getElementById('employeesData');
let inputs = document.querySelectorAll('.inputs');
let btn_add = document.getElementById('add');
let btn_clear = document.getElementById('clear');
let btn_clearAll = document.getElementById('clearAll');
let search = document.getElementById('search');
let currentIndex = 0;
let employees = [];

if (localStorage.getItem('Employees') == null || localStorage.getItem('Employees') == '') {
  employees = [];
} else {
  employees = JSON.parse(localStorage.getItem('Employees'));
  displayEmployees(employees);
}

// add employee
btn_add.addEventListener('click', function () {
  if (this.innerText == 'Add Employee') {
    addEmployee();
  } else {
    update();
    this.innerText = 'Add Employee';
  }
  displayEmployees(employees);
  clearForm();
});

function addEmployee() {
  const employee = {
    name: employeeName.value,
    department: employeeDepartment.value,
    age: employeeAge.value,
    salary: employeeSalary.value,
  };
  employees.push(employee);
  localStorage.setItem('Employees', JSON.stringify(employees));
}

// display employees
function displayEmployees(employees) {
  let data = ``;
  employees.forEach((employee, id) => {
    data += `<tr>
        <td>${id}</td>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.age}</td>
        <td>${employee.salary}</td>
        <td><button class="update btn" onclick="updateEmployee(${id})"> <i class="fa-regular fa-pen-to-square"></i></button></td>
        <td><button class="delete btn" onclick="deleteEmployee(${id})"> <i class="fa-solid fa-user-xmark"></i></button></td>
        </tr>`;
  });
  employeesData.innerHTML = data;
}

// clear table

btn_clearAll.addEventListener('click', clearTable);

function clearTable() {
  localStorage.removeItem('Employees');
  employees = [];
  employeesData.innerHTML = '';
}

// clear form
btn_clear.addEventListener('click', clearForm);

function clearForm() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// delete item
function deleteEmployee(id) {
  employees.splice(id, 1);
  localStorage.setItem('Employees', JSON.stringify(employees));
  displayEmployees(employees);
}

// Search for specific item by name
search.addEventListener('keyup', searchData);

function searchData() {
  let data = ``;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name.toLowerCase().includes(this.value.toLowerCase())) {
      data += `<tr>
        <td>${i}</td>
        <td>${employees[i].name}</td>
        <td>${employees[i].department}</td>
        <td>${employees[i].age}</td>
        <td>${employees[i].salary}</td>
        <td><button class="update btn" onclick="updateEmployee(${i})"> <i class="fa-regular fa-pen-to-square"></i></button></td>
        <td><button class="delete btn" onclick="deleteEmployee(${i})"> <i class="fa-solid fa-user-xmark"></i></button></td>
        </tr>`;
    }
  }
  /* <td><button class="update btn" onclick="updateEmployee(${id})"> <i class="fa-regular fa-pen-to-square"></i></button></td>
        <td><button class="delete btn" onclick="deleteEmployee(${id})"> <i class="fa-solid fa-user-xmark"></i></button></td> */
  employeesData.innerHTML = data;
}

function updateEmployee(i) {
  let employee = employees[i];
  employeeName.value = employee.name;
  employeeAge.value = employee.age;
  employeeDepartment.value = employee.department;
  employeeSalary.value = employee.salary;
  btn_add.textContent = 'Update Employee';
  currentIndex = i;
}

function update() {
  employees[currentIndex].name = employeeName.value;
  employees[currentIndex].age = employeeAge.value;
  employees[currentIndex].department = employeeDepartment.value;
  employees[currentIndex].salary = employeeSalary.value;
  localStorage.setItem('Employees', JSON.stringify(employees));
}

let reg = new RegExp('^[A-Z][a-z]{2,8}$');
let web = new RegExp('^([2-7][0-9]|80){2}$');
let mob = new RegExp('^("+"|00)(970|972)[0-9]{9}$');
let nx = new RegExp('^(mr)?Ahmad');
let namex = 'Ahmad';
let tested = '+970593050337';
console.log(nx.test(namex));

form.addEventListener('click', function (e) {
  e.preventDefault();
});
