<template>
    <form class="form text-black">
        <div class="form__section">
            <p class="lead form__section-title">
                Вы получали официальную зарплату в 2022 году?
            </p>
            <money v-model="salary" v-bind="money" type="text" placeholder="0₽"
                :class="{ 'form__input_placeholder': salary <= 0 }" class="form__section-input" @input="resizeInput('1')"
                :style="{ width: this.width1 }" maxlength="9"></money>
            <p class="graph-text">Если да, напишите ежемесячный размер; если нет, оставьте поле пустым</p>
        </div>
        <div class="form__section">
            <p class="lead form__section-title">
                В 2022 году вы оплачивали медицинские услуги или лекарства?
            </p>
            <p class="form__section-descr">
                Например, анализы, лечение зубов, любые лекарства, прописанные врачом. Можно учесть расходы за
                себя, супруга, своих родителей и детей до 18 лет (до 24, если они учатся очно).
            </p>
            <money v-model="medication" v-bind="money" class="form__section-input" type="text" placeholder="0₽"
                :class="{ 'form__input_placeholder': medication <= 0 }" @input="resizeInput('2')"
                :style="{ width: this.width2 }" maxlength="9"></money>
            <p class="graph-text">Напишите примерную сумму за год</p>
        </div>
        <div class="form__section">
            <p class="lead form__section-title">
                В 2022 году вы оплачивали обучение?
            </p>
            <p class="form__section-descr">
                Например, на языковых курсах, в автошколе или ВУЗе. Можно учесть расходы за себя, сестер и
                братьев до 24 лет, если они учатся очно.
            </p>
            <money v-model="studies" v-bind="money" class="form__section-input" type="text" placeholder="0₽"
                :class="{ 'form__input_placeholder': studies <= 0 }" @input="resizeInput('3')"
                :style="{ width: this.width3 }" maxlength="9"></money>
            <p class="graph-text">Напишите примерную сумму за год</p>
        </div>
        <div class="form__section">
            <p class="lead form__section-title">
                В 2022 году вы оплачивали занятия спортом?
            </p>
            <p class="form__section-descr">
                Например, абонемент в фитнес-клуб, персональные тренировки, детские спортивные секции. Можно
                учесть расходы за себя или своих детей до 24 лет, если они учатся очно.
            </p>
            <money v-model="sport" v-bind="money" class="form__section-input" type="text" placeholder="0₽"
                :class="{ 'form__input_placeholder': sport <= 0 }" @input="resizeInput('4')" :style="{ width: this.width4 }"
                maxlength="9"></money>
            <p class="graph-text">Напишите примерную сумму за год</p>
        </div>
        <div class="form__section">
            <p class="lead form__section-title">
                В 2022 году вы оплачивали обучение детей?
            </p>
            <p class="form__section-descr">
                Например, детский сад, музыкальная школа, кружки и онлайн-курсы. Можно учесть расходы за детей
                до 24 лет, если они учатся очно. Расходы на каждого ребенка считаются отдельно
            </p>

            <div class="form__input-wrap">
                <div>
                    <money v-model="childOne" v-bind="money" class="form__section-input" type="text" placeholder="0₽"
                        :class="{ 'form__input_placeholder': childOne <= 0 }" @input="resizeInput('5')"
                        :style="{ width: this.width5 }" maxlength="9"></money>
                    <p class="graph-text">Расходы за год на 1-го ребенка</p>
                </div>
                <div>
                    <money v-model="childTwo" v-bind="money" class="form__section-input" type="text" placeholder="0₽"
                        :class="{ 'form__input_placeholder': childTwo <= 0 }" @input="resizeInput('6')"
                        :style="{ width: this.width6 }" maxlength="9"></money>
                    <p class="graph-text">Расходы за год на 2-го ребенка</p>
                </div>
                <div>
                    <money v-model="childThree" v-bind="money" class="form__section-input" type="text" placeholder="0₽"
                        :class="{ 'form__input_placeholder': childThree <= 0 }" @input="resizeInput()"
                        :style="{ width: this.width7 }" maxlength="9"></money>
                    <p class="graph-text">Расходы за год на 3-го ребенка</p>
                </div>
            </div>
        </div>
        <div v-if="medication != 0 || studies != 0 || sport != 0 || childOne != 0 || childTwo != 0 || childThree != 0"
            class="form__section form__section-last">

            <div class="form-total form-total__desctop">
                <div v-if="totalYourSum > 0" class="form-total__item">
                    <div class="graph-text">
                        Ваш вычет
                    </div>
                    <div class="form-total__item-number h1">
                        {{ totalYourSum }}₽
                    </div>
                </div>
                <div v-if="totalChildSum > 0 && totalYourSum > 0" class="form-total__item">
                    <div class="form-total__item-number plus h1">
                        +
                    </div>
                </div>
                <div v-if="totalChildSum > 0" class="form-total__item">
                    <div class="graph-text">
                        Вычет за обучение детей
                    </div>
                    <div class="form-total__item-number h1">
                        {{ totalChildSum }}₽
                    </div>
                </div>
                <div v-if="totalAll > 0" class="form-total__item">
                    <img src="img/happy.png" alt="">
                </div>
            </div>
            <div class="form-total form-total__modile mb-20">
                <div class="form-total__item-number h1">
                    {{ totalAll }}₽
                </div>
                <div v-if="totalAll > 0" class="form-total__item">
                    <img src="img/happy.png" alt="">
                </div>
            </div>

            <p class="lead form__section-last-descr mb-30">
                Это ваш суммарный налоговый вычет по следующим категориям:
            </p>
            <div class="form__card-wrap">
                <BaseCard v-if="studies != 0" :link="'stepTwoOne'" :text="'Вычет за обучение'" :classTitle="'caption'"
                    :img="'img/link-3.png'" />
                <BaseCard v-if="childOne != 0 || childTwo != 0 || childThree != 0" :link="'stepTwoTwo'"
                    :text="'Вычет за обучение детей'" :classTitle="'caption'" :img="'img/link-4.png'" />
                <BaseCard v-if="medication != 0" :link="'stepTwoThree'" :text="'Вычет за лечение'" :classTitle="'caption'"
                    :img="'img/link-5.png'" />
                <BaseCard v-if="sport != 0" :link="'stepTwoFour'" :text="'Спортивный вычет'" :classTitle="'caption'"
                    :img="'img/link-6.png'" />
            </div>
        </div>
    </form>
