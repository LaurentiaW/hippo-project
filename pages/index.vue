<template>
  <div>
    <AppHero />
    <main>
      <AppFeaturedProducts
        :pump-system="pump_system"
        :pump-range="pump_range"
      />
      <section class="work-process">
        <AppSectionHeading :heading="work_process[0].heading" />
        <div class="grid">
          <AppBoxes
            v-for="(box, i) in work_process[1].boxes"
            :id="i"
            :key="i"
            :heading="box.heading"
            :img="box.img"
            :details="box.details"
          />
        </div>
      </section>
      <Services :services="services" />
      <AppGeo>
        <template v-slot:intro>
          {{ geo.intro }}
        </template>
        <template v-slot:main>
          {{ geo.main }}
        </template>
        <template v-slot:closing>
          {{ geo.closing }}
        </template>
      </AppGeo>
      <AppIndustries :industries="industries" />
      <AppAffiliates :associations="associations" />
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import AppFeaturedProducts from '@/components/products/AppFeaturedProducts.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppBoxes from '@/components/AppBoxes.vue'
import Services from '@/components/products/Services.vue'
import AppGeo from '@/components/AppGeo.vue'
import AppIndustries from '@/components/AppIndustries.vue'
import AppAffiliates from '@/components/AppAffiliates.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    AppHero,
    AppFeaturedProducts,
    AppSectionHeading,
    AppBoxes,
    Services,
    AppGeo,
    AppIndustries,
    AppAffiliates,
    AppCallToAction
  },
  head() {
    return {
      title: 'Hippo Home'
    }
  },
  data() {
    return {
      work_process: [
        { heading: 'OUR PROCESS' },
        {
          boxes: [
            {
              heading: 'DEFINE THE PROBLEM',
              details:
                "Using our years of experience in the pumping industry we examine our client's objective to make sure the end result will be successfully achieved",
              img:
                'https://images.pexels.com/photos/716661/pexels-photo-716661.jpeg'
            },
            {
              heading: 'DESIGN AND DEVELOP SOLUTION',
              details:
                'We custom engineer the best solution using our award winning Hippo Slurry Pump Range built to IES standards with the most appropriate materials ',
              img:
                'https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg'
            },
            {
              heading: 'IMPLEMENT & FOLLOW UP',
              details:
                "After testing and quality assurance has made sure the solution perform as needed we install the solution and monitor with our clients whether the client's initial objective has been met",
              img:
                'https://images.pexels.com/photos/38600/construction-worker-concrete-hummer-vibrator-38600.jpeg'
            }
          ]
        }
      ],
      services:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores recusandae animi quos quidem fugiat sunt repudiandae ducimus, quas ipsam illum assumenda voluptatum asperiores rerum aliquid omnis similique repellendus excepturi impedit corrupti deleniti unde reprehenderit laborum. Adipisci assumenda rem veniam maiores provident repellendus quia laboriosam quidem asperiores eveniet vero magni soluta, eos totam non earum? Natus quae vel provident necessitatibus, accusamus cumque, facere minima sint pariatur saepe nemo quod mollitia odio numquam, praesentium temporibus totam voluptatum ad tempora dolorum eum eaque possimus! Maiores, voluptatem. Velit, cum sint aspernatur asperiores animi iste placeat nemo sit deleniti illo quidem ratione similique expedita unde eos ullam voluptate fuga consectetur eum excepturi cumque facere quis corporis ad. Quos, nemo fuga debitis eum culpa totam numquam ex quas vel sapiente reiciendis tenetur rerum dolorum sequi hic quidem possimus qui, commodi facere. Nulla aut, quia debitis nesciunt mollitia, perferendis velit, voluptatem ut minus assumenda similique quam itaque!',
      industries: [
        {
          title: 'Mining',
          text:
            'All sectors of Mining & Mineral extraction: Coal, Platinum, Gold, Iron Ore & Diamonds',
          id: 'mining',
          img: '/svg/industries/mining.svg'
        },
        {
          title: 'Chemical & Processing',
          text:
            'Including Oil Sands, Britton Tar, Petrochemical, fertilizer and explosive industries',
          id: 'liquid',
          img: '/svg/industries/chemical-processing.svg'
        },
        {
          title: 'Power Generation, Municipal Services and Waste Management',
          text: 'Ash, water treatment and waste disposal',
          id: 'power',
          img: '/svg/industries/powergeneration.svg'
        },
        {
          title: 'Sand, Grave, Ceramic & General Constructions',
          text: 'High concentration of abrasive solids',
          id: 'quarry',
          img: '/svg/industries/sand.svg'
        },
        {
          title: 'Foundries & Steel Production',
          text: 'Cooling, water returns & concentrated abrasive solids',
          id: 'industrial',
          img: '/svg/industries/foundries.svg'
        },
        {
          title: 'Nuclear',
          text: 'Specifically designed for high temperatures and contamination',
          id: 'nuclear',
          img: '/svg/industries/nuclear.svg'
        }
      ],
      pump_range: {
        title: 'Pump Range',
        img: '/img/pump-range.jpg',
        img_text: 'The Hippo Slurry Pump Range'
      },
      pump_system: {
        title: 'Pump System',
        img: '/img/pumping-systems.jpg',
        img_text:
          'Hippo Slurry Pumps designs pumping systems to address customers needs'
      },
      geo: {
        intro: 'intro text',
        main: 'main body',
        closing: 'closing text'
      },
      associations: [
        {
          logo: '/logos/saceec.png',
          title: 'South Africa Capital Equipment Export Council',
          url: 'https://www.saceec.com/'
        },
        {
          logo: '/logos/safa.jpg',
          title: 'South Africa Flameproof Associations',
          url: 'http://www.saflameproof.org.za/'
        },
        {
          logo: '/logos/sassda.png',
          title: 'South Africa Stainless Steel Development Association',
          url: 'https://sassda.co.za/'
        },
        {
          logo: '/logos/saif.png',
          title: 'South African Institute of Foundrymen',
          url: 'http://www.foundries.org.za/'
        },
        {
          logo: '/logos/SAPSDA.bmp',
          title: 'South Africa Pump Systems Development Association',
          url: 'https://www.sapsda.co.za/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.work-process {
  .grid {
    display: grid;
    @media (min-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }
  }

  h4 {
    padding: 0.25rem 0.75rem;
    background-color: var(--grey);
    color: var(--white);
    opacity: 0.84;
  }

  p {
    padding: 0 0.75rem 0.25rem 0.75rem;
    color: var(--white);
  }

  .bg-img {
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 1rem;
  }
}
</style>
