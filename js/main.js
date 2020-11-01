
function fillTechJargon(element) {
    fetch('https://corporatebs-generator.sameerkumar.website/')
        .then(response => response.json())
        .then(response => {
            element.innerHTML = response.phrase;
        }, err => {
            console.error(err);
            element.innerHTML = "Error: No response";
        });
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

window.onload = () => {
    fillTechJargon(document.getElementById('showcase-title'));
    fillTechJargon(document.getElementById('box-title-1'));
    fillTechJargon(document.getElementById('box-title-2'));
    fillTechJargon(document.getElementById('box-title-3'));

    const showcaseSubTitles = [
        'CompanyCo practically invented the term "user communities".',
        'CompanyCo practically invented the term "reporting".',
        'We here at CompanyCo think we know that it is better to synthesize iteravely than to facilitate virtually.',
        'CompanyCo has refactored the theory of research and development.',
        'CompanyCo practically invented the term "research and development".',
        'At CompanyCo, we think we know how to productize compellingly.',
        'CompanyCo is the industry leader of infinitely reconfigurable branding supervising metrics.',
'CompanyCo has refactored the idea of client-focused, global accounting monitoring.',
        'At CompanyCo, we have proven we know how to syndicate extensibly.',
        'CompanyCo is the industry leader of turn-key e-commerce.',
        'CompanyCo has permanently altered the concept of iteration.',
        'At CompanyCo, we believe we know how to monetize holistically.',
        'CompanyCo practically invented the term "development".'
    ]

    document.getElementById('showcase-subtitle').innerHTML = showcaseSubTitles[Math.floor(Math.random() * showcaseSubTitles.length)];

    const showcaseBackgrounds = [
        'server\ room.jpg',
        'hands.jpg',
        'smile.jpg',
        'wit.jpg'
    ]

    let showcase = document.getElementById('showcase');
    showcase.style.backgroundImage = `url('img/${showcaseBackgrounds[Math.floor(Math.random() * showcaseBackgrounds.length)]}')`;

    const boxIcons = [
        'ai.svg',
        'analytics.svg',
        'brain.svg',
        'doughnut.svg',
        'hacker.svg'
    ]

    const boxIndexes = [0, 1, 2, 3, 4];

    let shuffled = shuffle(boxIndexes);

    document.getElementById('box-img-1').src = `img/${boxIcons[shuffled[0]]}`;
    document.getElementById('box-img-2').src = `img/${boxIcons[shuffled[1]]}`;
    document.getElementById('box-img-3').src = `img/${boxIcons[shuffled[2]]}`;

    const jargonPhrases = [
        'We apply the proverb "Grass doesn\'t grow on a racetrack" not only to our branding but our capacity to scale.',
        'The data hygiene factor is cutting-edge. If you streamline virtually, you may have to reinvent seamlessly.',
        'The partnerships factor can be summed up in one word: C2B2B. What does it really mean to aggregate "cyber-micro-interactively"?',
        'Imagine a combination of Perl and Python. We realize that if you productize virtually then you may also iterate seamlessly.',
        'Our technology takes the best aspects of J++ and XML.',
        'Our technology takes the best aspects of ASP and Perl.',
        'What does the commonly-accepted industry jargon "micro-open-source, 24/7/365 compliance" really mean?',
        'We apply the proverb "You can lead a horse to water, but you can\'t make it drink" not only to our partnerships but our power to generate.',
        'We apply the proverb "He who laughs last, laughs best" not only to our communities but our capacity to e-enable.',
        'Think best-of-breed. Think real-world. Think transparent. But don\'t think all three at the same time.',
        'Our virally-distributed feature set is unparalleled in the industry, but our 60/60/24/7/365 strategic CAE and simple configuration is frequently considered a remarkable achievement.'
    ]

    document.getElementById('box-text-1').innerHTML = jargonPhrases[Math.floor(Math.random() * jargonPhrases.length)];
    document.getElementById('box-text-2').innerHTML = jargonPhrases[Math.floor(Math.random() * jargonPhrases.length)];
    document.getElementById('box-text-3').innerHTML = jargonPhrases[Math.floor(Math.random() * jargonPhrases.length)];
}