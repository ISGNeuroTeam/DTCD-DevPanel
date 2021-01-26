import { PanelPlugin } from './../DTCD-SDK';
import pluginRegistrationMeta from './pluginRegistrationMeta';
import DevPanel from './DevPanel';

export class DataCADPlugin extends PanelPlugin {

  static getRegistrationMeta () {
    return pluginRegistrationMeta;
  }

  static register (pluginRegistrator) {
    pluginRegistrator.register(DataCADPlugin.getRegistrationMeta());
  }

  constructor (selector, workPlaceID, VueJS) {
    super();

    const pluginData = { workPlaceID, VueJS };

    new VueJS.default({
      data: () => pluginData,
      render: (h) => h(DevPanel),
    }).$mount(selector);

    this.getRegistrationMeta = DataCADPlugin.getRegistrationMeta;
  }

}
