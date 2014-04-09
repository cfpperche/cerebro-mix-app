Ext.define('CerebroMix.view.Footer', {
    extend: 'Ext.container.Container',

    alias: 'widget.appfooter',
    id: 'app-footer',
    height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        id: 'app-footer-content',
        html: '© 2014 Cerebro Engenharia',
        flex: 1
    }]
});
