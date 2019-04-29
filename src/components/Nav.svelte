<script>
  import { navShow } from '../stores.js'

  const nav_list = [
    {
      text: '首页',
      select: false,
      tag: 'home'
    },
    {
      text: '开放能力',
      select: false,
      tag: 'open'
    },
    {
      text: '服务客户及最新案例',
      select: false,
      tag: 'case'
    },
    {
      text: '重大事件',
      select: false,
      tag: 'news'
    },
    {
      text: '关于我们',
      select: false,
      tag: 'about'
    }
  ]

  let current = 'home'
</script>
<nav>
  <div class="nav-wrapper" class:active="{$navShow===true}">
    <div class="nav-log">
      <img src="assets/img/logo.png" alt="金智教育" />
      <h2>开放平台</h2>
    </div>
    <div class="nav-menu">
      {#each nav_list as item}
      <div
        class="menu-item cursor"
        class:active="{current === item.tag}"
        on:click="{()=>{current=item.tag}}"
      >
        <span>{item.text}</span>
      </div>
      {/each}
      <div class="nav-login cursor">
        <div class="login-btn">登录</div>
      </div>
    </div>
  </div>
</nav>
<style>
  .nav-wrapper {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 199;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    height: 60px;
    box-sizing: border-box;
    color: #fff;
  }
  .nav-wrapper.active {
    background: #fff;
    color: #666;
    box-shadow: 0 1px 3px #ccc;
  }
  .nav-log {
    display: flex;
    align-items: center;
  }
  .nav-log h2 {
    font-size: 18px;
    font-weight: 400;
    margin-left: 6px;
  }
  .nav-menu {
    display: flex;
    align-items: center;
  }
  .nav-login {
    margin-left: 30px;
  }
  .login-btn {
    width: 62px;
    height: 22px;
    background: #0486fe;
    border-radius: 11px;
    font-size: 14px;
    color: #ffffff;
    line-height: 22px;
    text-align: center;
  }
  .menu-item {
    margin: 0 7px;
    padding: 7px;
    box-sizing: border-box;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
    font-size: 14px;
  }
  .nav-menu .active {
    color: #0486fe;
    border-bottom: 3px solid #0486fe;
  }
</style>
