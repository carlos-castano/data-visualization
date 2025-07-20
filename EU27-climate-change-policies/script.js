const container = document.querySelector('.global-container');
const expandArrow = document.querySelector('.expand-arrow');
const graphPacks = document.querySelectorAll('.graph-pack');
let currentPack = -1;

expandArrow.addEventListener('click', () => {
    if (currentPack < graphPacks.length - 1) {
        currentPack++;
        graphPacks[currentPack].classList.add('active');
        expandArrow.style.marginTop = '1rem';

        setTimeout(() => {
            window.scrollTo({ 
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 250);

        if (currentPack === graphPacks.length - 1) {
            const iframe = graphPacks[currentPack].querySelector('iframe');
            iframe.setAttribute('src', 'graph/graph2.html');
            expandArrow.classList.add('hidden');
            
            setTimeout(() => {
            const description = document.querySelector('.soruce-container');
            if (description) {
                description.style.display = 'block';
            }
            }, 2000);
        }
    }
});
