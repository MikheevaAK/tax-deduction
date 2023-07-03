<template>
    <div class="screen">
        <div class="screen__link graph-text mb-16">https://lkfl2.nalog.ru/lkfl/</div>
        <div class="screen__img">
            <img :src="img" :srcset="imgMobile" sizes="(max-width: 768px) 768px, 900px" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: ''
        },
        imgMobile: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.screen {
    width: 100%;
    height: 38.19vw;
    border-radius: 20px;
    border: 1px solid #5BADDE;
    padding: 2.08vw 1.53vw;
}

.screen__link {
    padding: 0.28vw 0.76vw;
    color: #5BADDE;
    border-radius: 8px;
    background-color: #F2FAFF;
    height: 1.94vw;
}

.screen__img {
    width: 100%;
    height: 31.25vw;
    border-radius: 9px;
    border: 1px solid rgba(91, 173, 222, 0.20);
    overflow: hidden;
}

@media (max-width: 768px) {
    .screen {
        width: unset;
        margin-left: 4.27vw;
        margin-right: 4.27vw;
        height: 86.40vw;
        border-radius: 20px;
        padding: 2.67vw 0 6.13vw 0;
    }

    .screen__link {
        margin: 0 2.13vw 4vw 2.13vw;
        padding: 1.07vw 2.93vw;
        height: 7.47vw;
    }

    .screen__img {
        height: 66.13vw;
        border-radius: unset;
        border: none;
    }

    .screen__img img {
        object-fit: cover;
    }
}
</style>