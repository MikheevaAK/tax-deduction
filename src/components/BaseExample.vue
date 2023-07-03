<template>
    <div>
        <div class="example__top">
            <slot name="descr"></slot>
        </div>
        <div class="example__bottom" :class="totalSpending === '190 000 ₽' ? 'flex-wrap' : ''">
            <div class="price-block__wrap">
                <slot name="price-block"></slot>
                <div v-if="totalSpending" class="price-all">
                    <div class="price-all__solid"></div>
                    <div class="price-all__number graph-text">{{ totalSpending }}</div>
                </div>
            </div>

            <div :class="totalSpending ? 'formula-wrap' : 'formula-one-wrap'">
                <div v-if="totalSpending !== '190 000 ₽'" class="price-all__number--modile graph-text">
                    {{ totalSpending }}
                </div>
                <div v-if="totalSpending === '190 000 ₽'" class="total-amount bg">
                    <div class="graph-caption">
                        В пределах лимита
                    </div>
                    <div class="total-amount__number">
                        120 000 ₽
                    </div>
                </div>

                <div class="lead" v-html="sign"></div>

                <div class="income-tax">
                    <div class="graph-caption">НДФЛ</div>
                    <div class="income-tax__number lead">13%</div>
                </div>

                <div class="lead">=</div>

                <div class="total-amount">
                    <div class="graph-caption">
                        {{ totalTitle }}
                    </div>
                    <div class="total-amount__number">
                        {{ totalNumber }}₽
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        totalTitle: {
            type: String,
            default: ''
        },
        totalNumber: {
            type: String,
            default: ''
        },
        sign: {
            type: String,
            default: '&#215;'
        },
        totalSpending: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.price-all__number--modile {
    display: none;
}

.formula-wrap,
.formula-one-wrap {
    display: flex;
    align-items: center;
    gap: 1.11vw;
}

.total-amount.bg {
    background-color: inherit;
}

@media (max-width: 768px) {
    .price-all__number--modile {
        display: block;
    }

    .formula-wrap {
        flex-direction: column;
        gap: 1.11vw;
    }

    .formula-one-wrap {
        gap: 1.11vw;
    }

    .total-amount.bg {
        padding: 0;
    }

    .total-amount.bg .total-amount__number {
        font-size: 3.73vw;
        line-height: 5.33vw;
    }

    .total-amount.bg .graph-caption {
        display: none;
    }
}
</style>