Ext.define('CerebroMix.model.menu.Item', {
    extend: 'Ext.data.Model',

    uses: [
        'CerebroMix.model.menu.Root'
    ],

    idProperty: 'id',

    fields: [{
        name: 'text'
    }, {
        name: 'iconCls'
    }, {
        name: 'className'
    }, {
        name: 'id'
    }, {
        name: 'menu_id'
    }],

    belongsTo: {
        model: 'CerebroMix.model.menu.Root',
        foreignKey: 'menu_id'
    }
});
