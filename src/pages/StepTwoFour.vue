<template>
    <main>
        <SectionHero :title="'Что нужно знать о спортивном налоговом вычете?'" :descr="'Шаг 2'"
            :img="'img/hero-img-6.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-25">
                    Посещаете фитнес-центр, бассейн или тренажерный зал — можете рассчитывать на налоговый вычет по расходам
                    на фитнес. Налоговый вычет положен за расходы на:
                </p>
                <TextWithBg :number="1" :text="'Собственные занятия'" :margin="true" />
                <TextWithBg :number="2"
                    :text="'Занятия фитнесом детей до 18 лет, в том числе приемных (если дети — студенты-очники, то до 24 лет)'"
                    class="mb-40" />
                <p>
                    Оплата за супруга/супругу, брата/сестру или родителей право на вычет не дает.
                </p>
            </div>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true">
                <p class="lead text-black only-text">
                    Физкультурно-оздоровительная организация, которую вы посещаете, должна входить в реестр Министерства
                    спорта
                    России. Список обновляется ежегодно. Если ее в этом списке нет, вычет получить не удастся.
                </p>
            </TextSelection>

            <div class="main__wrap">
                <p class="mb-25">
                    Для получения вычета за фитнес вам потребуются сканы или фотографии:
                </p>
                <div class="docs-wrap flex mb-80">
                    <BlockDocs :type="'doc'"
                        :text="'Договора между вами и образовательным учреждением на очное обучение (все страницы)'" />
                    <BlockDocs :type="'receipt'" :text="'Документы об оплате — чеки и квитанции'" />
                </div>
                <p class="mb-25">
                    Если в спортивный зал ходите не вы, а ваш ребенок, потребуется подтвердить родство с помощью скана или фотографии:
                </p>
                <div class="docs-wrap flex mb-80">
                    <BlockDocs :type="'birth'"
                        :text="'Свидетельство о рождении или документов, подтверждающие факт опекунства или попечительства.'" />
                </div>
                <p>
                    Максимальный размер налогового вычета за лечение — все те же 15 600 рублей в год (13% от 120 000
                    рублей).
                </p>
            </div>
            <TextSelection :title="'Пример'" class="m-0">
                <BaseExample :totalTitle="'Вычет'" :totalNumber="'11 700'" :totalSpending="'90 000 ₽'">
                    <div slot="descr">
                        Допустим, в 2022 году вы потратили 40 000 рублей на обучение программированию одного ребенка и 60
                        000 — на курсы английского языка для второго ребенка. Поскольку максимальная сумма налогового вычета
                        за обучение каждого из детей составляет 50 000 рублей, сумма к возврату будет такой: 40 000 + 50 000
                        х 13% = 11 700 рублей.
                    </div>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'Абонемент'" :number="'50 000'" />
                        <BasePriceBlock :title="'Секции ребёнка'" :number="'40 000'" />
                    </div>

                </BaseExample>
            </TextSelection>
            <div class="main__wrap">
                <p>
                    При этом неиспользованный остаток (в нашем случае 30 000 рублей) на будущий год не переносится
                    и не увеличивает лимит для следующего вычета. Но его можно компенсировать с помощью трат на обучение
                    и лечение.
                </p>
            </div>
        </SectionMain>
        <div class="nav flex">
                <div class="nav__wrap">
                    <BaseCard :link="'stepTwoOne'" :size="'small'" :text="'Вычет за обучение'" :classTitle="'caption'"
                        :img="'img/link-3.png'" />
                    <BaseCard :link="'stepTwoTwo'" :size="'small'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                        :img="'img/link-4.png'" />
                    <BaseCard :link="'stepTwoThree'" :size="'small'" :text="'Вычет за лечение'" :classTitle="'caption'"
                        :img="'img/link-5.png'" />
                    <BaseCard :link="'stepTwoFour'" :size="'small'" :text="'Спортивный вычет'" :classTitle="'caption'"
                        :img="'img/link-6.png'" :active="true" />
                </div>
                <BaseCard :link="'stepThree'" :size="'medium'" :text="'Документы готовы. Что дальше?'" :classTitle="'h2'"
                    :img="'img/link-7.png'" :step="3" />
            </div>
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
import BlockDocs from '@/components/BlockDocs';


export default {
    components: {
        SectionHero,
        SectionMain,
        BaseExample,
        BasePriceBlock,
        
        TextSelection,
        TextWithBg,
        BaseCard,
        BlockDocs
    }
}
</script>