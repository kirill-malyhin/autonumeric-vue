import VueAutonumeric from './components/AutoNumericVue.vue';

if (typeof window !== 'undefined' && window.Vue) {
    Vue.component('autonumeric-vue', VueAutonumeric);
}

export { VueAutonumeric };

export default VueAutonumeric;
