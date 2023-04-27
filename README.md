# unified-plugin-tutorial-js1

unifiedのremark/rehype pluginを作るチュートリアルをやってみた。

まず
[Create a plugin \- unified](https://unifiedjs.com/learn/guide/create-a-plugin/)
を見ながら retext のプラグインをつくってみる。

先にこれをやってから。
[Use unified - unified](https://unifiedjs.com/learn/guide/using-unified/)

[Learn - unified](https://unifiedjs.com/learn/) にづづく。


## 実行

[Use unified - unified](https://unifiedjs.com/learn/guide/using-unified/)の方は:
```bash
node index.js
```

[Create a plugin \- unified](https://unifiedjs.com/learn/guide/create-a-plugin/)の方は:
```bash
node example.js
```
(プラグインは`index.js`から`pligin1.js`に移した)


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

VFileでやるのが賢い感じ。
