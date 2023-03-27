export class Storage {
    storage = window.localStorage;

    setItem(key, value) {
        const oldStudents = JSON.parse(this.storage.getItem(key));
        const savedData = oldStudents ? [...oldStudents, value] : [value]
        const stringifiedValue = JSON.stringify(savedData);
        this.storage.setItem(key, stringifiedValue);
    }

    getItem(key) {
        return JSON.parse(this.storage.getItem(key));
    }
}