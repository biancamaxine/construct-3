class Service {

    #runtime;
    #audioManager;
    constructor(runtime) {
        this.#runtime = runtime;
        
        this.#audioManager = runtime.objects.audioManager.createInstance(
            2, 0, 0, false, 'CREATE audioManager'
        );
    }

    get runtime() { return this.#runtime; }

    debug = {
        print: (item) => {
            if (this.runtime.globalVars.debug) console.log(print);
        },
        callback: (callback = () => console.log('runned debug function!')) => {
            if (this.runtime.globalVars.debug) return callback();
        }
    }

    audio = {
        play: (name, tag, folder='Sounds', looping=false, volume=0) => {
            this.#audioManager.instVars.name = name;
            this.#audioManager.instVars.tag = tag;
            this.#audioManager.instVars.folder = folder;
            this.#audioManager.instVars.looping = looping;
            this.#audioManager.instVars.volume = volume;
            
            this.#audioManager.instVars.onPlay = true;
        },
        pause: (tag) => {
            this.#audioManager.instVars.tag = tag;
            
            this.#audioManager.instVars.onPause = true;
        },
        resume: (tag) => {
            this.#audioManager.instVars.tag = tag;
            
            this.#audioManager.instVars.onResume = true;
        }
    }

    random = {
        index: (list) => {
            return Math.floor(Math.random() * list.length);
        },
        item: (list) => {
            return list[this.random.index(list)];
        },
        steal: (list) => {
            const index = this.random.index(list);
            const aux = list[index];

            list.splice(index, 1);

            return aux;
        }
    }

    text = {
        waitTypewriter: (input = {
            instance,
            text,
            timewrite,
            timedelay,
        },
        callback = () => this.debug.print('insert a function callback')) => {
            
            input.instance.typewriteText(text, timewrite);
            return setTimeout(() => {
                callback();
            }, (input.timewrite + input.timedelay) * 1000);

        }
    }
}

export { Service };