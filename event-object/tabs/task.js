const tabsBlock = document.querySelectorAll('.tabs');

const changeTab = (block) => {
  const tabs = block.querySelectorAll('.tab');
  const tabsContent = block.querySelectorAll('.tab__content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let index = [...tabs].indexOf(tab);
        [...tabs][index].classList.add('tab_active');
        [...tabsContent][index].classList.add('tab__content_active');

        let newTabs = [...tabs].filter(el => el !== [...tabs][[index]]);
        newTabs.forEach(item => item.classList.remove('tab_active'));
        let newTabsContent = [...tabsContent].filter(el => el !== [...tabsContent][[index]]);
        newTabsContent.forEach(item => item.classList.remove('tab__content_active'));
    });
  });
};

tabsBlock.forEach(block => changeTab(block));