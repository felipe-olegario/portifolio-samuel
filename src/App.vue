<template>
  <v-app>
    <v-app-bar fixed color="black" dark fade-img-on-scroll>
      <div class="container1">
        <div class="justify-space-between">
          <v-toolbar-title class="font">MY FAMILY</v-toolbar-title>
          <div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="font"
                >
                  MOUNTH
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in mounths" :key="index">
                  <v-list-item-title>{{ item }}º</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <v-carousel height="980" vertical class="mb-5">
        <v-carousel-item
          v-for="(item, i) in imgs.slice(15, 19)"
          :key="i"
          :src="item"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col v-for="n in imgs" :key="n" class="d-flex child-flex" cols="4">
          <v-img :src="n" :lazy-src="n" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-main>

    <v-footer color="black" dark class="mt-5">
      <v-col class="text-center" cols="12 font">
        {{ new Date().getFullYear() }} — <strong>For us</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import AWS from "aws-sdk";

export default {
  name: "App",
  components: {},

  data: () => ({
    imgs: [],
    mounths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  }),
  beforeMount() {
    this.listImages();
  },
  methods: {
    async listImages() {
      try {
        AWS.config.setPromisesDependency();
        AWS.config.update({
          accessKeyId: "AKIAUETKRB4OKX7H2JVQ",
          secretAccessKey: "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",
        });
        const s3 = new AWS.S3({ region: "us-east-1" });

        const data = await s3
          .listObjectsV2({
            Bucket: "fotos-samuel",
          })
          .promise();

        for (let item of data.Contents) {
          const link = await s3.getSignedUrl("getObject", {
            Bucket: "fotos-samuel",
            Key: item.Key,
          });
          this.imgs.push(link);
        }
      } catch (err) {
        console.log("Error", err);
      }
    },
  },
};
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
