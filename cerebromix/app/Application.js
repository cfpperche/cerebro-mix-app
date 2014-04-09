Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', 'app/ux');

/*
 * BUG: suspentEvents not honoured in Ext.app.EventBus
 *
 * note: this fix does not queue events when asked.
 *
 * http://www.sencha.com/forum/showthread.php?171525
 */
Ext.syncRequire('Ext.app.EventBus');
Ext.override(Ext.app.EventBus, {
    constructor: function() {
        this.mixins.observable.constructor.call(this);


        this.bus = {};


        var me = this;
        Ext.override(Ext.Component, {
            fireEvent: function(ev) {
                // [
                // --
                //              if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false) {
                // ++
                if (Ext.util.Observable.prototype.fireEvent.apply(this, arguments) !== false && !this.eventsSuspended) {
                    // ]
                    return me.dispatch.call(me, ev, this, arguments);
                }
                return false;
            }
        });
    }
});


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
        'Ext.form.Label',
        'CerebroMix.view.Viewport'
    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Main',
        'Menu',
        'TranslationManager'
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
