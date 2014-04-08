Ext.Loader.setConfig({
    enabled: true
});

// Ext.setGlyphFontFamily("FontAwesome");

Ext.define('CerebroMix.Application', {
    name: 'CerebroMix',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.menu.Menu',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.data.proxy.Ajax',
        'CerebroMix.view.Viewport'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Main',
        'Menu'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function() {

        // Start the mask on the body and get a reference to the mask
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
        splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

        console.log('init');
    },

    launch: function() {

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        // Ext.widget('login');
                        Ext.create('CerebroMix.view.Viewport');
                    }

                }
            });

            console.log('launch');
        });

        task.delay(1000);

    }

});
