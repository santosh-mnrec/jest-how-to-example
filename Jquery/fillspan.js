const $ = require('jquery')

HF.fillSpan = () => {
    $('#fill-span-button').click(() => {
        $('#fill-span-span').text('Yes')
        $('#fill-span-span').slideUp()
    })
}