# flask_localstorage


## プロジェクト構成

```
flask_localstorage
└ src
　　├　templates
　　│　　　├ index.html   ・・・ 入力フォームのページ
　　│　　　└ result.html  ・・・ 実行結果の表示
　　└ app.py              ・・・ アプリケーションのエントリーポイント
```


## 開発環境のセットアップ
- 環境変数の設定をコピーする
```shell
$ cp .env.sample .env
```

- 必要な Python のパッケージを、このプロジェクトの配下にインストールする。
```shell
$ pip3 install -r requirements.txt -t site-packages
```

- Web アプリケーションを起動する
```shell
$ python3 src/app.py
```

