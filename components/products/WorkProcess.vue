<template>
  <section>
    <AppSectionHeading :heading="heading" />
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
</template>

<script>
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import AppBoxes from '@/components/AppBoxes.vue'
export default {
  components: {
    AppSectionHeading,
    AppBoxes
  },
  data() {
    return {
      heading: 'OUR PROCESS',
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
  }
}
</script>

<style lang="scss" scoped>
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
</style>
