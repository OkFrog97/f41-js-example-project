export class StudentTable {
    
    tableBody = null;
    rowCount = 0;
    
    /** elementId - строка, представляющее собой id элемента, в который мы поместим таблицу 
     * @param {string} elementId
    */
    constructor(elementId) {
        this.elementId = elementId;
    }

    createTable() {
        const table = document.createElement('table');
        table.classList = "table table-striped";
        const head = document.createElement('thead');
        head.innerHTML = `
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Факультет</th>
            <th scope="col">Средний балл</th>
            <th scope="col">Стипендия</th>
        </tr>`;
        table.appendChild(head);
        this.tableBody = document.createElement('tbody');
        table.appendChild(this.tableBody);
        document.getElementById(this.elementId).appendChild(table);
    }

    /**
     * Добавить строку
     * @param {StudentDTO} student
     */
    addRow(student) {
        this.rowCount += 1;
        const newRow = document.createElement('tr');
        newRow.id = `row_${this.rowCount}`
        newRow.innerHTML = `
        <th scope="row">${this.rowCount}</th>
        <td>${student.name}</td>
        <td>${student.faculty}</td>
        <td>${student.rate}</td>
        <td>${4 <= student.rate ? 'Есть' : 'Нет'}</td>
        `;
        this.tableBody.appendChild(newRow);
    }

    /**
     * Удалить последнуюю строку;
     */
    deleteLastRow() {
        if (0 < this.rowCount) {
            this.tableBody.removeChild(document.getElementById(`row_${this.rowCount}`))
            this.rowCount -= 1;
        }
    }
}