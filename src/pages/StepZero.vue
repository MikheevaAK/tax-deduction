<template>
    <main>
        <SectionHero :title="'Налоговый вычет: что это такое и как его получить'" :descr="'Шаг 0'"
            :img="'img/hero-img-1.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="h3 text-headers">
                    Что такое налоговый вычет?
                </p>
                <p class="">
                    Если вы официально трудоустроены и получаете «белую» зарплату, то с каждого заработанного вами рубля
                    государство забирает 13 копеек в качестве налога на доход физических лиц (НДФЛ).
                    В России работодатель сам удерживает налог с доходов работников и перечисляет его в бюджет.
                </p>
            </div>

            <TextSelection :img="'img/example.png'" :title="'Пример'" class="m-0">
                <BaseExample :sing="'+'" :totalTitle="'Итого'" :totalNumber="'57471'">
                    <p slot="descr">
                        Например, если вы договорились, что на руки будете получать 50 000 рублей, то в трудовом или
                        гражданско-правовом договоре ваш наниматель укажет другую сумму - 57 471 рубль. При каждой выплате
                        он
                        будет удерживать 13% налога, 7471 рубль, и перечислять за вас в бюджет.
                    </p>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'На руки'" :number="'50 000'" :width="'width: 8.33vw;'" />
                    </div>

                </BaseExample>
            </TextSelection>

            <div class="main__wrap">
                <div>
                    Из-за этого большинство из нас не относятся к этим 13% как к чему-то своему. Не держал в руках денег —
                    значит их как бы и нет. Между тем, эти деньги реальны, более того — часть уже уплаченного НДФЛ можно
                    вернуть себе.
                    <div class="selection-blue">Это и называется налоговым вычетом.</div>
                    <br />
                    <br />
                    В России есть несколько видов налоговых вычетов, но
                    <span class="tool">
                        большинство&nbsp;
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="question-mark">
                                <circle id="Ellipse 3" cx="8" cy="8" r="8" fill="#5BADDE" />
                                <path id="?"
                                    d="M5.644 8.446C5.644 7.256 6.428 6.528 7.996 6.262C9.046 6.08 9.508 5.702 9.508 5.072C9.508 4.456 8.92 4.022 7.982 4.022C6.988 4.022 6.26 4.61 5.994 5.674L5 5.142C5.392 3.784 6.54 3 7.996 3C9.634 3 10.684 3.84 10.684 4.974C10.684 6.136 9.998 6.836 8.248 7.214C7.296 7.41 6.82 7.816 6.82 8.432C6.82 9.034 7.268 9.412 7.926 9.412C8.668 9.412 9.116 8.992 9.41 8.166L10.376 8.712C9.942 9.832 9.102 10.42 7.94 10.42C6.582 10.42 5.644 9.622 5.644 8.446ZM7.226 12.94V11.47H8.696V12.94H7.226Z"
                                    fill="white" />
                            </g>
                        </svg>
                    </span>&nbsp;из них довольно специфичны с точки
                    зрения условий возврата. А вот налоговый вычет за лечение, обучение или фитнес может получить
                    практически каждый. О них мы и расскажем.
                </div>
            </div>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" class="medium-padding" :shadow="true">
                <p class="lead mb-16">
                    Есть два способа получения вычета.
                </p>
                <div class="text-selection__columns flex">
                    <p>
                        «Постаринке» — когда вы заполняете все бланки на бумаге, подкрепляете копиями и оригиналами
                        документов,
                        а потом несете в налоговую инспекцию лично или отправляете ценным письмом.
                    </p>
                    <p>
                        Через личный кабинет налогоплательщика насайте ФНС.
                    </p>
                </div>
            </TextSelection>

            <div class="main__wrap">
                <p class="mb-50">
                    Данный туториал рассматривает варианты оформления только для второго варианта — как самого простого
                    и удобного.
                </p>
                <p class="h3 text-headers">
                    Кто может получить налоговый вычет?
                </p>
                <p class="mb-25">
                    Чтобы претендовать на получение налогового вычета, нужно выполнить два условия:
                </p>
                <TextWithBg :number="1" :text="'Получать официальную зарплату (с которой работодатель платит НДФЛ)'"
                    :margin="true" />
                <TextWithBg class="mb-16" :number="2"
                    :text="'Находиться на территории России минимум 183 дня в календарном году (то есть быть налоговым резидентом).'" />
                <p class="mb-30">
                    Вы не можете получить налоговый вычет, если у вас нет официальной зарплаты, с которой работодатель
                    платит НДФЛ. То есть вы, например:
                </p>
                <TextWithBg :number="1" :text="'Безработный студент'" :margin="true" />
                <TextWithBg :number="2" :text="'Неработающий пенсионер'" :margin="true" />
                <TextWithBg class="mb-30" :number="3" :text="'Индивидуальный предприниматель'" />
                <p>
                    Нерезиденты также не могут претендовать на получение вычета.
                </p>
            </div>
        </SectionMain>

        <BaseCard :link="'stepOne'" :size="'big'" :text="'Сколько денег можно вернуть в виде налогового вычета?'"
            :classTitle="'h2'" :img="'img/link-2.png'" />
    </main>
</template>

<script>

import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import BaseExample from '@/components/BaseExample';
import BasePriceBlock from '@/components/BasePriceBlock';
import TextSelection from '@/components/TextSelection';
import TextWithBg from '@/components/TextWithBg';
import BaseCard from '@/components/BaseCard';

export default {
    components: {
        SectionHero,
        SectionMain,
        BaseExample,
        BasePriceBlock,
        TextSelection,
        TextWithBg,
        BaseCard
    }
}
</script>

<style scoped></style>