Ext.define('CerebroMix.view.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'CerebroMix.view.Header',
        'CerebroMix.view.Footer',
        'CerebroMix.view.menu.MainMenu',
        'CerebroMix.view.MainPanel'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },


    items: [{
            region: 'north',
            xtype: 'appheader'
        }, {
            region: 'south',
            xtype: 'appfooter'
        }, {
            xtype: 'mainmenu',
            collapsible: true,
            region: 'west'
        },
        /*{
        region: 'east',
        xtype: 'container',
        minWidth: 250,
        collapsible: true,
        // style: 'background-color: #e5e5e5;'

    },*/
        {
            xtype: 'mainpanel',
            region: 'center'
        }
    ]

});
