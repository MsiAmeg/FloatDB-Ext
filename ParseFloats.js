window.onload = function () {
  setTimeout(() => {
    checkItems();
	tableObserver();
  }, 5000);
};

const checkItems = () => {
  const tableItems = Array.from(document.querySelector(".mat-table").children[1].children);
  tableItems.forEach((item) => {
    const cellSkinName = item.cells[1];
    const skinName = cellSkinName.textContent;
    const itemUrl = item.querySelector('a').href;
    const itemFloat = parseFloat(item.cells[2].textContent);

    // починка ссылок фаз doppler's
    isItemDoppler(itemUrl, item);
    

    // проверка на принадлежности к семейству поверхностной закалки
    isItemCaseHardened(skinName, cellSkinName);
    

    // проверка на принадлежности к флоту от 0.15 до 0.18
    if ((itemFloat >= 0.15) && (itemFloat <= 0.18)) {
      item.cells[2].style.color = "rgb(255, 105, 57)";
    }
  });
};

const isItemHasCoolFloat = (itemFloat, item) => {
 
};


const isItemCaseHardened = (itemName, item) => {
  if (itemName.includes('Case Hardened')) {
    item.style.color = "cyan";
  }
};


const isItemDoppler = (url, item) => {
  if (url.includes('Doppler')) {
    item.querySelector('a').href = fixDopplerUrl(url);
  }
};

const fixDopplerUrl = (url) => {
  let dopplerWordIndex = url.indexOf('Doppler') + 7;
  firstSubStr = url.substring(0, dopplerWordIndex);
  
  let removePhraseIndex = dopplerWordIndex + (url.slice(dopplerWordIndex).indexOf(')') + 1);
  secondSubStr = url.slice(removePhraseIndex);
  return `${firstSubStr}${secondSubStr}`;
};

const tableObserver = () => {
  const target = document.querySelector(".results");

  const observer = new MutationObserver((entries) => {
    if (entries[0].target.classList.contains("search-container") || entries[0].target.tagName == "TBODY") {
		checkItems();
    }
  });

  const config = {
    attributes: false,
    childList: true,
    subtree: true,
  };

  observer.observe(target, config);
};
