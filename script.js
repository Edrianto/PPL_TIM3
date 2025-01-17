let content;

fetch('languages.json')
    .then(response => response.json())
    .then(data => {
        content = data;
    })
    .catch(error => console.error('Error loading language file:', error));

function changeLanguage(lang) {
    if (content) {
        document.getElementById('hero_landing_1').textContent = content[lang].hero_landing_1;
        document.getElementById('hero_landing_2').textContent = content[lang].hero_landing_2;
        document.getElementById('hero_landing_3').textContent = content[lang].hero_landing_3;
        document.getElementById('cta_landing_page').textContent = content[lang].cta_landing_page;
        document.getElementById('value').textContent = content[lang].value;
        document.getElementById('value_detail').textContent = content[lang].value_detail;
        document.getElementById('value1').textContent = content[lang].value1;
        document.getElementById('value1_desc').textContent = content[lang].value1_desc;
        document.getElementById('value2').textContent = content[lang].value2;
        document.getElementById('value2_desc').textContent = content[lang].value2_desc;
        document.getElementById('value3').textContent = content[lang].value3;
        document.getElementById('value3_desc').textContent = content[lang].value3_desc;
        document.getElementById('value4').textContent = content[lang].value4;
        document.getElementById('value4_desc').textContent = content[lang].value4_desc;
    }
}
