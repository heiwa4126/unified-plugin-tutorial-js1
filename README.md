# unified-plugin-tutorial-js1

unifiedのremark/rehype pluginを作る練習。
[Create a plugin \- unified](https://unifiedjs.com/learn/guide/create-a-plugin/)
を見ながらretextのプラグインをつくってみる。
(あとこれ
[Use unified - unified](https://unifiedjs.com/learn/guide/using-unified/)
)

[Learn - unified](https://unifiedjs.com/learn/)にづづく。


## メモ

bashの
```bash
node index.js < example.md > example.html
```

はpowershellでは
```powershell
Get-Content example.md | node index.js | Out-File example.html
# or
GC example.md | node index.js > example.html
```

↑めんどくさいので `node index.js < example.md` 相当は `pnpm start`で。
(Windowsだと`cmd.exe`で実行される)
