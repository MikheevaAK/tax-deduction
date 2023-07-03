<template>
    <main>
        <SectionHero :title="'Схема получения налогового вычета через работодателя'" :descr="'Шаг 4'"
            :img="'img/hero-img-8.png'" />
    </main>
</template>

<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
// import TextSelection from '@/components/TextSelection';
// import TextWithBg from '@/components/TextWithBg';

export default {
    components: {
        SectionHero,
        SectionMain,
        // TextSelection,
        // TextWithBg
    }
}
</script>