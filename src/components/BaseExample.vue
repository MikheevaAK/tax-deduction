<template>
    <div>
        <div class="example__top">
            <slot name="descr"></slot>
        </div>
        <div class="example__bottom">
            <div>
                <slot name="price-block"></slot>
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
        }
    }
}
</script>