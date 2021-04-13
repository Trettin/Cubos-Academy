const email = "alu.sn@ocuboacademy";

function verificaEmail (email) {
    if (email.includes("@") && !email[0].includes(".") && email.split("").reverse().join("").charAt(0)!="." && email.includes(".", email.indexOf("@")+3) ) {
        console.log("Email válido");

    } else {
        console.log("Email Inválido");
    }
}

verificaEmail(email)