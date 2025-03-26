//controller.js
import users from './data.mjs';

//tampilkan data
const index = () => {
    console.log("Menampilkan data");
    users.map((user, index) => {
        console.log(`${index+1}. ${user.nama} - ${user.umur} - ${user.alamat} - ${user.email}`);
    });
}

//tambah data
const store = (user) => {
    users.push(user);
    console.log(`Data ${user.nama} berhasil ditambahkan`);
}

//hapus data
const destroy = () => {
    if(users.length > 0){
        const removedUser = users.pop();
        console.log(`Data ${removedUser.nama} berhasil dihapus`);   
    } else {
        console.log("Data kosong");
    }
};

export {index, store, destroy};
