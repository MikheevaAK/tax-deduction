<template>
    <router-link :to="{ name: link }" v-slot="{ href }">
        <a :href="href">
            <div class="card" :class="size">
                <img :src="img" alt="">
                <div class="text-white" :class="classTitle">{{ text }}</div>
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
        }
    }
}
</script>

<style>
.card.small {
    width: 22.5rem;
    height: 22.5rem;
    padding: 2.25rem 1.75rem 2.8125rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 5.9375rem;
}

/* .card.small img {
    width: 10rem;
    height: 10rem;
} */

.card.big {
    width: 100%;
    height: 50vw;
    /* padding: 2.25rem 1.75rem 2.8125rem 1.25rem; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.667vw;
}

.card img {
    width: 11.111vw;
    height: 11.111vw;
}
</style>