let slider_img = document.querySelector('.slider-img');
let Images = ['a.jpg','b.jpg','c.jpg','d.jpg','f.jpg','g.jpg','h.jpg']; 
let i=0;

function prev()
{
    if(i <= 0) i = Images.length;
    i--;
    return setImg();
}

function next()
{
    if( i >= Images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg()
{
    return slider_img.setAttribute('src', 'Images/' + Images[i]);
}