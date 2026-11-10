const contentDir = 'contents/';
const sectionNames = ['home', 'publications', 'experience', 'awards'];

async function loadText(file) {
    const response = await fetch(contentDir + file);
    if (!response.ok) {
        throw new Error(`Failed to load ${file}: ${response.status}`);
    }
    return response.text();
}

window.addEventListener('DOMContentLoaded', async () => {
    marked.use({ mangle: false, headerIds: false });

    const tasks = sectionNames.map(async (name) => {
        const target = document.getElementById(name + '-md');
        try {
            target.innerHTML = marked.parse(await loadText(name + '.md'));
        } catch (error) {
            target.textContent = '内容暂时无法加载，请刷新页面。';
            console.error(error);
        }
    });

    tasks.push(loadText('config.yml').then((text) => {
        const config = jsyaml.load(text);
        Object.entries(config).forEach(([key, value]) => {
            const target = document.getElementById(key);
            if (target) target.textContent = value;
        });
    }).catch((error) => console.error(error)));

    await Promise.all(tasks);

    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 100,
    });

    const menu = document.getElementById('navbarResponsive');
    const toggler = document.querySelector('.navbar-toggler');
    menu.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(toggler).display !== 'none') {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
});
