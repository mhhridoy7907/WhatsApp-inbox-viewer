<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WhatsApp Pro Chat Viewer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<style>
:root{
  --bg-primary:#0b141a;
  --bg-gradient:
    radial-gradient(circle at 15% -10%, rgba(37,211,102,0.10), transparent 42%),
    radial-gradient(circle at 90% 110%, rgba(18,140,126,0.12), transparent 45%),
    radial-gradient(circle at 100% 0%, rgba(83,189,235,0.06), transparent 40%),
    #0b141a;
  --glass-bg: rgba(255,255,255,0.045);
  --glass-bg-strong: rgba(255,255,255,0.075);
  --glass-border: rgba(255,255,255,0.09);
  --text-primary:#e9edef;
  --text-secondary:#8696a0;
  --accent-green:#25D366;
  --accent-teal:#128C7E;
  --accent-blue:#53BDEB;
  --bubble-other:#202c33;
  --bubble-other-text:#e9edef;
  --bubble-user-grad: linear-gradient(135deg,#2fe07a,#128C7E);
  --shadow-soft: 0 10px 30px rgba(0,0,0,0.35);
  --shadow-pop: 0 6px 18px rgba(18,140,126,0.35);
  --radius-lg:22px;
  --radius-md:16px;
  --radius-sm:12px;
  --font-display:'Outfit',sans-serif;
  --font-body:'Inter',sans-serif;
  --chat-wallpaper:
    radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
  --scrollbar-thumb: rgba(255,255,255,0.15);
}

body.light{
  --bg-primary:#efeae2;
  --bg-gradient:
    radial-gradient(circle at 15% -10%, rgba(37,211,102,0.12), transparent 42%),
    radial-gradient(circle at 90% 110%, rgba(18,140,126,0.10), transparent 45%),
    #efeae2;
  --glass-bg: rgba(255,255,255,0.55);
  --glass-bg-strong: rgba(255,255,255,0.75);
  --glass-border: rgba(0,0,0,0.06);
  --text-primary:#111b21;
  --text-secondary:#54656f;
  --bubble-other:#ffffff;
  --bubble-other-text:#111b21;
  --shadow-soft: 0 10px 26px rgba(0,0,0,0.10);
  --chat-wallpaper: radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px);
  --scrollbar-thumb: rgba(0,0,0,0.15);
}

*{box-sizing:border-box;}

body{
    margin:0;
    font-family:var(--font-body);
    background:var(--bg-gradient);
    background-attachment:fixed;
    color:var(--text-primary);
    display:flex;
    flex-direction:column;
    height:100vh;
    overflow:hidden;
    transition:background .4s ease,color .4s ease;
    -webkit-font-smoothing:antialiased;
}

.app-shell{
    display:flex;
    flex-direction:column;
    height:100%;
    max-width:900px;
    width:100%;
    margin:0 auto;
    position:relative;
}

/* ---------- HEADER ---------- */
header{
    padding:18px 22px;
    display:flex;
    align-items:center;
    gap:14px;
    background:var(--glass-bg-strong);
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px);
    border-bottom:1px solid var(--glass-border);
    z-index:5;
}

