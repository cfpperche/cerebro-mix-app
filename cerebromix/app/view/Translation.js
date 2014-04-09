Ext.define('CerebroMix.view.Translation', {
    extend: 'Ext.button.Split',
    alias: 'widget.translation',

    menu: {
        items: [{
            xtype: 'menuitem',
            iconCls: 'en',
            text: 'English'
        }, {
            xtype: 'menuitem',
            iconCls: 'es',
            text: 'Español'
        }, {
            xtype: 'menuitem',
            iconCls: 'pt_BR',
            text: 'Português'
        }]
    }
});
