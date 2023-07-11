<template>
    <div class="price" :class="getClass(number)">
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
    },
    methods: {
        getClass(number) {
            switch (number) {
                case '130 000':
                    return 'width-130'
                case '60 000':
                    return 'width-60'
                case '50 000':
                    return 'width-50'
                case '40 000':
                    return 'width-40'
                case '30 000':
                    return 'width-30'
                case '25 000':
                    return 'width-25'
                case '20 000':
                    return 'width-20'
                default:
                    return ''

            }
        }
    }
}
</script>

<style scoped>
.width-130 {
    width: 36.11vw;
}

.width-60 {
    width: 8.33vw;
}

.more.width-60 {
    width: 12.33vw;
}

.width-50 {
    width: 8.33vw;
}

.width-40 {
    width: 11.11vw;
}

.width-30 {
    width: 8.33vw;
}

.width-25 {
    width: 6.94vw;
}

.width-20 {
    width: 5.56vw;
}

@media (max-width: 768px) {
    .width-130 {
        width: 45vw;
    }

    .width-60,
    .more.width-60 {
        width: 48vw;
    }

    .width-50 {
        width: 21.33vw;
    }

    .width-40 {
        width: 42.67vw;
    }

    .width-30 {
        width: 26.67vw;
    }

    .width-25 {
        width: 26.67vw;
    }

    .width-20 {
        width: 21.33vw;
    }
}
</style>