# input-telephone

入力フィールドにおける電話番号入力を簡単に実装できるWebコンポーネントです。

## デモ
https://code4fukui.github.io/input-telephone/

## 機能
- 電話番号形式の入力を検証・正規化
- maxlengthによる入力文字数制限
- required属性による必須入力

## 使い方
HTML側の記述例:

```html
<script type="module" src="https://code4fukui.github.io/input-telephone/input-telephone.js"></script>
<input-telephone id=inp maxlength=5></input-telephone>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```

## ライセンス
MIT License