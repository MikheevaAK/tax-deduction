<template>
    <div class="price" :style="width">
        <div>
            {{ title }}
        </div>
        <div class="price__rectangle"></div>
        <div class="graph-text">
            {{ number }}&nbsp;₽
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        number: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: ''
        }
    }
}
</script>