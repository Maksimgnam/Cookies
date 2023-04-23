


const instruction = getCookie('Show')

if (!instruction) {
    show()

    setCookie('Show', true, 365)


}
else {
    showNormal()
}


function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";


}




function show() {
    red.style.display = 'flex'



}
function showNormal() {

    red.style.display = 'none'





}




// let db = openDatabase('Db', '1.0', 'Test DB', 3 * 1024 * 1024);

// db.transaction(function (tx) {
//     tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)')
//     tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "maks")')
//     tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "mad4rfks")')

// })

