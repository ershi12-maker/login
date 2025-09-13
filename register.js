const code = document.querySelector('.confirm')
let flag = true
code.addEventListener('click', function () {
  if (flag) {
    //取反了，不允许第二次马上点击
    flag = false
    let i = 5
    //点击完毕之后立马触发
    code.innerHTML = `${i}秒`
    //开启定时器
    let timerId = setInterval(function () {
      i--
      code.innerHTML = `${i}秒`
      if (i === 0) {
        //清除定时器
        clearInterval(timerId)
        //从新获取
        code.innerHTML = `重新获取`
        //到时间了就可以开启flag
        flag = true
      }
    }, 1000)
  }
})
const username = document.querySelector('input[name=name]')
//使用change事件  值发生变化的时候
username.addEventListener('change', verifyName)
function verifyName() {
  const span = username.nextElementSibling
  //定规则  用户名
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]{6,12}$/
  if (!reg.test(username.value)) {
    username.style.borderColor = 'rgba(215, 60, 60, 0.6)'
    console.log('用户名不合法')
    return false
  }
  //合法的,请清空span
  username.style.borderColor = 'rgb(197, 197, 197)'
  username.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  return true
}


//获取验证码倒计时案例
const phone = document.querySelector('input[name="phone"]')
//使用change事件  值发生变化的时候
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
  const span = phone.nextElementSibling
  //定规则  用户名
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (!reg.test(phone.value)) {
    phone.style.borderColor = 'rgba(215, 60, 60, 0.6)'
    return false
  }
  //合法的,请清空span
  phone.style.borderColor = 'rgb(197, 197, 197)'
  phone.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  return true
}


const codeAd = document.querySelector('input[name=confirm]')
//使用change事件  值发生变化的时候
codeAd.addEventListener('change', verifyCode)
function verifyCode() {
  const span = codeAd.nextElementSibling
  //定规则  用户名
  const reg = /^\d{6}$/
  if (!reg.test(codeAd.value)) {
    codeAd.style.borderColor = 'rgba(215, 60, 60, 0.6)'
    return false
  }
  //合法的,请清空span

  codeAd.style.borderColor = 'rgb(197, 197, 197)'
  codeAd.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  return true
}

const password = document.querySelector('input[name="code1"]')

//使用change事件  值发生变化的时候
password.addEventListener('change', verifyPwd)
function verifyPwd() {
  const span = password.nextElementSibling
  //定规则  用户名
  const reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
  if (!reg.test(password.value)) {

    password.style.borderColor = 'rgba(215, 60, 60, 0.6)'
    return false
  }
  //合法的,请清空span
  password.style.borderColor = 'rgb(197, 197, 197)'
  password.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  return true
}

const passwordConfirm = document.querySelector('input[name=code2]')
//使用change事件  值发生变化的时候
passwordConfirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
  const span = passwordConfirm.nextElementSibling
  //定规则  用户名
  const result = (passwordConfirm.value == password.value)
  if (!result) {
    passwordConfirm.style.borderColor = 'rgba(215, 60, 60, 0.6)'
    return false
  }
  //123Aa!
  //合法的,请清空span

  passwordConfirm.style.borderColor = 'rgb(197, 197, 197)'
  passwordConfirm.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'
  return true
}


const checkBox = document.querySelector('.box')

checkBox.addEventListener('click', function () {
  this.classList.toggle('checkboxC')
})



const button = document.querySelector('button')
button.addEventListener('click', function (e) {
  if (!checkBox.classList.contains('checkboxC')) {
    return alert("请阅读并同意用户协议")
  }

  //依次判断上面的每个框框是否通过
  if (!verifyName()) e.preventDefault()
  if (!verifyPhone()) e.preventDefault()
  if (!verifyCode()) e.preventDefault()
  if (!verifyPwd()) e.preventDefault()
  if (!verifyConfirm()) e.preventDefault()

  else {
    console.log(3)
    location.href = "https://blog.csdn.net/weixin_44296929/article/details/103816299"
    alert("注册成功")

  }

})