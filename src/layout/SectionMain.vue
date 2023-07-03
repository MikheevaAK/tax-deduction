<template>
    <section id="main" class="main" :class="{
        'text-color': textColor,
        'bg': bg}">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        textColor: {
            type: Boolean,
            default: false
        },
        bg: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.text-color {
    color: #fff;
}

.bg {
    background-color: #5BADDE;
}
</style>