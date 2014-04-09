Ext.define('CerebroMix.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    alias: 'widget.dashboard',


    layout: 'fit',

    requires: [
        'CerebroMix.view.dashboard.StockForm',
        'CerebroMix.view.dashboard.StockGrid',
        'CerebroMix.view.dashboard.StockBar',
        'CerebroMix.view.dashboard.StockRadar'
    ],

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'stockform'
            }]
        });

        me.callParent(arguments);
    }

});
