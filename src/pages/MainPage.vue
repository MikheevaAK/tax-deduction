<template>
    <main class="main-page">
        <SectionHero :title="'Как получить налоговый вычет'" :descr="'Информационный гайд'" :img="'img/hero-img-0.png'"
            :bg="false" />

        <SectionMain :textColor="true" :bg="true">
            <div class="main__wrap">
                <p class="mb-16">
                    Гайд разделен на отдельные карточки, чтобы вам было проще
                </p>

                <TextWithBg :number="1" :text="'Разобраться во всех нюансах'" :margin="true" />
                <TextWithBg :number="2" :text="'Удобнее искать нужную информацию'" class="mb-25" />

                <p class="mb-40">
                    Вы можете начать изучение последовательно или с любой карточки. Рекомендуем сначала пройти небольшой
                    тест,
                    чтобы
                    узнать: какие виды вычетов вам доступны и сколько денег вам вернут.
                </p>
            </div>

            <!-- <div class="flex card-list">
                <BaseCard :link="'stepOne'" :text="'Сколько денег можно вернуть в виде налогового вычета?'"
                    :classTitle="'caption'" :img="'img/link-2.png'" />
                <BaseCard :link="'stepTwoOne'" :text="'Вычет за обучение'" :classTitle="'caption'"
                    :img="'img/link-3.png'" />
                <BaseCard :link="'stepTwoTwo'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                    :img="'img/link-4.png'" />
                <BaseCard :link="'stepTwoThree'" :text="'Вычет за лечение'" :classTitle="'caption'"
                    :img="'img/link-5.png'" />
                <BaseCard :link="'stepTwoFour'" :text="'Спортивный вычет'" :classTitle="'caption'"
                    :img="'img/link-6.png'" />
                <BaseCard :link="'stepThree'" :text="'Документы готовы. Что дальше?'"
                    :classTitle="'caption'" :img="'img/link-7.png'" />
                <BaseCard :link="'stepFourOne'"
                    :text="'Схема получения налогового вычета через работодателя'" :classTitle="'caption'"
                    :img="'img/link-8.png'" />
                <BaseCard :link="'stepFourTwo'" :text="'Схема получения налогового вычета через налоговую'"
                    :classTitle="'caption'" :img="'img/link-9.png'" />
            </div> -->

            <div class="main__wrap">
                <h3 class="h3">
                    Калькулятор социальных вычетов
                </h3>
                <p class="">
                    Пройдите тест, чтобы узнать какие виды социальных вычетов вам доступны и сколько денег вам может вернуть
                    государство
                </p>
            </div>

            <TextSelection :img="'img/abstract.png'" :title="'Тест'" class="m-0">
                <BaseForm />
            </TextSelection>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true">
                <p class="lead text-black only-text">
                    Если у вас были подходящие расходы в 2020, 2021 или 2023 годах, и вы получали официальную зарплату в
                    этому
                    году, то вы также можете получить социальные вычеты. Читайте об этом в следующих разделах.
                </p>
            </TextSelection>

        </SectionMain>

        <BaseCard :link="'stepZero'" :size="'big'" :text="'Налоговый вычет: что это такое и как его получить'"
            :classTitle="'h2'" :img="'img/link-1.png'" />

        <div class="nav__wrap">
            <BaseCard :link="'stepOne'" :size="'small'" :text="'Сколько денег можно вернуть в виде налогового вычета?'"
                :classTitle="'caption'" :img="'img/link-2.png'" />
            <BaseCard :link="'stepTwoOne'" :size="'small'" :text="'Вычет за обучение'" :classTitle="'caption'"
                :img="'img/link-3.png'" />
            <BaseCard :link="'stepTwoTwo'" :size="'small'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                :img="'img/link-4.png'" />
            <BaseCard :link="'stepTwoThree'" :size="'small'" :text="'Вычет за лечение'" :classTitle="'caption'"
                :img="'img/link-5.png'" />
            <BaseCard :link="'stepTwoFour'" :size="'small'" :text="'Спортивный вычет'" :classTitle="'caption'"
                :img="'img/link-6.png'" />
            <BaseCard :link="'stepThree'" :size="'small'" :text="'Документы готовы. Что дальше?'" :classTitle="'caption'"
                :img="'img/link-7.png'" />
            <BaseCard :link="'stepFourOne'" :size="'small'" :text="'Схема получения налогового вычета через работодателя'"
                :classTitle="'caption'" :img="'img/link-8.png'" />
            <BaseCard :link="'stepFourTwo'" :size="'small'" :text="'Схема получения налогового вычета через налоговую'"
                :classTitle="'caption'" :img="'img/link-9.png'" />
        </div>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import TextWithBg from '@/components/TextWithBg';
import TextSelection from '@/components/TextSelection';
import BaseCard from '@/components/BaseCard';
import BaseForm from '@/components/BaseForm.vue';

export default {
    components: {
        SectionHero,
        SectionMain,
        BaseCard,
        TextWithBg,
        TextSelection,
        BaseForm
    }
}
</script>

<style scoped>
@media (min-width: 768px) {
    .attention-block .only-text {
        padding: 6.81vw 5.42vw 5.42vw 5.42vw;
    }
}
</style>