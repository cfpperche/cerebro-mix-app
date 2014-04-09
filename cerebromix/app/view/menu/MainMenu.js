Ext.define('CerebroMix.view.menu.MainMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainmenu',
    width: 300,
    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true,
        activeOnTop: false
    },
    split: true,
    collapsible: true,
    hideCollapseTool: false,
    glyph: 'xf015@FontAwesome',
    title: 'Menu'
});
