import { PanelPlugin } from './../../../DTCD-SDK';
import pluginMeta from './Plugin.Meta';
import DevPanel from './DevPanel';

export class Plugin extends PanelPlugin {

  static getRegistrationMeta () {
    return pluginMeta;
  }

  constructor (guid, selector) {
    super();

    const VueJS = this.getDependence('Vue');
    const data = {
      panelID: `${pluginMeta.name}-${guid}`,
      panelTitle: pluginMeta.title,
      installExtesion: (...args) => this.installPlugin(...args),
      getExtensionList: () => this.getExtensions(pluginMeta.name),
    };

    new VueJS.default({
      data: () => data,
      render: (h) => h(DevPanel),
    }).$mount(selector);
  }

}
