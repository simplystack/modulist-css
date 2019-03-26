# Avatar
Avatars are images that users can set as their profile picture.

## Default

<div class="p-3 border rounded-2 my-3">
  <img
    alt="avatar"
    width="64"
    height="64"
    src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"
    class="avatar"
  />
</div>

```html
<img
  alt="avatar"
  width="64"
  height="64"
  src="{{ imageUrl }}"
  class="avatar"
  />
```

## Status

<div class="p-3 border rounded-2 my-3 flex">
  <div class="position-relative">
    <img
      alt="avatar"
      width="64"
      height="64"
     src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png"
      class="avatar"
    />
    <div class="position-absolute bottom-0 right-0">
      <div class="status status--positive status--nested status--size-2"></div>
    </div>
  </div>
</div>

```html
<div class="position-relative">
  <img
    alt="avatar"
    width="64"
    height="64"
     src="{{ imageUrl }}"
    class="avatar"
  />
  <div class="position-absolute bottom-0 right-0">
    <div class="status status--positive status--nested status--size-2"></div>
  </div>
</div>
```
