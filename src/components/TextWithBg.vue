<template>
    <div class="item text-black flex" :class="{ 'item-mb': margin }">
        <div class="number">{{ number }}.</div>
        <div v-if="tooltip" class="descr">
            <slot></slot>
        </div>
        <div v-else class="descr">{{ text }}</div>
    </div>
</template>

<script>

export default {
    props: {
        number: {
            type: Number,
            default: 0
        },
        text: {
            type: String,
            default: ''
        },
        margin: {
            type: Boolean,
            default: false
        },
        tooltip: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style scoped>
.item {
    max-width: 40.28vw;
    width: 100%;
    padding: 0.56vw 1.67vw 0.56vw 0.56vw;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 0.69vw;
    border-radius: 8px;
    background-color: #F2FAFF;
}

.number {
    display: flex;
    width: 2.08vw;
    height: 2.08vw;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 1.25vw;
    color: #fff;
    background-color: #5BADDE;
}

.item-mb {
    margin-bottom: 0.28vw;
}

@media (max-width: 768px) {
    .item {
        max-width: unset;
        padding: 2.13vw 6.40vw 2.13vw 2.13vw;
        gap: 2.67vw;
    }

    .number {
        width: 6.40vw;
        height: 6.40vw;
        border-radius: 4.80vw;
    }

    .item-mb {
        margin-bottom: 1.07vw;
    }
}
</style>