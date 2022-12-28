var tipuesearch = {"pages": [{'title': '關於', 'text': 'cmsite：wcms 使用 https://github.com/mdecycu/cmsimde 作為子模塊 \n', 'tags': '', 'url': '關於.html'}, {'title': '布萊頓', 'text': "https://en.wikipedia.org/wiki/Python_(programming_language) \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教程： \n https://docs.python.org/3/tutorial/ \n Python的非正式介紹 \n 縮進 \n 變量 \n 註釋 \n 數字數字 \n 字符串 \n 打印 \n Python 控制流工具 \n 為了 \n 如果 \n 範圍 \n 打開 \n 讀 \n 列表 \n 元組 \n 字典 \n 功能 \n 試用……除了 \n 休息 \n 目的地 \n 多少 \n 這個頁面演示如何在同一個頁面下合併多個 Ace 編輯器與執行按鈕（ practice_html.txt 動態頁面文件）。 \n 練習 時，txttxt文件應該可以在啟動時.py文件中設置超目錄下載/py目錄引用。 \n 也即將所有的 html 使用 Brython 生成，然後寫為 類 後，在導入時通過 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \nwindow.onload=函數（）{ \nbrython({debug:1, pythonpath:['./../cmsimde/static/','./../downloads/py/']}); \n} \n</腳本> \n 從 1 累加到 100: \n 1加到100 \n 將 iterable 與 iterator 相關說明 ，使用 Brython 與 Ace Editor 在此中進行頁面整理。 \n", 'tags': '', 'url': '布萊頓.html'}, {'title': '每週進度', 'text': '', 'tags': '', 'url': '每週進度.html'}, {'title': 'W1', 'text': '本週因應中秋連假 \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '說明 2022 Fall 與計算機程式及電腦輔助設計與實習課程的相關規劃與期程安排.及如何設定ipv6 \n \n 計算機程式課程學員可以直接從 \xa0 https://mde.tw/content/Python.html \xa0 進入, 直接在線上練習 \xa0 Brython \xa0 所支援的 Python 語法. 由於是在瀏覽器上, 必須要對 HTML 與 Javascript 有些基本認識, 才能充份使用 \xa0 Brython . \n 學員在計算機程式課程所寫的程式, 被要求要設法放入自己管理的 Github 倉儲, 而倉儲是採用 Github Classroom 建立, 並且直接導入 cmsimde 子模組. 假如要將個人倉儲 git clone 到近端電腦上改版, 就必須使用: \n git clone --recurse-submodules 加上擷取倉儲內容的網路_URL 或 SSH 連線字串 \n 假如第一階段只用 git clone, 而沒有 --recurse-submodules 附屬指令選項, 則可以在取下主倉儲內容後, 以 git submodule update --init --recursive 取下所有子模組的內容. \n 光是要能以 git 取下倉儲檔案, 使用者的近端電腦就必須能夠執行 git, 可以使用操作系統安裝版, 或者使用課堂上所推薦的可攜程式套件中的 \xa0 portablegit . \n 至於要使用 https 或 ssh 協定進行 git, 主要牽涉到隨後改版 push 時的權限驗證, 因為只有具備倉儲管理權的用戶, 才能對 Github 上的倉儲進行改版. \n \n', 'tags': '', 'url': 'W2.html'}, {'title': '網路協定', 'text': '所有網路上的應用, 都牽涉網路協定, 以 https 而言, 所使用的網路協定就是 http, 也就是超文件傳輸協定. 而 https 就是在利用超文件傳輸的過程中, 將傳送的資料加以加密編碼後, 直到接收後再解開, 是相較於 http 嚴謹安全的傳送. \n 以 https 擷取 Github 倉儲的時候, 需要在 URL 中加上帳號 \xa0 token , 而這串連線驗證身分用的字串, 還帶有權限範圍, 以及時效, 使用者可以在 Github 帳號設定頁中取得. \n 由於 Github 目前只支援 IPv4 協定, 而在電腦輔助設計室為了擴大可用頻寬, 採用 IPv6 協定, 要讓 IPv6 協定下的 git 指令, 正確與 Github 倉儲連線, 必須透過 Proxy server (使用 \xa0 Squid ), 而且是能同時支援 IPv4 與 IPv6 協定的代理主機. 以 https 對 git 指令的 Proxy 設定, 位於可攜程式環境中的 home_ipv6 目錄下, 檔案名稱為 .gitconfig, 使用者執行 git config 後的設定就是存入 home_ipv6/.gitconfig 檔案中. \n 至於 git 所使用的 \xa0 SSH \xa0 連線協定, 在 Windows 操作系統, 可以透過 \xa0 Putty \xa0 session 設定達成, 其中的 session 包含連線到 github.com, 所使用的 \xa0 SSH \xa0 認證用 private key 位置, 還有 Proxy 設定. \n 上述將使用 cmsimde 作為子模組的倉儲取至近端電腦的目的, 共有兩個: 進行改版以及進行協同. \n 在近端進行倉儲內容改版的意思是, 利用 Python 與必要模組, 可以執行 cmsimde 網站中的動態系統, 其中所需要的模組為: \n flask flask_cors bs4 lxml pelican markdown leo pyopenssl \n flask 與 flask_cors 是網際框架, 安裝 flask_cors 的目的是讓網站可以跨網域擷取資料. \n bs4 是用來對超文件分頁的工具, 讓 cmsimde 中的 config/content.htm 可以根據 H1, H2 與 H3 的標題進行分頁. \n lxml 是將動態網頁內容轉為靜態網頁內容時所需要的解讀模組. \n pelican 是用來建立網誌的工具, 可以將使用者所寫的 Markdown 轉為網誌格式的內容. \n markdown 是用來解讀 .md 檔案的工具. \n leo \xa0 是大綱管理模組, 用來作為編寫網誌或簡報的工具, 也可以當作程式開發的 IDE. \n pyopenssl 則是在動態網頁中, 以程式方法伺服靜態網頁內容時, 建立 SSL 連線時所需. \n \n', 'tags': '', 'url': '網路協定.html'}, {'title': 'Replit 作為應用程式伺服器', 'text': '除了將 Github 上的倉儲, git clone 到近端改版外, 也可以利用 \xa0 Replit , 直接在瀏覽器上以 wsgi 模式, 執行 cmsimde 的動態網站. 如此可以免除在近端執行動態網站所需要的網路協定與 git 指令. 只不過 \xa0 Replit \xa0 只給免費帳號 500 MB 的儲存空間, 過大的倉儲並不適合採用 \xa0 Replit \xa0 執行 cmsimde 的動態網站. \n 使用 \xa0 Replit \xa0 執行 cmsimde 的過程, 需要在 shell 執行: \n git submodule update --init --recursive \n 目的是取下子模組資料, 因為 \xa0 Replit \xa0 與 Github 的連結, 似乎只使用 git clone, 並沒有加上 --recurse-submodules, 使用者必須手動執行. \n 另外則是利用 pip install flask flask_cors bs4 lxml pelican markdown gevent 安裝 cmsimde 所需模組, 與上述近端改版的差異是: 無需安裝 \xa0 leo \xa0 與 pyopenssl, 因為系統是在雲端 Replit 的主機上執行, 目前還無法在 \xa0 Replit \xa0 系統上使用 \xa0 leo , 也無需自行配置近端伺服器的 SSL. \n 一旦將動態網站配置到 \xa0 Replit \xa0 之後, 可以將動態網頁改版內容, 同步到對應的 Github 倉儲, 主要利用倉儲的 \xa0 Github Pages \xa0 伺服靜態網頁. \n \n 以上擷取mde.tw 第二週教學內容概要', 'tags': '', 'url': 'Replit 作為應用程式伺服器.html'}, {'title': 'W3', 'text': '1. 透過mdecad2022的 organization 建立個人可以管理的倉儲 (site-Github_帳號) \n 2. 利用 replit 帳號所啟動的動態網站進行內容管理 \n 3. 動態轉為靜態網站內容之後,\xa0\xa0 要設法與 Github 倉儲同步. \n \n 之後申請帳號都使用 @nfu\xa0\xa0 電子郵箱 \xa0 \n \n 修補課程網站安全疑慮: \xa0 \n 目的:\xa0\xa0 不想讓 config/config 帶有編碼後的管理者密碼 \xa0 \n 執行步驟: \xa0 \n \n 必須先在個人的 mdecad2022/site-github_帳號\xa0 倉儲進行處理 \xa0 \n 第一步就是刪除 config/config 設定檔案 \xa0 \n 修改 .gitignore 成為:\xa0\xa0 \xa0 https://raw.githubusercontent.com/mdecad2022/site-41023242/main/.gitignore \xa0 \xa0 \n 加入 main.py:\xa0\xa0 \xa0 https://raw.githubusercontent.com/mdecad2022/site-41023242/main/main.py \xa0 \xa0 \n 在倉儲根目錄加入\xa0\xa0 nocache.py, 內容如:\xa0\xa0 \xa0 https://github.com/mdecycu/cmsimde/blob/2a41b26b6d9b1446a8b448bb6fb58a6dbb41c867/nocache.py \xa0 \xa0 \n \n \xa0 \n 之後再設法以 import 方式, 利用個人課程倉儲內容在replit 建立Repl 專案. \xa0 \n 至於Repl 專案, 必須在 Shell, 執行下列兩則指令: git submodule update --init --recursive \xa0 \xa0 \xa0 \n 在倉儲根目錄執行\xa0\xa0\xa0 \xa0 \n 表示要取下所有子模組的內容 \xa0 \n \xa0 \n 並且安裝啟動\xa0 cmsimde\xa0 所需要的\xa0 Python 模組:\xa0\xa0 \xa0 \n \xa0 pip install\xa0\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n Replit 專案上的靜態內容同步至原始課程倉儲教學影片 \xa0 \n \xa0 \n 2b 開始在\xa0 \xa0 https://exam.cycu.org \xa0\xa0 \xa0 建立考試帳號. \xa0 \n \xa0 \n 執行Replit專案過程 \n \n 在Shell中執行以上紅色粗體的程式模組程式後, 可以開啟個人網站並且編輯個人網站轉換為靜態網站進行遠端操控 \n 然後再進行建立考試帳號 \n \n \xa0', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '這週將在 Replit 執行動態網站: \xa0 \n 必須進入 Shell, 在倉儲根目錄執行下列兩則指令 (取下子模組內容, 並安裝執行所需模組). \xa0 \n git submodule update --init --recursive \xa0 \n pip install\xa0\xa0 flask flask_cors bs4 lxml pelican markdown gevent \xa0 \n \n \xa0將以上程式模組導入Shell,導入完並建立個人考試帳號(如下) \n \n 考試主機:\u202f \xa0 https://exam.cycu.org \u202f \xa0 \n 近端工具: 下載\xa0\xa0 \xa0 portable_python_3.10.6.7z \xa0 \n Portablegit \xa0 \n 雲端工具: Replit \xa0 \n Web 分散式版次管理:\xa0 \xa0 https://github.com \xa0 \xa0 \n 電腦輔助繪圖工具:\xa0 \xa0 \n \xa0\xa0\xa0 近端 NX2027 與 Solvespace \xa0 \n \xa0\xa0\xa0 雲端: \xa0 https://onshape.com \xa0 \xa0', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '\n (登錄stud.cycu.org)利用@nfu電子郵箱接收到的賬號與密碼，登錄stud.cycu.org：在命令列表窗口，以ssh\xa0 cad學號@stud.cycu.org，輸入以應用，密可否系統 \xa0 \n 請到excel 檔案 查詢 stud.cycu.org 中與帳號對應的近端 (給127.0.0.1 使用) 與遠端 (給stud.cycu.org) 堡號 \xa0 \n （sftp建立建立與 與 與對應。 \xa0\xa0\xa0 \xa0 \n 與在近端 (Windows) 使用 SSH 建立公鑰/私鑰流程相同，必須在 Linux (Ubuntu) 使用 ssh-keygen 建立密鑰。所生成的id_rsa為私鑰，而id_rsa.pub為公鑰，都位於.ssh目錄下。 \xa0 \n 使用 sftp 進入 stud.cycu.org 後，cd 到 .ssh，以獲取 id_rsa.pub 將公鑰取至 Windows 後，送至 Github -> 設置 -> SSH 和 GPG 設置區，通過新密鑰登錄公鑰。 \xa0 \n 接下來要下載\xa0\xa0 config 設置文件，以sftp放入stud.cycu.org主機的.ssh目錄中。 \xa0 \n 上面的config 主要設置SSH協議對github.com 連線時的代理主機, 但是取下cmsimde 子模型使用的是https, 因此執行下面的列表 git clone 時將同時用到SSH 與晏 https,目錄下要有config 設置文件外, 也必須同時在.gitconfig 文件中設置http.proxy, 也就是以git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 設置提供https 連線使用的代理主機，並以 git config --global user.name 以及 git config --global user.email 設置提供交互的身份記錄。 \xa0 \n 在 stud.cycu.org 中，以 git clone --recurse-submodules\xa0\xa0 git@github.com:mdecad2022/site-個人github賬號.git \xa0\xa0 取下個人倉庫。 \xa0 \n 假如先使用 git clone 並沒有取下 cmsimde 子模型內容, 只需要在設置 https 代理主機後, 進入倉庫根目錄執行 git submodule update --init --recursive 即可卸載. \xa0 \n 接著下載 server.py ，在Windows下編寫 server.py ，將個人分配到的9xxxx填入後存檔，以sftp放入上列取下的倉庫根目錄。 \xa0 \n 在stud.cycu.org系統中，進入倉庫（site-github賬號）後，執行python3 server.py，就可以啟動動態網站。 \xa0 \n 設置完成後，各學生將會有一個廣域網上的動態網站（取代 Replit 上的動態網站）， https: \xa0//stud.cycu.org:8xxxx 看\xa0\xa0 個人的動態網站。 \xa0 \n 動態網站改版後，轉為靜態，必須通過source\xa0 acp 以SSH將改版內容傳回github。（必須使用 chmod u+x acp 將 acp 文件屬性改為對用戶可以執行（也就是 x 屬性）。 \xa0 \n 執行source acp "提交字符串" 之前必須要 git config --global user.name,\xa0 git config --global user.email,\xa0 git config --global http.proxy \xa0 \n 上文所述採用指令模式對服務器 sftp 也可以利用\xa0\xa0 Filezilla portable ，以圖形介紹面完成。而ssh也可以透過putty.exe執行遠程登錄。 \xa0 \n \n \xa0 \n \xa0 \n .ssh 目錄下的配置： \xa0 \n Host 就是 .ssh/config 設置的對應會話名稱，此處若 Host 設置為 demo，則 SSH 對應的 .git/config 中的 URL 就必須使用 git@demo:mdecad2022/site-scrum-1.git, \xa0 demo 就是Host, Port 那麼是隨後的 %p 也就是 SSH 協議內定的 port 22, %h 那麼是 Hostname, 也就是 github.com \xa0 \n \n \n \n \n 1個 \xa0 \n 2個 \xa0 \n 3個 \xa0 \n 4個 \xa0 \n \n \n 主機演示 \xa0 \n 用戶 git \xa0 \n 主機名 github.com \xa0 \n ProxyCommand /usr/bin/ncat --proxy p42.cycu.org:3128 --proxy-type http %h %p \xa0 \n \n \n \n \n \xa0 \n -------------------------------------- \xa0 \n 2a在一台遠程服務器，執行個人倉庫的動態網頁。 \xa0 \n \xa0 \n \n 登入 https://mail.nfu.edu.tw \xa0 \xa0 - 查看登入stud.cycu.org 伺服器的帳號密碼, 帳號為cad+學號, 密碼為四個字元, 包括數字與小寫英文字母 \xa0 \n 請到excel 檔案 查詢 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的端口) 與遠端 (給 stud.cycu.org, 8 開頭的端口) 墩號 \xa0 \n 修改可攜帶Python 3.10.6 start.bat，蓋掉第三行後重新啟動，目標的希冀操作系統的指令搜索路徑放於可攜帶目標搜索路徑。 \xa0 \n 重新啟動可攜帶程序環境，在其中一個命令列表，ssh\xa0 \xa0 cad+學號@stud.cycu.org ，表示要使用secure shell遠程登錄到stud.cycu.org，這是.Ubuntu一台Linux服務器22主機，4服務器(若使用的網絡連接協議並沒有IPv6，可將系統的代理設置為140.130.17.4:3128 kmolab/kmolab) \xa0 \n 在 ssh 登錄界面，以 ssh-keygen 建立密鑰對，.ssh/id_rsa 為私鑰，id_rsa.pub 為公鑰 \xa0 \n 設置方法利用 Filezilla，以 sftp 安全的（安全）文件（文件）傳輸（傳輸）協議（協議），與 stud.cycu.org 伺服器鏈接。 \xa0 \n 利用 Filezilla sftp 取下 id_rsa.pub，登錄至 Github 帳號下的設置 -> SSH 和 GPG 密鑰。 \xa0 \n 對於服務器 sftp 也可以利用\xa0 \xa0 Filezilla portable ，以圖形介面完成。 而ssh也可以透過putty.exe執行遠程登錄。 \xa0 \n 接下來要下載\xa0 \xa0 config 設置文件，以sftp放入stud.cycu.org主機的.ssh目錄中。 \xa0 \n 接下來要在Ubuntu（也就是stud.cycu.org這台主機所安裝的操作系統）中，設置.gitconfig，總包包含三項設置：git config --global user.name "scrum-1", git config --global user.email "scrum1@mde.tw" 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設置必須在 ssh 登錄界面中執行, 設置完成文件會存入帳號根目錄中的.gitconfig \xa0 \n 利用 git clone --recurse-submodules\xa0 \xa0 git@demo:mdecad2022/site-scrum-1.git \xa0 \xa0 demo \xa0 \n 接著下載 server.py ，在Windows下編寫 server.py ，將個人分配到的9xxxx填入後存檔，以sftp放入上列取下的倉庫根目錄。 \xa0 \n 登錄Ubuntu後，會使用的命令：pwd 代表打印工作目錄，clear - 清除路由，cd - 更換目錄，ls -l 列出目錄詳細內容，chmod u+x讓 acp 顯示讓用戶（可以執行acp腳本）者以 source acp 添加上提交字符串進行 git add, git commit, git push, 如何在 Windows 中執行 acp.bat 添加上提交字符串。 \xa0 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '在 stud.cycu.org 執行動態網站 \xa0 \n git config --global http.proxy\xa0  http://p42.cycu.org:3128 \xa0 \n \xa0 \xa0 \n git config --global user.name "name" \xa0 \n \xa0 \xa0 \n git config --global user.email "email" \xa0 \n \xa0 \xa0 \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n \xa0 \xa0 \n git 子模塊更新 --init --recursive \xa0 \n \xa0 \xa0 \n python3 服務器.py \xa0 \n \xa0 \xa0 \n https://stud.cycu.org:8xxx \xa0 \n \xa0 \xa0 \n acp 放入倉後 \xa0 \n \xa0 \xa0 \n chmod u+x acp\xa0 \xa0 \n \xa0 \xa0 \n source acp "提交說明字串" \xa0 \n \xa0 \xa0 \n python3 服務器.py & \xa0 \n \xa0 \xa0 \n ps 輔助 |  grep“服務器.py” \xa0 \n \xa0 \xa0 \n 殺死-9 111919 \xa0 \n \xa0 \xa0 \n cd s, cd cmsimde, git pull origin master \xa0 \n \xa0 \xa0 \n cd .., python3 server.py \xa0 \n \xa0 \n 操作NX \n \n \n \n Brython << 上一頁 下一頁 >> hw \xa0 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': ' 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑   輸出   清除輸出區 清畫區 重新加載 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1加到100 cango_three_gears B蛇 俄羅斯方塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑   輸出   清除輸出區 清畫區 重新加載 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'W11.html'}]};