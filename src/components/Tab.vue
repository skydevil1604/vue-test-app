<template>
    <div
        :id="hash"
        v-show="active">
        <slot />
    </div>
</template>
<script>
export default {
    name: 'Tab',
    props: {
        name: {
            type: String,
            required: true,
        },
        start: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            active: false,
        }
    },
    computed: {
        hash() {
            return '%23' + this.name.toLowerCase().replace(/ /g, '-');
        },
    },
}
</script>

