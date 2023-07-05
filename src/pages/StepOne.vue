<template>
    <main>
        <SectionHero :title="'Сколько денег можно вернуть в виде налогового вычета?'" :descr="'Шаг 1'"
            :img="'img/hero-img-2.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p>
                    Максимальная сумма налогового вычета, установленная государством, — 120 000 рублей в год. От нее
                    вы можете вернуть 13% или, проще говоря, 15 600 рублей. Это так называемый налог к возврату за счет
                    вычета, но далее, для простоты формулировки, мы будем называть его суммой к возврату.
                    <br />
                    <br />
                    Была ли у вас одна статья расходов (например, вы оплачивали только лечение) или несколько, не имеет
                    значения — лимит будет одинаковым.
                </p>
            </div>

            <TextSelection :img="'img/example.png'" :title="'Примеры расчетов'" class="m-0">
                <BaseExample :totalTitle="'Вычет'" :totalNumber="'13000'" :totalSpending="'120 000 ₽'">
                    <div slot="descr">
                        Допустим, в 2022 году вы потратили 40 000 рублей на лечение, 40 000 — на языковые курсы, а еще
                        20 000 — на абонемент в бассейн. Итого суммарный объем ваших трат составил:&nbsp;&nbsp;
                        <div class="selection-blue ml-1">40 000 + 40 000 + 20 000 = 100 000 рублей.</div>
                        <br />
                        <br />
                        Это меньше максимальной суммы в 120 000 рублей, установленной государством. Соответственно, сумма
                        к возврату пропорционально снизится — вы сможете вернуть: 100 000 &#215; 13% = 13 000 рублей.
                    </div>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'Лечение'" :number="'40 000'" />
                        <BasePriceBlock :title="'Курсы'" :number="'40 000'" />
                        <BasePriceBlock :title="'Бассейн'" :number="'20 000'" />
                    </div>

                </BaseExample>
            </TextSelection>

            <div class="main__wrap">
                <p>
                    При этом неиспользованный остаток (в нашем случае 20 000 рублей) на будущий год не переносится
                    и не увеличивает лимит для следующего вычета.
                </p>
            </div>

            <TextSelection :img="'img/example.png'" :title="'Другой вариант'" class="m-0">
                <BaseExample :totalTitle="'Вычет'" :totalNumber="'13000'" :totalSpending="'190 000 ₽'">
                    <div slot="descr">
                        Вы потратили 40 000 рублей на языковые курсы, 20 000 — на бассейн, а лечение обошлось еще
                        в 130 000 рублей. Таким образом суммарный объем ваших трат составил:&nbsp;&nbsp;
                        <div class="selection-blue ml-1">40 000 + 20 000 + 130 000 = 190 000 рублей.</div>
                        <br />
                        <br />
                        Это больше установленного государством лимита, поэтому максимальная сумма возврата все равно
                        составит: 120 000 &#215; 13% = 15 600 рублей.
                    </div>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'Курсы'" :number="'40 000'" />
                        <BasePriceBlock :title="'Бассейн'" :number="'20 000'" />
                        <BasePriceBlock :title="'Лечение'" :number="'130 000'" />
                    </div>

                </BaseExample>
            </TextSelection>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true">
                <p class="lead text-black only-text">
                    Для максимального вычета нужно, чтобы официальная зарплата за год была не меньше 120 000 рублей. Тогда
                    НДФЛ с этой суммы будет как раз 15 600 рублей. Хорошая новость — социальный налоговый вычет можно
                    получить в течение трех лет.
                </p>
            </TextSelection>

            <div class="main__wrap">
                <p>
                    Например, если в 2020-22 годах вы потратили деньги на лечение, фитнес или учебу, в 2023 году можно
                    оформить вычет сразу за каждый год из этих трех лет (и вернуть 46 800 рублей).
                    <br />
                    <br />
                    Если хотите получить максимальный объем налоговых вычетов, необходимо, чтобы ваш официальный доход за
                    каждый год был не меньше, чем 120 000 рублей.
                </p>
            </div>

            <TextSelection :img="'img/cool.png'" :title="'Классно'" :shadow="true">
                <p class="lead text-black only-text">
                    С 1 января 2024 года максимальную сумму вычета повысят до 150 000 рублей. Соответственно, вырастет
                    и сумма к возврату за расходы в 2024 году: 150 000 &#215; 13% = 19 500 рублей.
                </p>
            </TextSelection>

            <div class="main__wrap">
                <h3 class="h3 text-headers">
                    Какие документы нужны для получения налогового вычета?
                </h3>
                <p>
                    Если вы оформляете налоговый вычет через сайт ФНС, то документы, подтверждающие ваши доходы и уплату
                    НДФЛ, собирать не придется — вся информация уже добавлена в личный кабинет налогоплательщика.
                    <br />
                    <br />
                    Но помимо этого есть документы, которые понадобятся конкретно для получения вычета за образование,
                    лечение или фитнес. Подробнее об этом в соответствующих разделах.
                </p>
            </div>
        </SectionMain>
        <div class="nav__wrap">
            <BaseCard :link="'stepTwoOne'" :size="'small'" :text="'Вычет за обучение'" :classTitle="'caption'"
                :img="'img/link-3.png'" />
            <BaseCard :link="'stepTwoTwo'" :size="'small'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                :img="'img/link-4.png'" />
            <BaseCard :link="'stepTwoThree'" :size="'small'" :text="'Вычет за лечение'" :classTitle="'caption'"
                :img="'img/link-5.png'" />
            <BaseCard :link="'stepTwoFour'" :size="'small'" :text="'Спортивный вычет'" :classTitle="'caption'"
                :img="'img/link-6.png'" />
        </div>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import BaseExample from '@/components/BaseExample';
import BasePriceBlock from '@/components/BasePriceBlock';
import TextSelection from '@/components/TextSelection';
import BaseCard from '@/components/BaseCard';


export default {
    components: {
        SectionHero,
        SectionMain,
        BaseExample,
        BasePriceBlock,
        TextSelection,
        BaseCard
    }
}
</script>