# input-telephone
  
https://code4fukui.github.io/input-telephone/

## usage

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
