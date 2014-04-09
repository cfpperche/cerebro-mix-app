Ext.define('CerebroMix.model.menu.Root', {
    extend: 'Ext.data.Model',

    uses: [
        'CerebroMix.model.menu.Item'
    ],

    idProperty: 'id',

    fields: [{
        name: 'title'
    }, {
        name: 'iconCls'
    }, {
        name: 'id'
    }],

    hasMany: {
        model: 'CerebroMix.model.menu.Item',
        foreignKey: 'menu_id',
        name: 'items'
    }
});
