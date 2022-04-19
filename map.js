function getAdmins(map) {

    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Izabela', 'Admin');
usuarios.set('Pablo Henrique', 'User');
usuarios.set('Alvaro', 'User');
usuarios.set('Caua', 'Admin');
usuarios.set('Caahzinha', 'User');

console.log(getAdmins(usuarios));

