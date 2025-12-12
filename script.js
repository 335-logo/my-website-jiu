// DOM元素缓存
const DOM = {
    searchLoader: document.querySelector('.search-loader'),
    searchWrap: document.querySelector('.search-wrap'),
    searchClose: document.querySelector('.search-form .fas.fa-times'),
    searchCat: document.querySelector('.search-cat'),
    searchCats: document.querySelector('.search-cats'),
    searchCatsItems: document.querySelectorAll('.search-cats ul li'),
    filterTabs: document.querySelectorAll('.filter-tabs ul li'),
    contentList: document.getElementById('content-list'),
    loadMore: document.getElementById('load-more'),
    sitetipsClose: document.querySelector('.sitetips .close')
};

// 初始化页面
function init() {
    // 生成初始内容卡片
    generateCards(6);
    
    // 绑定事件
    bindEvents();
}

// 绑定事件
function bindEvents() {
    // 搜索功能
    DOM.searchLoader?.addEventListener('click', showSearch);
    DOM.searchClose?.addEventListener('click', hideSearch);
    DOM.searchCat?.addEventListener('click', toggleSearchCats);
    
    // 搜索分类点击
    DOM.searchCatsItems.forEach(item => {
        item.addEventListener('click', function() {
            DOM.searchCatsItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');
            DOM.searchCat.textContent = this.textContent;
            toggleSearchCats();
        });
    });
    
    // 点击搜索框外部关闭搜索
    DOM.searchWrap?.addEventListener('click', function(e) {
        if (e.target === this) {
            hideSearch();
        }
    });
    
    // 标签筛选
    DOM.filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            DOM.filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterCards(this.dataset.tab);
        });
    });
    
    // 加载更多
    DOM.loadMore?.addEventListener('click', function(e) {
        e.preventDefault();
        generateCards(6);
    });
    
    // 关闭网站提示
    DOM.sitetipsClose?.addEventListener('click', function() {
        this.closest('.sitetips').style.display = 'none';
    });
}

// 显示搜索框
function showSearch() {
    DOM.searchWrap.style.display = 'block';
    setTimeout(() => {
        DOM.searchWrap.classList.add('active');
    }, 10);
}

// 隐藏搜索框
function hideSearch() {
    DOM.searchWrap.classList.remove('active');
    setTimeout(() => {
        DOM.searchWrap.style.display = 'none';
    }, 300);
}

// 切换搜索分类下拉
function toggleSearchCats() {
    DOM.searchCats.style.display = DOM.searchCats.style.display === 'block' ? 'none' : 'block';
}

// 生成内容卡片
function generateCards(count) {
    const cardTemplate = `
        <div class="post grid" data-tab="all">
            <div class="img">
                <a href="detail.html" title="空标题">
                    <div class="card-image-placeholder"></div>
                </a>
            </div>
            <div class="con">
                <h3><a href="detail.html" title="空标题">空标题</a></h3>
                <div class="excerpt">
                    <span class="card-tag-placeholder"></span>
                    <span class="card-tag-placeholder"></span>
                    <br>
                    <span>00min</span> | <span>mp4</span>
                </div>
                <div class="grid-meta">
                    <span class="time"><i class="far fa-clock"></i> 3天前</span>
                    <span class="price"><span class="fee"><i class="fas fa-coins"></i> 5分</span></span>
                </div>
            </div>
        </div>
    `;
    
    let cardsHTML = '';
    for (let i = 0; i < count; i++) {
        cardsHTML += cardTemplate;
    }
    
    DOM.contentList.insertAdjacentHTML('beforeend', cardsHTML);
    
    // 为新生成的卡片绑定点击事件
    bindCardEvents();
}

// 绑定卡片点击事件
function bindCardEvents() {
    const cards = document.querySelectorAll('.post.grid');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 防止点击内部链接时触发两次跳转
            if (e.target.tagName !== 'A') {
                window.location.href = 'detail.html';
            }
        });
    });
}

// 标签筛选卡片
function filterCards(tab) {
    const cards = document.querySelectorAll('.post.grid');
    
    // 清空现有卡片
    DOM.contentList.innerHTML = '';
    
    // 根据标签生成对应数量的卡片
    let count = 6;
    if (tab !== 'all') {
        count = Math.floor(Math.random() * 4) + 3; // 3-6个随机卡片
    }
    
    // 生成并添加新卡片
    generateCards(count);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导航栏板块跳转
function navigateToSection(section) {
    // 这里可以根据section参数实现不同板块的跳转逻辑
    console.log('导航到:', section);
    // 示例：滚动到指定区域或跳转到其他页面
    // window.location.href = section + '.html';
}

// 模拟详情页跳转
function goToDetail() {
    window.location.href = 'detail.html';
}

// 预留内容填充接口
// 可替换内容：卡片数据
const cardDataTemplate = {
    id: 'card-001',
    title: '可替换标题',
    tags: ['标签1', '标签2'],
    duration: '00min',
    format: 'mp4',
    time: '3天前',
    price: '5分',
    image: '可替换图片URL',
    link: 'detail.html'
};

// 预留内容填充函数
function fillContent(data) {
    // 可用于后续添加合法内容时调用
    console.log('填充内容:', data);
    // 示例：使用数据生成卡片
    /*
    const card = `
        <div class="post grid" data-tab="all">
            <div class="img">
                <a href="${data.link}" title="${data.title}">
                    <img src="${data.image}" alt="${data.title}">
                </a>
            </div>
            <div class="con">
                <h3><a href="${data.link}" title="${data.title}">${data.title}</a></h3>
                <div class="excerpt">
                    ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    <br>
                    <span>${data.duration}</span> | <span>${data.format}</span>
                </div>
                <div class="grid-meta">
                    <span class="time"><i class="far fa-clock"></i> ${data.time}</span>
                    <span class="price"><span class="fee"><i class="fas fa-coins"></i> ${data.price}</span></span>
                </div>
            </div>
        </div>
    `;
    DOM.contentList.insertAdjacentHTML('beforeend', card);
    */
}

// 导出函数，方便外部调用
window.app = {
    init,
    navigateToSection,
    goToDetail,
    fillContent
};