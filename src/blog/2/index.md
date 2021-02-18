---
title: CSSで画像を3:2や16:9、1:1にトリミングする（レスポンシブ対応）
date: 2021-02-16
categories:
  - HTML/CSS
---

# {{this.$page.frontmatter.title}}

異なる大きさの画像を複数枚並べたいときなどに書くHTMLとCSS

## 画像を3:2にトリミング

### HTML
```html
<div class="img">
    <img src="/hoge.jpg">
</div>
```

### CSS
```css
.img {
    padding: 0;
    position: relative;
    height: 0;
    padding-bottom: 67%;
    overflow: hidden;
}

.img img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 150%; /* トリミング時の最大サイズ */
    max-height: auto;
}
```

## 画像を16:9にトリミング

### HTML
```html
<div class="img">
    <img src="/hoge.jpg">
</div>
```

### CSS
```css
.img {
    padding: 0;
    position: relative;
    height: 0;
    padding-bottom: 56%;
    overflow: hidden;
}

.img img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 150%;　/* トリミング時の最大サイズ */
    max-height: auto;
}
```

## 画像を1:1にトリミング

### HTML
```html
<div class="img">
    <img src="/hoge.jpg">
</div>
```

### CSS
```css
.img {
    padding: 0;
    position: relative;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
}

.img img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    max-width: 150%;　/* トリミング時の最大サイズ */
    max-height: auto;
}
```