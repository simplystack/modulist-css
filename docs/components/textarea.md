# Textarea <Badge text="stable"/>
The multiline textarea and its variations.

## Default
<div class="p-3 border rounded-2 my-3">
  <div class="textbox">
    <label for="textarea1" class="textbox__label">Textarea</label>
    <textarea id="textarea1" type="text" class="textbox__textarea" placeholder="Placeholder"></textarea>
  </div>
</div>

```html
<label class="textbox">
  <div class="textbox__label">Textarea</div>
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
