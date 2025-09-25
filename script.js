const message = `Silvia, plisssss baca chat ku jangan lama-lama marahnya, aku minta maaf banget gak bisa ngebaca situasi kemarin sore. harusnya kemarin aku bantuin kamu tapi malah jadi gak bantuin sama sekali, kemarin juga aku ke distracted sama chat yang lain ngespam minta ajarin lah, harusnya fokus ku kan disitu ngajarain kamu, kalau aku besok besok pas ngajarin kamu gitu lagi pukul langsung aja takutnya aku gak peka lagi kayak situasi kemarin. oke silvia sekali lagi aku minta maaf ya`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
