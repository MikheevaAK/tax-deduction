<template>
    <main class="step-4">
        <SectionHero :title="'Схема получения налогового вычета через работодателя'" :descr="'Шаг 4'"
            :img="'img/hero-img-8.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-16">
                    У этого способа есть несколько особенностей:
                </p>
                <TextWithBg :number="1"
                    :text="'Налоговый вычет можно получить только за текущий год. Например, потратили в 2023 году деньги на учебу в автошколе — можете сразу же получить вычет за нее;'"
                    :margin="true" />
                <TextWithBg :number="2"
                    :text="'Налоговый вычет можно получить несколько раз за год. Купили абонемент в бассейн — собрали документы — получили вычет. Полечили зубы у дантиста — снова собрали документы — получили вычет. И так до тех пор, пока не исчерпали лимит в 120 тысяч рублей.'"
                    class="mb-50" />
                <p class="mb-16">
                    Общая схема получения налогового вычета через работодателя
                </p>
                <TextWithBg :number="1"
                    :text="'Собираете документы, необходимые для получения конкретного вычета и делаете их сканы'"
                    :margin="true" />
                <TextWithBg :number="2" :text="'Оформляете электронную подпись на сайте ФНС'" :margin="true" />
                <TextWithBg :number="3"
                    :text="'Оформляете справку на право получения налогового вычета, загружая в личный кабинет налогоплательщика документы из пункта 1'"
                    :margin="true" />
                <TextWithBg :number="4" :text="'Ждете ответ от налоговой (максимум 30 календарных дней)'" :margin="true" />
                <TextWithBg :number="5" :text="'Пишете заявление в бухгалтерию на налоговый вычет'" :margin="true" />
                <TextWithBg :number="6"
                    :text="'Получаете положенные вам деньги на карточку или, скорее всего, работодатель не будет удерживать налог на эту сумму из ближайших зарплат - и вы получите ее как бонус к ближайшей зарплате.'"
                    class="mb-50" />
                <p class="mb-80">
                    Честно говоря, найти раздел в личном кабинете на сайте ФНС, где оформляется нужная вам справка, — та еще
                    задача. Но мы подготовили пошаговую инструкцию, как это сделать.
                </p>
                <p class="h3 text-headers mb-40">
                    Как через сайт ФНС оформить справку на право получения налогового вычета
                </p>
            </div>
                <BlockScreen :img="'img/screen-1.png'" :imgMobile="'img/screen-1-2.png 768w, img/screen-1.png 1000w'" />
            

        </SectionMain>

        <div class="nav__wrap">
            <BaseCard :link="'stepFourOne'" :size="'medium'" :text="'Схема получения налогового вычета через работодателя'"
                :classTitle="'h2'" :img="'img/link-8.png'" :active="true" :step="4" />
            <BaseCard :link="'stepFourTwo'" :size="'medium'"
                :text="'Схема получения налогового вычета через налоговую инспекцию'" :classTitle="'h2'"
                :img="'img/link-9.png'" :step="4" />
        </div>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import BlockScreen from '@/components/BlockScreen';
import TextWithBg from '@/components/TextWithBg';
import BaseCard from '@/components/BaseCard';

export default {
    components: {
        SectionHero,
        SectionMain,
        BlockScreen,
        TextWithBg,
        BaseCard
    }
}
</script>

<style scoped>

</style>