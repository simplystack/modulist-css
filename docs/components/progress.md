# Progress <Badge text="stable"/>
Simple progress component showing progress.

## Determinate
<div class="p-3 border rounded-2 my-3">
  <div class="progress">
    <div
      class="progress__bar"
      role="progressbar"
      style="width: 25%"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</div>

```html
<div class="progress">
  <div
    class="progress__bar"
    role="progressbar"
    style="width: 25%"
    aria-valuenow="25"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
```

## Indeterminate
<div class="p-3 border rounded-2 my-3">
  <div class="progress progress--indeterminate">
    <div
      class="progress__bar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</div>

```html
<div class="progress progress--indeterminate">
  <div
    class="progress__bar"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
  ></div>
</div>
```
