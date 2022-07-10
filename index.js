const homeBtn = document.getElementById('btn-home');
const experienceBtn = document.getElementById('btn-experience');
const brandBtn = document.getElementById('btn-brand');
const socialsBtn = document.getElementById('btn-socials');

const homeContent = document.getElementById('content-home');
const experienceContent = document.getElementById('content-experience');
const brandContent = document.getElementById('content-brand');
const socialsContent = document.getElementById('content-socials');

const spinner = document.getElementById('spinner');

const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');
const facebook = document.getElementById('facebook');
const tiktok = document.getElementById('tiktok');

const showContent = (hash) => {

    spinner.style.display = 'none';

    if (hash === '#home') {
        homeBtn.classList.add('hovered');
        experienceBtn.classList.remove('hovered');
        brandBtn.classList.remove('hovered');
        socialsBtn.classList.remove('hovered');
        
        showTransition(homeContent);
        hideTransition(experienceContent)
        hideTransition(brandContent)
        hideTransition(socialsContent)
        return;
    } 
    if (hash === '#experience') {
        homeBtn.classList.remove('hovered');
        experienceBtn.classList.add('hovered');
        brandBtn.classList.remove('hovered');
        socialsBtn.classList.remove('hovered');

        hideTransition(homeContent);
        showTransition(experienceContent)
        hideTransition(brandContent)
        hideTransition(socialsContent)
        return;
    }
    if (hash === '#brand') {
        homeBtn.classList.remove('hovered');
        experienceBtn.classList.remove('hovered');
        brandBtn.classList.add('hovered');
        socialsBtn.classList.remove('hovered');

        hideTransition(homeContent);
        hideTransition(experienceContent)
        showTransition(brandContent)
        hideTransition(socialsContent)
        return;
    } 
    if (hash === '#socials') {
        homeBtn.classList.remove('hovered');
        experienceBtn.classList.remove('hovered');
        brandBtn.classList.remove('hovered');
        socialsBtn.classList.add('hovered');

        hideTransition(homeContent);
        hideTransition(experienceContent)
        hideTransition(brandContent)
        showTransition(socialsContent)
        return;
    }

    navigateTo("#home");
}

const showTransition = (element) => {
    element.style.opacity = 1;
    element.style.visibility = 'visible';

}
const hideTransition = (element) => {
    element.style.opacity = 0;
    element.style.visibility = 'hidden';
}

const navigateTo = (hash) => {
    window.location.hash = hash;
    showContent(hash);
}

window.onpopstate = () => {
    const hash = window.location.hash;
    if (hash) {
       showContent(hash)
    } else {
        navigateTo("#home")
    }
}

window.onload = () => {
    const hash = window.location.hash;
    if (hash) {
       showContent(hash)
    } else {
        navigateTo("#home")
    }
}

homeBtn.onclick = () => {
    navigateTo("#home")
}

experienceBtn.onclick = () => {
    navigateTo('#experience')
}

brandBtn.onclick = () => {
    navigateTo('#brand')
}

socialsBtn.onclick = () => {
    navigateTo('#socials')
}

linkedin.onclick = () => {
    window.location.href = "https://linkedin.com/in/ddaquel";
}

instagram.onclick = () => {
    window.location.href = "https://instagram.com/ddaquel";
}

facebook.onclick = () => {
    window.location.href = "https://facebook.com/ddaquel";
}

tiktok.onclick = () => {
    window.location.href = "https://tiktok.com/@ddaquel";
}