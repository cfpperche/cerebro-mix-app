/*Ext.define('CerebroMix.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'CerebroMix.model.MenuRoot'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MenuStore',
            model: 'CerebroMix.model.MenuRoot',
            proxy: {
                type: 'ajax',
                url: 'data/menu.json',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        }, cfg)]);
    }
});*/
Ext.define('CerebroMix.store.Menu', {
    extend: 'Ext.data.Store',
    requires: [
        'CerebroMix.model.menu.Root'
    ],
    model: 'CerebroMix.model.menu.Root',
    proxy: {
        type: 'ajax',
        url: 'data/menu.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
