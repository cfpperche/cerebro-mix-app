Ext.define('CerebroMix.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    requires: [
        'CerebroMix.view.dashboard.Dashboard'
    ],

    activeTab: 0,
    items: [{
        xtype: 'panel',
        closable: false,
        glyph: 'xf108@FontAwesome',
        title: 'Dashboard',
        items: [{
            xtype: 'dashboard'
        }]
    }]
});
