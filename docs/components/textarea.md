# Textarea <Badge text="stable"/>
The multiline textarea and its variations.

## Default
<div class="p-3 border rounded-2 my-3">
  <label class="textbox">
    <div class="textbox__label">Textarea</div>
    <textarea type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
  </label>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Textarea</div>
  <textarea type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
</label>
```

## Floated
<div class="p-3 border rounded-2 my-3">
  <label class="textbox textbox--floated" :class="{ 'textbox--floated-active': value !== '' }">
    <div class="textbox__label">Floated label</div>
    <textarea v-model="value" type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
  </label>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Floated label</div>
  <textarea type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
</label>
```

## Disabled
<div class="p-3 border rounded-2 my-3">
  <label class="textbox">
    <div class="textbox__label">Textarea</div>
    <textarea disabled type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
  </label>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Textarea</div>
  <textarea disabled type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
</label>
```

## Error
<div class="p-3 border rounded-2 my-3">
  <label class="textbox textbox--error">
    <div class="textbox__label">Textarea</div>
    <textarea type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
  </label>
</div>

```html
<label class="textbox textbox--error">
  <div class="textbox__label">Textarea</div>
  <textarea type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
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
