# Badge <Badge text="stable"/>
Badges, our small count and labeling component.

## Example
<div class="p-3 border rounded-2 my-3 flex flex-items-center">
  <span class="badge badge--default mr-2">Default</span>
  <span class="badge badge--alternative mr-2">Alternative</span>
  <span class="badge badge--primary mr-2">Primary</span>
  <span class="badge badge--warning mr-2">Warning</span>
  <span class="badge badge--danger mr-2">Danger</span>
  <span class="badge badge--success mr-2">Success</span>
</div>

```html
<span class="badge badge--default">Default</span>
<span class="badge badge--alternative">Alternative</span>
<span class="badge badge--primary">Primary</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--danger">Danger</span>
<span class="badge badge--success">Success</span>
```

## Alignment
<div class="p-3 border rounded-2 my-3">
  <h1>
    Top
    <span class="badge badge--primary badge--align-top mr-2">badge</span>
  </h1>
  
  <h1>
    Middle (default)
    <span class="badge badge--primary mr-2">badge</span>
  </h1>
  
  <h1>
    Bottom
    <span class="badge badge--primary badge--align-bottom mr-2">badge</span>
  </h1>
  
</div>

```html
<span class="badge badge--primary badge--align-top">badge</span>
<span class="badge badge--primary">badge</span>
<span class="badge badge--primary badge--align-bottom">badge</span>
```
