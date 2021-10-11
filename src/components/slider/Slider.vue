<template>
  <div class="slider">
    <div class="slider_wrap">
      <div
        ref="slide-item"
        :class="['slider_item', 'slider-item', `slider-item-${el}`]"
        v-for="el in slideCount"
        :key="el"
      >
        <div class="slider-item_bg-circle slider-item_bg-circle-1">
          <div class="slider-item_top-text">Lorem ipsum dolor sit amet</div>
        </div>

        <img class="slider-item_bg-star" src="./img/star.png" alt="star" />

        <div class="slider-item_bg-wrap">
          <div class="slider-item_bg-circle slider-item_bg-circle-2"></div>
          <div class="slider-item_bg-circle slider-item_bg-circle-empty"></div>
          <div class="slider-item_bg-circle slider-item_bg-circle-dog"></div>
        </div>

        <div class="slider-item_main-text">
          <h1><b>lorem ipsum</b><br />
            <span class="space-1">Lorem ipsum dolor —</span> <br />
            <span class="space-2">Lorem <br /></span>
            <span class="space-3">ipsum !</span>
          </h1>
        </div>

        <div class="slider-item_bottom-text">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit
        </div>

        <button class="slider-item_next item-next" @click="changeSlide">
          <img class="item-next_arrow" src="./img/arrow.png" alt="arrow" />
        </button>

        <div class="slider-item_counter">
          {{ activeSlide }}/{{ slideCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      activeSlide: 1,
      slideCount: 3,
    };
  },
  methods: {
    changeSlide() {
      this.activeSlide++;
      if(this.activeSlide > this.slideCount){
        this.activeSlide = 1;
      }

      this.$refs["slide-item"].forEach((el, i) => {
        let numberOfItem = +el.classList[2].slice(-1);
        numberOfItem--;
        let newClassForSlide;

        numberOfItem <= 0
          ? (newClassForSlide =  el.classList[2].substring(0, el.classList[2].length - 1) + 3)
          : (newClassForSlide =  el.classList[2].substring(0, el.classList[2].length - 1) + numberOfItem);

        el.classList.remove(el.classList[2]);
        el.classList.add(newClassForSlide);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@keyframes rolling {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes slide {
  0%{
    left: 0%;
    z-index: 4;
  }
  80%{
    left: -100%;   
    z-index: 4; 
  } 
  81%{
     z-index: 1; 
  }
  100%{
    left: 0%;   
    z-index: 1;
  }
}

.slider {
  min-height: 708px;
  &_wrap {
    max-width: 637px;
    margin: 0 auto;
  }
  &-item {
    width: -webkit-fill-available;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0px 85px 85px 0px;
    min-height: 708px;
    box-sizing: border-box;
    padding: 113px 0 0 152px;  
    &:nth-of-type(1) {
      background: #027d84;
    }
    &:nth-of-type(2) {
      background: #4a989a;
    }
    &:nth-of-type(3) {
      background: #afb3b4;
      .slider-item_bg-circle-1,
      .slider-item_bg-circle-2{
        background: #4a989a;
      }
    }

    &-1 {
      margin-right: 80px;
      z-index: 3;
    }
    &-2 {
      margin-right: 37px;
      z-index: 2;
    }
    &-3 {
      z-index: 1;
      transition: margin-right 0.1s 1s ;
      margin-right: 0;    
      animation: 1s linear 0s forwards alternate slide;
      
    }

    &_bg {
      &-wrap {
        position: absolute;
        width: 38.5%;
        padding-bottom: 39%;
        left: 51%;
        bottom: 10%;
      }
      &-star {
        position: absolute;
        left: 0%;
        top: 50%;
        display: block;
        width: 11.5%;
        height: auto;
      }
      &-circle {
        position: absolute;
        width: 32.6%;
        padding-bottom: 17%;
        background: #afb3b4;
        border-radius: 50%;

        &-1 {
          left: 6%;
          bottom: 90%;
          width: 458px;
          height: 240px;
          padding-bottom: 0;
          transform: rotate(13.28deg);
        }
        &-2 {
          bottom: 13%;
          left: 14%;
          width: 86.6%;
          padding-bottom: 46%;
          transform: rotate(-15.23deg);
        }
        &-dog {
          bottom: 12%;
          left: -7.5%;
          width: 89%;
          padding-bottom: 46%;
          transform: rotate(-41.23deg);
          overflow: hidden;
          &:before {
            position: absolute;
            left: 6%;
            top: -27%;
            width: 88%;
            height: 152%;
            content: "";
            display: block;
            background-image: url("./img/dog.jpg");
            background-size: cover;
            transform: rotate(41.23deg);
          }
        }
        &-empty {
          bottom: 43%;
          left: 18%;
          width: 89%;
          padding-bottom: 45.5%;
          background: transparent;
          border: 2px solid #ffffff;
          box-sizing: border-box;
          transform: rotate(-140.36deg);
        }
      }
    }

    &_top-text {
      position: absolute;
      left: 124px;
      top: 184px;
      width: max-content;
      transform: rotate(-13.28deg);
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &_main-text {
      h1{
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 4.17vw;
        line-height: 117%;
        text-transform: uppercase;
        color: #ffffff;
        .space {
          &-1 {
            padding-left: 3.5%;
          }
          &-2 {
            padding-left: 24%;
          }
          &-3 {
            padding-left: 11.6%;
          }
        }
        }
    }

    &_bottom-text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 150%;
      text-transform: uppercase;
      color: #ffffff;
      padding-left: 23.5%;
      padding-top: 3.8%;
    }

    .item-next {
      position: absolute;
      top: 50%;
      right: 5.5%;
      transform: translateY(-50%);
      display: block;
      width: 120px;
      height: 120px;
      background: transparent;
      border: none;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-image: url("./img/text.png");
        background-size: cover;
        animation: 6s linear 0s normal none infinite running rolling;
      }
    }

    &_counter {
      position: absolute;
      left: 17.5%;
      bottom: 8%;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 109px;
      height: 55px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 64px;
      color: #ffffff;
      border-radius: 50%;
      border: 2px solid #ffffff;
    }
  }
}
</style>
