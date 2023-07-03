<template>
    <main>
        <SectionHero :title="'Что нужно знать о налоговом вычете за обучение?'" :descr="'Шаг 2'"
            :img="'img/hero-img-3.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-25">
                    Налоговый вычет на обучение можно получить, если вы:
                </p>
                <TextWithBg :number="1" :text="'Оплатили свою учебу'" :margin="true" />
                <TextWithBg :number="2" class="mb-40"
                    :text="'Оплатили очную учебу брата или сестры (их возраст не должен превышать 24 года)'" />
                <p class="mb-25">
                    Под учебой, за которую можно получить вычет, подразумевается широкий список активностей.
                </p>
                <TextWithBg :number="1" :text="'Обучение в институтах, вузах и профессиональных колледжах'"
                    :margin="true" />
                <TextWithBg :number="2" :text="'Обучение в автошколах, языковых центрах и т.п.'" :margin="true" />
                <TextWithBg class="mb-40" :number="3"
                    :text="'Посещение онлайн-школ и курсов по дополнительному образованию'" />
                <p>
                    Решили подтянуть английский язык, получить водительские права или сменить специальность — всю эту
                    активность государство поощряет и позволяет немного на ней сэкономить.
                </p>
            </div>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true" class="mb-5">
                <p class="lead text-black only-text">
                    Образовательное учреждение может быть как государственным, так и частным, но крайне важно, чтобы у него
                    была лицензия, дающая право оказывать образовательные услуги. Отправлять ее скан в ФНС не надо, но если
                    у учреждения нет лицензии, то и налоговый вычет не предоставят.
                </p>
            </TextSelection>

            <div class="main__wrap">
                <p class="mb-30">
                    Чтобы подать на налоговый вычет за образование, вам потребуются сканы:
                </p>

                <div class="docs-wrap flex mb-80">
                    <BlockDocs :type="'doc'"
                        :text="'Договора между вами и образовательным учреждением на очное обучение (все страницы)'" />
                    <BlockDocs :type="'receipt'" :text="'Документы об оплате — чеки и квитанции'" />
                </div>

                <p class="mb-30">
                    Если вы оплачиваете собственное обучение, его форма значения не играет — она может быть и очной,
                    и заочной. А вот если платите за учебу брата или сестры, форма обучения должна быть только очной.
                    Поэтому для компенсации за их обучение нужен скан:
                </p>

                <div class="docs-wrap flex mb-80">
                    <BlockDocs :type="'birth'" :text="'Скан свидетельства о рождении (вашего и брата/сестры)'" />
                    <BlockDocs :type="'inquiry'"
                        :text="'Справка, подтверждающая очную форму обучения (если это не прописано в договоре с образовательным учреждением)'" />
                </div>

                <p>
                    Максимальная сумма к возврату — все те же 15 600 рублей в год (13% от 120 000 рублей).
                </p>
            </div>
            <TextSelection :title="'Пример'" class="m-0">
                <BaseExample :totalTitle="'Вычет'" :totalNumber="'9 100'" :totalSpending="'70 000 ₽'">
                    <div slot="descr">
                        Допустим, в 2022 году вы потратили 30 000 рублей на обучение вождению и 40 000 — на онлайн-курсы
                        английского языка. Итого суммарный объем ваших трат составил: 30 000 + 40 000 = 70 000 рублей.
                        Соответственно, сумма к возврату: 70 000 &#215; 13% = 9 100 рублей.
                    </div>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'Вождение'" :number="'30 000'" />
                        <BasePriceBlock :title="'Английский'" :number="'40 000'" />
                    </div>

                </BaseExample>
            </TextSelection>
            <div class="main__wrap">
                <p>
                    При этом неиспользованный остаток (в вашем случае 50 000 рублей) на будущий год не переносится и не
                    увеличивает лимит для следующего вычета. Но его можно компенсировать с помощью трат на лечение и фитнес.
                </p>
            </div>

        </SectionMain>
        <div class="nav flex">
            <div class="nav__wrap">
                <BaseCard :link="'stepTwoOne'" :size="'small'" :text="'Вычет за обучение'" :classTitle="'caption'"
                    :img="'img/link-3.png'" :active="true" />
                <BaseCard :link="'stepTwoTwo'" :size="'small'" :text="'Вычет за обучение детей'" :classTitle="'caption'"
                    :img="'img/link-4.png'" />
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
import TextSelection from '@/components/TextSelection';
import TextWithBg from '@/components/TextWithBg';
import BlockDocs from '@/components/BlockDocs';
import BaseCard from '@/components/BaseCard';
import BaseExample from '../components/BaseExample';
import BasePriceBlock from '../components/BasePriceBlock';

export default {
    components: {
        SectionHero,
        SectionMain,
        TextSelection,
        TextWithBg,
        BlockDocs,
        BaseExample,
        BasePriceBlock,
        BaseCard
    }
}
</script>