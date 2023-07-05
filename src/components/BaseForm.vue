<template>
    <form class="form text-black">
        <div class="form__section">
            <p class="lead form__section-title">
                Вы получали официальную зарплату в 2022 году?
            </p>
            <input v-model="salary" class="form__section-input" type="text" placeholder="0₽">
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
            <input v-model="medication" class="form__section-input" type="text" placeholder="0₽">
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
            <input  v-model="studies" class="form__section-input" type="text" placeholder="0₽">
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
            <input v-model="sport" class="form__section-input" type="text" placeholder="0₽">
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
                    <input v-model="sport" class="form__section-input" type="text" placeholder="0₽">
                    <p class="graph-text">Расходы за год на 1-го ребенка</p>
                </div>
                <div>
                    <input v-model="childTwo"
                           class="form__section-input"
                           type="text" placeholder="0₽">
                    <p class="graph-text">Расходы за год на 2-го ребенка</p>
                </div>
                <div>
                    <input v-model="childThree"
                           class="form__section-input"
                           type="text"
                           placeholder="0₽">
                    <p class="graph-text">Расходы за год на 3-го ребенка</p>
                </div>
            </div>
        </div>
        <div v-if="medication != 0 || studies != 0 || sport != 0 || childOne != 0 || childTwo != 0 || childThree != 0"
             class="form__section form__section-last">

            <div class="form-total form-total__desctop">
                <div class="form-total__item">
                    <div class="graph-text">
                        Ваш вычет
                    </div>
                    <div class="form-total__item-number h1">
                        {{ totalYourSum }}₽
                    </div>
                </div>
                <div v-if="childOne != 0 || childTwo != 0 || childThree != 0" class="form-total__wrap">
                    <div class="form-total__item">
                        <div class="form-total__item-number plus h1">
                            +
                        </div>
                    </div>
                    <div class="form-total__item">
                        <div class="graph-text">
                            Вычет за обучение детей
                        </div>
                        <div class="form-total__item-number h1">
                            {{ totalChildSum }}₽
                        </div>
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
                          :img="'img/link-3.png'"/>
                <BaseCard v-if="childOne != 0 || childTwo != 0 || childThree != 0" :link="'stepTwoTwo'"
                          :text="'Вычет за обучение детей'" :classTitle="'caption'"
                          :img="'img/link-4.png'"/>
                <BaseCard v-if="medication != 0" :link="'stepTwoThree'" :text="'Вычет за лечение'"
                          :classTitle="'caption'"
                          :img="'img/link-5.png'"/>
                <BaseCard v-if="sport != 0" :link="'stepTwoFour'" :text="'Спортивный вычет'" :classTitle="'caption'"
                          :img="'img/link-6.png'"/>
            </div>
        </div>
    </form>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    components: {
        BaseCard,
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
        }
    },
    computed: {
        tax() {
            return this.salary * 12 * 0.13
        },
        totalYourSum() {
            let sumSpending = this.medication + this.studies + this.sport
            // console.log(sumSpending)
            let returnTax
            if (sumSpending > 120000) {
                returnTax = 120000 * 0.13
            } else {
                returnTax = sumSpending * 0.13
            }
            if (this.tax < returnTax) {
                return this.tax + ''
            } else {
                return returnTax
            }
        },
        totalChildSum() {
            let sumSpending = this.childOne + this.childTwo + this.childThree
            // console.log(sumSpending)
            let remainder = this.tax - this.totalYourSum
            let returnTax
            if (remainder > 0) {
                if (sumSpending > 50000) {
                    returnTax = 50000 * 0.13
                } else {
                    returnTax = sumSpending * 0.13
                }
                return returnTax
            } else {
                return 0
            }
        },
        totalAll() {
            return Number(this.totalYourSum + this.totalChildSum)
        }
    }

}
</script>

<style>
.form-total,
.form-total__wrap {
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