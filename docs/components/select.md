# Select <Badge text="development" type="warn" />
The custom select and it's states.

## Example
<div class="p-3 border rounded-2 my-3" style="padding-bottom: 140px;">
  <div class="select select--open">
    <label for="select" class="select__label">Label</label>
    <input type="hidden" name="select">
    <div class="select__container" tabindex="0">
      <div class="select__display">
        <div class="select__placeholder">Placeholder</div>
      </div>
      <svg width="18px" height="18px" class="select__chevron">
        <use xlink:href="#chevron-down-icon"></use>
      </svg>
    </div>
    <div class="select__dropdown" tabindex="-1">
      <div class="select-option">Option 1</div>
      <div class="select-option select-option--disabled">Option 2</div>
      <div class="select-option">Option 3</div>
    </div>
  </div>
</div>

```html
<div class="select select--open">
  <label for="select" class="select__label">Label</label>
  <input type="hidden" name="select">
  <div class="select__container" tabindex="0">
    <div class="select__display">
      <div class="select__placeholder">Placeholder</div>
    </div>
    <svg width="18px" height="18px" class="select__chevron">
      <use xlink:href="#chevron-down-icon"></use>
    </svg>
  </div>
  <div class="select__dropdown" tabindex="-1">
    <div class="select-option">Option 1</div>
    <div class="select-option select-option--disabled">Option 2</div>
    <div class="select-option">Option 3</div>
  </div>
</div>
```
