import { EventEmitter } from 'events';

class Utils extends EventEmitter {
  constructor() {
		super();
    this.input = 0;
	}

  get curInput() {
    return this.input;
  }

  set newInput(str) {
    let curInput = str,
      oldInput = this.curInput;

    this.input = curInput;
    this.emit('output', [this.curInput]);
  }
};

export default new Utils();
