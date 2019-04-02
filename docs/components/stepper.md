# Stepper <badge text="development" type="warn" />
The stepper component displays progress through numbered steps.

## Default

<div class="p-3 pb-5 border rounded-2 my-3">
  <div class="stepper">
    <ol class="stepper__list">
      <li class="step step--completed step--active">
        <button class="step__marker">
          <span class="step__label">First</span>
        </button>
      </li>
      <li class="step">
        <button class="step__marker">
          <span class="step__label">Second</span>
        </button>
      </li>
      <li class="step">
        <button class="step__marker">
          <span class="step__label">Third</span>
        </button>
      </li>
    </ol> 
    <div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0%" class="stepper__bar">
    <span class="stepper__bar-value" style="width: 0%;"></span>
    </div>
  </div>
</div>


```html
<div class="stepper">
  <ol class="stepper__list">
    <li class="step step--completed step--active">
      <button class="step__marker">
        <span class="step__label">First</span>
      </button>
    </li>
    <li class="step">
      <button class="step__marker">
        <span class="step__label">Second</span>
      </button>
    </li>
    <li class="step">
      <button class="step__marker">
        <span class="step__label">Third</span>
      </button>
    </li>
  </ol> 
  <div 
    role="progressbar" 
    aria-valuemin="0" 
    aria-valuemax="100" 
    aria-valuenow="0%" 
    class="stepper__bar"
  >
    <span class="stepper__bar-value" style="width: 0%;"></span>
  </div>
</div>
```
