"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[826],{448:()=>{let e=JSON.parse(localStorage.getItem("todos"))||[];function t(){const d=document.querySelector("#todo-list");d.innerHTML="",e.forEach((o=>{const n=document.createElement("div");n.classList.add("todo-item");const a=document.createElement("label"),l=document.createElement("input"),s=document.createElement("span"),c=document.createElement("div"),i=document.createElement("div"),r=document.createElement("button"),p=document.createElement("button");l.type="checkbox",l.checked=o.completed,s.classList.add("bubble"),c.classList.add("todo-content"),i.classList.add("actions"),r.classList.add("edit"),p.classList.add("delete"),c.innerHTML=`<input type="text" value="${o.description}" readonly>`,r.innerHTML="Edit",p.innerHTML="Delete",p.setAttribute("id","delete"),a.appendChild(l),a.appendChild(s),i.appendChild(r),i.appendChild(p),n.appendChild(a),n.appendChild(c),n.appendChild(i),d.appendChild(n),o.completed&&n.classList.add("completed"),l.addEventListener("change",(d=>{o.completed=d.target.checked,localStorage.setItem("todos",JSON.stringify(e)),o.completed?n.classList.add("completed"):n.classList.remove("completed"),t()})),r.addEventListener("click",(d=>{const n=c.querySelector("input");n.removeAttribute("readonly"),n.focus(),n.addEventListener("blur",(d=>{n.setAttribute("readonly",!0),o.description=d.target.value,localStorage.setItem("todos",JSON.stringify(e)),t()}))})),p.addEventListener("click",(d=>{e=e.filter((e=>e!=o)),localStorage.setItem("todos",JSON.stringify(e)),t();for(let t=0;t<JSON.parse(localStorage.getItem("todos")).length;t++)e[t].id=t+1,localStorage.setItem("todos",JSON.stringify(e))}))}))}window.addEventListener("load",(()=>{document.querySelector("#new-todo-form").addEventListener("submit",(d=>{d.preventDefault();const o={description:d.target.elements.content.value,completed:!1,id:e.length+1};e.push(o),localStorage.setItem("todos",JSON.stringify(e)),d.target.reset(),t()})),t()}))}},e=>{e(e.s=448)}]);