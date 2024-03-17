'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        { txt: 'I sometimes eat Falafel', size: 20, color: 'red' },
        { txt: 'I enjoy eating Falafel', size: 20, color: 'red' },
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setLineTxt(txt, lineIdx = 0) {
    gMeme.lines[lineIdx].txt = txt
}

function setLineColor(color, lineIdx = 0) {
    gMeme.lines[lineIdx].color = color
}

function setFontSize(dir) {
    gMeme.lines.forEach(line => line.size += dir * 5)
}

function setImg(id) {
    gMeme.selectedImgId = id
}