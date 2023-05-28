import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

function oneChange(document, query: string, attr: string, change: (string) => string): void{
  for(const element of document.querySelectorAll(query)){
    const raw = element.getAttribute(attr)
    element.setAttribute(attr,change(raw))
  }
}
export function urlChange(html: string, change: (string) => string){
  const document = new DOMParser().parseFromString(html, "text/html")
  oneChange(document, "a[href]", "href", change)
  return document.querySelector("html").outerHTML
}
