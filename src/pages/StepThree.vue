<template>
    <main>
        <SectionHero :title="'Документы готовы. Что дальше?'" :descr="'Шаг 3'"
            :img="'img/hero-img-7.png'" />
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