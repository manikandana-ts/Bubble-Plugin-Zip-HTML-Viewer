function(instance, properties, context) {
	var textname = "zip_"+properties.zip_viewer_id;
    var zippath  = encodeURI(properties.zip_file_url.match(/([^\/]+)(?=\.\w+$)/)[0])+'/';
    var url_params  = '&mainfile=https://s3.amazonaws.com/appforest_uf/f1610088118391x565379335128634700/'+zippath+(properties.main_file_name ? properties.main_file_name : 'index.html');
	if(!instance.data.created){
      instance.data.created=true;
      var pdfviewer_ele = $('<iframe class="iframecontent" id="'+textname+'" src="https://s3.amazonaws.com/appforest_uf/f1610103688931x689941290568185900/zipviewer-dynamic.html?ZipPath='+properties.zip_file_url+url_params+'" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>');
      instance.canvas.append(pdfviewer_ele);
    }else{
        $('#'+textname).attr('src', "https://s3.amazonaws.com/appforest_uf/f1610103688931x689941290568185900/zipviewer-dynamic.html?ZipPath="+properties.zip_file_url+url_params);
    }

}