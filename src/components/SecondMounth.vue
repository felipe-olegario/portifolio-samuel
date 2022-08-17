<template>
  <v-app>
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
  name: "FirstMounth",
  components: {},

  data: () => ({
    imgs: [],
  }),
  created() {
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
            Bucket: "fotos-samuel-2",
          })
          .promise();
        console.log(data);

        for (let item of data.Contents) {
          const link = `https://d2oims0q5vyd54.cloudfront.net/${item.Key}`;
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
