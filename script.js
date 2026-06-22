const message = `Aku minta maaf yaa kalau aku sering nggak sadar bikin kamu capek. Maaf untuk semua sikapku yang mungkin nyakitin kamu tanpa aku sadari. Kadang bukan maksudku nyakitin, cuma aku belum bisa ngatur ego dengan baik.

Maaf juga yaa sayang buat semalam. Aku bener-bener nyesel banget ketiduran pas kamu lagi ngomongin salahku. Aku tau itu nyakitin kamu, kayak aku nggak dengerin dan nggak peduli. Padahal aku dengerin kamu penting banget buat aku. Maafin aku yang nggak bisa jaga melek pas momen sepenting itu ya.

Terima kasih karena kamu tetap sabar, tetap ada, dan tetap sayang. Makasih udah bertahan, bahkan di saat aku udah nggak ngerti. Terima kasih udah tetap mencintai aku dengan cara yang tulus banget. 

Dan maaf yaa kalau kurangku selalu kamu tutup dengan cintamu yang lebih banyak. Hai Arini Hanifa Saefi,AKU SAYANG KAMUUU❤️ 💕 💗 💖 💘.`;


function showLetter() {

  // ===================
  // MUSIK
  // ===================
  const music = document.getElementById("bgMusic");

  if (music) {
    music.currentTime = 0;
    music.volume = 0.5;

    music.play()
      .then(() => {
        console.log("musik berhasil jalan");
      })
      .catch((error) => {
        console.log("musik gagal:", error);
      });
  }


  // ===================
  // HILANGKAN PEMBUKA
  // ===================
  const intro = document.getElementById("introText");
  const button = document.querySelector(".btn");

  intro.style.opacity = "0";
  button.style.display = "none";


  // ===================
  // MUNCULKAN SURAT
  // ===================
  setTimeout(() => {

    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");


    letterBox.style.display = "block";
    typedText.innerHTML = "";


    let i = 0;


    function typeWriter() {

      if (i < message.length) {

        typedText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

      }

    }


    typeWriter();


  }, 600);

}