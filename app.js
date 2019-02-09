var lexrank = require('lexrank');
const fs = require('fs');

  
       fs.readFile('article.txt', (err,result) =>{
            if(err)
            {
                console.log(err);
            }
        var originalText = result.toString();
        var topLines = lexrank.summarize(originalText, 3, function (err, toplines, text) {
            if (err) {
              console.log(err);
            }
            console.log(toplines);
            for(var i =0; i < toplines.length; i++)
            {
            fs.appendFileSync('notes.txt',toplines[i].text.toString());
            }
          });
          
        });


