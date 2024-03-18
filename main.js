'use strict'

var gElCanvas
var gCtx

function onInit() {
    initMeme()
    initGallery()
}

function initMeme() {
    initCanvas()
    initInputs()
}

function initCanvas() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
    // setLineTxt(document.querySelector('[name="firstLine"]').value)

    renderMeme()
}

function initInputs() {
    const elTxtInput = document.querySelector('input[type="text"]')
    const firstLineTxt = getMeme().lines[0].txt

    elTxtInput.value = firstLineTxt
}

function onDraw(ev) {
    const { offsetX, offsetY } = ev

    switch (gCurrShape) {
        case 'triangle':
            drawTriangle(offsetX, offsetY)
            break
        case 'rect':
            drawRect(offsetX, offsetY)
            break
        case 'text':
            drawText('Coding Academy', offsetX, offsetY)
            break
        case 'line':
            drawLine(offsetX, offsetY)
            break
    }
}

function drawText(text, x, y) {
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}