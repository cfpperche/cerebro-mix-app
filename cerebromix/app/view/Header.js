Ext.define('CerebroMix.view.Header', {
    extend: 'Ext.container.Container',

    requires: [
        'CerebroMix.view.toolbar.Toolbar'
    ],

    alias: 'widget.appheader',
    id: 'app-header',
    height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        id: 'app-header-title',
        html: 'Cerebro Mix',
        flex: 1
    }, {
        xtype: 'apptoolbar',
        id: 'app-header-toolbar',
        flex: 6
    }]
});
