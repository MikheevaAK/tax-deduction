<template>
    <main>
        <SectionHero :title="'Что нужно знать о налоговом вычете за обучение?'" :descr="'Шаг 2'"
            :img="'img/hero-img-3.png'" />

        <SectionMain>
            <div class="main__wrap">
                <p class="mb-1-5">
                    Налоговый вычет на обучение можно получить, если вы:
                </p>
                <TextWithBg :number="1" :text="'Оплатили свою учебу'" :margin="true" />
                <TextWithBg :number="2"
                    :text="'Оплатили очную учебу брата или сестры (их возраст не должен превышать 24 года)'" />
                <p class="mb-2">
                    Под учебой, за которую можно получить вычет, подразумевается широкий список активностей.
                </p>
                <TextWithBg :number="1" :text="'Обучение в институтах, вузах и профессиональных колледжах'"
                    :margin="true" />
                <TextWithBg :number="2" :text="'Обучение в автошколах, языковых центрах и т.п.'" :margin="true" />
                <TextWithBg :number="3" :text="'Посещение онлайн-школ и курсов по дополнительному образованию'" />
                <p class="mt-2">
                    Решили подтянуть английский язык, получить водительские права или сменить специальность — всю эту
                    активность государство поощряет и позволяет немного на ней сэкономить.
                </p>
            </div>

            <TextSelection :img="'img/pointing.png'" :title="'Важно'" :shadow="true" class="mb-7-5">
                <p class="lead text-black only-text">
                    Образовательное учреждение может быть как государственным, так и частным, но крайне важно, чтобы у него
                    была лицензия, дающая право оказывать образовательные услуги. Отправлять ее скан в ФНС не надо, но если
                    у учреждения нет лицензии, то и налоговый вычет не предоставят.
                </p>
            </TextSelection>
        </SectionMain>
    </main>
</template>
 
<script>
import SectionHero from '@/layout/SectionHero';
import SectionMain from '@/layout/SectionMain';
import TextSelection from '@/components/TextSelection';
import TextWithBg from '@/components/TextWithBg';

export default {
    components: {
        SectionHero,
        SectionMain,
        TextSelection,
        TextWithBg
    }
}
</script>