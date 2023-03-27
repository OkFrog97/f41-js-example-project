export class StudentDTO {
    constructor(name, faculty, rate) {
        /** ФИО */
        this.name = name;
        /** Факультет */
        this.faculty = faculty;
        /** Средний балл */
        this.rate = rate;
    }
}