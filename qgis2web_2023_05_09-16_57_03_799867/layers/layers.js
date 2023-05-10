var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Veterinaris_1 = new ol.format.GeoJSON();
var features_Veterinaris_1 = format_Veterinaris_1.readFeatures(json_Veterinaris_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Veterinaris_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veterinaris_1.addFeatures(features_Veterinaris_1);
var lyr_Veterinaris_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Veterinaris_1, 
                style: style_Veterinaris_1,
                interactive: true,
                title: '<img src="styles/legend/Veterinaris_1.png" /> Veterinaris'
            });
var format_Tendes_2 = new ol.format.GeoJSON();
var features_Tendes_2 = format_Tendes_2.readFeatures(json_Tendes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tendes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tendes_2.addFeatures(features_Tendes_2);
var lyr_Tendes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tendes_2, 
                style: style_Tendes_2,
                interactive: true,
                title: '<img src="styles/legend/Tendes_2.png" /> Tendes'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Veterinaris_1.setVisible(true);lyr_Tendes_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Veterinaris_1,lyr_Tendes_2];
lyr_Veterinaris_1.set('fieldAliases', {'Quali': 'Quali', 'nom': 'nom', });
lyr_Tendes_2.set('fieldAliases', {'Nom': 'Nom', 'quali': 'quali', });
lyr_Veterinaris_1.set('fieldImages', {'Quali': 'TextEdit', 'nom': 'TextEdit', });
lyr_Tendes_2.set('fieldImages', {'Nom': '', 'quali': '', });
lyr_Veterinaris_1.set('fieldLabels', {'Quali': 'inline label', 'nom': 'inline label', });
lyr_Tendes_2.set('fieldLabels', {'Nom': 'inline label', 'quali': 'inline label', });
lyr_Tendes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});