
// second template
      var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1L2Mr1hi_1D4o3aKcw3Pdb_CUdg5aDAU1XTPSKFiTHAI&output=html';


  $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         parseNumbers: true } );
      });


	var source0   = $("#navigation-template").html();   //---changed to about-template
        var template0 = Handlebars.compile(source0);
        
      function showInfo(data, tabletop) {
	      
	
	var source0   = $("#navigation-template").html();   //---changed to about-template
        var template0 = Handlebars.compile(source0);
	      
        var source   = $("#about-template").html();   //---changed to about-template
        var template = Handlebars.compile(source);
	      
	var source1   = $("#events-template").html();
        var template1 = Handlebars.compile(source1);
	      // console.log('Slides loaded');
	      
	 $.each( tabletop.sheets('navigation').all(), function(i, data) {       //---changed to about-template
          var html0 = template0(data);                                        //---changed to about-
          $("#content-navigation").append(html0);                                         //---changed to #about-
        });

        $.each( tabletop.sheets('about').all(), function(i, data) {       //---changed to about-template
          var html = template(data);                                        //---changed to about-
          $("#content-aboutlist").append(html);                                         //---changed to #about-
        });
	      
	$.each( tabletop.sheets("events").all(), function(i, events) {
          var html1 = template1(events);
          $("#content-eventlist").append(html1);
        });
      }


    

