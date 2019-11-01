<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section>
        <AppSectionHeading :heading="heading" />
        <div class="about flex">
          <p>
            This content needs to be provided still Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Possimus quaerat mollitia ducimus,
            molestiae itaque ut et pariatur? Illo exercitationem, magnam
            consectetur deleniti inventore nobis, accusamus repudiandae ullam
            aspernatur aliquid quae iusto dolor velit omnis enim quas, esse nisi
            rerum necessitatibus?
            <br />
            Fugiat ducimus maxime magni corrupti. Fugiat cupiditate libero
            dolores pariatur, possimus quaerat magni explicabo animi ad ut
            eligendi repellendus error, est laudantium velit dignissimos vel
            reprehenderit minima natus amet et, dolorum delectus repudiandae.
            Commodi voluptatibus quasi deserunt quidem, perspiciatis possimus
            voluptatem quisquam quam culpa velit eveniet maiores, sed asperiores
            dignissimos ut, iure veniam consectetur sunt quia quaerat vel
            quibusdam. Vitae sint excepturi distinctio reprehenderit dolorum
            similique, magni dolor nulla qui aliquam officiis ducimus eius
            veniam. Quam rerum nisi facere velit, vitae eum dolorem natus ipsum
            quae, ipsa fuga facilis debitis aliquam sit maiores? Odio inventore,
            nulla dolorum corporis quibusdam rerum ex, exercitationem commodi
            harum corrupti eum sit. Saepe, facilis eos.
          </p>
          <div class="images">
            <div class="img">
              <h4 class="upper center">family portret</h4>
              <img
                src="/img/pumping-systems.jpg"
                alt="Hippo Slurry Pumps designs pumping systems to address customers needs"
                class="framed"
              />
            </div>
            <div class="img">
              <h4 class="upper center">family portret</h4>
              <img
                src="/img/pumping-systems.jpg"
                alt="Hippo Slurry Pumps designs pumping systems to address customers needs"
                class="framed"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <AppSectionHeading :heading="headingHistory" />
      </section>
      <section>
        <AppSectionHeading :heading="headingAwards" />
      </section>
      <section>
        <AppSectionHeading :heading="headingNews" />
      </section>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    AppCallToAction
  },
  data() {
    return {
      tagline: 'WHO WE ARE',
      slogan: 'THE HIPPO STORY, in short',
      heading: 'ABOUT HIPPO SLURRY PUMPS',
      headingHistory: 'THE HIPPO TIME LINE',
      headingAwards: 'Our Awards',
      headingNews: 'The News Room'
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  > * {
    flex: 1;

    &:first-child {
      margin-right: 0.5rem;
    }
  }
}
.about {
  img {
    max-width: 330px;
    display: block;
    margin: {
      right: auto;
      left: auto;
    }
  }
}
</style>
