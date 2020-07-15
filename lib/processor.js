// import * as log from 'loglevel';

// const contracts_1 = require("../../contracts");
exports.MockProcessor = exports.MockProcessorUUID = void 0;
exports.MockProcessorUUID = 'c1d4d4ea-1e8c-4497-98c9-76eeac70a786';
class MockProcessor {
  constructor() {
    this.uuid = exports.MockProcessorUUID;
    this.id = 'EXAMPLE-MOCK-JS';
    this.label = 'Example Mock Processor (JS)';
    this.description = '';
    this.state = 0; // contracts_1.ProcessorState.stopped;
    this.initialState = 0; //contracts_1.ProcessorState.stopped;
    this.initialConfiguration = { data: undefined, version: '' };
    this.profiles = [];
  }

  get context() {
    if (this._context) {
      return this._context;
    } else {
      throw new Error('init not called');
    }
  }

  get configuration() {
    return this.context.configuration.data;
  }

  init(_context) {
    this._context = context;
  }

  async start() {
    // throw new Error('Method not implemented.');
  }

  async stop() {
    // throw new Error('Method not implemented.');
  }

  async systemReady() {
    // throw new Error('Method not implemented.');
  }
}

exports.MockProcessor = MockProcessor;
