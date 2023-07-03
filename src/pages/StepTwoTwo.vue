<template>
    <main>
        <SectionHero :title="'Что нужно знать о налоговом вычете за обучение ребенка?'" :descr="'Шаг 2'"
            :img="'img/hero-img-4.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-40">
                    Налоговый вычет за обучение детей можно получить, если вы оплатили очную учебу родных или опекаемых
                    детей (их возраст не должен превышать 24 года).
                </p>
                <p class="h3 text-headers">
                    Что понимается под обучением
                </p>
                <TextWithBg :number="1" :text="'Дошкольное образование (детские сады)'" :margin="true" />
                <TextWithBg :number="2" :text="'Учеба в школах и гимназиях'" :margin="true" />
                <TextWithBg :number="3" :text="'Учеба в институтах, университетах и профессиональных колледжах'"
                    :margin="true" />
                <TextWithBg :number="4"
                    :text="'Обучение в автошколах и языковых центрах, в центрах повышения квалификации и т.д.'"
                    :margin="true" />
                <TextWithBg :number="5" class="mb-5"
                    :text="'Посещение детских музыкальных школ и школ искусств, детско-юношеских спортивных школ и т.д.'" />
            </div>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true">
                <p class="lead text-black only-text">
                    Максимальный размер налогового вычета за обучение одного ребенка составляет 50 000 рублей, от которых вы
                    можете получить к возврату 13%, то есть 6 500 рублей.
                </p>
            </TextSelection>

            <div class="main__wrap">
                <p class="mb-80">
                    Причем эта сумма не входит в лимит в 120 000 рублей, а предоставляется в дополнение к нему.
                    <br />
                    <br />
                    Если детей больше одного, то по 50 000 рублей вычета вы можете получить за обучение каждого из них.
                    Однако превышение лимита у одного ребенка нельзя «перекинуть» на другого.
                    <br />
                    <br />
                    Налоговый вычет за учебу ребенка может получить любой из родителей. Но сделать это дважды — чтобы
                    по 6 500 рублей получили и вы, и ваш супруг/супруга, — разумеется, не получится.
                </p>
            </div>

            <p class="h4 mb-25 max-width">
                Чтобы подать на налоговый вычет за образование ребенка, вам потребуются сканы:
            </p>

            <div class="docs-wrap flex mb-80">
                <BlockDocs :type="'doc'"
                    :text="'Договора между вами и образовательным учреждением на очное обучение (все страницы)'" />
                <BlockDocs :type="'birth'"
                    :text="'Свидетельства о рождении ребенка или документы, подтверждающие факт опекунства или попечительства'" />
                <BlockDocs :type="'marriage'"
                    :text="'Свидетельства о браке, если платежные документы оформлены на второго родителя'" />
                <BlockDocs :type="'receipt'" :text="'Документов об оплате — чеки и квитанции;'" />
            </div>

            <div class="main__wrap">
                <p>
                    Образовательное учреждение может быть как государственным, так и частным, но крайне важно, чтобы у него
                    была лицензия, дающая право оказывать образовательные услуги. Отправлять ее скан в ФНС не надо, но если
                    у учреждения нет лицензии, то и налоговый вычет не предоставят.
                </p>
            </div>

            <TextSelection :title="'Пример'" class="m-0">
                <BaseExample :totalTitle="'Вычет'" :totalNumber="'11 700'" :totalSpending="'120 000 ₽'">
                    <div slot="descr">
                        Допустим, в 2022 году вы потратили 40 000 рублей на обучение программированию одного ребенка и 60
                        000 — на курсы английского языка для второго ребенка. Поскольку максимальная сумма налогового вычета
                        за обучение каждого из детей составляет 50 000 рублей, сумма к возврату будет такой: 40 000 + 50 000
                        х 13% = 11 700 рублей.
                    </div>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'Code'" :number="'40 000'" :width="'width: 10rem;'" />
                        <BasePriceBlock :title="'Английский'" :number="'60 000'" :width="'width: 15rem;'" />
                    </div>

                </BaseExample>
            </TextSelection>

            <div class="main__wrap">
                <p class="mb-80">
                    При этом неиспользованный остаток по одному ребенку (в нашем случае 10 000 рублей) на будущий год не
                    переносится и не увеличивает лимит для вычета по второму ребенку.
                </p>
                <p class="h3 mb-16 text-headers">
                    Приятно
                </p>
                <p>
                    с 1 января 2024 года лимит вычета за обучение ребенка, вырастет до 110 000 рублей. Соответственно,
                    максимальный размер суммы к возврату составит 14 300 рублей.
                </p>
            </div>
        </SectionMain>

        <div class="nav flex">
            <div class="nav__wrap">
                <BaseCard :link="'stepTwoOne'" :size="'small'" :text="'Вычет за обучение'" :classTitle="'caption'"
                    :img="'img/link-3.png'" />
                <BaseCard :link="'stepTwoTwo'" :size="'small'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                    :img="'img/link-4.png'" :active="true" />
                <BaseCard :link="'stepTwoThree'" :size="'small'" :text="'Вычет за лечение'" :classTitle="'caption'"
                    :img="'img/link-5.png'" />
                <BaseCard :link="'stepTwoFour'" :size="'small'" :text="'Спортивный вычет'" :classTitle="'caption'"
                    :img="'img/link-6.png'" />
            </div>
            <BaseCard :link="'stepThree'" :size="'medium'" :text="'Документы готовы. Что дальше?'" :classTitle="'h2'"
                :img="'img/link-7.png'" :step="3" />
        </div>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import BaseExample from '../components/BaseExample';
import BasePriceBlock from '../components/BasePriceBlock';
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
        BlockDocs,
        BaseCard
    }
}
</script>

<style scoped>
.max-width {
    max-width: 38.19vw;
}

.docs-wrap {
    flex-wrap: wrap;
    gap: 2.78vw;
}

@media (max-width: 768px) {
    .max-width {
        max-width: unset;
        margin: 0 4.27vw;
    }

    .docs-wrap {
        gap: 4.27vw;
        margin: 0 4.27vw 10.67vw 4.27vw;
    }

    .docs-wrap .doc__wrap {
        width: 47%;
    }
}
</style>