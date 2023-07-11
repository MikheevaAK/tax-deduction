<template>
    <main>
        <SectionHero :title="'Что нужно знать о налоговом вычете за лечение?'" :descr="'Шаг 2'"
            :img="'img/hero-img-5.png'" />
        <SectionMain>
            <div class="main__wrap">
                <p class="mb-25">
                    Вычет за лечение — это возможность вернуть часть уплаченного НДФЛ, если вы:
                </p>
                <TextWithBg :number="1" :text="'Оплачивали медицинские услуги'" :margin="true" />
                <TextWithBg :number="2" :text="'Покупали лекарства'" :margin="true" />
                <TextWithBg :number="3" :tooltip="true" class="mb-40">
                    Покупали добровольную медицинскую&nbsp;
                    <BaseTooltip :word="'страховку'" :border="true">
                        <p>
                            Полис ДМС должны купить именно вы, а не ваш работодатель. Если вы оплатили половину, то такой
                            вариант не подойдет
                        </p>
                    </BaseTooltip>
                </TextWithBg>

                <p class="mb-25">
                    Под медицинскими услугами понимается фактически весь спектр взаимоотношений «врач — пациент». Посетили
                    терапевта, стоматолога или невролога? Сдали анализы или прошли томографию? Все эти (и многие другие)
                    расходы
                    дают вам право на получение налогового вычета.
                    <br />
                    <br />
                    Налоговый вычет можно получить, если вы оплатили лечение:
                </p>
                <TextWithBg :number="1" :text="'Собственное'" :margin="true" />
                <TextWithBg :number="2" :text="'Супруга или супруги'" :margin="true" />
                <TextWithBg :number="3"
                    :text="'Детей до 18 лет, в том числе приемных (если дети — студенты-очники, то до 24 лет)'"
                    :margin="true" />
                <TextWithBg :number="4" :text="'Родителей'" class="mb-40" />
                <p class="mb-50">
                    А вот получить налоговый вычет за оплаченное лечение брата/сестры, тестя/тещи или свекра/свекрови
                    не удастся. В зависимости от вида лечения, требуется разный список документов.
                </p>
            </div>

            <div class="kit-docs flex mb-80">
                <div class="kit-docs__item flex">
                    <p class="h4 mb-20">
                        Чтобы подать на налоговый вычет за медицинские услуги
                    </p>
                    <BlockDocs :type="'inquiry'" class=" width-max"
                        :text="'Справки об оплате медицинских услуг — ее можно получить сразу после приема у врача. При оформлении вам нужно будет назвать свой ИНН.'" />
                </div>
                <div class="kit-docs__item flex">
                    <p class="h4 mb-20">Для получения справки за предыдущие приемы, возьмите с собой</p>
                    <div class="docs-wrap flex mb-80">
                        <BlockDocs :type="'passport'" :text="'Паспорт'" />
                        <BlockDocs :type="'doc'"
                            :text="'Договор между вами и клиникой (если потеряли свой, то копия хранится в бухгалтерии клиники)'" />
                        <BlockDocs :type="'receipt'" :tooltip="true" class=" width-max">
                            <BaseTooltip :word="'Документы об оплате —'">
                                <p>
                                    Если документы для подтверждения оплаты не сохранились — можно обратиться в банк и
                                    запросить электронные копии
                                </p>
                            </BaseTooltip>
                            &nbsp;чеки и квитанции
                        </BlockDocs>
                    </div>
                </div>
            </div>

            <div class="kit-docs-second flex mb-80">
                <div class="kit-docs-second__item">
                    <p class="h4 mb-20">
                        Чтобы получить вычет за покупку лекарств
                    </p>
                    <div class="docs-wrap flex">
                        <BlockDocs :type="'recipe'"
                            :text="'Рецептурный бланк, оформленный врачом, или лист назначения, заверенный подписью доктора'" />
                        <BlockDocs :type="'receipt'" :text="'Документы об оплате — чеки и квитанции'" />
                    </div>
                </div>
                <div class="kit-docs-second__item">
                    <p class="h4 mb-20">
                        Чтобы получить вычет за страховые взносы по договору ДМС
                    </p>
                    <div class="docs-wrap flex">
                        <BlockDocs :type="'doc-dms'"
                            :text="'Договор ДМС (все страницы) или страхового медицинского полиса добровольного страхования'" />
                        <BlockDocs :type="'receipt'" :text="'Документы об оплате — чеки и квитанции'" />
                    </div>
                </div>
            </div>

            <div class="kit-docs-third flex mb-80">
                <div class="kit-docs-third__item">
                    <p class="h4 mb-20">
                        Если вы получаете налоговый вычет за лечение членов вашей семьи или покупку для них лекарств
                    </p>
                    <div class="docs-wrap flex">
                        <BlockDocs :type="'marriage'" class="width-max"
                            :text="'Подтверждающие родство, опеку, попечительство, заключение брака (например, свидетельство о рождении или свидетельство о браке).'" />
                    </div>
                </div>
                <div class="kit-docs-third__item">
                    <p class="h4 mb-20">
                        Если вы оплачиваете лечение детей от 18 до 24 лет
                    </p>
                    <div class="docs-wrap flex">
                        <BlockDocs :type="'inquiry'" :text="'Справку из вуза об обучении по очной форме.'" />
                    </div>
                </div>
            </div>

            <div class="main__wrap">
                <p>
                    Максимальный размер налогового вычета за лечение — все те же 15 600 рублей в год (13% от 120 000
                    рублей).
                </p>
            </div>

            <TextSelection :title="'Пример'" class="m-0">
                <BaseExample :totalTitle="'Вычет'" :totalNumber="'8 450'" :totalSpending="'65 000 ₽'">
                    <div slot="descr">
                        Допустим, в 2022 году вы потратили 25 000 рублей на ДМС и 40 000 рублей на лечение зубов. Итого
                        суммарный объем ваших трат: 25 000 + 40 000 = 65 000 рублей. Соответственно, сумма к возврату
                        составит: 65 000 &#215; 13 % = 8 450 рублей.
                    </div>
                    <div slot="price-block" class="price-block">
                        <BasePriceBlock :title="'ДМС'" :number="'25 000'" />
                        <BasePriceBlock :title="'Зубы'" :number="'40 000'" />
                    </div>

                </BaseExample>
            </TextSelection>

            <div class="main__wrap">
                <p>
                    При этом неиспользованный остаток (в нашем случае 55 000 рублей) на будущий год не переносится
                    и не увеличивает лимит для следующего вычета. Но его можно израсходовать, получив вычет за обучение
                    и фитнес.
                </p>
            </div>
            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true">
                <p class="lead text-black only-text">
                    Есть еще вычет по расходам на дорогостоящее лечение. Оно не просто не имеет ограничений по сумме, но и
                    не складывается с другими социальными налоговыми вычетами.
                </p>
            </TextSelection>
            <div class="main__wrap">
                <p>
                    Потратили на такое лечение 200 тысяч рублей — вернутся 13% — 26 тысяч. Потратили 1 миллион рублей —
                    можете рассчитывать на возврат 130 тысяч рублей.
                    <br />
                    <br />
                    Правда, сумма вычета не может превышать ваш годовой доход, облагаемый НДФЛ. То есть для получения 130
                    тысяч рублей, ваша официальная зарплата за год не должна быть меньше 1 млн рублей.
                    <br />
                    <br />
                    Перечень дорогостоящих медицинских услуг определяет постановление правительства. Вы же можете узнать,
                    считается ли ваше лечение таковым, и справки об оплате услуг — на выданном в клинике документе будет
                    проставлен код 2.
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
                    :img="'img/link-5.png'" :active="true" />
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
import BaseExample from '@/components/BaseExample';
import BasePriceBlock from '@/components/BasePriceBlock';
import TextSelection from '@/components/TextSelection';
import TextWithBg from '@/components/TextWithBg';
import BaseCard from '@/components/BaseCard';
import BlockDocs from '@/components/BlockDocs';
import BaseTooltip from '@/components/BaseTooltip';


