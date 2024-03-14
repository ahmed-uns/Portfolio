let cell=document.getElementsByClassName('cell');
let skillName =document.getElementsByTagName('h4');
let progressBar = document.getElementsByClassName('progress-bar')


for (let i=0 ; i<cell.length ; i++){
    cell[i].addEventListener("mouseover",function showProgress() {skillName[i].style.display="none";

    progressBar[i].style.display="block";});
    cell[i].addEventListener("mouseout",function hideProgress(){
        skillName[i].style.display="block";
        progressBar[i].style.display="none";});

}