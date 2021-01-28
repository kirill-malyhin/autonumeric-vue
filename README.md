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

You will as usual be able to use the `autonumeric-vue` component in your Vue components using:
```js
import AutoNumericVue from 'autonumeric-vue/src/components/AutoNumericVue';

export default {
    components: {
        AutoNumericVue
    }
}
```

### How to use?

The AutoNumeric component can be instantiated the same way `AutoNumeric` can.

With an option object:
```html
<AutoNumericVue
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
></AutoNumericVue>
```

With a predefined option name:
```html
<AutoNumericVue
    v-model="myValue"
    :options="'French'"
></AutoNumericVue>
```

With multiple option objects/predefined options:
```html
<AutoNumericVue
    v-model="myValue"
    :options="['euro', { minimumValue: '0' }]"
></AutoNumericVue>
```

#### Other props

##### Placeholder

You can define the input placeholder using:
```html
<AutoNumericVue
    v-model="myValue"
    :options="'euro'"
    :placeholder="'Enter your value here'"
></AutoNumericVue>
```

### Caveats

Please note that directly setting a `:value='42'` on the `<AutoNumericVue>` component **will break it** (really!).<br>
Do **NOT** do that:
```html
<AutoNumericVue
    v-model="myValue"
    :options="{ minimumValue: '0' }"
    :value="42042.69" <!-- This fails -->
></AutoNumericVue>
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
