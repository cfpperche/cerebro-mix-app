Ext.define('CerebroMix.view.toolbar.Toolbar', {

    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.apptoolbar',

    requires: [
        'CerebroMix.view.Translation'
    ],

    height: 50,
    // ui: 'footer',
    // style: 'border-bottom: 4px solid #4c72a4;',

    items: [{
        xtype: 'tbfill'
    }, {
        xtype: 'translation'
    }, {
        xtype: 'tbseparator'
    }, {
        xtype: 'button',
        text: 'Logout',
        itemId: 'logout',
        // cls: 'logout',
        // iconCls: 'logout',
        glyph: 'xf011@FontAwesome; color:red;'
    }]
});
