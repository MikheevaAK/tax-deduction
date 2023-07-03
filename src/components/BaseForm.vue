<template>
    <form class="form text-black">
        <div class="form__section">
            <p class="lead form__section-title">
                Вы получали официальную зарплату в 2022 году?
            </p>
            <input class="form__section-input" type="text" placeholder="0₽">
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
            <input class="form__section-input" type="text" placeholder="0₽">
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
            <input class="form__section-input" type="text" placeholder="0₽">
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
            <input class="form__section-input" type="text" placeholder="0₽">
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
                    <input class="form__section-input" type="text" placeholder="0₽">
                    <p class="graph-text">Расходы за год на 1-го ребенка</p>
                </div>
                <div>
                    <input class="form__section-input" type="text" placeholder="0₽">
                    <p class="graph-text">Расходы за год на 2-го ребенка</p>
                </div>
                <div>
                    <input class="form__section-input" type="text" placeholder="0₽">
                    <p class="graph-text">Расходы за год на 3-го ребенка</p>
                </div>
            </div>
        </div>
        <div class="form__section form__section-last">
            <p class="lead form__section-last-descr">
                Это ваш суммарный налоговый вычет по следующим категориям:
            </p>
            <div class="form__card-wrap">
                <BaseCard :link="'stepTwoOne'" :text="'Вычет за обучение'" :classTitle="'caption'"
                    :img="'img/link-3.png'" />
                <BaseCard :link="'stepTwoTwo'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                    :img="'img/link-4.png'" />
                <BaseCard :link="'stepTwoThree'" :text="'Вычет за лечение'" :classTitle="'caption'"
                    :img="'img/link-5.png'" />
                <BaseCard :link="'stepTwoFour'" :text="'Спортивный вычет'" :classTitle="'caption'"
                    :img="'img/link-6.png'" />
            </div>
        </div>
    </form>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    components: {
        BaseCard
    }
}
</script>