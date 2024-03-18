'uses strict'

function renderMeme() {
    const gallery = document.querySelector('.gallery')
    const editor = document.querySelector('.editor')

    editor.classList.remove('hidden')
    gallery.classList.add('hidden')

    // resizeCanvas()
    const meme = getMeme()
    const img = new Image()
    img.src = `img/meme-imgs/meme-imgs-square/${meme.selectedImgId}.jpg`

    img.addEventListener("load", () => {
        // resizeCanvas()
        // gCtx.drawImage(img, 0, 0)
        // gElCanvas.width = img.width
        // gElCanvas.height = img.height
        coverCanvasWithImg(img)
        gCtx.font = `${meme.lines[0].size}px arial`
        gCtx.fillStyle = meme.lines[0].color
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'

        drawText(meme.lines[0].txt, gElCanvas.width / 2, 40)
        drawText(meme.lines[1].txt, gElCanvas.width / 2, gElCanvas.height - 40)
    })
}

function onChangeTxt(val) {
    // setLineTxt(document.querySelector('[name="firstLine"]').value)
    setLineTxt(val)
    renderMeme()
}


function onChangeColor(val) {
    setLineColor(val)
    renderMeme()
}

function onChangeFontSize(dir) {
    setFontSize(dir)
    renderMeme()
}

function onAddLine() {
    console.log('high')
}

function onSwitchLine(idx) {
    const newLineIdx = switchLine(idx)
    const elTxtInput = document.querySelector('input[type="text"]')
    const newLineTxt = getMeme().lines[newLineIdx].txt

    elTxtInput.value = newLineTxt
    // setLineTxt(lineIdx)
    renderMeme()
}

function onDownload() {
    const dataUrl = gElCanvas.toDataURL()
    const elLink = document.querySelector('a.download')
    const firstLine = getMeme().lines[0].txt

    elLink.href = dataUrl
    elLink.download = `${firstLine}.png`
}