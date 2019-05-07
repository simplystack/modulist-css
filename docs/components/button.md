# Button <Badge text="development" type="warn" />

## Appearance
<div class="p-3 border rounded-2 my-3 flex flex-wrap">
  <button class="button button--default m-1">Default</button>
  <button class="button button--primary m-1">Primary</button>
  <button class="button button--alternative m-1">Alternative</button>
  <button class="button button--subtle m-1">Subtle</button>
  <button class="button button--success m-1">Success</button>
  <button class="button button--danger m-1">Danger</button>
</div>

``` html
<button class="button button--default">Default</button>
<button class="button button--primary">Primary</button>
<button class="button button--alternative">Alternative</button>
<button class="button button--subtle">Subtle</button>
<button class="button button--success">Success</button>
<button class="button button--danger">Danger</button>
```

## Size

<div class="p-3 border rounded-2 my-3">
  <button class="button button--default button--size-0">Default</button>
  <button class="button button--default button--size-1">Default</button>
  <button class="button button--default button--size-2">Default</button>
  <button class="button button--default button--size-3">Default</button>
  <button class="button button--default button--size-4">Default</button>
</div>

``` html
<button class="button button--default button--size-0">Default</button>
<button class="button button--default button--size-1">Default</button>
<button class="button button--default button--size-2">Default</button>
<button class="button button--default button--size-3">Default</button>
<button class="button button--default button--size-4">Default</button>
```

## Disabled

<div class="p-3 border rounded-2 my-3 flex flex-wrap">
  <button disabled class="button button--default m-1">Default</button>
  <button disabled class="button button--primary m-1">Primary</button>
  <button disabled class="button button--alternative m-1">Alternative</button>
  <button disabled class="button button--subtle m-1">Subtle</button>
  <button disabled class="button button--success m-1">Success</button>
  <button disabled class="button button--danger m-1">Danger</button>
</div>

``` html
<button disabled class="button button--default">Default</button>
<button disabled class="button button--primary">Primary</button>
<button disabled class="button button--alternative">Alternative</button>
<button disabled class="button button--subtle">Subtle</button>
<button disabled class="button button--success">Success</button>
<button disabled class="button button--danger">Danger</button>
```

## Loading
You have to add `disable` attribute as well.

<div class="p-3 border rounded-2 my-3 flex flex-wrap">
  <button disabled class="button button--loading button--default m-1">Default</button>
  <button disabled class="button button--loading button--primary m-1">Primary</button>
  <button disabled class="button button--loading button--alternative m-1">Alternative</button>
  <button disabled class="button button--loading button--subtle m-1">Subtle</button>
  <button disabled class="button button--loading button--success m-1">Success</button>
  <button disabled class="button button--loading button--danger m-1">Danger</button>
</div>

``` html
<button class="button button--loading button--default">Default</button>
<button class="button button--loading button--primary">Primary</button>
<button class="button button--loading button--alternative">Alternative</button>
<button class="button button--loading button--subtle">Subtle</button>
<button class="button button--loading button--success">Success</button>
<button class="button button--loading button--danger">Danger</button>
```

## Icon & text

<div class="p-3 border rounded-2 my-3 flex flex-wrap">
  <button class="button button--size-3 button--primary">
  Take a shot
    <div class="button__icon">
      <svg viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g></svg>
    </div>
  </button>
</div>

``` html
<button class="button button--primary">
  <!--icon here-->
</button>
```

## Icon first

<div class="p-3 border rounded-2 my-3 flex flex-wrap">
  <button class="button button--icon-first button--size-3 button--primary">
  Take a shot
    <div class="button__icon">
      <svg viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g></svg>
    </div>
  </button>
</div>

``` html
<button class="button button--primary button--icon-first">
  <!--icon here-->
</button>
```

## Icon only

<div class="p-3 border rounded-2 my-3 flex flex-wrap">
  <button class="button button--icon-only button--size-3 button--default m-1">
    <svg viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g></svg>
  </button>
  <button class="button button--icon-only button--size-3 button--primary m-1">
      <svg viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g></svg>
    </button>
    <button disabled class="button button--icon-only button--size-3 button--primary m-1">
          <svg viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g></svg>
        </button>
</div>

``` html
<button class="button button--icon-only button--size-3 button--default">
  <!--icon here-->
</button>
```
