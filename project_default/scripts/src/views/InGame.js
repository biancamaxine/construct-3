import { Service } from "./Service.js";

class InGame {

    #runtime;
    #service;
    constructor(runtime) {
        this.#runtime = runtime;
        this.#service = new Service(runtime);
    }

    get runtime() { return this.#runtime; }

    init() {
        
    }
}

export { InGame }