</template>

<script>
import BaseCard from './BaseCard.vue';
import { Money } from 'v-money'

export default {
    components: {
        BaseCard,
        Money
    },
    data() {
        return {
            salary: '',
            medication: '',
            studies: '',
            sport: '',
            childOne: '',
            childTwo: '',
            childThree: '',
            money: {
                decimal: '',
                thousands: '',
                prefix: '',
                suffix: '₽',
                precision: 0,
                masked: false
            },
            width1: 0,
            width2: 0,
            width3: 0,
            width4: 0,
            width5: 0,
            width6: 0,
            width7: 0,
        }
    },
    methods: {
        totalOneChild(child) {
            if (child > 50000) {
                return 50000 * 0.13

            } else {
                return child * 0.13
            }
        },
        resizeInput(count) {
            switch (count) {
                case '1':
                    return this.width1 = (event.target.value.length) + "ch";
                case '2':
                    return this.width2 = (event.target.value.length) + "ch";
                case '3':
                    return this.width3 = (event.target.value.length) + "ch";
                case '4':
                    return this.width4 = (event.target.value.length) + "ch";
                case '5':
                    return this.width5 = (event.target.value.length) + "ch";
                case '6':
                    return this.width6 = (event.target.value.length) + "ch";
                default:
                    return this.width7 = (event.target.value.length) + "ch";
            }
        },
    },
    computed: {
        tax() {
            return this.salary * 12 * 0.13
        },
        totalYourSum() {
            let sumSpending = this.medication + this.studies + this.sport
            let returnTax
            if (sumSpending > 120000) {
                returnTax = 120000 * 0.13
            } else {
                returnTax = sumSpending * 0.13
            }
            if (this.tax < returnTax) {
                return this.tax
            } else {
                return Math.floor(returnTax * 10) / 10
            }
        },
        totalChildSum() {
            let sumSpending = this.totalOneChild(this.childOne) + this.totalOneChild(this.childTwo) + this.totalOneChild(this.childThree)
            let remainder = this.tax - this.totalYourSum
            if (remainder > 0) {
                return Math.floor(sumSpending * 10) / 10
            } else {
                return 0
            }
        },
        totalAll() {
            let sum = Number(this.totalYourSum + this.totalChildSum)
            return Math.floor(sum * 10) / 10
        }
    }

}
</script>

<style scoped>
.form-total {
    display: flex;
    align-items: center;
    gap: 1.46vw;
}

.form-total__modile {
    display: none;
}

.form-total__item {
    display: flex;
    flex-direction: column;
    gap: 0.42vw;
}

.form-total__item-number.h1 {
    color: #5BADDE;
}

.form-total__item img {
    width: 4.44vw;
    height: 4.44vw;
}

.form-total__item-number.plus {
    height: 3.47vw;
}

@media (max-width: 768px) {
    .form-total__desctop {
        display: none;
    }

    .form-total__modile {
        display: flex;
        align-items: center;
        gap: 3.73vw;
    }

    .form-total__item img {
        width: 9.6vw;
        height: 9.6vw;
    }
}
</style>