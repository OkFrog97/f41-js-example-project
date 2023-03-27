/**
 * План на Занятие:
 * 1. Сделать абстрактный класс "Форма";
 * 2. Посмотреть на реализацию класса "Факультет";
 * 3. Создать класс "Хранилище";
 */

import { StudentTable } from "./classes/table.js";
import { StudentDTO } from "./classes/student.js";
import { FormButton } from "./classes/button.js";
import { Form } from "./classes/form.js";
import { Storage } from "./classes/storage.js";

document.addEventListener("DOMContentLoaded", () => {
    // Создаем таблицу
    const table = new StudentTable('table-section');
    table.createTable();

    // Инициализируем форму;
    const studentsForm = new Form('studentsForm');
    
    // Проверяем хранилище;
    const storage = new Storage();
    const savedStudents = storage.getItem('students');
    if (Array.isArray(savedStudents)) {
        savedStudents.forEach((student) => {
            table.addRow(student)
        })
    }
    
    // Создаем кнопку "Добавить"
    const addButton = new FormButton('addBtn');
    // Добавляем реакцию на клик "Добавить"
    addButton.onClick(
        (event) => {
            const student = studentsForm.getStudent();
            storage.setItem('students', student)
            table.addRow(student);
    });
    
    // Создаем кнопку "Удалить"
    const deleteButton = new FormButton('deleteBtn');
    // Добавляем реакцию на клик "Удалить"
    deleteButton.onClick(
        (event) => {
           table.deleteLastRow();
    });
});