# flask_localstorage

## 概要
Web ブラウザのローカルストレージに保存した値をフォームの送信情報に埋め込んで Flask アプリケーションサーバーに渡すサンプルアプリケーションです。

## プロジェクト構成

```
flask_localstorage
└ src
　　├　templates
　　│　　　├ index.html   ・・・ 入力フォームのページ
　　│　　　└ result.html  ・・・ 実行結果の表示
　　├ static
　　│　　　└ js
　　│　    　 └ script.js  ・・・ LocalStorage の読み書き
　　└ app.py              ・・・ アプリケーションのエントリーポイント
```


## 開発環境のセットアップ
- 環境変数の設定をコピーする
```shell
$ cp .env.sample .env
```

- `.envrc` ファイルの記述を自動設定させるならば、 `direnv` をインストールする。
`direnv` を使わない場合は、コマンドラインから `.envrc` ファイルの中身を手動で実行すること。

- 必要な Python のパッケージを、このプロジェクトの配下にインストールする。
```shell
$ pip3 install -r requirements.txt -t site-packages
```

- Web アプリケーションを起動する
```shell
$ python3 src/app.py
```

## デプロイ
### 公開
- GitHub のリモートリポジトリの`main`ブランチにプッシュする。
```shell
$ git push -u origin main
#これで、PaaS 型クラウドプラットフォーム`Render`にて Web アプリケーションを公開できる。
```

### Render での Web Service の設定
Web Service の新規作成ページでは、以下の通りに設定する。

- Branch
```
main
```

- Runtime
```
Python3
```

- Build Command
```shell
pip install -r requirements.txt
```

- Start Command
```shell
gunicorn --chdir src app:app
```

- Advanced - Environment Variables
```shell
PYTHON_VERSION  3.9.13
```
