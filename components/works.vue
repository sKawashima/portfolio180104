<template lang="pug">
section#works-list
  .backline
    .line
  .items
    a.item#w0(href="~/static/mahounoyuenchi.png" target="_blank")
      img.thumb(src="~/static/mahounoyuenchi.png")
      .desc
        h1 「まほうのゆうえんち」ポスター
        .workgrid
          p.h 活動
          p.main 課外活動
          p.h 活動人数
          p.main 1人
          p.h 担当
          p.main デザイン
          p.h 制作期間
          p.main 1day
          p.h 使用技術
          p.main Photoshop
        p.summary はこだてみらい館運営コンソーシアムより依頼を受けて制作。

    a.item(href="https://skawashima.com/temp/baloon.html" target="_blank")
      img.thumb(src="~/static/baloon.png")
      .desc
        h1 「ふうせんの森」特設ページ
          span.genre.genre-web Web
          span.genre.genre-proposal 提案
        .workgrid
          p.h 活動
          p.main 課外活動
          p.h 活動人数
          p.main 2人
          p.h 担当
          p.main デザイン（一部） / 開発 / コンテンツ提案
          p.h 制作期間
          p.main 1day
          p.h 使用技術
          p.main XD / pug,Sass / TypeScript / CANVAS / WordPress
        p.summary はこだてみらい館運営コンソーシアムより依頼を受けて制作。
        p.summary 企画展のテーマである「風船に重りを吊るしてちょうど良く浮かばせる」を、ページ内のインタラクティブなコンテンツとして再現。
    a.item(href="https://photos.app.goo.gl/PtQuQ569RDGNlrz92" target="_blank")
      img.thumb(src="~/static/aokuototo.jpg")
      .desc
        h1 個人展覧会「青ク音ト」
          span.genre.genre-music Music
          span.genre.genre-movie Movie
          span.genre.genre-art Art
        .workgrid
          p.h 活動
          p.main アーティスト活動
          p.h 活動人数
          p.main 5人
          p.h 担当
          p.main 作曲 / 映像制作 / 空間演出 / 公開作曲
          p.h 開催期間
          p.main 2016/10/26 - 2016/11/25
          p.h 使用技術
          p.main Ableton Live / After Effects / Premire Pro
        p.summary はこだてみらい館にて楽曲とその楽曲のMVを展示。
        p.summary はこだてみらい館初の函館のアーティストによる館内演出企画。
        p.summary [補足]はこだてみらい館の館内BGMは全て川島の作品。
    a.item(href="http://hakodate-miraiproject.jp/pre-comming/" target="_blank")
      img.thumb(src="~/static/hmp-pre.png")
      .desc
        h1 はこだてみらいプロジェクト プレサイト
          span.genre.genre-web Web
        .workgrid
          p.h 活動
          p.main 課外活動
          p.h 活動人数
          p.main 1人
          p.h 担当
          p.main デザイン（一部） / 実装全般
          p.h 制作期間
          p.main 1day
          p.h 使用技術
          p.main Illustrator / HTML,Sass / PHP
        p.summary 函館駅前に新たに設置される「はこだてみらい館」と「はこだてキッズプラザ」の告知のため、運営コンソーシアムより依頼され制作。
    a.item(href="http://soracamera.com/" target="_blank")
      img.thumb(src="~/static/soracamera.png")
      .desc
        h1 ハコダテソラカメラプロジェクト
          span.genre.genre-web Web
        .workgrid
          p.h 活動
          p.main 課外活動
          p.h 活動人数
          p.main 2人
          p.h 担当
          p.main デザイン（一部） / 実装
          p.h 制作期間
          p.main 3weeks
          p.h 使用技術
          p.main Illustrator / HTML,SCSS
        p.summary 函館の魅力を伝える映像を制作するプロジェクト「ハコダテソラカメラ」の活動記録として制作。
    .item
      iframe.thumb.thumb-youtube(src="https://www.youtube.com/embed/Ghyb2fYJDUo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)
      .desc
        h1 はこだて未来展2015 リフレクションムービー
          span.genre.genre-movie Movie
        .workgrid
          p.h 活動
          p.main 課外活動
          p.h 活動人数
          p.main 2人
          p.h 担当
          p.main 映像編集
          p.h 制作期間
          p.main 1day(イベント当日)
          p.h 使用技術
          p.main AviUtl
        p.summary イベントで起きたことをその日の終わりに見て振り返るために当日中に制作。
    a.item(href="http://skawashima.github.io/skawashima.com/funtousic/" target="_blank")
      img.thumb(src="~/static/funtousic.png")
      .desc
        h1 funtousic
          span.genre.genre-proposal 提案
          span.genre.genre-web Web
          span.genre.genre-movie Movie
          span.genre.genre-music Music
        .workgrid
          p.h 活動
          p.main 授業課題
          p.h 活動人数
          p.main 4人
          p.h 担当
          p.main 提案 / Webサイト制作 / イメージ映像 / 映像BGM
          p.h 制作期間
          p.main 2months
          p.h 使用技術
          p.main HTML,CSS / AviUtl / Ableton Live
        p.summary 触れられない物を触れられる「タンジブル」な提案をする授業課題の成果として制作。
        p.summary <b>音を触ることが出来る球体デバイス</b>を提案し、それをプロモーションするWebサイトを制作。
          | また、音を触るイメージを持ってもらうための映像と、その映像に使うための楽曲を制作。
        p.summary この提案は、授業成果発表会「はこだて未来展2015」において最優秀賞を受賞。
</template>

<script>
// import axios from 'axios'

export default {
  // data () {
  //   return {
  //     works: []
  //   }
  // },
  // methods: {
  //   getWorks () {
  //     return axios.get('~/static/works.json')
  //       .then((res) => {
  //         this.set(this, this.works, res.data)
  //       })
  //   }
  // }
}
</script>

<style lang="sass" scoped>
$boader-width: 1px

a
  text-decoration: none
  &:link, &:visited, &:hover, &:active
    color: #000

#works-list
  width: 100%
  height: auto
  position: relative
  margin-top: 20px
  padding: 50px 0
  .backline
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    .line
      width: calc(50% + #{$boader-width} / 2)
      height: 100%
      border-right: $boader-width #4e1a68 solid
  .items
    width: 1000px
    position: relative
    left: 0
    right: 0
    margin: auto
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    #w0
      margin-top: 0
    .item
      display: flex
      justify-content: space-between
      height: auto
      width: 100%
      transition: .2s
      margin-top: 50px
      padding: 10px
      border: 1px rgba(#4e1a68, 0) dotted
      box-sizing: border-box
      background-color: rgba(#fff, 0)
      .thumb
        width: 470px
        height: auto
        align-self: flex-start
        box-shadow: 0 0 8px gray
      .thumb-youtube
        height: calc(470px / 560 * 315)
      .desc
        width: 470px
        text-align: left
        .genre
          padding: 4px 5px
          margin-top: 10px
          margin-left: 10px
          font-size: .7em
          border-radius: 5px
          font-weight: bold
          color: #fff
        .genre-web
          background-color: #0C4842
        .genre-proposal
          background-color: #9F353A
        .genre-movie
          background-color: #08192D
        .genre-music
          background-color: #4A225D
        .genre-art
          background-color: #946243
        .workgrid
          margin-top: 15px
          display: grid
          grid-template-columns: auto 1fr
          .h
            margin-right: 10px
            text-align: right
            &::after
              content: '：'
        .summary
          margin-top: 20px
    a.item:hover
      // background-color: #fff
      // border: 1px #4e1a68 dotted
      // padding: 10px
      box-shadow: 0 0 30px rgba(#4e1a68, .7)
      background-color: rgba(#fff, .9)
      // background: radial-gradient(#fff, rgba(#fff, .8))
</style>
