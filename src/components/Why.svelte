<script>
  import Swiper from 'swiper'
  import { onMount } from 'svelte'
  let activeR = true
  let imgL = ''
  let imgR = ''

  function turn_img(value = true) {
    activeR = value
    imgR = activeR
      ? 'assets/img/arrow_r_check.png'
      : 'assets/img/arrow_r_dis.png'
    imgL = activeR
      ? 'assets/img/arrow_l_dis.png'
      : 'assets/img/arrow_l_check.png'
  }

  const imglist = [
    {
      src: 'assets/img/why_0.png',
      title: '开放融合',
      intro:
        '平台满足所有主流集成方式，支持多种身份集成、数据集成、应用接入集成、消息集成、任务集成等'
    },
    {
      src: 'assets/img/why_1.png',
      title: '开放融合',
      intro:
        '平台满足所有主流集成方式，支持多种身份集成、数据集成、应用接入集成、消息集成、任务集成等'
    },
    {
      src: 'assets/img/why_2.png',
      title: '开放融合',
      intro:
        '平台满足所有主流集成方式，支持多种身份集成、数据集成、应用接入集成、消息集成、任务集成等'
    },
    {
      src: 'assets/img/why_3.png',
      title: '开放融合',
      intro:
        '平台满足所有主流集成方式，支持多种身份集成、数据集成、应用接入集成、消息集成、任务集成等'
    },
    {
      src: 'assets/img/why_4.png',
      title: '开放融合',
      intro:
        '平台满足所有主流集成方式，支持多种身份集成、数据集成、应用接入集成、消息集成、任务集成等'
    }
  ]

  onMount(() => {
    turn_img()
    let mySwiper = new Swiper('.swiper-container_2', {
      notNextTick: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      speed: 800,
      loop: true,
      slidesPerView: 3,
      // slidesPerGroup: 3,
      spaceBetween: 33,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
      },
      on: {
        slideChange: function() {
          let prev = this.slides[this.activeIndex].childNodes[0]
          let center = this.slides[this.activeIndex + 1].childNodes[0]
          let next = this.slides[this.activeIndex + 2].childNodes[0]

          prev.style.transitionDuration = '0.5s'
          center.style.transitionDuration = '0.5s'
          next.style.transitionDuration = '0.5s'

          prev.style.filter = 'grayscale(100%)'
          next.style.filter = 'grayscale(100%)'

          prev.style.height = '360px'
          next.style.height = '360px'

          prev.style.marginTop = '15px'
          next.style.marginTop = '15px'

          center.style.height = '390px'
          center.style.marginTop = '0'
          center.style.filter = ''
        }
      }
    })
  })
</script>
<div class="feature-content">
  <div class="title">为什么选择我们？</div>
  <div class="intro">优势</div>
  <div class="why">
    <div class="why-content wrapper">
      <div class="swiper-container_2">
        <div class="swiper-wrapper">
          {#each imglist as img}
          <div class="swiper-slide">
            <div class="why-item">
              <img src="{img.src}" alt="{img.title}" />
              <h3>{ img.title }</h3>
              <p>{ img.intro }</p>
            </div>
          </div>
          {/each}
        </div>
      </div>
    </div>
    <div class="button-box">
      <div
        class="button-prev"
        class:active="{activeR===false}"
        on:click="{()=>turn_img(false)}"
      >
        <img src="{imgL}" alt="" />
      </div>
      <div
        class="button-next"
        class:active="{activeR===true}"
        on:click="{()=>turn_img(true)}"
      >
        <img src="{imgR}" alt="" />
      </div>
    </div>
  </div>
</div>
<style>
  /* :global(body) {
    border: 1px solid red;
  } */
  .class_big {
    height: 500px;
  }
  .button-box {
    margin: 15px auto;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-prev,
  .button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 26px;
    border-radius: 14px;
    outline: none;
    cursor: pointer;
    user-select: none;
  }
  .button-box .active {
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  .feature-content {
    height: 778px;
  }
  .why {
    width: 100%;
  }
  .why-content {
    overflow: hidden;
  }
  .why-item {
    background: #ffffff;
    border-radius: 1px;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 390px;
    margin: 10px;
    margin-top: 0;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  }
  .why-item img {
    display: block;
    width: 100%;
    height: 192px;
  }
  .why-item h3 {
    font-weight: 400;
    margin: 20px 0 16px;
    font-size: 18px;
    color: #303133;
  }
  .why-item p {
    font-size: 14px;
    color: #606266;
    line-height: 18px;
    padding: 0 10px;
  }
  .intro {
    text-align: center;
    font-size: 28px;
    color: #0486fe;
    padding-bottom: 30px;
  }
  :global(.title) {
    font-size: 36px;
    color: #303133;
    text-align: center;
    padding: 60px 0 40px;
  }
</style>
