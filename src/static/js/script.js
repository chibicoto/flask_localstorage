// Web API を利用するときに必要な API Key をローカルストレージに保存するサンプルコード

// ページ全体の読み込みイベント処理
window.onload = function () {
  // ローカルストレージに保存した API key を読み取る
  // APIキーの値を保存したい ローカルストレージのキー を alpikey に設定すること
  const key = localStorage.getItem('alpikey') // READ
  // APIキーの値を表示したい HTML タグの id を currentapikey に設定すること
  document.getElementById('currentapikey').textContent = key

  // TODO: 必要に応じて、
  //       ここで Flask アプリケーションサーバーに API key を保存する。
  document.getElementById('InputApiKey').value = key
}

// クリックイベント処理（API Key の設定）
// このイベント処理を実装したい HTML タグの id を setapikey に設定すること
document.getElementById('setapikey').onclick = function () {
  // APIキーの値を取得したい HTML タグの id を apikey に設定すること
  const apiKey = document.getElementById('apikey').value
  // console.log(apikey)

  // ローカルストレージのキー alpikey にAPI Keyの値を保存する
  localStorage.setItem('alpikey', apiKey) // CREATE / UPDATE

  // API Key の現在の設定値を表示する
  document.getElementById('currentapikey').textContent = apiKey

  // 送信フォームの隠し要素に設定しておく
  document.getElementById('InputApiKey').value = apiKey
}

// クリックイベント処理 (API Key の削除)
// このイベント処理を実装したい HTML タグの id を delapikey に設定すること
document.getElementById('delapikey').onclick = function () {
  // ローカルストレージのキー alpikey の値とキーを削除する
  localStorage.removeItem('alpikey') // DELETE
  // API Key の現在の設定値を表示を更新する
  document.getElementById('currentapikey').textContent = ''
  // 送信フォームの隠し要素の値も消去する
  document.getElementById('InputApiKey').value = ''
}
