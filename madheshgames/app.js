const G=window.GAMES||[],PER=24,AD_EVERY=8;let cat="All",q="",shown=PER;
const grid=document.getElementById("grid"),chips=document.getElementById("chips"),cnt=document.getElementById("count");
const cats=["All",...new Set(G.map(g=>g.cat))];
chips.innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c==="All"}" data-c="${c}">${c}</button>`).join("");
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const adHTML=`<aside class="ad inline" aria-label="Advertisement"><span>Advertisement</span><div class="ad-box ad-feed" data-slot="in-feed"><!-- PASTE ADSENSE IN-FEED/DISPLAY UNIT HERE -->In-feed ad slot (fluid)</div></aside>`;
function card(g){const bg=g.img?`background-image:url('${esc(g.img)}')`:`background-image:linear-gradient(135deg,${g.c[0]},${g.c[1]})`;
return `<a class="card" href="game.html?g=${encodeURIComponent(g.slug)}"><div class="thumb" style="${bg}" role="img" aria-label="${esc(g.title)} thumbnail">${g.img?"":esc(g.title[0])}</div><div class="meta"><h3>${esc(g.title)}</h3><span class="tag">${esc(g.cat)}</span></div></a>`}
function render(){const f=G.filter(g=>(cat==="All"||g.cat===cat)&&g.title.toLowerCase().includes(q));
cnt.textContent=f.length+(f.length===1?" game":" games");
let h="";f.slice(0,shown).forEach((g,i)=>{if(i&&i%AD_EVERY===0)h+=adHTML;h+=card(g)});
grid.innerHTML=h||`<p class="empty">No games match “${esc(q)}”. Try another word or pick All.</p>`;
document.getElementById("more").style.display=f.length>shown?"block":"none"}
chips.addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.c;shown=PER;chips.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed",x===b));render()});
document.getElementById("q").addEventListener("input",e=>{q=e.target.value.trim().toLowerCase();shown=PER;render()});
document.getElementById("more").addEventListener("click",()=>{shown+=PER;render()});
render();
