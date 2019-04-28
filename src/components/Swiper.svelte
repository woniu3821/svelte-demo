<script>
  import Swiper from 'swiper'
  import { onMount } from 'svelte'
  let img_0 = 'assets/img/banner_0.png'
  onMount(() => {
    let mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      paginationClickable: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  })

  let images = [
    {
      src: img_0,
      alt: 'banner_0'
    },
    {
      src: img_0,
      alt: 'banner_0'
    },
    {
      src: img_0,
      alt: 'banner_0'
    }
  ]
</script>

<div class="swiper-container">
  <div class="swiper-wrapper">
    {#each images as img}
    <div class="swiper-slide">
      <img src="{img.src}" alt="{img.alt}" />
    </div>
    {/each}
  </div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
</div>

<style>
  .swiper-container {
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
</style>
