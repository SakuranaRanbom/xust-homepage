
<template>

  <div class="box"
    style="width:; height:100vh; position:relative;    background-image: linear-gradient(1deg, #0e3258, #1c5e80, #258da9, #2cc0d5) ">
    <div style="width:100%;height:30px;"></div>
    <h2
      style="text-align:center   ;color: #fafafa;font-size:2.5vw
letter-spacing: 0;
text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135">
      各种奖项与荣誉</h2>
    <carousel-3d :autoplay="true" :width="cWidth" :height="cHeight" :display="7" controlsVisible :controlsHeight="80" :animationSpeed="1000"
      style="width:98vw; height:25vw;min-height:25vw; position:absolute; top:50%;transform: translateY(-50%);">
      <slide v-for="(slide, i) in slides" :key="i" :index="i" style="min-width:250px;min-height:350px; height:25vw;width:15vw">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex}">
          <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
            style="width:100%;height:100%" :src="slide.src">

        </template>
      </slide>
    </carousel-3d>
  </div>

</template>
 
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
/* eslint-disable */
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      slides: [
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require("../../assets/card.jpg")
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "../../assets/bac.jpg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
      ],

      cWidth:"250",
      cheight:"400"
    }
  },

  created() {
    this.changeWidth();
  },
  mounted() {
    window.onresize = () => {
      this.changeWidth();
    };
  },
  methods: {
    //根据电脑分辨率设置轮播图宽度
    changeWidth() {
      if (
        document.body.clientWidth >= 1700 &&
        document.body.clientWidth < 1920
      ) {
        this.cWidth = 360;
      this.cHeight=500;
      }
      if (
        document.body.clientWidth >= 1500 &&
        document.body.clientWidth < 1700
      ) {
        this.cWidth = 320;
      }
      if (document.body.clientWidth < 1500) {
        this.cWidth = 280;
      }
    },
    imgClick(data, obj) {
      console.log(data, obj)
    }
  },

}
</script>
 
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
