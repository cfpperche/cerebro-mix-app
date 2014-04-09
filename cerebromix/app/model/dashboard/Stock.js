Ext.define('CerebroMix.model.dashboard.Stock', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'company'
    }, {
        name: 'price',
        type: 'float'
    }, {
        name: 'revenue %',
        type: 'float'
    }, {
        name: 'growth %',
        type: 'float'
    }, {
        name: 'product %',
        type: 'float'
    }, {
        name: 'market %',
        type: 'float'
    }]
});
