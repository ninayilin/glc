// Nav scroll background
const nav = document.getElementById('nav');
if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// Menu tabs (menu.html only)
const tabs   = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');
tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    t.classList.add('active');
    document.querySelector(`.menu-panel[data-panel="${t.dataset.tab}"]`)?.classList.add('active');
}));

// Location: Pickup / Delivery toggle
const locTabs = document.querySelectorAll('.loc-tab');
locTabs.forEach(btn => btn.addEventListener('click', () => {
    locTabs.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
}));

// Scroll reveal
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
