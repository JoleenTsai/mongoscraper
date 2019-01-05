const fetch = window.fetch

const scrapeData = () => {
  fetch('/scrape',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({})
    })
    .then(_ => window.location.reload())
    .catch(e => console.error(e))
}
const saveStack = id => {
  fetch(`/stack/${event.target.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
}
const deleteStack = id => {
  fetch(`/stack/${id}`, {
    method: `Delete`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  .then(_ => window.location.reload())
  .catch(e=>console.error(e))
}

document.addEventListener('click', event => {
  event.preventDefault()
  if (event.target.id) {
    switch (event.target.id) {
      case 'scrapeData':
        scrapeData()
        break
      case 'link':
        window.location = event.target.dataset.url
        break
      case 'saveBTN':
        saveStack(event.target.dataset.id)
        break
      case 'deleteBtn':
        deleteStack(event.target.dataset.id)
        break
      case 'goToSaved':
        window.location = './saved'
        break
      case 'goToHome':
        window.location = './'
        break
    }
  }
  //   if (event.target.id !== 'scrapeData' && event.target.id) {
  //     if (event.target.dataset.url) {
  //       window.location = event.target.dataset.url
  //     } else {
  //       fetch(`/stack/${event.target.id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8'
  //         }
  //       })
  //         .then(r => {
  //           window.location.reload()
  //         })
  //     }
  //   } else if (event.target.id && event.target.id === 'scrapeData') {
  //     fetch('/scrape',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8'
  //         },
  //         body: JSON.stringify({})
  //       })
  //       .then(_ => window.location.reload())
  //       .catch(e => console.error(e))
  //   }
})