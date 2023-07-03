<template>
    <main>
        <SectionHero :title="'Что нужно знать о налоговом вычете за обучение ребенка?'" :descr="'Шаг 2'"
            :img="'img/hero-img-4.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-2-5">
                    Налоговый вычет за обучение детей можно получить, если вы оплатили очную учебу родных или опекаемых
                    детей (их возраст не должен превышать 24 года).
                </p>
                <p class="h3 mb-1-5">
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

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true" class="mb-5">
                <p class="lead text-black only-text">
                    Максимальный размер налогового вычета за обучение одного ребенка составляет 50 000 рублей, от которых вы
                    можете получить к возврату 13%, то есть 6 500 рублей. 
                </p>
            </TextSelection>

            <div class="main__wrap">
                <p class="mt-2">
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
        </SectionMain>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
// import BaseExample from '../components/BaseExample';
// import BasePriceBlock from '../components/BasePriceBlock';
import TextSelection from '@/components/TextSelection';
import TextWithBg from '@/components/TextWithBg';
// import BaseCard from '@/components/BaseCard';


export default {
    components: {
        SectionHero,
        SectionMain,
        // BaseExample,
        // BasePriceBlock,
        TextSelection,
        TextWithBg
        // BaseCard
    }
}
</script>