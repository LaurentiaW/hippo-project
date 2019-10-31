<template>
  <div>
    <div class="container">
      <Tagline :tagline="tagline" />
      <Slogan :slogan="slogan" />
    </div>
    <main>
      <section>
        <AppSectionHeading>
          <template v-slot:section-heading>
            Pumping
          </template>
          <template v-slot:sec-head-pt>
            Systems
          </template>
        </AppSectionHeading>
        <div class="grid">
          <ProductPreview
            v-for="(pump, i) in pumpSystems"
            :key="i"
            :pump="pump"
          />
        </div>
      </section>
    </main>
    <AppCallToAction />
  </div>
</template>

<script>
import Tagline from '@/components/AppHero/Tagline.vue'
import Slogan from '@/components/AppHero/Slogan.vue'
import AppSectionHeading from '@/components/AppSectionHeading.vue'
import ProductPreview from '@/components/products/ProductPreview.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'

export default {
  components: {
    Tagline,
    Slogan,
    AppSectionHeading,
    ProductPreview,
    AppCallToAction
  },
  data() {
    return {
      tagline: 'SLURRY PUMPING SYSTEMS',
      slogan: 'INNOVATIVE ENGINEERING SOLUTIONS',
      pumpSystems: [
        {
          title: 'High Head Series Submersible Pumping System',
          objective:
            'To pump liquid containing solids at a high head using several submersible pumps in series',
          summary: 'Mine dewatering, in particular shaft bottom dewatering',
          duty:
            'Maximum head and volume is determined by the access area available to lower the submersible pump down to shaft bottom. Standard volumes up to 200l/s with the stage head(HS) of 200m can be achieved',
          components:
            'id: 1, item: Hippo Submersible Slurry Pumps - as many as required to achieve the volumes required,\nid: 2, item: Interstage Inlet can be provided between stages to accommodate the pumping of liquid at any level provided that non-return valves ()are installed   ',
          options: '',
          'pump-data': '',
          'control-panel': '',
          Limitations:
            'The weight - determined by the capacity of lifting equipment\nThe area available to lower the pumps\nTotal power available\t  '
        },
        {
          title: 'Flameproof Submersible Slurry Pump System',
          objective:
            'Overcoming the transport obstacles of pumping liquids out of confined underground flameproof areas',
          summary:
            'The Hippo Flameproof system consists of a robust heavy-duty submersible pump, protected with flameproof switchgear and mounted on either a rugged skid or a trolley.  Making it mobile and easily transportable to where it is required to quickly and efficiently remove excess liquids containing solids in underground mining areas ',
          duty: '',
          components:
            '{id:1, item: Hippo Flameproof Submersible Slurry Pump, description: The pump has the capability to run dry indefinitely and the pump doesn\'t rely on the liquid being pumped as a coolant and manufactured to IEC 60097/1:2005 specification from materials that are capable of operating in acidic conditions}, {id: 2, item: Suitable transport device, description: For easy transport to where the Hippo Flameproof Submersible Slurry Pump System is required it is conveniently mounted on either \n["In most cases, a tractor/crane is available to move the pumps around in the haulage and the tractor/crane is used to move the Hippo Flameproof Submersible Slurry Pump System mounted on a skid to the flooded area", "When the flooded area is too small for the tractor/crane to enter the Hippo Flameproof Submersible Slurry Pump System mounted on a trolley can be moved by hand to where it is required"]},{id:3, item: Flameproof Electrical Switchgear and Control Panel, description: Another feature of the Hippo Flameproof Submersible Slurry Pump System is the switchgear that has been developed to protect the electrical winding from burning out should a mechanical problem occur}\n',
          options:
            'Flameproof Trolley Pump System, Flameproof Skid Pump System',
          'pump-data': '',
          'control-panel':
            '{title: "Motor Protection Relay", description: "Electronic motor protection relay includes thermal overload, earth insulation, earth leakage and short-circuit protection, frequency and power factor measurement" }, {title: "Pump Over Temperature Relay", description: "Thermistor fitted to the electric motor winding measures the temperature if the motor winding"}, {title: "Bearing Over Temperature Relay ", description: "PT100 temperature sensor fitted in proximity to the angular contact bearings "}, {title: "Seal Fault Relays",  description: "Two relays, installed in the motor chamber and the lower mechanical seal chamber monitor the conductivity of the oil"}, {title: "Shaft Vibration Sensor Relay", description: "Fit to the submersible pump shaft in the lower seal chamber" }, {title: "Motor Enclosure Vacuum Sensor Relay", description: "Installed in the electric motor winding enclosure"}',
          Limitations: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
