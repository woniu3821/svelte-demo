<script>
  import { slide } from 'svelte/transition'
  let list = [
    {
      title: '应用接入',
      intro: ' 实现应用服务注册、发布、接入、授权、管理、使用的全生命周期管理',
      src: 'assets/img/open_1.png',
      show: false
    },
    {
      title: '应用接入',
      intro: ' 实现应用服务注册、发布、接入、授权、管理、使用的全生命周期管理',
      src: 'assets/img/open_2.png',
      show: false
    },
    {
      title: '应用接入',
      intro: ' 实现应用服务注册、发布、接入、授权、管理、使用的全生命周期管理',
      src: 'assets/img/open_3.png',
      show: false
    },
    {
      title: '应用接入',
      intro: ' 实现应用服务注册、发布、接入、授权、管理、使用的全生命周期管理',
      src: 'assets/img/open_4.png',
      show: false
    },
    {
      title: '应用接入',
      intro: ' 实现应用服务注册、发布、接入、授权、管理、使用的全生命周期管理',
      src: 'assets/img/open_5.png',
      show: false
    },
    {
      title: '应用接入',
      intro: ' 实现应用服务注册、发布、接入、授权、管理、使用的全生命周期管理',
      src: 'assets/img/open_6.png',
      show: false
    }
  ]
  let showItem = false
</script>

<div class="open open_guide">
  <div class="title">为什么选择我们？</div>
  <div class="wrapper">
    <div class="grid">
      {#each list as item}
      <div class="grid-item">
        <div class="cover">
          <ul>
            <li>
              <a href="javascript:;">CAS 协议</a>
            </li>
            <li>
              <a href="javascript:;">认证地址</a>
            </li>
            <li>
              <a href="javascript:;">应用注册</a>
            </li>
            <li>
              <a href="javascript:;">JAVA程序集成</a>
            </li>
            <li>
              <div class="btn">查看更多</div>
            </li>
          </ul>
        </div>
        <div class="bg"></div>
        <div class="content">
          <img src="{item.src}" alt="" />
          <div class="sub">{item.title}</div>
          <div class="intro">{item.intro}</div>
        </div>
      </div>
      {/each}
      <!-- <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div> -->
    </div>
  </div>
</div>
<style>
  @keyframes cover {
    0% {
      transform: rotate(-80deg);
    }
    20% {
      transform: rotate(-75deg);
      opacity: 0.2;
    }
    30% {
      transform: rotate(-50deg);
    }

    60% {
      transform: rotate(30deg);
      opacity: 0.5;
    }
    70% {
      transform: rotate(-20deg);
    }
    90% {
      transform: rotate(10deg);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
  .open {
    min-height: 778px;
    background: url(assets/img/open_bg.png) no-repeat center;
  }
  .title {
    color: #fff;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 361px);
    grid-template-rows: repeat(2, 241px);
    height: 540px;
    /* grid-gap: <grid-row-gap> <grid-column-gap>; */
    /* grid-gap: 58px; */
    justify-content: space-between;
    align-content: space-between;
  }
  .grid-item {
    top: 0;
    position: relative;
    overflow: hidden;
  }
  .cover {
    width: 361px;
    /* height: 241px; */
    overflow: hidden;
    height: 0;
    position: absolute;
    background: #0486fe;
    border-radius: 1px;
    text-align: center;
    z-index: 100;
    user-select: none;
    opacity: 0;
    transition: 0.4s;
  }
  .grid-item:hover .cover {
    opacity: 1;
    height: 241px;
    /* animation: cover 0.6s forwards; */
  }
  .cover ul {
    padding: 20px;
  }
  .cover li {
    margin-bottom: 10px;
    text-align: center;
  }
  .cover li a {
    display: inline-block;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 28px;
    list-style: none;
    padding: 2px;
    position: relative;
  }
  .cover li a::after {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    width: 0px;
    transition: 0.3s;
    background: #fff;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .cover li:hover a::after {
    width: 100%;
  }
  .cover .btn {
    font-size: 12px;
    color: #ffffff;
    width: 98px;
    height: 26px;
    display: inline-block;
    line-height: 26px;
    border: 1px solid #ffffff;
    border-radius: 13px;
    border-radius: 13px;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
  .cover .btn:hover {
    color: #0486fe;
    background: #fff;
  }
  .grid-item .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 361px;
    height: 235px;
    opacity: 0.2;
    background: #b8ddff;
    box-shadow: 0 4px 16px 0 rgba(229, 243, 255, 0.83);
    border-radius: 1px;
    border-radius: 1px;
  }
  .content {
    padding: 22px;
    height: 230px;
    width: 351px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
  }
  .sub {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #303133;
  }
  .intro {
    font-size: 14px;
    color: #606266;
    letter-spacing: 0;
    line-height: 28px;
  }
</style>
