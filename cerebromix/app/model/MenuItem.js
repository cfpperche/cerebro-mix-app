Ext.define('CerebroMix.model.MenuItem', {
    extend: 'Ext.data.Model',

    uses: [
        'CerebroMix.model.MenuRoot'
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
        model: 'CerebroMix.model.MenuRoot',
        foreignKey: 'menu_id'
    }
});
