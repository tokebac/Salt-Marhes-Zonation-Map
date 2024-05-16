var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SaltMarsh_1 = new ol.format.GeoJSON();
var features_SaltMarsh_1 = format_SaltMarsh_1.readFeatures(json_SaltMarsh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltMarsh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltMarsh_1.addFeatures(features_SaltMarsh_1);
var lyr_SaltMarsh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltMarsh_1, 
                style: style_SaltMarsh_1,
                popuplayertitle: "Salt Marsh",
                interactive: true,
                title: '<img src="styles/legend/SaltMarsh_1.png" /> Salt Marsh'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SaltMarsh_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SaltMarsh_1];
lyr_SaltMarsh_1.set('fieldAliases', {'Location': 'Location', 'Country': 'Country', 'Zonation': 'Zonation', 'From': 'From', });
lyr_SaltMarsh_1.set('fieldImages', {'Location': 'TextEdit', 'Country': 'TextEdit', 'Zonation': 'ExternalResource', 'From': '', });
lyr_SaltMarsh_1.set('fieldLabels', {'Location': 'header label - always visible', 'Country': 'inline label - always visible', 'Zonation': 'inline label - always visible', 'From': 'no label', });
lyr_SaltMarsh_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});