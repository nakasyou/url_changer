# url_changer
URL CHANGER

```html
<a href="/aaa">To aaa</a>
```
Do you want to change root?
```ts
import { urlChange } from "https://deno.land/x/url_changer/mod.ts"

const result = urlChange(`<a href="/aaa">To aaa</a>`, (url: string) => {
  return "/new_root" + url
})

console.log(result)
// -> 
// <html><head></head><body><a href="/new_root/aaa">To aaa</a></body></html>
```
