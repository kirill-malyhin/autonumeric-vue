## autonumeric-vue

A Vue JS wrapper over the awesome [AutoNumeric](https://github.com/autoNumeric/autoNumeric/) input formatter library

---

autonumeric-vue wraps the awesome [AutoNumeric](https://github.com/autoNumeric/autoNumeric/) library.

### Installation

```sh
yarn add autonumeric-vue
# or
npm install autonumeric-vue --save
```

You will as usual be able to use the `vue-autonumeric` component in your Vue components using:
```js
import VueAutonumeric from '../src/components/VueAutonumeric.vue';

export default {
    components: {
        VueAutonumeric
    }
}
```

### How to use?

The AutoNumeric component can be instantiated the same way `AutoNumeric` can.

With an option object:
```html
<vue-autonumeric
     v-model="myValue"
     :options="{
         digitGroupSeparator: '.',
         decimalCharacter: ',',
         decimalCharacterAlternative: '.',
         currencySymbol: '\u00a0€',
         currencySymbolPlacement: 's',
         roundingMethod: 'U',
         minimumValue: '0'
     }"
></vue-autonumeric>
```

With a predefined option name:
```html
<vue-autonumeric
    v-model="myValue"
    :options="'French'"
></vue-autonumeric>
```

With multiple option objects/predefined options:
```html
<vue-autonumeric
    v-model="myValue"
    :options="['euro', { minimumValue: '0' }]"
></vue-autonumeric>
```

#### Other props

##### Placeholder

You can define the input placeholder using:
```html
<vue-autonumeric
    v-model="myValue"
    :options="'euro'"
    :placeholder="'Enter your value here'"
></vue-autonumeric>
```

### Caveats

Please note that directly setting a `:value='42'` on the `<vue-autonumeric>` component **will break it** (really!).<br>
Do **NOT** do that:
```html
<vue-autonumeric
    v-model="myValue"
    :options="{ minimumValue: '0' }"
    :value="42042.69" <!-- This fails -->
></vue-autonumeric>
```

### Demo

The official AutoNumeric [documentation](http://autonumeric.org/#/guide) is using this component extensively :)<br>
<br>

### Requirements

- [AutoNumeric](https://github.com/autoNumeric/autoNumeric) `^v4`
- [Vue.js](https://github.com/vuejs/vue) `^v2`

### Browser support

This supports the same browsers than AutoNumeric supports:
- Firefox and
- Chrome

*(latest 2 versions)*<br><br>
If you use IE/Edge/Safari/Opera, this *might* work ;)

The [contribution guidelines](https://github.com/autoNumeric/autoNumeric/blob/next/doc/CONTRIBUTING.md) for vue-autoNumeric are the same than for the parent [AutoNumeric](https://github.com/autoNumeric/autoNumeric) project.

### Support

As always, if you find this useful, please consider [supporting its development](https://www.patreon.com/AlexandreBonneau)!<br>
Huge Thanks :)

### License

`autonumeric-vue` is open-source and released under the [MIT License](https://github.com/kirill-malyhin/autonumeric-vue/blob/master/LICENSE).

<br>Copyright © 2021 Kirill Malyhin
