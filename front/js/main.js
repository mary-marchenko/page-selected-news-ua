document.addEventListener('DOMContentLoaded', () => {
    let darkBtn = document.querySelector('.dark-btn');
    darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});

document.querySelector('.links__item-copy').addEventListener('click', function() {
    let itemLogo = this.querySelector('.links__item-logo');

    let newSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0,0,256,256">
            <g fill="#000055" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g transform="scale(10.66667,10.66667)">
                    <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10zM10,17.414l-4.707,-4.707l1.414,-1.414l3.293,3.293l7.293,-7.293l1.414,1.414z"></path>
                </g>
            </g>
        </svg>
    `;

    if (itemLogo) {
        itemLogo.innerHTML = newSVG;
    }
});