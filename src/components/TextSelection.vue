<template>
    <div class="attention-block" :class="{'shadow':shadow}">
        <div class="wrap">
            <div class="img">
                <img :src="img" alt="">
            </div>
            <div class="t">{{ title }}</div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        shadow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.attention-block.shadow {
    border-radius: 20px;
    background-color: #FAFDFF;
    box-shadow: 0px 2.2691502571105957px 2.6012210845947266px 0px rgba(91, 173, 222, 0.02), 0px 5.453083515167236px 6.251095771789551px 0px rgba(91, 173, 222, 0.03), 0px 10.267672538757324px 11.770258903503418px 0px rgba(91, 173, 222, 0.04), 0px 18.315773010253906px 20.996129989624023px 0px rgba(91, 173, 222, 0.04), 0px 34.25764083862305px 39.27095413208008px 0px rgba(91, 173, 222, 0.05), 0px 82px 94px 0px rgba(91, 173, 222, 0.07);
}
</style>