.header-icon{
    width:46px;
    height:46px;
    border-radius:16px;
    background:var(--bubble-user-grad);
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow:var(--shadow-pop);
    flex-shrink:0;
}
.header-icon svg{width:24px;height:24px;stroke:#06231a;}

.header-text{flex:1; min-width:0;}
.header-text h1{
    margin:0;
    font-family:var(--font-display);
    font-size:19px;
    font-weight:700;
    letter-spacing:.2px;
}
.header-text p{
    margin:2px 0 0;
    font-size:12.5px;
    color:var(--text-secondary);
    font-weight:500;
}

.theme-toggle{
    width:42px;
    height:42px;
    border-radius:14px;
    border:1px solid var(--glass-border);
    background:var(--glass-bg);
    color:var(--text-primary);
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-size:18px;
    transition:transform .2s ease, background .3s ease;
}
.theme-toggle:hover{background:var(--glass-bg-strong); transform:translateY(-2px);}
.theme-toggle:active{transform:scale(.9);}

/* ---------- TOOLBAR ---------- */
.topbar{
    position:sticky;
    top:0;
    z-index:4;
    display:flex;
    gap:10px;
    padding:12px 16px;
    background:var(--glass-bg);
    backdrop-filter:blur(16px);
    -webkit-backdrop-filter:blur(16px);
    border-bottom:1px solid var(--glass-border);
    flex-wrap:wrap;
    align-items:center;
}

.upload-btn{
    display:flex;
    align-items:center;
    gap:8px;
    padding:10px 16px;
    border-radius:30px;
    background:var(--bubble-user-grad);
    color:#052a1c;
    font-weight:600;
    font-size:13.5px;
    cursor:pointer;
    box-shadow:var(--shadow-pop);
    border:none;
    transition:transform .18s ease, box-shadow .18s ease;
    white-space:nowrap;
}
.upload-btn:hover{transform:translateY(-2px); box-shadow:0 10px 22px rgba(18,140,126,0.45);}
.upload-btn:active{transform:scale(.96);}
.upload-btn svg{width:16px;height:16px;stroke:#052a1c;}
.upload-btn input{display:none;}

.search-box{
    flex:1;
    min-width:160px;
    display:flex;
    align-items:center;
    gap:8px;
    background:var(--glass-bg-strong);
    border:1px solid var(--glass-border);
    border-radius:30px;
    padding:9px 16px;
    transition:box-shadow .2s ease, border-color .2s ease;
}
.search-box:focus-within{
    border-color:var(--accent-teal);
    box-shadow:0 0 0 3px rgba(18,140,126,0.18);
}
.search-box svg{width:16px;height:16px;stroke:var(--text-secondary); flex-shrink:0;}
.search-box input{
    border:none;
    outline:none;
    background:transparent;
    color:var(--text-primary);
    font-size:14px;
    width:100%;
    font-family:var(--font-body);
}
.search-box input::placeholder{color:var(--text-secondary);}

.filter-select{
    padding:9px 14px;
    border-radius:30px;
    border:1px solid var(--glass-border);
    background:var(--glass-bg-strong);
    color:var(--text-primary);
    font-size:13px;
    font-weight:500;
    cursor:pointer;
    font-family:var(--font-body);
    outline:none;
    transition:border-color .2s ease;
}
.filter-select:hover{border-color:var(--accent-teal);}

.icon-btn{
    width:40px;
    height:40px;
    border-radius:50%;
    border:1px solid var(--glass-border);
    background:var(--glass-bg-strong);
    color:var(--text-primary);
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    flex-shrink:0;
    transition:transform .18s ease, background .2s ease;
}
.icon-btn svg{width:17px;height:17px;stroke:var(--text-primary);}
.icon-btn:hover{background:var(--accent-teal); }
.icon-btn:hover svg{stroke:#fff;}
.icon-btn:active{transform:scale(.88);}

/* ---------- STATS ---------- */
.stats{
    display:flex;
    gap:10px;
    padding:12px 16px;
    justify-content:center;
    flex-wrap:wrap;
    z-index:3;
}
.stat-card{
    flex:1;
    min-width:90px;
    max-width:180px;
    text-align:center;
    padding:10px 8px;
    border-radius:var(--radius-sm);
    background:var(--glass-bg);
    border:1px solid var(--glass-border);
    backdrop-filter:blur(10px);
    transition:transform .2s ease;
}
.stat-card:hover{transform:translateY(-3px);}
.stat-num{
    font-family:var(--font-display);
    font-size:19px;
    font-weight:700;
    background:linear-gradient(135deg,var(--accent-green),var(--accent-blue));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
}
.stat-label{
    font-size:10.5px;
    letter-spacing:.06em;
    text-transform:uppercase;
    color:var(--text-secondary);
    margin-top:2px;
    font-weight:600;
}

/* ---------- CHAT AREA ---------- */
.chat{
    flex:1;
    overflow-y:auto;
    padding:18px 16px 90px;
    display:flex;
    flex-direction:column;
    gap:3px;
    position:relative;
    scroll-behavior:smooth;
    background-image:var(--chat-wallpaper);
    background-size:22px 22px;
}

.chat::-webkit-scrollbar{width:8px;}
.chat::-webkit-scrollbar-track{background:transparent;}
.chat::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb); border-radius:10px;}
.chat::-webkit-scrollbar-thumb:hover{background:var(--accent-teal);}

/* empty state */
.empty-state{
    margin:auto;
    text-align:center;
    max-width:320px;
    padding:30px;
    animation:fadeSlideUp .5s ease both;
}
.empty-avatar{
    width:110px;
    height:110px;
    border-radius:50%;
    margin:0 auto 18px;
    background:url('https://i.pinimg.com/736x/ce/58/c1/ce58c1d1278349c500426a7ef0f6908f.jpg') no-repeat center/cover;
    box-shadow:0 0 0 6px var(--glass-bg), var(--shadow-soft);
    opacity:.9;
}
.empty-state h2{
    font-family:var(--font-display);
    font-size:18px;
    margin:0 0 8px;
}
.empty-state p{
    font-size:13.5px;
    color:var(--text-secondary);
    line-height:1.6;
    margin:0;
}

/* date separators */
.dateSep{
    display:flex;
    justify-content:center;
    margin:14px 0;
    position:sticky;
    top:6px;
    z-index:2;
    animation:fadeIn .3s ease both;
}
.dateSep span{
    background:var(--glass-bg-strong);
    backdrop-filter:blur(10px);
    color:var(--text-secondary);
    font-size:11.5px;
    font-weight:600;
    padding:6px 14px;
    border-radius:20px;
    border:1px solid var(--glass-border);
    box-shadow:var(--shadow-soft);
    letter-spacing:.02em;
}

/* message rows */
.msg-row{
    display:flex;
    align-items:flex-end;
    gap:8px;
    max-width:100%;
    animation:fadeSlideUp .35s ease both;
}
.msg-row.user{justify-content:flex-end;}
.msg-row.other{justify-content:flex-start;}
.msg-row.grouped{margin-top:-1px;}
.msg-row:not(.grouped){margin-top:10px;}

.avatar{
    width:32px;
    height:32px;
    border-radius:50%;
    flex-shrink:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
    font-weight:700;
    color:#fff;
    font-family:var(--font-display);
    box-shadow:var(--shadow-soft);
}
.avatar.spacer{visibility:hidden;}

.msg{
    display:flex;
    flex-direction:column;
    max-width:72%;
    z-index:1;
}
.user{align-self:flex-end;}
.other{align-self:flex-start;}

.sender-name{
    font-size:11.5px;
    font-weight:700;
    margin-bottom:2px;
    padding-left:14px;
}

.bubble{
    padding:9px 14px 8px;
    border-radius:var(--radius-md);
    font-size:14.5px;
    line-height:1.5;
    position:relative;
    box-shadow:var(--shadow-soft);
    word-wrap:break-word;
    transition:transform .15s ease;
}
.bubble:hover{transform:translateY(-1px);}

.user .bubble{
    background:var(--bubble-user-grad);
    color:#06231a;
    border-bottom-right-radius:5px;
    padding-right:44px;
}
.msg-row.user.grouped .bubble{border-top-right-radius:5px;}

.other .bubble{
    background:var(--bubble-other);
    color:var(--bubble-other-text);
    border-bottom-left-radius:5px;
}
.msg-row.other.grouped .bubble{border-top-left-radius:5px;}

.time{
    font-size:10.5px;
    color:var(--text-secondary);
    margin-top:3px;
    text-align:right;
    padding-right:4px;
}
.msg-row.other .time{text-align:left; padding-left:4px;}

.seen{
    font-size:12px;
    position:absolute;
    bottom:6px;
    right:12px;
    color:#0864c7;
    font-weight:700;
}

.highlight{
    background:linear-gradient(120deg,#ffe066,#ffd23f);
    color:#1a1a1a;
    padding:0 2px;
    border-radius:4px;
    font-weight:600;
}

.media{
    color:#ffb020;
    font-style:italic;
    display:inline-flex;
    align-items:center;
    gap:4px;
}

/* ---------- INLINE MEDIA (from zip uploads) ---------- */
.media-img{
    display:block;
    max-width:260px;
    max-height:320px;
    width:100%;
    height:auto;
    border-radius:14px;
    margin-bottom:4px;
    cursor:pointer;
    object-fit:cover;
    box-shadow:0 4px 14px rgba(0,0,0,0.25);
    transition:transform .2s ease;
}
.media-img:hover{transform:scale(1.02);}

.media-video{
    display:block;
    max-width:280px;
    width:100%;
    border-radius:14px;
    margin-bottom:4px;
    box-shadow:0 4px 14px rgba(0,0,0,0.25);
    background:#000;
}

.media-audio{
    display:block;
    width:230px;
    max-width:100%;
    margin-bottom:2px;
}

.media-chip{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:8px 12px;
    border-radius:12px;
    background:rgba(255,176,32,0.12);
    border:1px solid rgba(255,176,32,0.3);
    color:#ffb020;
    font-size:13px;
    font-weight:600;
}
.media-chip svg{width:15px;height:15px;stroke:#ffb020;flex-shrink:0;}

/* lightbox for full-size image preview */
.lightbox{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.85);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:50;
    padding:24px;
    animation:fadeIn .2s ease both;
    cursor:zoom-out;
}
.lightbox img{
    max-width:100%;
    max-height:100%;
    border-radius:12px;
    box-shadow:0 20px 50px rgba(0,0,0,0.5);
}

/* ---------- SCROLL FAB ---------- */
.scrollBtn{
    position:fixed;
    right:calc(50% - 450px + 22px);
    bottom:22px;
    background:var(--bubble-user-grad);
    color:#06231a;
    border:none;
    border-radius:50%;
    width:50px;
    height:50px;
    cursor:pointer;
    box-shadow:var(--shadow-pop);
    display:flex;
    align-items:center;
    justify-content:center;
    transition:transform .2s ease, box-shadow .2s ease;
    z-index:6;
}
.scrollBtn svg{width:20px;height:20px;stroke:#06231a;}
.scrollBtn:hover{transform:translateY(-3px) scale(1.05); box-shadow:0 12px 26px rgba(18,140,126,0.5);}
.scrollBtn:active{transform:scale(.9);}

@media (max-width:900px){
    .scrollBtn{right:22px;}
}

/* ---------- LOADING ---------- */
.chat.loading{
    display:flex;
    align-items:center;
    justify-content:center;
}
.loader{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:14px;
    animation:fadeIn .3s ease both;
}
.spinner{
    width:42px;
    height:42px;
    border-radius:50%;
    border:3px solid var(--glass-border);
    border-top-color:var(--accent-green);
    animation:spin .8s linear infinite;
}
.loader span{
    font-size:13px;
    color:var(--text-secondary);
    font-weight:500;
}

/* ---------- ANIMATIONS ---------- */
@keyframes fadeSlideUp{
    from{opacity:0; transform:translateY(14px);}
    to{opacity:1; transform:translateY(0);}
}
@keyframes fadeIn{
    from{opacity:0;}
    to{opacity:1;}
}
@keyframes spin{
    to{transform:rotate(360deg);}
}

/* ---------- RESPONSIVE ---------- */
@media (max-width:600px){
    header{padding:14px 16px;}
    .header-text h1{font-size:17px;}
    .topbar{padding:10px 12px;}
    .upload-btn span{display:none;}
    .upload-btn{padding:10px 12px;}
    .msg{max-width:82%;}
    .stat-card{min-width:70px; padding:8px 6px;}
    .stat-num{font-size:16px;}
}

::selection{background:rgba(37,211,102,0.35);}
</style>
</head>
<body>

<div class="app-shell">

<header>
    <div class="header-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </div>
    <div class="header-text">
        <h1>Chat Viewer</h1>
        <p class="subtitle">Premium WhatsApp export reader</p>
    </div>
    <button class="theme-toggle" onclick="toggleMode()" id="themeBtn" title="Toggle theme">
        <span id="themeIcon">🌙</span>
    </button>
</header>

<div class="topbar">
    <label class="upload-btn" for="fileInput">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <span>Upload Chat</span>
        <input type="file" id="fileInput" accept=".txt,.zip">
    </label>

    <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="search" placeholder="Search messages...">
    </div>

    <select id="filter" class="filter-select">
        <option value="all">All</option>
        <option value="user">My Messages</option>
        <option value="other">Other Messages</option>
    </select>

    <button class="icon-btn" onclick="goFirst()" title="Jump to first message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
    </button>
</div>

<div class="stats" id="stats"></div>

<div class="chat" id="chat"></div>

<button class="scrollBtn" onclick="scrollBottom()" title="Scroll to bottom">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
</button>

</div>

<script>
const input=document.getElementById("fileInput");
const chat=document.getElementById("chat");
const stats=document.getElementById("stats");
const search=document.getElementById("search");
const filter=document.getElementById("filter");
const themeIcon=document.getElementById("themeIcon");

let allMessages=[];

function renderEmptyState(){
    chat.classList.remove("loading");
    chat.innerHTML=`
    <div class="empty-state">
        <div class="empty-avatar"></div>
        <h2>No chat loaded yet</h2>
        <p>Upload a WhatsApp export — a <code>.txt</code> file, or the full <code>.zip</code> export — to bring your conversation to life with images, audio and video included.</p>
    </div>`;
    stats.innerHTML=statCardsHTML(0,0,0);
}

function statCardsHTML(total,mine,other){
    return `
    <div class="stat-card"><div class="stat-num">${total}</div><div class="stat-label">Messages</div></div>
    <div class="stat-card"><div class="stat-num">${mine}</div><div class="stat-label">Mine</div></div>
    <div class="stat-card"><div class="stat-num">${other}</div><div class="stat-label">Other</div></div>`;
}

// deterministic color per name for avatars
function nameColor(name){
    let hash=0;
    for(let i=0;i<name.length;i++){hash=name.charCodeAt(i)+((hash<<5)-hash);}
    const hue=Math.abs(hash)%360;
    return `hsl(${hue}, 62%, 45%)`;
}
function initials(name){
    const parts=name.trim().split(/\s+/);
    return ((parts[0]?.[0]||"")+(parts[1]?.[0]||"")).toUpperCase();
}

const IMG_EXT=["jpg","jpeg","png","gif","webp","bmp"];
const VIDEO_EXT=["mp4","mov","avi","3gp","mkv","webm","m4v"];
const AUDIO_EXT=["mp3","opus","m4a","wav","ogg","aac"];

function mediaTypeFor(filename){
    const ext=(filename.split(".").pop()||"").toLowerCase();
    if(IMG_EXT.includes(ext))return "image";
    if(VIDEO_EXT.includes(ext))return "video";
    if(AUDIO_EXT.includes(ext))return "audio";
    return null;
}

// parses raw WhatsApp export text into the messages array (shared by .txt and .zip paths)
function parseChatLines(text){
    const lines=text.split("\n");
    const messages=[];

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

    let mediaFile=null;
    const attachMatch=message.match(/^[\u200e\u200f]*(.+?)\s*\(file attached\)\s*$/i);
    if(attachMatch && mediaTypeFor(attachMatch[1])){
        mediaFile=attachMatch[1].trim();
    }

    if(message.includes("<Media omitted>")){
    message='<span class="media">📎 Media omitted</span>';
    }

    messages.push({time:formattedTime,name,message,sender,mediaFile});
    }
    });

    return messages;
}

