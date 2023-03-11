function addusermessage() {
    let txtinput = window.document.querySelector('input#texto')

    let user = window.document.createElement('p')
    user.id = "usuario"
    let newmessage = window.document.createElement('p')
    newmessage.id = 'falausuario'
    let section = window.document.querySelector('section#chat')

    user.innerHTML = `Você diz:`

    let txtvalue = txtinput.value

    newmessage.innerHTML = `${txtvalue}`
    
    section.appendChild(user)
    section.appendChild(newmessage)


    txtinput.value = ``
    txtinput.focus()
}

function addhelpermessage() {
    let txtinput = window.document.querySelector('input#texto')

    let helper = window.document.createElement('p')
    helper.id = "atendente"
    let newmessage = window.document.createElement('p')
    newmessage.id = 'falaatendente'
    let section = window.document.querySelector('section#chat')

    helper.innerHTML = `Atendente diz:`
    
    let txtvalue = txtinput.value

    newmessage.innerHTML = `${txtvalue} `
    
    section.appendChild(helper)
    section.appendChild(newmessage)

    txtinput.value = ``
    txtinput.focus()

}



function clean() {
    let txtinput = window.document.querySelector('input#texto')

    txtinput.value = ''
}