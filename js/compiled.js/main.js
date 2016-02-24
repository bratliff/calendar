console.log('from file');

(function () {
  var json = [
  {
    "name":"Dr. Edward Sampson",
    "shortname":"Edward_Sampson",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper velit nunc, eu ornare justo tempor ut. Sed a tellus in ex mattis mollis vel et lorem. Vivamus egestas venenatis tortor vitae lobortis. Aenean lacinia finibus lacinia. Nunc dapibus mauris nunc. Praesent scelerisque, turpis eget elementum blandit, leo nisl maximus metus, id iaculis turpis neque ornare nulla. Aenean non aliquam ligula, nec molestie metus. Morbi tempor tincidunt mi consectetur maximus. Etiam mollis sed nunc quis vehicula. Duis neque purus, laoreet id mattis ac, egestas id nulla. Mauris non elementum neque. Mauris vel enim id quam dapibus volutpat. Curabitur consectetur pellentesque massa. Mauris in hendrerit turpis. Sed laoreet ipsum eget commodo congue. Duis volutpat finibus accumsan."
  },
  {
    "name":"Dr. Jane B. Wissen",
    "shortname":"Jane_Wissen",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper velit nunc, eu ornare justo tempor ut. Sed a tellus in ex mattis mollis vel et lorem. Vivamus egestas venenatis tortor vitae lobortis. Aenean lacinia finibus lacinia. Nunc dapibus mauris nunc. Praesent scelerisque, turpis eget elementum blandit, leo nisl maximus metus, id iaculis turpis neque ornare nulla. Aenean non aliquam ligula, nec molestie metus. Morbi tempor tincidunt mi consectetur maximus. Etiam mollis sed nunc quis vehicula. Duis neque purus, laoreet id mattis ac, egestas id nulla. Mauris non elementum neque. Mauris vel enim id quam dapibus volutpat. Curabitur consectetur pellentesque massa. Mauris in hendrerit turpis. Sed laoreet ipsum eget commodo congue. Duis volutpat finibus accumsan."
  },
  {
    "name":"Dr. Pete Haargard",
    "shortname":"Pete_Haargard",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper velit nunc, eu ornare justo tempor ut. Sed a tellus in ex mattis mollis vel et lorem. Vivamus egestas venenatis tortor vitae lobortis. Aenean lacinia finibus lacinia. Nunc dapibus mauris nunc. Praesent scelerisque, turpis eget elementum blandit, leo nisl maximus metus, id iaculis turpis neque ornare nulla. Aenean non aliquam ligula, nec molestie metus. Morbi tempor tincidunt mi consectetur maximus. Etiam mollis sed nunc quis vehicula. Duis neque purus, laoreet id mattis ac, egestas id nulla. Mauris non elementum neque. Mauris vel enim id quam dapibus volutpat. Curabitur consectetur pellentesque massa. Mauris in hendrerit turpis. Sed laoreet ipsum eget commodo congue. Duis volutpat finibus accumsan."
  },
  {
    "name":"Dr. Harry Malis",
    "shortname":"Harry_Malis",
    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper velit nunc, eu ornare justo tempor ut. Sed a tellus in ex mattis mollis vel et lorem. Vivamus egestas venenatis tortor vitae lobortis. Aenean lacinia finibus lacinia. Nunc dapibus mauris nunc. Praesent scelerisque, turpis eget elementum blandit, leo nisl maximus metus, id iaculis turpis neque ornare nulla. Aenean non aliquam ligula, nec molestie metus. Morbi tempor tincidunt mi consectetur maximus. Etiam mollis sed nunc quis vehicula. Duis neque purus, laoreet id mattis ac, egestas id nulla. Mauris non elementum neque. Mauris vel enim id quam dapibus volutpat. Curabitur consectetur pellentesque massa. Mauris in hendrerit turpis. Sed laoreet ipsum eget commodo congue. Duis volutpat finibus accumsan."
  }
]

  $(document).ready(function () {

    //local call 

    var items = [];
      $.each( json, function(item) {
          items.push( "<li>" +  json[item].name  + "</li>" );
        });

       $( "<ul/>", {
          "class": "the-list",
          html: items.join( "" )
        }).appendTo( ".namelist" );

    //external JSON file

    /*$.getJSON( 'js/data.json', function( data ) {
      var list = data;
      console.log(list[0].name);
      var items = [];
      $.each( data, function(item) {
        items.push( "<li>" +  list[item].name + "<br />" +  list[item].bio  + "</li>" );
      });
     
      $( "<ul/>", {
        "class": "the-list",
        html: items.join( "" )
      }).appendTo( ".namelist" );
    });*/


  });
})();
