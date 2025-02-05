document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById("name");
    const texts = ["I am Ahmed Younes", "a web developer"];
    let currentIndex = 0;
  
    setInterval(() => {
      heading.style.opacity = 0;
      setTimeout(() => {
        heading.textContent = texts[currentIndex];
        heading.style.opacity = 1;
        currentIndex = (currentIndex + 1) % texts.length;
      }, 500);
    }, 4000);
  });
  

let progress=document.getElementsByClassName("progress");


const output =document.getElementsByTagName('output')
for(i=0;i<progress.length;i++){
  var progressValue=progress[i].id;
  progress[i].style.width=progressValue+"%";
  output[i].innerHTML=progressValue+"%"

}