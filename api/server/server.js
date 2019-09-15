import app from "../src/app.js";

const port = app.get('port')

const server = app.listen(port, function (){
    console.log(`Hotels is running on ${port}`);
})

export default server;