export default {
    components: {
        SectionHero,
        SectionMain,
        BaseExample,
        BasePriceBlock,
        TextSelection,
        BaseCard,
        TextWithBg,
        BlockDocs,
        BaseTooltip
    }
}
</script>

<style scoped>
.kit-docs {
    gap: 5.3vw;
}

.kit-docs .kit-docs__item:first-child {
    width: 25.7vw;
    flex-shrink: 0;
}

.kit-docs__item {
    flex-direction: column;
    gap: 0.69vw;
}

.kit-docs-second {
    gap: 4.79vw;
}

.kit-docs-third {
    gap: 6.8vw;
}

.kit-docs-third .kit-docs-third__item {
    max-width: 27.08vw;
    width: 100%;
}

.kit-docs-third .kit-docs-third__item:first-child {
    max-width: 24vw;
}

@media (max-width: 768px) {
    .kit-docs {
        gap: 9.33vw;
        margin-left: 4.27vw;
        margin-right: 4.27vw;
        flex-direction: column;
    }

    .kit-docs-second,
    .kit-docs-third {
        margin-left: 4.27vw;
        margin-right: 4.27vw;
        flex-wrap: wrap;
    }

    .kit-docs .docs-wrap {
        flex-wrap: wrap;
    }

    .kit-docs .doc__wrap {
        width: 47%;
    }

    .kit-docs .kit-docs__item:first-child {
        width: 100%;
    }

    .kit-docs-third .kit-docs-third__item,
    .kit-docs-third .kit-docs-third__item:first-child  {
        max-width: unset;
    }
}
</style>