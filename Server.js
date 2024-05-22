let { text } = require("./text")

text();

let http = require("http");

http.createServer((req, res) => {
    res.end("Server is running on port 3001");
}).listen(3001, () => {
    console.log("Server is running on port 3001");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3002");
}).listen(3002, () => {
    console.log("Server is running on port 3002");
})

http.createServer((req, res) => {
    console.log(req.headers);
    res.end("Server is running on port 3003");
}).listen(3003, () => {
    console.log("Server is running on port 3003");
})

http.createServer((req, res) => {
    // console.log(req.headers);
    res.end("Server is running on port 3004")
}).listen(3004, () => {
    console.log("Server is running on port 3004");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3005");
}).listen(3005, () => {
    console.log("Server is running on port 3005");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3006");
}).listen(3006, () => {
    console.log("Server is running on port 3006");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3007");
}).listen(3007, () => {
    console.log("Server is running on port 3007");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3008");
}).listen(3008, () => {
    console.log("Server is running on port 3008");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3009");
}).listen(3009, () => {
    console.log("Server is running on port 3009");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3010");
}).listen(3010, () => {
    console.log("Server is running on port 3010");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3011");
}).listen(3011, () => {
    console.log("Server is running on port 3011");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3012");
}).listen(3012, () => {
    console.log("Server is running on port 3012");
})

http.createServer((req, res) => {
    res.end("Server is running on port 3013");
}).listen(3013, () => {
    console.log("server is running on port 3013");
})

http.createServer((req, res) => {
    res.end("server is running on port 3014");
}).listen(3014, () => {
    console.log("server is running on port 3014");
})

http.createServer((req, res) => {
    res.end("server is running on port 3015");
}).listen(3015, () => {
    console.log("server is running on port 3015");
})

