<template>
  <div id="swiper-bar">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div id="indicator" v-if="showIndication && slideCount>1">
      <div
        class="indicator-item"
        v-for="(item,index) in slideCount"
        :key="index"
        :class="{active: index == currentIndex - 1}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //是否显示标记栏
    showIndication: {
      type: Boolean,
      default: true,
    },
    //控制移动弹回的比例
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    //轮播时间间隔
    intervalTime: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      slideCount: 0, //定义导航的个数
      sliderWidth: 0, //slider的宽度
      currentIndex: 1, //当前的index
      playTimer: null, //定时器参数
      scrolling: false, // 是否正在滚动
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 500);
  },
  methods: {
    handleDom() {
      this.sliderEl = document.querySelector(".swiper");
      this.sliderEls = this.sliderEl.querySelectorAll(".swiper-item");
      //获取slide的数量
      this.slideCount = this.sliderEls.length;
      //在前后添加slide
      if (this.slideCount > 1) {
        let firstSlider = this.sliderEls[0].cloneNode(true);
        let lastSlider = this.sliderEls[this.slideCount - 1].cloneNode(true);
        this.sliderEl.insertBefore(lastSlider, this.sliderEls[0]);
        this.sliderEl.appendChild(firstSlider);
        this.sliderWidth = this.sliderEls[0].offsetWidth;
        //设置显示未克隆的第一张
        this.setTransform(-this.currentIndex * this.sliderWidth);
      }
    },

    //开启定时器
    startTimer() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        this.scrollContent();
      }, this.intervalTime);
    },
    //关闭定时器
    stopTimer() {
      clearInterval(this.playTimer);
    },

    //滚动到正确位置
    scrollContent() {
      this.scrolling = true; // 正在滚动
      window.setTimeout(() => {
          // 1.校验正确的位置
          this.sliderEl.style.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.sliderWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.this.sliderWidth);
          }

          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex-1);
        }, 30)
      this.sliderEl.style.transition = "0.3s all";
      this.setTransform(-this.currentIndex * this.sliderWidth);
      this.scrolling = false; //滚动完成
    },
    //移动到某位置
    setTransform(moveDistance) {
      this.sliderEl.style.transform = `translateX(${moveDistance}px)`;
    },

    touchStart(e) {
      //正在滚动时，不能拖动
      if (this.scrolling) return;
      // 停止定时器
      this.stopTimer();
      //记录初始位置
      this.stateX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.moveX = e.touches[0].pageX;
      this.distance = this.moveX - this.stateX;
      let moveDistance = -this.currentIndex * this.sliderWidth + this.distance;
      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.moveRatio * this.sliderWidth
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.moveRatio * this.sliderWidth
      ) {
        this.currentIndex++;
      }

      //滚动位置
      console.log(-this.currentIndex * this.sliderWidth);
      this.scrollContent(-this.currentIndex * this.sliderWidth);
      //开启自动轮播
      this.startTimer();
    },
  },
};
</script>

<style scoped>
#swiper-bar {
  position: relative;
  width: 100vw;
  overflow: hidden;
}
.swiper {
  display: flex;
  width: 600%;
}
#indicator {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 15px;
  height: 10px;
  width: 100%;
}
.indicator-item {
  float: left;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 10px;
  border-radius: 8px;
}
.active {
  background: rgba(233, 34, 34, 0.5);
}
</style>