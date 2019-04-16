# Input <Badge text="stable"/>
The text input and its variations.

## Default
<div class="p-3 border rounded-2 my-3">
  <label class="textbox">
    <div class="textbox__label">Input</div>
    <input type="text" class="textbox__input" placeholder="Placeholder">
  </label>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Input</div>
  <input type="text" class="textbox__input" placeholder="Placeholder">
</label>
```

## Floated
<div class="p-3 border rounded-2 my-3">
  <label class="textbox textbox--floated" :class="{ 'textbox--floated-active': value !== '' }">
    <div class="textbox__label">Floated label</div>
    <input v-model="value" type="text" class="textbox__input" placeholder="Type here...">
  </label>
</div>

```html
<label class="textbox textbox--floated">
  <div class="textbox__label">Floated label active</div>
  <input type="text" class="textbox__input" placeholder="Type here...">
</label>
```

## Disabled
<div class="p-3 border rounded-2 my-3">
  <label class="textbox">
    <div class="textbox__label">Input</div>
    <input disabled type="text" class="textbox__input" placeholder="Placeholder">
  </label>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Input</div>
  <input disabled type="text" class="textbox__input" placeholder="Placeholder">
</label>
```

## Readonly
<div class="p-3 border rounded-2 my-3">
  <label class="textbox">
    <div class="textbox__label">Input</div>
    <input readonly type="text" class="textbox__input" placeholder="Placeholder">
  </label>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Input</div>
  <input readonly type="text" class="textbox__input" placeholder="Placeholder">
</label>
```

## Wide
<div class="p-3 border rounded-2 my-3">
  <label class="textbox textbox--wide">
    <div class="textbox__label">Input</div>
    <input type="text" class="textbox__input" placeholder="Placeholder">
  </label>
</div>

```html
<label class="textbox textbox--wide">
  <div class="textbox__label">Input</div>
  <input type="text" class="textbox__input" placeholder="Placeholder">
</label>
```

## Error
<div class="p-3 border rounded-2 my-3">
  <label class="textbox textbox--error">
    <div class="textbox__label">Input</div>
    <input type="text" class="textbox__input" placeholder="Placeholder">
  </label>
</div>

```html
<label class="textbox textbox--error">
  <div class="textbox__label">Input</div>
  <input type="text" class="textbox__input" placeholder="Placeholder">
</label>
```

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>
