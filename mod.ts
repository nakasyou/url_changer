import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

function oneChange(document, query: string, attr: string, change: (string) => string): void{
  for(const element of document.querySelectorAll(query)){
    const raw = element.getAttribute(attr)
    element.setAttribute(attr,change(raw))
  }
}
export function urlChange(html: string, change: (string) => string){
  const document = new DOMParser().parseFromString(html, "text/html")
  
  oneChange(document, "form[action]", "action", change)  // <form action="xx" />
  
  oneChange(document, "img[src]", "src", change)  // <img src="xx" />
  oneChange(document, "script[src]", "src", change)  // <script src="xx" />
  oneChange(document, "iframe[src]", "src", change)  // <iframe src="xx" />
  
  oneChange(document, "a[href]", "href", change)  // <a href="xx" />
  oneChange(document, "link[href]", "href", change)  // <link href="xx" />

  
  return document.querySelector("html").outerHTML
}
