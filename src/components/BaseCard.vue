<template>
    <router-link :to="{ name: link }" v-slot="{ href }">
        <a :href="href" :class="{ 'link-disabled': active }">
            <div class="card" :class="[size, { 'active': active }]">
                <img :src="img" alt="">
                <div class="text-wrap">
                    <div v-if="step" class="text-white hide">Шаг {{ step }}</div>
                    <div class="text-white" :class="classTitle">{{ text }}</div>
                </div>
            </div>
        </a>
    </router-link>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        classTitle: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    border: 1px solid #FFF;
    background-color: #5BADDE;
    transition: background .2s linear;
}

.card:hover {
    background-color: #1F6B99;
}

.card.active {
    pointer-events: none;
    background-color: #F2FAFF;
    color: #1F6B99;
}

.card img {
    width: 11.111vw;
    height: 11.111vw;
}

.card .text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.556vw;
}

.card.active .text-white {
    color: #1F6B99;
}

.link-disabled {
    cursor: default;
}

.card.small {
    width: 25vw;
    height: 25vw;
    padding: 2.5vw 1.944vw 1.46vw 1.389vw;
    flex-direction: column;
    align-items: flex-start;
    gap: 6.597vw;
}

.card.medium {
    width: 50vw;
    height: 50vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.22vw;
}

.card.medium .text-white {
    text-align: center;
    max-width: 32.71vw;
    width: 100%;
}

.card.big {
    width: 100%;
    height: 50vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.667vw;
}

.card.big .text-white {
    text-align: center;
    max-width: 41.18vw;
    width: 100%;
}

@media (max-width: 768px) {
    .card.big img,
    .card.medium img {
        width: 34.13vw;
        height: 34.13vw;
    }

    .card.small img {
        width: 21.33vw;
        height: 21.33vw;
    }

    .card.small {
        width: 49.87vw;
        height: 49.87vw;
        padding: 4.27vw 4.27vw 7.73vw 2.67vw;
        gap: 3.73vw;
    }

    .card.medium,
    .card.big {
        width: 100vw;
        height: 100vw;
        gap: 4.27vw;
    }

    .card.big .text-white,
    .card.medium .text-white {
        max-width: 81.33vw;
    }

    .text-wrap .hide {
        display: none;
    }
}
</style>