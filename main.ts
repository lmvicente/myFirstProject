class myFirstProgram {
    constructor(...argArray: Array<any>) {
        this.printArg(argArray);
    }
    printArg(argArray) {
        console.log(argArray);
    }
    runFirst(callback: Function) {
        console.log("This method runs first ...");
    }

    runLast() {
        console.log("This methods runs last!!!");
    }
}
const newInstance = new myFirstProgram("a", "b", "c");