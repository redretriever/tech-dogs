---
title: foreachで最初と最後を判定
date: 2021-02-17
categories:
  - PHP
---

# {{this.$page.frontmatter.title}}

問題点として、配列内に同じ値が含まれる場合は使えない。

```php
$items = [1,2,3,4,5];
foreach ($items as $item) {
    // 最初を判定
    if ($item === reset($items)) {
        echo "最初";
    }

    // 最後を判定
    if ($item === end($items)) {
        echo "最後";
    }
}
```