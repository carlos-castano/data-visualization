var divElement = document.getElementById('viz1731007614917');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) {
    vizElement.style.width = '800px';
    vizElement.style.height = '780px';
} else if (divElement.offsetWidth > 500) {
    vizElement.style.width = '600px';
    vizElement.style.height = '580px';
} else {
    vizElement.style.width = '100%';
    vizElement.style.height = '850px';
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);