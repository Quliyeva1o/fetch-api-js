const title = document.querySelector('#title');
const itemid = document.querySelector('#itemid');
const completed = document.querySelector('#completed');
const loader = document.querySelector('.loader');
const  detailCard = document.querySelector('.detail-card');
import url from "./constans.js";

const detailID=new URLSearchParams(window.location.search).get('id')

fetch(url+`/${detailID}`)
.then((res)=>res.json())
.then((data)=>{
    detailCard.classList.replace('d-none','d-block')
    console.log(data);
    title.textContent=(data.title)
    itemid.textContent=(data.id)
    completed.textContent=(data.completed)

}).catch((err)=>{
    console.log(err);
})
.finally(()=>{
loader.classList.add("d-none")
})