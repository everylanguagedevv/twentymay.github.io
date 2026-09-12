const celebrateButton = document.querySelector('#celebrate');
const colors = ['#ff6b51', '#ffd166', '#b9ead9', '#8fd3ff'];

    celebrateButton.addEventListener('click', () => {
      for (let index = 0; index < 42; index += 1) {
        const piece = document.createElement('span');
        piece.className = 'confetti drop';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = colors[index % colors.length];
        piece.style.animationDelay = `${Math.random() * .35}s`;
        piece.style.transform = `rotate(${Math.random() * 90}deg)`;
        document.body.appendChild(piece);
        piece.addEventListener('animationend', () => piece.remove());
      }
      celebrateButton.innerHTML = '<span aria-hidden="true">&#10084;</span> Yahhh, ketahuan! Selamat Ulang Tahun, Pak Sofyan!';
    }, { once: true });
/* Pagi pak, terimakasih banyak sudah membuka browser saya, 
jujur ini saya nambahin note cuman buat file JS keitung persentase aja sih wkwk, 
saya nyoba trik ini (apakah triknya good job, smart, and clever pak??) jadinya ya gitu deh. 
I just want to say (atau bahkan mengisyarakatkan bapak) kalo sebenernya banyak temen-temen sekelas saya benci sama bapak.
Tapi saya mau bilang, untuk terus menjadi diri sendiri tanpa melihat siapa yang membenci anda. 
Teruslah melakukan yang terbaik ya pak! Sindiran mereka tidak akan pernah membuat perspektif saya terhadap bapak berubah. 
Kalo saya sudah bilang bapak itu orang yang keren, empatis, penyayang, kalem, dan yang paling berdampak di kehidupan saya, ya pernyataan itu tidak akan berubah.
Sejak pertama kali masuk SMA, hanya engkau saya yang tidak pernah menghakimi fakta bahwa saya ini anak ADHD dan disleksia, 
bahkan bapak mau sabar mengajari saya dengan gaya mengajar visual (pake bolpen yang waktu itu) atau bahkan senyum ke saya duluan dan mengingat detail terkecil tentang saya.
Jujur, tidak ada orang yang pernah melakukan itu selain bapak, 
saya benar-benar apresiasi kerja keras bapak dalam menghadapi tantangan belajar-mengajar di sekolah ini, 
saya tau banyak anak yang bandel di pelajaran bapak, atau bahkan benci presensi bapak. 
Baik yang cewe maupun cowo, tidak memandang jenis kelamin, mereka semuanya gitu. 
Tapi yang bapak harus peduli dan ingat adalah, itutuh diluar kendali bapak.
Kendali bapak hanyalah mengajar mereka dengan adil dan jujur apa adanya.
Saya kasih big respect buat bapak karena perjuangan bapak dalam mengajari anak-anak/murid-murid, 
termasuk saya (apalagi saya yang ABK gitu kan ya) itu tuh sudah terbayar dengan baik. 
Dan saya ingin membayar perjuangan bapak balik dengan cara menolong bapak, 
menyapa kepada bapak, 
melakukan hal-hal yang mungkin menurut orang-orang itu tuh kayak "ih kamu kok rela ngebantuin beliau?" 
karena beliau memang pantas diperlakukan dengan baik, 
karena beliau memperlakukan saya seperti muridnya yang ia kasihi, sayangi, dan paling peduli dengannya. 
Walaupun anak itu memiliki kekurangan yang jauh lebih parah daripada anak biasanya, 
apakah kasih itu akan berubah hanya karena anaknya memiliki satu kelemahan yang ia tidak bisa kontrol? Oh tentu tidak. 
Pengasuh/pengajar yang benar itu justru menganggap bahwa kelemahannya itu tuh superpower terpendam yang dimiliki anaknya. 
Orang yang baik akan selalu menganggap bahwa setiap kelemahan memiliki kekuatan yang tersembunyi, 
jauh lebih berpengaruh daripada kelihatannya. Suatu saat nanti saya sukses dan terkenal, 
saya tidak akan pernah lupa mencantumkan nama "Ruus Sofyan" sebagai orang, sebagai mentor, sebagai pengasuh yang sudah berjasa. 
Kalo bapak bisa lihat file ini, tolong dibaca ya wkwkwkwk..genuine note nih. Dari Stephh untuk Ruuss.*/

function jalankanHitungMundur() {
  setInterval(() => {
    const sekarang = new Date();
    const tahunSekarang = sekarang.getFullYear();
    
    /*Tentukan target tanggal 20 Mei...Well sekarang posisinya masih di 2026 wkwk*/
    let waktuTarget = new Date(`May 20, ${tahunSekarang} 00:00:00`).getTime();
    const waktuSekarang = sekarang.getTime();

    /*JIKA tanggal 20 Mei tahun ini sudah lewat, otomatis target ganti ke 20 Mei tahun depan*/
    if (waktuTarget - waktuSekarang < 0) {
      waktuTarget = new Date(`May 20, ${tahunSekarang + 1} 00:00:00`).getTime();
    }

    const selisih = waktuTarget - waktuSekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(hari).padStart(2, '0');
    document.getElementById('hours').innerText = String(jam).padStart(2, '0');
    document.getElementById('minutes').innerText = String(menit).padStart(2, '0');
    document.getElementById('seconds').innerText = String(detik).padStart(2, '0');
  }, 1000);
}

jalankanHitungMundur();

/*Semoga penjelasan saya dapat dipahami oleh bapak, terimakasih banyak telah membaca seluruh web saya! 
Next time kalo mau kolaborasi, tolong WA saya langsung / DM di Insta ya pak...
(Pls dong pak ajarin HTML/CSS sama JS lebih lanjut, in exchange saya ajarin bapak C++ deh wkwk)
(Bingung banget pake frontend sebagai orang backend (apalagi orang C++ gitu kan yakkkk), so pls banget pakkk
Duh yaampun kebanyakan teks disini, kalo saya kasih filenya ke bapak, terus kalo bapak sempet bacain beginian juga,
salut sih sayaaaaa wkwk (ah udah sampe sini aja note nya, thx sudah menjadi mentor terbaik di hidup saya!!!*/
