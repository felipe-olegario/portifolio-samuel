<template>
    <v-app-bar fixed color="black" dark fade-img-on-scroll>
      <div class="container1">
        <div class="justify-space-between">
          <v-toolbar-title class="font">MY FAMILY</v-toolbar-title>
          <div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on" class="font">
                  MOUNTH
                </v-btn>
              </template>
              <v-list>
                <v-list-item link v-for="(item, index) in mounths" :key="index" :to="{path: item.route}">
                  <span>{{item.label}}</span>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </v-app-bar>
</template>
<script>
export default {
    data: () => ({
    imgs: [],
    mounths: [
        {
            label: 1,
            route: '/',
        },
        {
            label: 2,
            route: '/second-mounth',
        },
        // {
        //     label: 3,
        //     route: '/three-mounth',
        // },
        // {
        //     label: 4,
        //     route: '/for-mounth',
        // },
        // {
        //     label: 5,
        //     route: '/five-mounth',
        // },
        // {
        //     label: 6,
        //     route: '/six-mounth',
        // },
        // {
        //     label: 7,
        //     route: '/seven-mounth',
        // },
        // {
        //     label: 8,
        //     route: '/eigth-mounth',
        // },
        // {
        //     label: 9,
        //     route: '/nine-mounth',
        // },

    ],
  }),
  methods: {},
}
</script>
<style scoped>
.container1 {
  width: 100%;
}
.justify-space-between {
  display: flex;
  justify-content: space-between;
}
.font {
  font-family: "Outfit", sans-serif;
  font-weight: bold;
}
</style>