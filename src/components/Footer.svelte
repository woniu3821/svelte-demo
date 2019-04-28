<script>
  import { onMount, onDestroy } from 'svelte'
  import { navShow } from '../stores.js'
  let timer
  let timer1
  let timer2
  let num_1 = 0
  let num_2 = 0
  let num_3 = 0

  function update(max) {
    num_1++
    let timer = setTimeout(update, (num_1 * 0.1).toFixed(0))
    if (num_1 >= 200) {
      clearTimeout(timer)
    }
  }

  function update1(max) {
    num_2++
    let timer1 = setTimeout(update1, (num_2 * 0.02).toFixed(0))
    if (num_2 >= 500) {
      clearTimeout(timer1)
    }
  }

  function update2(max) {
    num_3++
    let timer2 = setTimeout(update2, (num_3 * 0.4).toFixed(0))
    if (num_3 >= 50) {
      clearTimeout(timer2)
    }
  }

  const doc = document.documentElement
  let first = true

  function handlerScroll() {
    const bodyH = window.innerHeight
    const foot = document.querySelector('.footer').getBoundingClientRect()
    const { top } = foot
    let doctop = doc.scrollTop
    if (doctop > 360) {
      navShow.update(n => true)
    } else {
      navShow.update(n => false)
    }
    if (top < bodyH - 200 && first) {
      update(200)
      update1(500)
      update2(50)
      first = false
    }
  }

  onMount(() => {
    handlerScroll()
  })
</script>

<svelte:window on:scroll="{handlerScroll}" />

<footer>
  <div class="footer wrapper">
    <h3>了解更多 上门交流</h3>
    <div class="number">
      <dl class="num-item">
        <dt><span class="nums">{num_1}</span><span>+</span></dt>
        <dd>客户服务数</dd>
      </dl>
      <dl class="num-item">
        <dt><span class="nums">{num_2}</span><span>+</span></dt>
        <dd>应用接入数</dd>
      </dl>
      <dl class="num-item">
        <dt><span class="nums">{num_3}</span><span>w</span></dt>
        <dd>师生用户数</dd>
      </dl>
    </div>
  </div>
</footer>

<style>
  footer {
    background: #002153;
  }
  .footer {
    height: 591px;
    background: url(assets/img/map.png) no-repeat center;
    overflow: hidden;
  }
  h3 {
    text-align: center;
    margin: 56px 0 60px;
    font-size: 36px;
    font-weight: 400;
    color: #ffffff;
  }
  .number {
    display: flex;
    justify-content: space-between;
  }
  .num-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    width: 200px;
  }
  dt span {
    font-weight: 900;
    font-size: 40px;
  }
  dt .nums {
    font-size: 67px;
  }
  dd {
    margin-top: 10px;
    opacity: 0.6;
    font-size: 18px;
  }
</style>