input.addEventListener("change",function(){
const file=this.files[0];
if(!file)return;
chat.classList.add("loading");
chat.innerHTML=`<div class="loader"><div class="spinner"></div><span>Reading chat file…</span></div>`;

const isZip = /\.zip$/i.test(file.name);

if(isZip){
    handleZipFile(file);
}else{
    const reader=new FileReader();
    reader.onload=function(){
        allMessages=parseChatLines(reader.result);
        chat.classList.remove("loading");
        renderMessages(allMessages);
    };
    reader.onerror=function(){
        chat.classList.remove("loading");
        chat.innerHTML=`<div class="empty-state"><h2>Couldn't read file</h2><p>Something went wrong while reading that file. Please try again.</p></div>`;
    };
    reader.readAsText(file);
}
});

async function handleZipFile(file){
    try{
        chat.innerHTML=`<div class="loader"><div class="spinner"></div><span>Unzipping chat export…</span></div>`;
        const zip=await JSZip.loadAsync(file);

        // locate the chat transcript (.txt) inside the zip
        let txtEntry=null;
        zip.forEach((relPath,entry)=>{
            if(!entry.dir && /\.txt$/i.test(relPath) && !txtEntry){
                txtEntry=entry;
            }
        });

        if(!txtEntry){
            chat.classList.remove("loading");
            chat.innerHTML=`<div class="empty-state"><h2>No chat file found</h2><p>That zip doesn't seem to contain a WhatsApp <code>.txt</code> export.</p></div>`;
            return;
        }

        const text=await txtEntry.async("string");
        const messages=parseChatLines(text);

        // build a lookup of basename -> zip entry for media files
        const fileLookup={};
        zip.forEach((relPath,entry)=>{
            if(!entry.dir){
                const base=relPath.split("/").pop().toLowerCase();
                fileLookup[base]=entry;
            }
        });

        chat.innerHTML=`<div class="loader"><div class="spinner"></div><span>Loading photos, audio &amp; video…</span></div>`;

        await Promise.all(messages.map(async(msg)=>{
            if(msg.mediaFile){
                const entry=fileLookup[msg.mediaFile.toLowerCase()];
                if(entry){
                    const blob=await entry.async("blob");
                    msg.mediaUrl=URL.createObjectURL(blob);
                    msg.mediaType=mediaTypeFor(msg.mediaFile);
                }
            }
        }));

        allMessages=messages;
        chat.classList.remove("loading");
        renderMessages(allMessages);
    }catch(err){
        chat.classList.remove("loading");
        chat.innerHTML=`<div class="empty-state"><h2>Couldn't open zip</h2><p>${(err&&err.message)||"That file couldn't be processed."}</p></div>`;
    }
}

