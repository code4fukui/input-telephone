# input-telephone

リアルタイムでの検証と正規化を提供する、電話番号入力用のWebコンポーネントです。無効な文字を自動的にフィルタリングし、全角文字を対応する半角文字に変換します。

## デモ
https://code4fukui.github.io/input-telephone/

## 機能
- **2つのコンポーネント:** 異なる用途に応じて2つの要素を提供します:
  - `<input-telephone>`: 標準的な電話番号用。数字、`(`、`)`、`+`、`-`、`/`、およびスペースを許可します。
  - `<input-telephone-ext>`: 内線番号や簡易入力用。数字、`/`、およびスペースのみを許可します。
- **リアルタイム検証:** 無効な文字の入力を防ぎます。
- **正規化:** 全角の数字や記号を自動的に半角に変換します。
- **標準属性:** `maxlength`や`required`などの標準的な入力属性をサポートします。
- **軽量:** 外部ライブラリに依存しないシンプルなWebコンポーネントです。

## 使い方
コンポーネントのスクリプトをインポートし、HTML内でカスタム要素を使用します。

### 標準電話番号入力
汎用的な電話番号フィールドには `<input-telephone>` を使用します。

```html
<script type="module" src="https://code4fukui.github.io/input-telephone/input-telephone.js"></script>

<label for="phone">電話番号:</label>
<input-telephone id="phone" maxlength="15" required></input-telephone>

<script type="module">
  const phoneInput = document.getElementById('phone');
  phoneInput.onchange = () => {
    // .valueプロパティは常に正規化された半角文字列を返します
    console.log(phoneInput.value);
  };
</script>
```

### 内線番号入力
数字、スラッシュ、またはスペースのみを許可するフィールド（例: 内線番号）には `<input-telephone-ext>` を使用します。

```html
<script type="module" src="https://code4fukui.github.io/input-telephone/input-telephone-ext.js"></script>

<label for="phoneExt">内線番号:</label>
<input-telephone-ext id="phoneExt" maxlength="5"></input-telephone-ext>
```

## プロパティと属性
- **`value`（プロパティ）:** 入力された正規化済みの値を取得または設定します。
- **`maxlength`（属性）:** 許可される最大文字数を設定します。
- **`required`（属性）:** 入力フィールドが必須であることを指定します。

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
