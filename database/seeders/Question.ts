import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question from 'App/Models/Question'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    console.info('==========START SEEDING  SOAL')
    await Question.createMany([
      {
        id: 'b0cc9184-2695-4df3-8c4d-31688c537711',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: false,
        question: 'Peer to peer merupakan jenis jaringan',
        a: 'Jaringan PAN',
        b: 'Jaringan LAN',
        c: 'Jaringan WPAN',
        d: 'Jaringan WAN',
        e: 'Jaringan MAN',
        answerKey: 'b',
      },
      {
        id: '8e681cb0-7d83-4247-b289-54edd4dd1720',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: false,
        question: 'Apakah kepanjangan dari WAN?',
        a: 'Wireless Areas Networking',
        b: 'Wide Area Network',
        c: 'West An Nail',
        d: 'Wifi A N',
        e: 'Wedding At Nose',
        answerKey: 'b',
      },
      {
        id: 'fc9c2776-9842-43ff-bc85-89b83a150414',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: false,
        question: 'Kepanjangan dari ISO adalah?',
        a: 'International Standards Organisation',
        b: 'Interconnection System Operating',
        c: 'Interconection System Open',
        d: 'In System On',
        e: 'Iki Seng Ojo',
        answerKey: 'a',
      },
      {
        id: 'b58f3132-e138-4898-a172-fecb3c607ac4',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: false,
        question: 'Kepanjangan dari OSI?',
        a: 'Organisation Standards International',
        b: 'Operating System Interconnection',
        c: 'Open System Interconection',
        d: 'On System In',
        e: 'Ojo Seng Iki',
        answerKey: 'c',
      },
      {
        id: '638cc2a2-f121-4519-9d64-916696dd5f58',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: false,
        question: 'Berikut adalah layer-layer pada OSI, kecuali…',
        a: 'Application layer',
        b: 'Presentation layer',
        c: 'Internet layer',
        d: 'Transport layer',
        e: 'Physical layer',
        answerKey: 'c',
      },
      {
        id: '4a32f6c3-0be5-47de-9b4c-5ce56aaca307',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: true,
        question: 'Dimanakah letak OSI',
        a: 'Tergantung dimana letak kesepakatan Client dan juga Admin pada pengembangan jaringan berbasis luas',
        b: 'Diserahkan pada pihak client yang mengerjakan Protocol sesuai dengan OSI',
        c: 'Implementasinya diserahkan kepada developer yang mengerjakan protocol sesuai dengan OSI',
        d: 'Tergantung Implementasinya pada kondisi suatu server dalam sebuah jaringan besar',
        e: 'Diserahkan kepada pihak developer yang mengerjakan Protocol Arpha',
        answerKey: 'c',
      },
      {
        id: '2399a5e4-4107-4bc5-a6a2-956b56c7257d',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: true,
        question: 'Mendeteksi dan memperbaiki eror data tingkat rendah dilakukan pada',
        a: 'Application layer',
        b: 'Session layer',
        c: 'Data link layer',
        d: 'Transport layer',
        e: 'Physical layer',
        answerKey: 'c',
      },
      {
        id: '34ae7308-b642-45bb-8c66-78e8351e87a3',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: true,
        question:
          'Menjelaskan spesifikasi listrik, mekanis dan fungsional guna menangani data jaringan merupakan proses pada',
        a: 'Application layer',
        b: 'Presentation layer',
        c: 'Internet layer',
        d: 'Transport layer',
        e: 'Physical layer',
        answerKey: 'e',
      },
      {
        id: 'd4851bab-bf75-481a-b9d4-7729d3494bf2',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: true,
        question: 'Pengontrolan transfer data merupakan proses pada',
        a: 'Application layer',
        b: 'Presentation layer',
        c: 'Session layer',
        d: 'Transport layer',
        e: 'Physical layer',
        answerKey: 'c',
      },
      {
        id: 'a2c466f0-c981-453f-a2ae-e7009173b51e',
        userId: 'cb17e5cb-b1d0-4884-9ee7-16336416e399',
        questionBankId: 'c20076cc-09f7-4cc6-89ef-7ba7fb2c54b4',
        isPublic: true,
        question: 'Routing terjadi di',
        a: 'Network layer',
        b: 'Presentation layer',
        c: 'Internet layer',
        d: 'Transport layer',
        e: 'Physical layer',
        answerKey: 'a',
      },
      {
        id: '7385913d-72a5-4831-a270-7297e2c2c773',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: false,
        question:
          ' Autentikasi di mana browser melakukan enkripsi password sebelum mengirimkannya ke server disebut',
        a: ' Autentikasi basic',
        b: 'Autentikasi digest',
        c: 'Autentikasi form',
        d: 'Autentikasi certificate',
        e: 'Autentikasi basic http',
        answerKey: 'b',
      },
      {
        id: '0b6d7aee-c0f0-49bd-b418-25dc64b58a93',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: false,
        question:
          ' Proses pengenalan peralatan, sistem operasi, kegiatan, aplikasi dan identitas user yang terhubung dengan jaringan komputer disebut',
        a: ' Enkripsi',
        b: 'Deskripsi',
        c: 'Autentikasi',
        d: 'Konfirmasi',
        e: 'Security',
        answerKey: 'c',
      },
      {
        id: '1be1fe3b-79da-47ab-b0bc-9d58d8808018',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: false,
        question: 'Untuk merestart service apache web server, perintahnya adalah',
        a: '/etc/init.d/apache2 restart',
        b: '/etc/init.d/mysql restart',
        c: '/etc/init.d/apache web server restart',
        d: '/etc/init.d/mysql-server restart',
        e: '/etc/init.d/apache-server restart',
        answerKey: 'a',
      },
      {
        id: 'dc74f671-a3a4-469f-a6cb-88817b8a7010',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: false,
        question: ' Untuk merestart service mysql server, perintahnya adalah',
        a: '/etc/init.d/apache2 restart',
        b: '/etc/init.d/mysql restart',
        c: '/etc/init.d/apache web server restart',
        d: '/etc/init.d/mysql-server restart',
        e: '/etc/init.d/apache-server restart',
        answerKey: 'b',
      },
      {
        id: '6db78123-53b5-4bf8-a179-48792c4e0b2f',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: false,
        question:
          'Jaringan pribadi (bukan untuk akses umum) yang menggunakan medium nonpribadi (misalnya internet) untuk menghubungkan antar remote-site secara aman disebut',
        a: 'Dhcp',
        b: 'FTP',
        c: 'Ssh',
        d: 'Vpn',
        e: 'Samba',
        answerKey: 'd',
      },
      {
        id: '12031110-0266-4d61-8fcb-9f4a316da5ba',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: true,
        question: 'VPN adalah sebuah koneksi Virtual yang bersifat private, karena ',
        a: 'Jaringan ini tidak ada secara fisik hanya berupa jaringan virtual',
        b: 'Jaringan ini merupakan jaringan yang sifatnya publik',
        c: 'Semua orang bisa mengakses jaringan ini',
        d: 'Jaringan ini bisa terlihat secara fisik',
        e: 'Jaringan ini bersifat tidak aman',
        answerKey: 'a',
      },
      {
        id: '2c937575-d345-438e-97d7-39eee789e319',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: true,
        question:
          'Proses yang dilakukan oleh firewall untuk `menghadang` dan memproses data dalam sebuah paket untuk menentukan bahwa paket tersebut diizinkan atau ditolak, berdasarkan kebijakan akses (access policy) yang diterapkan oleh seorang administrator disebut ',
        a: 'Loss paket',
        b: 'Filtering paket',
        c: 'Inspeksi paket',
        d: 'Stateful paket',
        e: 'Snifer paket',
        answerKey: 'c',
      },
      {
        id: '4c716fcd-351b-4e36-879c-3ab708d11750',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: true,
        question:
          'Proses inspeksi paket yang tidak dilakukan dengan menggunakan struktur paket dan data yang terkandung dalam paket, tapi juga pada keadaan apa host-host yang saling berkomunikasi tersebut berada disebut',
        a: 'Static packet inspection',
        b: 'Stateful packet inspection',
        c: 'Dinamic packet inspection',
        d: 'Full packet inspection',
        e: 'State packet inspectioning',
        answerKey: 'b',
      },
      {
        id: '2b1b0609-3410-44e7-9929-86b9d03f2880',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: true,
        question: 'Komputer yang terhubung ke file server dalam jaringan disebut ',
        a: 'Basestation',
        b: 'Worksheet',
        c: 'Workstation',
        d: 'Workgroup',
        e: 'Server',
        answerKey: 'c',
      },
      {
        id: '43c0714e-6e2a-4b5b-8025-957b8485cf36',
        userId: '31aaffab-37df-4e71-bd3c-0eed66ea2f7e',
        questionBankId: '67c8cdbb-fdcb-43ba-bf79-f78eb2819f0d',
        isPublic: true,
        question:
          'PC yang dapat difungsikan sebagai router selama memiliki lebih dari satu interface jaringan, mampu mem-fordward paket IP, serta menjalankan program untuk mengatur routing paket disebut',
        a: 'Server pc',
        b: 'Dedicated pc',
        c: 'Server dedicated',
        d: 'Router dedicted',
        e: 'Router pc',
        answerKey: 'e',
      },
    ])
    console.info('==========DONE SEEDING  SOAL')
  }
}
