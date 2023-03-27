import { StudentDTO } from "./student.js";
import { FacultySingleton } from "./faculty.js"

export class Form {
    constructor(formName){
        this.form = document.forms[formName];
    }

    getStudent() {
        const f = new FacultySingleton();
        let name;
        let faculty;
        let rate;
        for (let el of this.form.elements) {
            if (el.name === 'name') {
                name = el.value;
            }
            if (el.name === 'faculty') {
                faculty = f.getFaculty(el.value);
            }
            if (el.name === 'rate') {
                rate = el.value;
            }
        }
        this.form.reset();
        return new StudentDTO(name, faculty, rate);
    }
}