const args  =  require('yargs');

const notes = require("./notes");


args.command({
    command:'add',
    describe:"Add Command",
    builder:{
        title:{
            describe:'Notes title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Notes body',
            type:'string'
        },
    },
    handler: function(args){
        notes.addNotes(args);
    }
})

args.command({
    command:'remove',
    describe:"remove Command",
    builder:{
        title:{
            describe:'Selection text for delete',
            type:'string',
            demandOption:true
        },
        id:{
           describe:'Selection text for delete',
           type:'string' || 'number'
        }
    },
    handler: function(args){
        notes.removeNote(args.title)
    }
});

args.command({
    command:'list',
    describe:'Note listing command',
    handler: function(){
        console.log("listing the notes")
    }
});


args.command({
    command:'read',
    describe:'Note reading command',
    handler: function(){
        console.log("reading the notes")
    }
})

args.parse();


