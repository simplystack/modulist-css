# Tabs <Badge text="stable"/>
Simple horizontal tabs component.

## Default

<div class="p-3 border rounded-2 my-3 flex">
  <div class="tabs" id="tabs1">
    <ul role="tablist" class="tabs__list">
      <li class="tabs__item">
        <a role="tab" href="#tab-1" class="tabs__link tabs__link--active">Tab 1</a>
      </li>
      <li class="tabs__item">
        <a role="tab" href="#tab-2" class="tabs__link">Tab 2</a>
      </li>
      <li class="tabs__item">
        <a role="tab" href="#tab-3" class="tabs__link">Tab 3</a>
      </li>
    </ul>

  <div class="tabs__content">
    <div id="tab-1" role="tabpanel" class="tab tab--active">
      <div class="py-3">Tab 1 content</div>
    </div>
  </div>
  </div>
</div>

```html
<div class="tabs" id="tabs1">
  <ul role="tablist" class="tabs__list">
    <li class="tabs__item">
      <a role="tab" href="#tab-1" class="tabs__link tabs__link--active">Tab 1</a>
    </li>
    <li class="tabs__item">
      <a role="tab" href="#tab-2" class="tabs__link">Tab 2</a>
    </li>
    <li class="tabs__item">
      <a role="tab" href="#tab-3" class="tabs__link">Tab 3</a>
    </li>
  </ul>

  <div class="tabs__content">
    <div id="tab-1" role="tabpanel" class="tab tab--active">
      <div class="py-3">Tab 1 content</div>
    </div>
    <div id="tab-2" role="tabpanel" class="tab tab--active">
      <div class="py-3">Tab 2 content</div>
    </div>
    <div id="tab-3" role="tabpanel" class="tab tab--active">
      <div class="py-3">Tab 3 content</div>
    </div>
  </div>
</div>
```
