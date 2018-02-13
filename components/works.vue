<template lang="pug">
section#works-list
  .backline
    .line
  .items
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
          p.main 3 weeks
          p.h 使用技術
          p.main Illustrator / HTML,SCSS

        p.summary 函館の魅力を伝える映像を制作するプロジェクト「ハコダテソラカメラ」の活動記録として制作しました。
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
          p.main 提案 / Webサイト制作 / イメージ映像
          p.h 制作期間
          p.main 2 month
          p.h 使用技術
          p.main HTML,CSS / AviUtl / Ableton Live
        p.summary 触れられない物を触れられる「タンジブル」な提案をする授業課題の成果として制作しました。
        p.summary <b>音を触ることが出来る球体デバイス</b>を提案し、それをプロモーションするWebサイトを制作しました。
          | また、音を触るイメージを持ってもらうための映像と、その映像に使うための楽曲を制作しました。
        p.summary この提案は、授業成果発表会「はこだて未来展2015」において最優秀賞に選ばれました。
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
  padding: 20px 0
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
      transition: .3s
      margin-top: 20px
      padding: 10px
      border: 1px rgba(#4e1a68, 0) dotted
      box-sizing: border-box
      .thumb
        width: 470px
        height: auto
        align-self: flex-start
        box-shadow: 0 0 8px gray
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
      &:hover
        // background-color: #fff
        border: 1px #4e1a68 dotted
        // padding: 10px
</style>
