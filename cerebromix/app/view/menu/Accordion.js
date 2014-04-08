Ext.define('CerebroMix.view.menu.Accordion', {
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
    iconCls: 'sitemap',
    title: 'Menu'
});
