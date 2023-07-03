<template>
    <main class="step-4">
        <SectionHero :title="'Документы готовы. Что дальше?'" :descr="'Шаг 3'" :img="'img/hero-img-7.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-25">
                    Итак, вы определились, за какие статьи расходов хотите получить социальный налоговый вычет, и собрали
                    все необходимые документы.
                    <br />
                    <br />
                    Теперь нужно выбрать способ возврата средств. Их всего два и ключевое различие в том, за какой период вы
                    хотите получить вычет:
                </p>
                <TextWithBg :number="1" :text="'Через вашего работодателя (вычет можно получить только за текущий год)'"
                    :margin="true" />
                <TextWithBg :number="2"
                    :text="'Через налоговую инспекцию (можно получить налоговый вычет за три последних года. В 2023 году за период с 2020 по 2022 года)'"
                    class="mb-25" />
                <p class="mb-80">
                    Разберем каждый из них.
                </p>
                <p class="h3 text-headers mb-16">
                    Как сделать Электронную подпись через сайт ФНС
                </p>
                <p class="mb-40">
                    Для начала вам потребуется электронная подпись, вне зависимости от дальнейшего способа получения вычета
                </p>
            </div>
            <BlockScreen :img="'img/screen-1.png'" :imgMobile="'img/screen-1-2.png 768w, img/screen-1.png 1000w'" class="mb-16" />
            <div class="main__wrap">
                <p class="h4 text-black">
                    Шаг 1
                </p>
                <p class="mb-50">
                    Авторизуетесь в личном кабинете налогоплательщика. Это можно сделать тремя способами, но в вашем случае
                    подойдут первые два:
                    <br />
                    <br />
                    1. Напрямую, введя логин (ваш ИНН) и пароль;
                    <br />
                    2. Через сайт Госуслуг;
                    <br />
                    3. С помощью ЭП (но у нас ее пока нет).
                </p>
            </div>
            <BlockScreen :img="'img/screen-2.png'" :imgMobile="'img/screen-2-2.png 768w, img/screen-2.png 1000w'" class="mb-16" />
            <div class="main__wrap">
                <p class="h4 text-black">
                    Шаг 2
                </p>
                <p class="mb-50">
                    В правом верхнем углу страницы наводите курсор на поле с вашими фамилией, именем, отчеством
                    и в выпадающем меню выбираете строку «Настройки профиля»
                </p>
            </div>
            <BlockScreen :img="'img/screen-2.png'" :imgMobile="'img/screen-2-2.png 768w, img/screen-2.png 1000w'" class="mb-16" />
            <div class="main__wrap">
                <p class="h4 text-black">
                    Шаг 3
                </p>
                <p class="mb-50">
                    В вертикальном меню левее основного поля выбираете строку Электронная подпись
                </p>
            </div>
            <BlockScreen :img="'img/screen-2.png'" :imgMobile="'img/screen-2-2.png 768w, img/screen-2.png 1000w'" class="mb-16" />
            <div class="main__wrap">
                <p class="h4 text-black">
                    Шаг 4
                </p>
                <p class="mb-50">
                    Выбираете место хранения вашей подписи. По умолчанию предлагается хранить ее либо на “Вашей рабочей
                    станции”, либо в защищенной системе ФНС России. В первом случае использовать ЭП вы сможете только с того
                    компьютера или ноутбука, в котором вы ее создаете. Во втором — на любом устройстве, с которого
                    авторизуетесь в личном кабинете налогоплательщика.
                    <br />
                    <br />
                    Придумываете пароль и вбиваете его в нижнее поле ввода, после чего отправляете заявку.
                </p>
            </div>
            <BlockScreen :img="'img/screen-2.png'" :imgMobile="'img/screen-2-2.png 768w, img/screen-2.png 1000w'" class="mb-16" />
            <div class="main__wrap">
                <p class="h4 text-black">
                    Шаг 5
                </p>
                <p class="mb-50">
                    Оформление ЭП занимает от получаса до суток. Пока идет процесс ее регистрации, вы будете видеть такое
                    сообщение.
                </p>
            </div>
            <BlockScreen :img="'img/screen-2.png'" :imgMobile="'img/screen-2-2.png 768w, img/screen-2.png 1000w'" class="mb-16" />
            <div class="main__wrap">
                <p class="h4 text-black">
                    Шаг 6
                </p>
                <p class="mb-80">
                    Когда ЭП будет готова, система вам об этом сообщит
                </p>
                <p class="lead">
                    Итак, ЭП у вас готова, теперь можно переходить к заполнению заявки.
                </p>
            </div>
        </SectionMain>

        <div class="nav__wrap">
            <BaseCard :link="'stepFourOne'" :size="'medium'" :text="'Схема получения налогового вычета через работодателя'"
                :classTitle="'h2'" :img="'img/link-8.png'" :step="4" />
            <BaseCard :link="'stepFourTwo'" :size="'medium'"
                :text="'Схема получения налогового вычета через налоговую инспекцию'" :classTitle="'h2'"
                :img="'img/link-9.png'" :step="4" />
        </div>
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import TextWithBg from '@/components/TextWithBg';
import BlockScreen from '@/components/BlockScreen';
import BaseCard from '@/components/BaseCard';

export default {
    components: {
        SectionHero,
        SectionMain,
        TextWithBg,
        BaseCard,
        BlockScreen
    }
}
</script>