function renderMessages(data){
chat.classList.remove("loading");

if(data.length===0){
    renderEmptyState();
    return;
}

chat.innerHTML="";
let userCount=0;
let otherCount=0;
let lastDate="";
let lastName="";
let lastSender="";

data.forEach((msg,idx)=>{
let dateOnly=msg.time.split(",")[0];

if(dateOnly!==lastDate){
    const sep=document.createElement("div");
    sep.className="dateSep";
    sep.innerHTML=`<span>${dateOnly}</span>`;
    chat.appendChild(sep);
    lastDate=dateOnly;
    lastName="";
    lastSender="";
}

const isGrouped = (msg.name===lastName && msg.sender===lastSender);

const row=document.createElement("div");
row.className="msg-row "+msg.sender+(isGrouped?" grouped":"");
row.style.animationDelay=(Math.min(idx,20)*0.02)+"s";

let seenHTML = "";
if(msg.sender==="user"){
seenHTML='<span class="seen">✔✔</span>';
userCount++;
}else{otherCount++;}

let msgHTML = msg.message;

if(msg.mediaUrl && msg.mediaType==="image"){
    msgHTML = `<img src="${msg.mediaUrl}" class="media-img" loading="lazy" onclick="openLightbox('${msg.mediaUrl}')">`;
}else if(msg.mediaUrl && msg.mediaType==="video"){
    msgHTML = `<video src="${msg.mediaUrl}" class="media-video" controls></video>`;
}else if(msg.mediaUrl && msg.mediaType==="audio"){
    msgHTML = `<audio src="${msg.mediaUrl}" class="media-audio" controls></audio>`;
}else if(msg.mediaFile){
    msgHTML = `<span class="media-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>${msg.mediaFile}</span>`;
}

// highlight search (only for plain text, not media embeds)
const searchTerm = search.value.toLowerCase();
if(searchTerm!=="" && !msg.mediaUrl && !msg.mediaFile){
let regex = new RegExp(`(${searchTerm})`,"gi");
msgHTML = msgHTML.replace(regex,'<span class="highlight">$1</span>');
}

let avatarHTML="";
if(msg.sender==="other"){
    if(!isGrouped){
        avatarHTML=`<div class="avatar" style="background:${nameColor(msg.name)}">${initials(msg.name)}</div>`;
    }else{
        avatarHTML=`<div class="avatar spacer"></div>`;
    }
}

const nameLabel = (msg.sender==="other" && !isGrouped)
    ? `<div class="sender-name" style="color:${nameColor(msg.name)}">${msg.name}</div>` : "";

const msgWrap=document.createElement("div");
msgWrap.className="msg "+msg.sender;
msgWrap.innerHTML=`
${nameLabel}
<div class="bubble">${msgHTML}${seenHTML}</div>
<div class="time">${msg.time}</div>
`;

if(msg.sender==="other"){
    row.innerHTML=avatarHTML;
    row.appendChild(msgWrap);
}else{
    row.appendChild(msgWrap);
}

chat.appendChild(row);

lastName=msg.name;
lastSender=msg.sender;
});

stats.innerHTML=statCardsHTML(data.length,userCount,otherCount);
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
themeIcon.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
}

function openLightbox(url){
    const box=document.createElement("div");
    box.className="lightbox";
    box.innerHTML=`<img src="${url}">`;
    box.onclick=()=>box.remove();
    document.body.appendChild(box);
}

// initial empty state
renderEmptyState();

</script>

</body>
</html>
