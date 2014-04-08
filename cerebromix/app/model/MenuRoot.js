Ext.define('CerebroMix.model.MenuRoot', {
    extend: 'Ext.data.Model',

    uses: [
        'CerebroMix.model.MenuItem'
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
        model: 'CerebroMix.model.MenuItem',
        foreignKey: 'menu_id',
        name: 'items'
    }
});
