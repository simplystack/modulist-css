# Modal <Badge text="development" type="warn" />
A classic modal overlay, in which you can include any content you want.

## Example
<div class="p-3 border rounded-2 my-3 position-relative">
  <button @click="open('modal1')" class="button button--primary button--size-4">Open modal</button>
  
  <div class="modal modal__mask" v-show="modal1">
    <div class="modal__wrapper" @click="close('modal1')">
      <div
        class="modal__container"
        tabindex="-1"
      >
        <div class="modal__header">
          <h3 class="modal__title">Title</h3>
          <button class="button button--size-1 button--subtle" @click="close('modal1')">
            <svg slot="icon" width="16" height="16">
              <use xlink:href="#cross-icon"></use>
            </svg>
          </button>
        </div>
        <div class="modal__body">
          Modal content
        </div>
        <div class="modal__footer">
          <button class="button button--subtle" @click="close('modal1')">Close</button>
          <button class="button button--primary">Do something</button>
        </div>
      </div>
    </div>
  </div>
</div>

```html
  <div class="modal modal__mask" v-show="modal1">
    <div class="modal__wrapper" @click="close('modal1')">
      <div
        class="modal__container"
        tabindex="-1"
      >
        <div class="modal__header">
          <h3 class="modal__title">Title</h3>
          <button class="button button--size-1 button--subtle" @click="close('modal1')">
            <svg slot="icon" width="16" height="16">
              <use xlink:href="#cross-icon"></use>
            </svg>
          </button>
        </div>
        <div class="modal__body">
          Modal content
        </div>
        <div class="modal__footer">
          <button class="button button--subtle" @click="close('modal1')">Close</button>
          <button class="button button--primary">Do something</button>
        </div>
      </div>
    </div>
  </div>
```

<script>
export default {
  data() {
    return {
      modal1: false,
    };
  },
  methods: {
    open(modal) {
      this[modal] = true;
      document.body.classList.add('modal--body-active');
    },
    close(modal) {
      this[modal] = false;
      document.body.classList.remove('modal--body-active');
    },
  }
}
</script>
