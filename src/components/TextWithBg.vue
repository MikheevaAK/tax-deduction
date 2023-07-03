<template>
    <div class="item text-black flex" :class="{'mb-025': margin}">
        <div class="number">{{ number }}.</div>
        <div class="descr">{{ text }}</div>
    </div>
</template>

<script>

export default {
    props: ['number', 'text', 'margin']
}
</script>

<style scoped lang="scss">
.item {
    max-width: 36.25rem;
    width: 100%;
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    align-items: flex-start;
    gap: 0.62rem;
    border-radius: 8px;
    background-color: #F2FAFF;
}

.number {
    display: flex;
    width: 1.875rem;
    height: 1.875rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 18px;
    color: #fff;
    background-color: #5BADDE;
}

</style>