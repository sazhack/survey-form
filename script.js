function clicked(e)
{
    if(!confirm('Got it! Thank you for taking part!')) {
        e.preventDefault();
    }
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne1(checkbox) {
    var checkboxes = document.getElementsByName('check1')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne2(checkbox) {
    var checkboxes = document.getElementsByName('check2')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne3(checkbox) {
    var checkboxes = document.getElementsByName('check3')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
