window.onload = function () {
  setTimeout(() => {
    checkItems();
	tableObserver();
  }, 5000);
};

const checkItems = () => {
  const tableItems = document.querySelector(".mat-table").children[1].children;
  for (let i = 1; i < tableItems.length; i++) {
    // починка ссылок фаз doppler's
    if (document.querySelectorAll(".cdk-column-link")[i].querySelector('a').href.includes('Doppler')) {
      document.querySelectorAll(".cdk-column-link")[i].querySelector('a').href = fixDopplerUrl(document.querySelectorAll(".cdk-column-link")[i].querySelector('a').href);
      console.log(fixDopplerUrl(document.querySelectorAll(".cdk-column-link")[i].querySelector('a').href));
    }

    // проверка на принадлежности к семейству поверхностной закалки
    if (document.querySelectorAll(".cdk-column-name")[i].textContent.includes('Case Hardened')) {
      document.querySelectorAll(".cdk-column-name")[i].style.color = "cyan";
    }

    // проверка на принадлежности к флоту от 0.15 до 0.18
    if (parseFloat(document.querySelectorAll(".cdk-column-float")[i].textContent) >= 0.15 && parseFloat(document.querySelectorAll(".cdk-column-float")[i].textContent) <= 0.18) {
      document.querySelectorAll(".cdk-column-float")[i].style.color = "green";
    }
  }
};

const fixDopplerUrl = (url) => {
  let dopplerWordIndex = url.indexOf('Doppler') + 7;
  firstSubStr = url.substring(0, dopplerWordIndex);

  let removePhraseIndex = dopplerWordIndex + (url.slice(dopplerWordIndex).indexOf(')') + 1);
  secondSubStr = url.slice(removePhraseIndex);
  return `${firstSubStr}${secondSubStr}`;
}

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
