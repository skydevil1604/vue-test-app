<template>
    <div class="tabs">
        <ul class="tabs__list">
            <li
                v-for="(item, index) in items"
                :key="index"
                :class="item.active ? 'tabs__listitem tabs__listitem--active': 'tabs__listitem'"
                >
                <a
                    :href="item.hash"
                    class="tabs__itemlink"
                    v-text="item.name"
                    @click.prevent="showTab(item.hash)">
                </a>
            </li>
        </ul>
        <section class="tabs__content">
            <slot />
        </section>
    </div>
</template>
<script>
export default {
    name: 'Tabs',
    data() {
        return {
            items: [],
            selected: '',
        }
    },
    methods: {
        showTab(target) {
            this.items.forEach(item => item.active = (item.hash === target))
        },
    },
    created() {
        this.items = this.$children
    },
    mounted() {
        const startItem = this.items.findIndex(item => item.start)
        this.items[startItem > 0 ? startItem : 0].active = true;
    }
}
</script>
<style lang="scss" scoped>
.tabs {
    display: flex;
    flex-direction: column;
    &__list {
        display: flex;
        flex-direction: row;
        padding: 0;
        margin-bottom: 0;
        list-style-type: none;
    }
    &__listitem {
        min-width: 50px;
        color: black;
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 15px;
        color: #6B6B6B;
        &--active {
            border-top-width: 6px;
            color: black;
            box-shadow: inset 0px -2px 0px #6E41E2;
        }
        &:first-child {
            border-top-left-radius: 5px;
            margin-right: 24px;
        }
        &:last-child {
            border-top-right-radius: 5px;
        }
    }
    &__itemlink {
        flex: 1;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: inherit;
        color: inherit;
    }
}
</style>

