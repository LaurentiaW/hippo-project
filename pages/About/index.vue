<template>
  <div>
    <AppHero :tagline="tagline" :slogan="slogan" />
    <main>
      <section class="profile">
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
      <section class="history">
        <AppSectionHeading :heading="headingHistory" />
        <div class="grid">
          <AppBoxes
            v-for="(box, i) in boxes"
            :id="i"
            :key="i"
            :heading="box.heading"
            :img="box.img"
            :details="box.details"
          />
        </div>
      </section>
      <section class="awards">
        <AppSectionHeading :heading="headingAwards" />
        <div class="flex">
          <div class="img-wrapper">
            <h4 class="upper center">The Hippo Trophy Room</h4>
            <figure class="framed">
              <img
                src="/img/awards/trophy-wall.jpg"
                alt="The Hippo Trophy Room"
              />
            </figure>
          </div>
          <p>
            <nuxt-link to="/about/awards">
              All of our hard work and ideas are not just appreciated by our
              customers and partners but have also been recognised by various
              institutions. Why not <span class="emphasize">visit</span> visit
              our trophy room to see our accomplishments
            </nuxt-link>
          </p>
        </div>
      </section>
      <section class="news">
        <AppSectionHeading :heading="headingNews" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          ratione non animi impedit natus nesciunt architecto ullam delectus
          fugiat. Impedit.
        </p>
        <a
          href="http://www.miningweekly.com/page/press-office-home/company:hazleton-pumps-2017-01-31"
          target="_blank"
          >Visit our parent company, Hazleton Pumps Intl,
          <span class="emphasize">news' room</span> for more updates</a
        >
      </section>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppBoxes from '@/components/AppBoxes.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppSectionHeading,
    AppBoxes,
    AppCallToAction
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Want to know more about Hippo Slurry Pump brand - find more information regarding our profile, history, news and awards'
        }
      ]
    }
  },
  data() {
    return {
      tagline: 'WHO WE ARE',
      slogan: 'THE HIPPO STORY, in short',
      heading: 'ABOUT HIPPO SLURRY PUMPS',
      headingHistory: 'THE HIPPO TIME LINE',
      headingAwards: 'Our Awards',
      headingNews: 'The News Room',
      boxes: [
        {
          img:
            'https://images.pexels.com/photos/716661/pexels-photo-716661.jpeg',
          heading: 'FOUNDED IN',
          details:
            "Using our years of experience in the pumping industry we examine our client's objective to make sure the end result will be successfully achieved"
        },
        {
          img:
            'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg',
          heading: 'SIGNIFICANT EVENTS',
          details:
            'We custom engineer the best solution using our award winning Hippo Slurry Pump Range built to IES standards with the most appropriate materials '
        },
        {
          img:
            'https://images.pexels.com/photos/38600/construction-worker-concrete-hummer-vibrator-38600.jpeg',
          heading: 'AWARD WINNING SOLUTIONS',
          details:
            "After testing and quality assurance has made sure the solution perform as needed we install the solution and monitor with our clients whether the client's initial objective has been met "
        }
      ]
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

.grid {
  display: grid;
  @media (min-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
