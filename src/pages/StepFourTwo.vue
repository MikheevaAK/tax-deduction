<template>
    <main>
        <SectionHero :title="'Схема получения налогового вычета через налоговую инспекцию'" :descr="'Шаг 4'"
            :img="'img/hero-img-9.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-20">
                    У этого способа есть свои особенности:
                </p>
                <TextWithBg :number="1"
                    :text="'Налоговый вычет можно получить только за предыдущие годы. Например, в 2023 году вы можете получить налоговые вычеты за три последних года: 2022, 2021 и 2020.'"
                    :margin="true" />
                <TextWithBg :number="2"
                    :text="'Декларации на налоговый вычет нужно оформлять за каждый год отдельно. Получаете вычеты за 2020-2022 годы — трижды проходите одну и ту же процедуру (за каждый год отдельно).'" :margin="true" class="mb-20" />
                <p class="mb-20">
                    Общая схема получения налогового вычета через налоговую инспекцию
                </p>
                <TextWithBg :number="1" :text="'Собираете документы, необходимые для получения конкретного вычета и делаете их сканы'"
                    :margin="true" />
                <TextWithBg :number="2" :text="'Оформляете электронную подпись на сайте ФНС'" :margin="true" />
                <TextWithBg :number="3" :text="'Подаете налоговую декларацию (3-НДФЛ) через сайт ФНС и загружаете документы, подтверждающие расходы'" :margin="true" />
                <TextWithBg :number="4" :text="'Через три месяца (а может быть и раньше) получаете деньги на карточку'" class="mb-80"/>
                <p class="h3 text-headers">
                    Как через сайт ФНС оформить справку на право получения налогового вычета
                </p>
            </div>
        </SectionMain>

        <div class="nav__wrap">
            <BaseCard :link="'stepFourOne'" :size="'medium'" :text="'Схема получения налогового вычета через работодателя'"
                :classTitle="'h2'" :img="'img/link-8.png'" :step="4" />
            <BaseCard :link="'stepFourTwo'" :size="'medium'"
                :text="'Схема получения налогового вычета через налоговую инспекцию'" :classTitle="'h2'"
                :img="'img/link-9.png'" :active="true" :step="4" />
        </div>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import TextWithBg from '@/components/TextWithBg';
import BaseCard from '@/components/BaseCard';

export default {
    components: {
        SectionHero,
        SectionMain,
        TextWithBg,
        BaseCard
    }
}
</script>