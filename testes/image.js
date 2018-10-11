var ImageModule=require('docxtemplater-image-module')

var opts = {}
opts.centered = false;
opts.getImage=function(tagValue, tagName) {
    return fs.readFileSync(tagValue);
}

opts.getSize=function(img,tagValue, tagName) {
    return [150,150];
}

var imageModule=new ImageModule(opts);

var zip = new JSZip(content);
var docx=new Docxtemplater()
    .attachModule(imageModule)
    .loadZip(zip)
    .setData({image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg=="})
    .render();

var buffer= docx
        .getZip()
        .generate({type:"nodebuffer", compression: "DEFLATE"});

fs.writeFile("test.docx",buffer);