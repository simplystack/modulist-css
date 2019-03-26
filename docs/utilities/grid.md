# Grid
The grid is 12 columns and percentage-based. The number of columns a container spans can be adjusted across breakpoints for responsive layouts. The grid system works with a variety of layout utilities to achieve different results.

## Example
<div class="p-3 border rounded-2 my-3">
  <div class="flex-grid gutter">
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2"></div>
    </div>
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2"></div>
    </div>
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2"></div>
    </div>
  </div>
</div>

```html
<div class="flex-grid gutter">
  <div class="flex-col-4">
    <div class="rounded-2 bg-gray p-2"></div>
  </div>
  <div class="flex-col-4">
    <div class="rounded-2 bg-gray p-2"></div>
  </div>
  <div class="flex-col-4">
    <div class="rounded-2 bg-gray p-2"></div>
  </div>
</div>
```

## Nesting

<div class="p-3 border rounded-2 my-3">
  <div class="flex-grid gutter">
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2">
        <div class="flex-grid gutter">
          <div class="flex-col-4">
            <div class="rounded-2 bg-purple p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-purple p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-purple p-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2">
        <div class="flex-grid gutter">
          <div class="flex-col-4">
            <div class="rounded-2 bg-yellow p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-yellow p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-yellow p-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2">
        <div class="flex-grid gutter">
          <div class="flex-col-4">
            <div class="rounded-2 bg-red p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-red p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-red p-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
  <div class="flex-grid gutter">
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2">
        <div class="flex-grid gutter">
          <div class="flex-col-4">
            <div class="rounded-2 bg-purple p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-purple p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-purple p-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2">
        <div class="flex-grid gutter">
          <div class="flex-col-4">
            <div class="rounded-2 bg-yellow p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-yellow p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-yellow p-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col-4">
      <div class="rounded-2 bg-gray p-2">
        <div class="flex-grid gutter">
          <div class="flex-col-4">
            <div class="rounded-2 bg-red p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-red p-2"></div>
          </div>
          <div class="flex-col-4">
            <div class="rounded-2 bg-red p-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
```
