from flask import Flask, request, render_template
from wtforms import Form, StringField, validators, SubmitField


# Flask オブジェクトのインスタンス化
app = Flask(__name__)


# WTForms を使い、index.html 側で表示されるフォームを構築する
class InputForm(Form):
  InputFormTest = StringField('文字を入力してください', [validators.InputRequired()])

  # HTML 側で表示する submit ボタンを表示する
  submit = SubmitField('送信')

# URL にアクセスがあった場合の処理の設定
@app.route('/', methods = ['GET', 'POST'])
def input():
  # WTForms で構築したフォームをインスタンス化する
  form = InputForm(request.form)

  # POSTメソッドの条件
  if request.method == 'POST':
    # 条件に当てはまらない場合
    if form.validate() == False:
      return render_template('index.html', forms=form)
    # 条件が当てはまる場合
    outputname_ = request.form['InputFormTest']
    return render_template('result.html', outputname=outputname_)
  
  # GETメソッドの条件
  elif request.method == 'GET':
    return render_template('index.html', forms=form)


# アプリケーションに実行を定義する
if __name__ == '__main__':
  app.run(debug=True)
