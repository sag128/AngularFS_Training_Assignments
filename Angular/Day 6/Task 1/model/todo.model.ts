export class Todo {
    title:string;
    done:boolean;
    isEditMode:boolean;
    
    constructor(title:string,done:boolean,isEditMode:boolean) {
        this.title = title;
        this.done = done;
        this.isEditMode = isEditMode;
    }
}