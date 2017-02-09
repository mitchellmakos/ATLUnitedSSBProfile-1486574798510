var http = require('http');
var request = require('request');


module.exports = {
    register: function(req, res) {
        var pg = require('pg');
        var conString = process.env.ELEPHANTSQL_URL || "postgres://admin:UAPPAMUGEEZRACPL@sl-us-dal-9-portal.3.dblayer.com:19416/SSB_Data";
        var client = new pg.Client(conString);
        client.connect(function(err) {
          if(err) {
            return console.error('could not connect to postgres', err);
          }
//          console.log(req.query.email_primary_is_clean_status);
          var ssb_email = req.query.email_primary_is_clean_status;
//          console.log(ssb_email);
          var query_string = "SELECT full_name, email_primary_is_clean_status FROM public.ssb_profile WHERE email_primary_is_clean_status = '" + ssb_email + "'";
//          console.log(query_string);    
          client.query(query_string, function(err, result) {
//          console.log(result.rows[0]);      
            if (result.rows[0] === undefined) {
               res.render('ssb_profile_false');   
            } else {
              var ssb_profile = JSON.stringify(result.rows);   
//              console.log(ssb_profile);  
              res.render('ssb_profile_true', { title: 'User Has SSB', ssb_profile: ssb_profile });    
                    }  
          });
        });
    }
}


//   fawatson@aol.com