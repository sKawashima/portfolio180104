---
title: Ruby on Rails 学習メモ的チートシート
tags:
  - Ruby
  - Rails
date: 2018-04-11 17:14:06
category: Development
---

> この記事はQiitaに書いていた自身の記事のコピーです。

なるほどと思ったことや、メモとして残したいことをじわじわ残していってるので、少しずつ内容は変化してます。あしからず。

<!-- more -->

---

## 目次

<!-- toc -->

## 主な参考

- [Ruby on Rails 5入門 (全28回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_rails_v3)
- [Ruby on Rails 5 の上手な使い方](https://amzn.to/2Jewn9Y)

## START

```shell各種環境が導入されていることを確認
ruby -v
sqlite3 --version
rails --version
```

```shellプロジェクト作成
rails new <プロジェクト名>
# カレントディレクトリ/<プロジェクト名> にファイルが生成される
```

↑だと、正直いらない`coffee script`とかまで自動導入されてしまうので、

```shellプロジェクト作成：bandleスキップ
rails new <プロジェクト名> -B
# カレントディレクトリ/<プロジェクト名> にファイルが生成される
```

でファイル生成だけ行い、Gemfileを編集する。

### .sassファイルを生成するようにする

```rubyconfig/application.rbに追記
config.sass.preferred_syntax = :sass
```

### Gem 周り

Gemfile: Node.js環境で言うところのpackage.json内依存モジュール一覧と似たようなもの。

```rubyCoffeeScript無効化（コメントアウトのみ）
# gem 'coffee-rails', '~> 4.2'
```

```rubyHaml導入
gem 'hamlit-rails'
# いろいろ種類があるがこれが一番高速らしい
# Slimも魅力的であるが、slim-railsより高速らしいのでこちらを選択。
gem 'erb2haml'
```

```rubyDebug環境強化
group :development do
  # 追記
  # better errors
  gem 'better_errors'
  gem 'binding_of_caller'
end
# step by step debug
gem 'pry-byebug'
```

```ruby開発補助系gem
group :development do
  # 追記
  # モデルファイルの情報追加
  gem 'annotate'
end
```

## フォルダ構成

### 実際に操作するもの

- app: メイン
- config: 設定
- db: データベース

### appフォルダ

#### MVC設計

- models
- views
- controllers

#### 他に使うもの

- assets: 画像やJS,CSSをいれる

## Model

```shellファイル生成
rails g model Name sub:string sub:text...
# Name: モデル名、単数かつ頭大文字がよし
# sub: 各パラメータ

# created_atとupdated_atは自動で生成される
```

```shellDB生成
rails db:migrate
```

```shellDBを全削除
rails db:migrate:reset
```

### 初期データ定義

`db/seeds.rb`をいじる。
rubyを直接書ける。

```ruby4つの初期データを生成する場合
5.times do |i|
  Name.create(title: 'title #{i}', body: 'body #{i}')
end
```

```shellseedから初期データ生成
rails db:seed
```

### 詳細定義

`app/models/name.rb`をいじる。

```rubyValidation
validates :sub, presence: true, length: { minimum: 3 }
# presence: true > 入力必須
```

これを定義した場合、サーバーサイドValidationでErrorが出た場合のController/Viewを定義する必要があるので留意（[参考](https://dotinstall.com/lessons/basic_rails_v3/41817)）。

```ruby別のModelとの紐付け
has_many :name2s, dependent: destroy
```

## Controller

ModelとViewをつなぐ役割。Modelを基準に生成する。

```shellファイル生成
rails g controller Names
# app/controllers/names_controller.rbが生成
```

### routing

=URLとControllerの紐付け。

`config/routes.rb`を編集する。

```rubyModelについて自動生成
resources :names
```

```ruby別Modelに紐付けたModelについて自動生成
resources :names do
  resources :name2s
end
```

```ruby一部のroutingのみを自動生成
resources :names, only: [:create, :destroy]
```

```ruby一部のrouting以外を自動生成
resources :names, except: [:create, :destroy]
```

```rubyroot(/)指定
root 'names#view名'
```

```shell全Routing確認
rails routes

# これを基準に関数を作ったりPrefixを使ったりできる
```

### ファイル編集例

```ruby一覧取得
def index
  @names = Name.all.order(created_at: 'desc')
end
```

```rubyRequestパラメータの利用
# GETやPOSTで呼ばれた際に使える（routesで確認）
def show
  @name = Name.find(params[:id])
end
```

`all.order`や`find`は**Active Record**を参照。

```rubyModelの追加保存（フォームから呼び出す形式で）
def create
# @name = Name.new(param.[:name])では「厳密な引数指定をしていない」=「悪意のあるリクエストを受け付けてしまうおそれがある」というエラーが出る
  @name = Name.new(param.require(:name).permit(:sub1, :sub2))
  @name.save

  redirect_to names_path
end
```

```rubyController内の関数
def create
  @name = Name.new(name_params)
  @name.save

  redirect_to names_path
end

private
  def name_params
    param.require(:name).permit(:sub1, :sub2))
end
```

```ruby404を返す
render :status => 404
```

## View

### 全体管理

`app/views/layouts/application.html.erb`を参照。

railsで生成された要素は`<%= yield =>`部に入る。

#### CSS

`app/assets/stylecheets/application.css`を参照。

### 新規作成

Model-Controllerに紐付けて作る。
`app/views/names/`に`関数名.html.erb`を作成。

#### erb記法

```erbruby式を埋め込む
<% %>
```

```erbruby式を埋め込み、評価結果をエスケープして埋め込む
<%= %>
```

### ファイル編集例(erb)

```erb一覧表示
<h2>一覧</h2>
<ul>
  <% @names.each do |post| %>
  <li><%= name.title %></li>
  <% end %>
</ul>
```

変数`@names`などは、controllerで指定したものをそのまま呼び出せる。

#### ファイル分割

```erb_hello.html.erb
<!-- 正式名称：Partial -->
<p>hello</p>
```

```erbindex.html.erb
<%= render 'hello' %>
```

### ヘルパー

関数的動きをする決まった書き方。

```erblink_to
<h2>一覧</h2>
<ul>
  <% @names.each do |post| %>
  <li>
  <%= link_to '表示する文字列', Link_URL %>
  </li>
  <% end %>
</ul>
```

```erbroutesのPrefixの利用
<%= link_to '表示する文字列', Prefix_path %>
```

```erbIDパラメータを渡す
<%= link_to '表示する文字列', Prefix_path(name.id) %>
```

```erbIDパラメータを渡す(省略形)
<%= link_to '表示する文字列', Prefix_path(name) %>
```

```erbmethodの指定（Deleteなどに使う）
<%= link_to '表示する文字列', Prefix_path(name), method: :method %>
```

```erb確認ダイアログを表示
<%= link_to '表示する文字列', Prefix_path(name), method: :method, data: { cinfirm: '確認？' }%>
```

```erb改行で可視化できる
<%= link_to '表示する文字列',
    Prefix_path(name),
    method: :method,
    data: { cinfirm: '確認？' }%>
```

```erbimage_tag
<!-- app/assets/images/ にファイルを設置 -->
<!-- ヘルパーは()で設定を囲める -->
<%= image_tag('ファイル名.png', class:className) %>
```

```erbform_for
<%= form_for :name, url: names_path do |f| %>
<p>
  <%= f.text_field :sub, placeholder: 'enter sub' %>
  <%= f.text_area :sub, placeholder: 'enter sub' %>
  <%= f.submit %>
</p>
```

```erbsimple_format
<p><%= simple_format @name.sub %></p>
<!-- 改行を適切なタグに変えてくれる -->
```

## rails console

直接データベースを弄ったりできる：ActiveRecord。

```shell入る
rails c
```

```shellモデルにデータを追加
Name.create(title: 'title 2', body: 'body 2')
```

```shellモデルにデータを追加（一旦定義）
# 定義
n = Name.new(title: 'title 1', body: 'body 1')
# 書き込み
n.save
```

```shellモデルのデータを確認
Name.all
```

## rails dbconsole

railsで管理するデータベースのCUIを操作する。
データを見ながら編集するときなどに使う。
SQLで操作できる。

```shell入る
rails db
```

```shellテーブル一覧取得
.tables
```

Modelのテーブルは`names`のように小文字＋複数形になっている。

```shell特定のテーブルのデータ一覧取得
select * from names;
# シンプルなSQL文
```

```shell
.quit
```

## session, cookies

```ruby設定
session[:name] = a
cookies[:name] = a
```

```ruby存在確認
if session[:name]
if cookies[:name]
```

## その他用語等

### CoC

細かいファイル配置などが決まっているからこそ書くコードが少なくて済むという思想・規約。

### Active Record

Railsで開発されているSQLみたいなやつ。ドットインストール有料。
