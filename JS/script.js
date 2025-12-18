// ===== スムーススクロール ===== //
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
        }
    });
    });
});

//フッター/ / 
document.addEventListener("DOMContentLoaded",() => {
    const fadeBg = document.querySelector(".fade-bg");

    window.addEventListener("scroll",() => {
        const scroll = window.innerHeight + window.scrollY;
        const targetPos = fadeBg.offsetTop + 100;

        if (scroll > targetPos){
            fadeBg.classList.add("show");
        }
    });
});

// ===== セクションごとにふわっと出現 ===== //
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.fadein');

    const showSection = () => {
    targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (rect.top < viewHeight - 100) {
        target.classList.add('show');
        }
    });
    };

    window.addEventListener('scroll', showSection);
    showSection(); // ← 読み込み時にチェック
});

// /制作物一覧/ 
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // ボタンの見た目切り替え
        filterButtons.forEach(btn => btn.classList.remove('is-active'));
        button.classList.add('is-active');

      const filter = button.dataset.filter; // all / web / banner / graphic

      // 制作物の表示・非表示
        workItems.forEach(item => {
        const category = item.dataset.category;

        if (filter === 'all' || filter === category) {
            item.classList.remove('is-hide');
        } else {
            item.classList.add('is-hide');
        }
        });
    });
    });

    // /制作物詳細/ 
    document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

  // 一覧ページじゃなかったら（work-item が無いとき）は何もしない
    if (workItems.length === 0) return;

    function setActiveButton(targetFilter) {
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === targetFilter) {
        btn.classList.add('is-active');
        } else {
        btn.classList.remove('is-active');
        }
    });
    }

    function applyFilter(filter) {
    workItems.forEach(item => {
        const category = item.dataset.category;
        if (filter === 'all' || filter === category) {
        item.classList.remove('is-hide');
        } else {
        item.classList.add('is-hide');
        }
    });
    setActiveButton(filter);
    }

  // ボタンクリック時（一覧ページでの操作）
    filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        applyFilter(filter);

      // URL に現在のカテゴリを残しておく（更新しても同じ状態になる）
        const params = new URLSearchParams(location.search);
        params.set('category', filter);
        history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
    });
    });

  // ページ読み込み時：URLの ?category=◯◯ を読んで初期表示を決める
    const params = new URLSearchParams(location.search);
    const initialFilter = params.get('category') || 'all';
    applyFilter(initialFilter);
});



$(function(){
        $('.hamburger,.sp-nav a').on('click',function(){
            $('.hamburger').toggleClass('open');
            $('.sp-nav').fadeToggle();
        });
});




