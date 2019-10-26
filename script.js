
var q = document.querySelectorAll("button")
var valores = ['', '']
var valor_posicao = 0
var dispaly_clear = true
var ponto = false;
var ope

const clear = _ => {

    valores = ['', '']
    valor_posicao = 0
    dispaly_clear = true
    ponto = false;
    ope = ''
    document.querySelector('input').value = '';
}

const tratamento_valores = e => {

    if (ponto && e == '.' || dispaly_clear && e == '.') return
    if (e == '.') ponto = true
    if (dispaly_clear) {
        document.querySelector('input').value = '';
        ponto = false
    }

    valores[valor_posicao] += e
    document.querySelector('input').value = valores[valor_posicao];
    dispaly_clear = false
}

const operacao = e => {

    if (e !== '=' && valor_posicao == 0) {

        ope = e
        valor_posicao = 1
        dispaly_clear = true

    } else if (e !== '=' && valor_posicao == 1) {

        if (valores[1] == '') {
            ope = e
            return;
        }

        if (ope !== '=') cal()
        ope = e
        dispaly_clear = true

    } else if (e == '=' && valores[1] !== '') {

        cal()
        ope = '='
        dispaly_clear = true
    }
}

const show = e => {
    e.addEventListener('click', () => {

        if (e.className == 'operacao') {
            operacao(e.innerHTML)
        } else if (e.className == 'clear' || e.className == 'limpar') {
            clear()
        } else {
            tratamento_valores(e.innerHTML)
        }

    })
}
q.forEach(show)

const cal = _ => {

    switch (ope) {
        case '+': result = parseFloat(valores[0]) + parseFloat(valores[1])
            break
        case '-': result = parseFloat(valores[0]) - parseFloat(valores[1])
            break
        case '*': result = parseFloat(valores[0]) * parseFloat(valores[1])
            break
        case '/': result = parseFloat(valores[0]) / parseFloat(valores[1])
            break
        default:
            console.log('erro cal')
    }

    valores[0] = result
    valores[1] = ''
    document.querySelector('input').value = result;
}