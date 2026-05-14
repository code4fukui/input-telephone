# input-telephone

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component for telephone number input that provides real-time validation and normalization. It automatically filters invalid characters and converts full-width Japanese characters to their half-width equivalents.

## Demo
https://code4fukui.github.io/input-telephone/

## Features
- **Two Components:** Includes two distinct elements for different use cases:
  - `<input-telephone>`: For standard phone numbers. Allows digits, `(`, `)`, `+`, `-`, `/`, and spaces.
  - `<input-telephone-ext>`: For extension numbers or simplified inputs. Allows only digits, `/`, and spaces.
- **Real-time Validation:** Prevents invalid characters from being entered.
- **Normalization:** Automatically converts full-width (全角) numbers and symbols to half-width (半角).
- **Standard Attributes:** Supports standard input attributes like `maxlength` and `required`.
- **Lightweight:** A simple web component with no external library dependencies.

## Usage
Import the component script and use the custom element in your HTML.

### Standard Telephone Input
Use `<input-telephone>` for general-purpose telephone number fields.

```html
<script type="module" src="https://code4fukui.github.io/input-telephone/input-telephone.js"></script>

<label for="phone">Phone Number:</label>
<input-telephone id="phone" maxlength="15" required></input-telephone>

<script type="module">
  const phoneInput = document.getElementById('phone');
  phoneInput.onchange = () => {
    // The .value property always returns the normalized, half-width string
    console.log(phoneInput.value);
  };
</script>
```

### Extension Number Input
Use `<input-telephone-ext>` for fields that should only contain digits, slashes, or spaces, such as an extension number.

```html
<script type="module" src="https://code4fukui.github.io/input-telephone/input-telephone-ext.js"></script>

<label for="phoneExt">Extension:</label>
<input-telephone-ext id="phoneExt" maxlength="5"></input-telephone-ext>
```

## Properties & Attributes
- **`value` (property):** Get or set the normalized value of the input.
- **`maxlength` (attribute):** Sets the maximum number of characters allowed.
- **`required` (attribute):** Specifies that the input field must be filled out.

## License
MIT License — see [LICENSE](LICENSE).