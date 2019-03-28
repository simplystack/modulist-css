# Tabs <Badge text="stable"/>
Simple horizontal tabs component.

## Default

<div class="p-3 border rounded-2 my-3 flex">
  <div class="tabs" id="tabs1">
    <ul role="tablist" class="tabs__list">
      <li class="tabs__item">
        <a role="tab" href="#tab-1" class="tabs__link tabs__link--active">
          <div class="tabs__link-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g>
            </svg>
          </div>
          <div class="tabs__link-text">Tab 1</div>
        </a>
      </li>
      <li class="tabs__item">
        <a role="tab" href="#tab-2" class="tabs__link">Tab 2</a>
      </li>
      <li class="tabs__item">
        <a role="tab" href="#tab-3" class="tabs__link tabs__link--disabled">Tab 3</a>
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
