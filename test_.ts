import {urlChange} from "./mod.ts"

console.log(urlChange(`<a href="/a"></a>`,(url)=>{
  return url+"/a"
}))
