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
                    <br/>
                    <br/>
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
                    В России есть несколько видов налоговых вычетов, но&nbsp;
                    <BaseTooltip :word="'большинство'">
                        <p class="h4 mb-16 text-black">Виды налоговых вычетов</p>
                        <p>Инвестиционный (при продаже ценных бумаг)
                            <br/>При покупке недвижимости
                            <br/>За накопительную пенсию
                            <br/>За страхование жизни
                            <br/>За благотворительность
                            <br/>За оценку квалификации
                        </p>
                    </BaseTooltip>
                    &nbsp;из них довольно специфичны с точки
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
                        «По старинке» — когда вы заполняете все бланки на бумаге, подкрепляете копиями и оригиналами документов, а потом несете в налоговую инспекцию лично или отправляете ценным письмом.
                    </p>
                    <p>
                        Через личный кабинет налогоплательщика на сайте ФНС.
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
import BaseTooltip from '@/components/BaseTooltip';

export default {
    components: {
        SectionHero,
        SectionMain,
        BaseExample,
        BasePriceBlock,
        TextSelection,
        TextWithBg,
        BaseCard,
        BaseTooltip
    }
}
</script>

<style scoped></style>