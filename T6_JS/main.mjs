//main.js

import {index, store, destroy} from './controller.mjs';

const main = () => {
    //Tambah dua data baru
    store({nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11'});
    store({nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12'});

    //Tampilkan data
    index();

    //hapus data terakhir
    destroy();

    //tampilkan data setelah dihapus
    index();
};

main();