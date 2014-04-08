Ext.define('CerebroMix.view.Header', {
    extend: 'Ext.container.Container',

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
        xtype: 'component',
        flex: 6
    }]
});
