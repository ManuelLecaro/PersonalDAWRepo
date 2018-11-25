/*request para twirrs y hacer busqueda de tweets*/

function loadNewsXML(search_item){
  $.ajax({
    type: "GET",
    url: "http://twitrss.me/twitter_search_to_rss/?term="+search_item,
    datatype: "xml",
    success: function(xml){
      $(xml).find('item').each(function(){
          var title= $(this).find('titulo').text();
          var dc_creator= $(this).find('dc\\:creator').text();
          var description= $(this).find('description').text();
          var pubDate= $(this).find('pubDate').text();
          var guid=$(this).find('guid').text();

          addNew(title,dc_creator,description,pubDate);

      });
    },
    error: function() {
        alert("Error al procesar el xml");
    }

  });
}
function addNew(title, dc_creator, description, pubDate){
  var titulo = $("<h5/>",{
    "class": "font-weight-bold ",
    html:dc_creator+" dijo:"
  });
  var content = $("<p/>",{
    "class":"text-left ",
    html:description
  });
  var pubDate = $("<p/>",{
    "class": "font-italic text-right",
    html:pubDate
  });
  var div = $("<div/>",{
    "class":"col-10 col-md-10 border-top border-info"
  });
  var divimg = $("<div/>",{
    "class":"col-2 col-md-2 border-top border-info"
  });
  var ima = $("<img/>",{
    "class":"img-fluid rounded w-100",
    "src":"./img/logo.png",
    "alt": "logo twitter"
  });

  ima.appendTo(divimg);
  titulo.appendTo(div);
  content.appendTo(div);
  pubDate.appendTo(div);
  divimg.appendTo("div#tweets");
  div.appendTo("div#tweets");

}

$(document).ready(function(){
  $("button").click(function(e){
    var text = $('input#searcher').val();
    if(text.length != 0){
      $("div#tweets").empty();
      $("div#textobuscado").html(text);
      loadNewsXML(text);
    }
  })
});
