<template>
    <div class="attention-block mt-80 mb-80" :class="{ 'shadow': shadow }">
        <div class="wrap">
            <div class="img">
                <img v-if="img" :src="img" alt="">
            </div>
            <div class="title">{{ title }}</div>
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
.attention-block {
    position: relative;
    width: 100%;
    border-radius: 16px;
    background-color: #F2FAFF;
}

.attention-block .wrap {
    position: absolute;
    top: -2.22vw;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.attention-block .img {
    margin-bottom: 0.56vw;
    width: 4.44vw;
    height: 4.44vw;
}

.attention-block .title {
    color: #5BADDE;
    font-size: 1.11vw;
    font-weight: 400;
    line-height: 1.67vw;
    letter-spacing: 0.06vw;
    text-transform: uppercase;
}

.attention-block.shadow {
    border-radius: 20px;
    background-color: #FAFDFF;
    box-shadow: 0px 2.2691502571105957px 2.6012210845947266px 0px rgba(91, 173, 222, 0.02), 0px 5.453083515167236px 6.251095771789551px 0px rgba(91, 173, 222, 0.03), 0px 10.267672538757324px 11.770258903503418px 0px rgba(91, 173, 222, 0.04), 0px 18.315773010253906px 20.996129989624023px 0px rgba(91, 173, 222, 0.04), 0px 34.25764083862305px 39.27095413208008px 0px rgba(91, 173, 222, 0.05), 0px 82px 94px 0px rgba(91, 173, 222, 0.07);
}

.attention-block .only-text {
    text-align: center;
    padding: 6.81vw 7.01vw 2.64vw 7.01vw;
}

@media (max-width: 768px) {
    .attention-block {
        width: unset;
        margin: 0 4.27vw;
    }

    .attention-block .wrap {
        top: -4.80vw;
    }

    .attention-block .img {
        margin-bottom: 1.60vw;
        width: 9.60vw;
        height: 9.60vw;
    }

    .attention-block .title {
        font-size: 3.73vw;
        line-height: 5.33vw;
        letter-spacing: 0.37vw;
    }

    .attention-block .only-text {
        padding: 26.13vw 7.47vw 8.53vw 7.47vw;
    }
}
</style>