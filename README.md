# input-telephone

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web component for input telephone number with validation.

## Demo
https://code4fukui.github.io/input-telephone/

## Features
- Validates input as telephone number
- Supports Japanese and international telephone number formats
- Customizable via options

## Usage
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

## License
MIT License