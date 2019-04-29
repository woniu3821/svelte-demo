import Shepherd from 'shepherd.js'

!(function() {
  function init() {
    const shepherd = setupShepherd()
    setTimeout(() => {
      shepherd.start()
    }, 400)
  }

  function setupShepherd() {
    const shepherd = new Shepherd.Tour({
      defaultStepOptions: {
        scrollTo: true,
        showCancelLink: true
      },
      useModalOverlay: true
    })

    shepherd.addStep('welcome', {
      title: '导航',
      text: '这里是导航，可以<b>快速直达</b>你想要的地方',
      attachTo: '.nav-menu bottom',
      classes: 'shepherd shepherd-welcome',
      buttons: [
        {
          action: shepherd.cancel,
          // classes: 'shepherd-button-secondary',
          text: '退出'
        },
        {
          action: shepherd.next,
          text: '下一步'
        }
      ]
    })

    shepherd.addStep('welcome', {
      title: '指引',
      text: '这里是登录，登录后你可以使用完整的功能',
      attachTo: '.nav-login top',
      // classes: 'shepherd shepherd-welcome',
      buttons: [
        {
          action: shepherd.back,
          // classes: 'shepherd-button-secondary',
          text: '上一步'
        },
        {
          action: shepherd.next,
          text: '下一步'
        }
      ]
    })

    shepherd.addStep('welcome', {
      title: '服务介绍',
      text: ['这里列出了选择我们的理由', '您可以选择进入了解更详细的信息'],
      attachTo: '.open_guide top',
      // classes: 'shepherd shepherd-welcome',
      buttons: [
        {
          action: shepherd.back,
          // classes: 'shepherd-button-secondary',
          text: '上一步'
        },
        {
          action: shepherd.next,
          text: '下一步'
        }
      ]
    })

    shepherd.addStep('some_step_name', {
      text: '<strong>好了！快点去登陆，开始你的探索之路吧！</strong>',
      buttons: [
        {
          action: shepherd.hide,
          text: '返回'
        }
      ],
      when: {
        hide: function() {
          window.localStorage.setItem(
            'guide',
            JSON.stringify({ guided: true, step: 'some_step_name' })
          )
          window.scrollTo(0, 0)
        }
      }
    })

    shepherd.addStep('open-step', {
      title: '优势',
      text: '我们的优势在这里您可以触手可见',
      attachTo: '.feature-content top',
      // classes: 'shepherd shepherd-welcome',
      buttons: [
        {
          action: shepherd.back,
          // classes: 'shepherd-button-secondary',
          text: '上一步'
        },
        {
          action: shepherd.next,
          text: '下一步'
        }
      ]
    })

    shepherd.removeStep('open-step') //删除步骤

    return shepherd
  }
  function ready() {
    let guid = window.localStorage.getItem('guide')

    let guidObj = JSON.parse(guid)

    if (guidObj && guidObj.guided) {
      return
    }

    if (
      document.attachEvent
        ? document.readyState === 'complete'
        : document.readyState !== 'loading'
    ) {
      init()
    } else {
      document.addEventListener('DOMContentLoaded', init)
    }
  }

  ready()
})()
