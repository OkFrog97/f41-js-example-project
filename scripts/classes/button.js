export class FormButton {
    elLink = null;
    
    constructor (id){
        this.elLink = document.getElementById(id);
    }
    
    onClick(clickCallback) {
        this.elLink.addEventListener("click", clickCallback);
    }
}