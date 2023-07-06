window.addEventListener('DOMContentLoaded', () => {
  const authForm = document.querySelector('.js-auth-form')
  const registerForm = document.querySelector('.js-register-form')
  const passwordField = document.querySelectorAll('[type="password"]')
  const avatar = document.querySelector('.js-avatar')
  let userInfo = {}

  if (authForm) {
    authForm.addEventListener('submit', e => {
      e.preventDefault()
      window.location.href = 'register.html'
    })
  }

  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault()

      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)

      delete data.password1
      delete data.password2
      delete data.avatar
      userInfo = { ...data, ...userInfo }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      window.location.href = 'feed.html'
    })
  }

  const checkPasswordsEquality = (password, confirm) => {
    if (confirm.value === password.value) {
      confirm.setCustomValidity('')
    } else {
      confirm.setCustomValidity('Пароли не совпадают')
    }
  }

  if (passwordField && passwordField.length === 2) {
    passwordField.forEach(field => {
      field.addEventListener('input', () => {
        const password = passwordField[0]
        const confirm = passwordField[1]

        checkPasswordsEquality(password, confirm)
      })
    })
  }

  if (avatar) {
    const fileInput = document.querySelector('.js-file-input')
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        const result = reader.result
        userInfo.avatar = result
        avatar.src = result
      },
      false
    )

    fileInput.addEventListener('change', e => {
      const file = fileInput.files[0]

      if (file) {
        reader.readAsDataURL(file)
      }
    })
  }
})
