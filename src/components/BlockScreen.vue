<template>
    <div class="screen">
        <div v-if="!isMobile">
            <div class="screen__link graph-text mb-16">https://lkfl2.nalog.ru/lkfl/</div>
        <div class="screen__img">
            <img :src="img" alt="">
        </div>
        </div>
        <div v-else>
            <a @click.prevent="openModal" href="#" class="screen__link-cursor">
                <div class="screen__link graph-text mb-16">https://lkfl2.nalog.ru/lkfl/</div>
                <div class="screen__img">
                    <img :src="img" alt="">
                </div>
            </a>
            <div v-show="visible" class="screen__modal" @click.self="closeModal">
                <div class="screen__modal-content">
                    <img :src="img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isMobile: (window.innerWidth < 760),
            visible: false
        }
    },
    methods: {
        onResize() {
            this.isMobile = (window.innerWidth < 760);
        },
        openModal() {
            this.visible = true
            document.querySelector('body').style.position = 'fixed'
            document.querySelector('body').style.overflow = 'hidden'
        },
        closeModal() {
            this.visible = false
            document.querySelector('body').style.position = 'static'
            document.querySelector('body').style.overflow = 'visible'
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

.screen__link-cursor {
    position: relative;
    cursor: pointer;
    z-index: 2;
}

.screen__img {
    width: 100%;
    height: 31.25vw;
    border-radius: 9px;
    border: 1px solid rgba(91, 173, 222, 0.20);
    overflow: hidden;
}

.screen__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden
}

.screen__modal-content {
    position: relative;
    z-index: 2;
}

@media (max-width: 768px) {
    .screen {
        width: unset;
        margin-left: 4.27vw;
        margin-right: 4.27vw;
        height: max-content;
        border-radius: 20px;
        padding: 2.67vw 0 6.13vw 0;
    }

    .screen__link {
        margin: 0 2.13vw 4vw 2.13vw;
        padding: 1.07vw 2.93vw;
        height: 7.47vw;
    }

    .screen__img {
        height: max-content;
        ;
        border-radius: unset;
        border: none;
    }

    .screen__img img {
        object-fit: contain;
    }
}
</style>