const input=document.getElementById("fileInput");
const chat=document.getElementById("chat");
const stats=document.getElementById("stats");
const search=document.getElementById("search");
const filter=document.getElementById("filter");

let allMessages=[];

input.addEventListener("change",function(){
const file=this.files[0];
const reader=new FileReader();
reader.onload=function(){
const lines=reader.result.split("\n");
allMessages=[];
chat.innerHTML="";

lines.forEach(line=>{
const regex=/(.*?)- (.*?): (.*)/;
const match=line.match(regex);
if(match){
let rawTime=match[1].trim();
const name=match[2].trim();
let message=match[3].trim();

let datePart = rawTime.split(",")[0];
let timePart = rawTime.split(",")[1]?rawTime.split(",")[1].trim():"";
let formattedTime = `${datePart}, ${timePart}`;

const sender=name.toLowerCase().includes("hridoy")?"user":"other";

if(message.includes("<Media omitted>")){
message='<span class="media">📎 Media omitted</span>';
}

allMessages.push({time:formattedTime,name,message,sender});
}
});

renderMessages(allMessages);
}
reader.readAsText(file);
});

function renderMessages(data){
chat.innerHTML="";
let userCount=0;
let otherCount=0;

data.forEach(msg=>{
let dateOnly=msg.time.split(",")[0];
const div=document.createElement("div");
div.className="msg "+msg.sender;

let seenHTML = "";
if(msg.sender==="user"){
seenHTML='<span class="seen">✔✔</span>';
userCount++;
}else{otherCount++;}

let msgHTML = msg.message;

// highlight search
const searchTerm = search.value.toLowerCase();
if(searchTerm!==""){
let regex = new RegExp(`(${searchTerm})`,"gi");
msgHTML = msgHTML.replace(regex,'<span class="highlight">$1</span>');
}

div.innerHTML=`
<div class="bubble">${msgHTML}${seenHTML}</div>
<div class="time">${msg.time} - ${msg.name}</div>
`;

chat.appendChild(div);
});

stats.innerText=`Messages: ${data.length} | Mine: ${userCount} | Other: ${otherCount}`;
scrollBottom();
}

search.addEventListener("input",applyFilters);
filter.addEventListener("change",applyFilters);

function applyFilters(){
let filtered=allMessages.filter(m=>m.message.toLowerCase().includes(search.value.toLowerCase()));

if(filter.value!=="all"){
filtered=filtered.filter(m=>m.sender===filter.value);
}

renderMessages(filtered);
}

function scrollBottom(){
chat.scrollTo({top:chat.scrollHeight,behavior:'smooth'});
}
function goFirst(){
chat.scrollTo({top:0,behavior:'smooth'});
}
function toggleMode(){
document.body.classList.toggle("light");
}
