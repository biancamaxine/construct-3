import { InGame } from './InGame.js';
import { OutGame } from './OutGame.js';

let js;

class ImportForEvents {

    #runtime;
    #page;

    constructor(runtime) {
        this.#runtime = runtime;
    }

    get runtime() { return this.#runtime; }
    get page() { return this.#page; }

    onStartLayout() {
        const { name } = this.#runtime.layout;

        switch(name) {
            case 'game':
                this.#page = new InGame(this.runtime);
                break
            default:
                this.#page = new OutGame(this.runtime);
        }

        return this.page.init();
    }
}

export { ImportForEvents }