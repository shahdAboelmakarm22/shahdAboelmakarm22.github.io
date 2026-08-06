(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`shahdAboelmakarm22`,t={JavaScript:`#f1e05a`,Python:`#3572A5`,Java:`#b07219`,"C++":`#f34b7d`,"C#":`#178600`,HTML:`#e34c26`,CSS:`#563d7c`,TypeScript:`#3178c6`,Jupyter:`#DA5B0B`};async function n(){try{let t=await(await fetch(`https://api.github.com/users/${e}`)).json(),n=document.querySelector(`.profile-img-container`);n.innerHTML=`<img src="${t.avatar_url}" alt="${t.name}" />`}catch(e){console.error(`Error fetching profile:`,e),document.querySelector(`.profile-img-container`).innerHTML=`<img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Placeholder" />`}}async function r(){try{let n=await(await fetch(`https://api.github.com/users/${e}/repos?sort=updated&per_page=12`)).json(),r=document.getElementById(`projects-grid`);r.innerHTML=``,n.filter(e=>!e.fork).forEach(e=>{let n=document.createElement(`div`);n.className=`project-card`;let i=t[e.language]||`#8b5cf6`;n.innerHTML=`
        <div class="project-header">
          <a href="${e.html_url}" target="_blank" class="project-title">${e.name.replace(/-/g,` `)}</a>
        </div>
        <p class="project-desc">${e.description||`No description provided.`}</p>
        <div class="project-footer">
          <div class="language">
            ${e.language?`<span class="lang-dot" style="background-color: ${i}"></span> ${e.language}`:``}
          </div>
          <div class="stars">
            ⭐ ${e.stargazers_count}
          </div>
        </div>
      `,r.appendChild(n)})}catch(e){console.error(`Error fetching projects:`,e)}}document.addEventListener(`DOMContentLoaded`,()=>{n(),r()});