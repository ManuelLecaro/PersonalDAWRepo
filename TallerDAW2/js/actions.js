/*request para twirrs y hacer busqueda de tweets*/

function loadNewsXML(search_item){
  $.ajax({
    type: "GET",
    url: "http://twitrss.me/twitter_search_to_rss/?term="+search_item.toString(),
    datatype: "xml",
    success: function(xml){
      $(xml).find("item").each(function(){
          var title= $(this).find("titulo").text();
          var dc_creator= $(this).find("dc:creator").text();
          var description= $(this).find("descripcion").text();
          var pubDate= $(this).find("pubDate").text();
          var guid=$(this).find("guid").text();
          var link=$(this).find("link").text();

          addNew(title,dc_creator,description,pubDate,link);

      });
    },
    error: function() {
        alert("Error al procesar el xml");
    }

  });
}
function addNew(){

}

$(document).ready(function(){
  $("a.btn").click(function(e){
    
  })
});
