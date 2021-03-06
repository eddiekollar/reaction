import { Reaction } from "/server/api";

export default function () {
  Reaction.registerPackage({
    label: "i18n",
    name: "reaction-i18n",
    icon: "fa fa-language",
    autoEnable: true,
    settings: {
      name: "i18n"
    },
    registry: [{
      provides: "dashboard",
      template: "i18nDashboard",
      label: "i18n",
      description: "Internationalization utilities",
      icon: "fa fa-language",
      priority: 1,
      container: "utilities"
    }, {
      provides: "settings",
      template: "i18nSettings",
      label: "Localization and i18n",
      container: "reaction-i18n"
    }]
  });
}
