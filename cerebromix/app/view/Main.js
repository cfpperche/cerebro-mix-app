Ext.define('CerebroMix.view.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'CerebroMix.view.Header',
        'CerebroMix.view.Footer',
        'CerebroMix.view.menu.Accordion',
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
            // width: 185,
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
