(function () {
  

  $(document).ready(function () {
    //local call 

    /*var items = [];
      $.each( json, function(item) {
          items.push( "<li>" +  json[item].name  + "</li>" );
        });

       $( "<ul/>", {
          "class": "the-list",
          html: items.join( "" )
        }).appendTo( ".namelist" );*/

    //external JSON file

    $.getJSON( 'js/data.json', function( data ) {
      var list = data;
      var appts = [];
      $.each( data, function(item) {
        var appt = [];
        appt.push(list[item].customer,list[item].date,list[item].event,list[item].length);
        appts.push(appt);  
      });

      console.log(appts);
    
    });

    // these are labels for the days of the week
var days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// these are human-readable month name labels, in order
var month_labels = ['January', 'February', 'March', 'April',
                     'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December'];

// these are the days of the week for each month, in order
var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;
$('.thisweek').html(today);

var day_of_week = today.getDay(); 




  });
})();
