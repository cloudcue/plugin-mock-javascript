const processor_1 = require('./processor');

exports.MockPlugin = exports.MockPluginUUID = void 0;
exports.MockPluginUUID = '2bf43fcc-50ac-4101-9740-65c207efa5ca';
class MockPlugin {
  constructor() {
    this.uuid = exports.MockPluginUUID;
    this.id = 'EXAMPLE-MOCK-JS';
    this.label = 'Example Mock Plugin (JS)';
    this.description = '';
    this.initialConfiguration = { data: { myNumber: 99 }, version: '1' };
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

  createObject(uuid) {
    switch (uuid) {
      case processor_1.MockProcessorUUID:
        return new processor_1.MockProcessor();
    }
    return undefined;
  }

  init(context) {
    this._context = context;
  }

  install(installer) {
    installer.addProcessor(new processor_1.MockProcessor());
  }

  uninstall() {
    log.info('   ~ Mock Plugin Remove');
  }
}

exports.MockPlugin = MockPlugin;
