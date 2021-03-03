---
title: 郵便番号から住所検索が簡単にできるYubinBango
date: 2021-02-28
categories:
  - JavaScript
---

# {{this.$page.frontmatter.title}}

郵便番号を入力するだけで自動で住所を入力したいという要望を簡単に叶えるライブラリがYubinBango

## YubinBangoの実装例
```html
<!--ライブラリの読み込み-->
<script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charset="UTF-8"></script>
    <!--formのclassにh-adrを指定-->
    <form class="h-adr">
      <!--国名を指定-->
      <span class="p-country-name" style="display:none;">Japan</span>
      <div>
        <label for="zipcode">郵便番号</label>
        <!--郵便番号を入力する項目のclassにp-postal-codeを指定-->
        <input type="text" class="p-postal-code" id="zipcode">
      </div>
      <div>
        <label for="address">住所</label>
        <!--都道府県を入力する項目のclassにp-regionを指定-->
        <!--市区町村を入力する項目のclassにp-localityを指定-->
        <!--町域を入力する項目のclassにp-street-addressを指定-->
        <!--町域以降の住所を入力する項目のclassにp-extended-addressを指定-->
        <input type="text" class="p-region p-locality p-street-address p-extended-address" id="zipcode">
      </div>
    </form>
```
- 郵便番号入力欄が2つある場合は、両方の入力項目のclassにp-postal-codeを指定すると、うまいこと制御してくれる。
- 都道府県コードを使いたい場合、p-regionをp-region-idに変更する

https://github.com/yubinbango/yubinbango