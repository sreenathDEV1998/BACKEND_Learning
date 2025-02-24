const fs = require('fs');
let counter = 0;
const getNotes = function () {

}

const removeNote = (title,id) => {
    let data = loadData()
    let index = data.findIndex(item=>item.title == title || item.id == id);
    if(index > -1){
        data.splice(index,1);
        fs.writeFileSync('../mydata.json',JSON.stringify(data),function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    console.log(data,"data",title)
}

const addNotes = function (args) { 
    addData(args)
}

const loadData = () => {
    try{
        if(fs.existsSync('../mydata.json')){
            let bufferData = fs.readFileSync('../mydata.json');
            let data = JSON.parse(bufferData.toString());
            return data;
        }else{
            return []
        }
        
    } catch (err){
        return []
    }
}
const addData = (args) =>{
    try{
        if(fs.existsSync('../mydata.json')){
            let data = loadData()
            if(data.length != 0){
                counter = data[data.length - 1].id;
            }
            counter ++;
            data.push({
                'id':counter,
                'title':args.title,
                'body':args.body
            });
            fs.writeFileSync('../mydata.json',JSON.stringify(data),function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }else{
            let data = [];
            counter++;
            data.push({
                'id':counter,
                'title':args.title,
                'body':args.body
            });
            fs.appendFileSync('../mydata.json',JSON.stringify(data),function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
        console.log("Saved success fully!")
    } catch (err){
        console.log(err)
    }
   
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}

