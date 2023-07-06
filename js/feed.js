window.addEventListener('DOMContentLoaded', () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  if (!userInfo) {
    window.location.href = '/index.html'
  }

  const avatar = document.querySelector('.js-avatar')
  const name = document.querySelector('.js-name')

  avatar.src = userInfo.avatar
  name.textContent = userInfo.firstName + ' ' + userInfo.secondName
})
