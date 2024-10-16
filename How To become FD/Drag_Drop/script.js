
const draggable=document.getElementById("draggable");
const dropArea=document.getElementById("dropArea");


draggable.addEventListener("dragstart",(e)=>{
    //console.log(e.target.id);
    e.dataTransfer.setData("text/plain",e.target.id);

    e.target.style.opacity="0.5"
});

draggable.addEventListener("dragend",(e)=>{
    e.target.style.opacity="1";
});

dropArea.addEventListener('dragover', (e) =>{
    e.preventDefault();

    dropArea.classList.add("over");

});

dropArea.addEventListener('dragleave', (e) => {
    dropArea.classList.remove('over'); // Remove the visual indicator when leaving the drop area
});

dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();

    const data=e.dataTransfer.getData("text/plain");
    //console.log(data);

    const dragElement=document.getElementById(data);
    dropArea.innerHTML="";
    dropArea.appendChild(dragElement);
    e.target.style.opacity="1";



});