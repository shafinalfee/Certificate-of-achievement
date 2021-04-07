const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'co ca certi.png'
image.onload = function(){
      drawImage()

}

function drawImage(){
    ctx.drawImage(image, 0, 2,canvas.width,canvas.height)
    ctx.strokeStyle = "blue";
    ctx.moveTo(730, 417);
    ctx.lineTo(730, 417);
    ctx.stroke();
    
    ctx.font = '60px Engagement'
    ctx.fillStyle='#FFD700'
    ctx.textAlign = "center"; 
    ctx.fillText(nameInput.value, 730, 417)
}
nameInput.addEventListener('input',function(){
    drawImage()
})

downloadBtn.addEventListener('click', function(){
   downloadBtn.href = canvas.toDataURL()
   downloadBtn.download = true
})