var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_cat_aceite_0 = new ol.format.GeoJSON();
var features_cat_aceite_0 = format_cat_aceite_0.readFeatures(json_cat_aceite_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cat_aceite_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cat_aceite_0.addFeatures(features_cat_aceite_0);var lyr_cat_aceite_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cat_aceite_0, 
                style: style_cat_aceite_0,
                title: '<img src="styles/legend/cat_aceite_0.png" /> cat_aceite'
            });

lyr_cat_aceite_0.setVisible(true);
var layersList = [baseLayer,lyr_cat_aceite_0];
lyr_cat_aceite_0.set('fieldAliases', {'Categoría': 'Categoría', 'Tipología': 'Tipología', 'Tipolog�_1': 'Tipolog�_1', 'Tipolog�_2': 'Tipolog�_2', 'Tipolog�_3': 'Tipolog�_3', 'Tipolog�_4': 'Tipolog�_4', 'Nombre': 'Nombre', 'Descripci�': 'Descripci�', 'Temporada': 'Temporada', 'Fecha': 'Fecha', 'Certificac': 'Certificac', 'Nivel de i': 'Nivel de i', 'Nivel de f': 'Nivel de f', 'Dirección': 'Dirección', 'y': 'y', 'x': 'x', 'Población': 'Población', 'Código po': 'Código po', 'Delimitaci': 'Delimitaci', 'Delimita_1': 'Delimita_1', 'Delimita_2': 'Delimita_2', 'Delimita_3': 'Delimita_3', 'Delimita_4': 'Delimita_4', 'Producto1': 'Producto1', 'Producto2': 'Producto2', 'Producto3': 'Producto3', 'Producto4': 'Producto4', 'Producto5': 'Producto5', 'Comarca1': 'Comarca1', 'Comarca2': 'Comarca2', 'Comarca3': 'Comarca3', 'Comarca4': 'Comarca4', 'Comarca5': 'Comarca5', 'Comarca6': 'Comarca6', 'Comarca7': 'Comarca7', 'Elaborado': 'Elaborado', 'Paisaje': 'Paisaje', 'Provincia': 'Provincia', });
lyr_cat_aceite_0.set('fieldImages', {'Categoría': 'TextEdit', 'Tipología': 'TextEdit', 'Tipolog�_1': 'TextEdit', 'Tipolog�_2': 'TextEdit', 'Tipolog�_3': 'TextEdit', 'Tipolog�_4': 'TextEdit', 'Nombre': 'TextEdit', 'Descripci�': 'TextEdit', 'Temporada': 'TextEdit', 'Fecha': 'TextEdit', 'Certificac': 'TextEdit', 'Nivel de i': 'TextEdit', 'Nivel de f': 'TextEdit', 'Dirección': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'Población': 'TextEdit', 'Código po': 'TextEdit', 'Delimitaci': 'TextEdit', 'Delimita_1': 'TextEdit', 'Delimita_2': 'TextEdit', 'Delimita_3': 'TextEdit', 'Delimita_4': 'TextEdit', 'Producto1': 'TextEdit', 'Producto2': 'TextEdit', 'Producto3': 'TextEdit', 'Producto4': 'TextEdit', 'Producto5': 'TextEdit', 'Comarca1': 'TextEdit', 'Comarca2': 'TextEdit', 'Comarca3': 'TextEdit', 'Comarca4': 'TextEdit', 'Comarca5': 'TextEdit', 'Comarca6': 'TextEdit', 'Comarca7': 'TextEdit', 'Elaborado': 'TextEdit', 'Paisaje': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_cat_aceite_0.set('fieldLabels', {'Categoría': 'no label', 'Tipología': 'no label', 'Tipolog�_1': 'no label', 'Tipolog�_2': 'no label', 'Tipolog�_3': 'no label', 'Tipolog�_4': 'no label', 'Nombre': 'no label', 'Descripci�': 'no label', 'Temporada': 'no label', 'Fecha': 'no label', 'Certificac': 'no label', 'Nivel de i': 'no label', 'Nivel de f': 'no label', 'Dirección': 'no label', 'y': 'no label', 'x': 'no label', 'Población': 'no label', 'Código po': 'no label', 'Delimitaci': 'no label', 'Delimita_1': 'no label', 'Delimita_2': 'no label', 'Delimita_3': 'no label', 'Delimita_4': 'no label', 'Producto1': 'no label', 'Producto2': 'no label', 'Producto3': 'no label', 'Producto4': 'no label', 'Producto5': 'no label', 'Comarca1': 'no label', 'Comarca2': 'no label', 'Comarca3': 'no label', 'Comarca4': 'no label', 'Comarca5': 'no label', 'Comarca6': 'no label', 'Comarca7': 'no label', 'Elaborado': 'no label', 'Paisaje': 'no label', 'Provincia': 'no label', });
lyr_cat_aceite_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});