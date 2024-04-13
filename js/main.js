function command (cmd) {
    switch (cmd) {
        case 'help':
            return 'help';
    }
}

const help = [
    "<br>",
    "help           list all available commands",
    "whois          get to know me",
    "socials        get my socials",
    "projects       list my projects",
    "clear          clear the terminal",
]

var github = "";
var linkedin = "";

const whois = [
    "<br>",
    "Hello, I'm a software engineer based in melbourne, australia.",
    "I'm passionate about building software that is scalable, maintainable and user-friendly.",
]

const socials = [
    "<br>",
    "linkedin       <a href='" + linkedin + "'>linkedin</a>",
    "github         <a href='" + github + "'>github</a>",
]