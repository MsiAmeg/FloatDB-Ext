window.onload = function () {

  const blueGems = {
    bayonet: [
      "179",
      "321",
      "442",
      "496",
      "555",
      "588",
      "592",
      "670",
      "698",
      "828",
      "916"
    ],
    bowie:[
      "29",
      "182",
      "358",
      "396",
      "398",
      "399",
      "420",
      "534",
      "749",
      "913",
      "928",
      "944",
      "964"
    ],
    Butterfly:[
      "182",
      "194",
      "330",
      "396",
      "398",
      "478",
      "488",
      "494",
      "510",
      "652",
      "694",
      "838",
      "913"
    ],
    classic:[
      "169",
      "180",
      "288",
      "316",
      "403",
      "449",
      "456",
      "583",
      "585",
      "601",
      "634",
      "651"
    ],
    falchion:[
      "488",
      "494",
      "510",
      "575",
      "638",
      "664",
      "694",
      "770",
      "800",
      "838",
      "868",
      "891",
      "917"
    ],
    flip:[
      "151",
      "180",
      "262",
      "321",
      "442",
      "555",
      "592",
      "647",
      "661",
      "670",
      "698",
      "828",
      "916"
    ],
    gut:[
      "165",
      "220",
      "421",
      "549",
      "567",
      "647",
      "928",
      "962"
    ],
    huntsman:[
      "29",
      "248",
      "306",
      "510",
      "618",
      "652",
      "703",
      "798",
      "800",
      "838"
    ],
    karambit:[
      "4",
      "25",
      "57",
      "59",
      "73",
      "269",
      "387",
      "442",
      "453",
      "463",
      "470",
      "510",
      "776",
      "809",
      "853",
      "888",
      "902",
      "905"
    ],
    m9Bayonet:[
      "11",
      "105",
      "150",
      "354",
      "417",
      "601",
      "675",
      "796"
    ],
    navaja:[
      "182",
      "371",
      "398",
      "407",
      "420",
      "515",
      "638",
      "720",
      "838",
      "839"
    ],
    nomad:[
      "55",
      "169",
      "403",
      "456",
      "557",
      "577",
      "681",
      "700",
      "704",
      "723"
    ],
    paracord:[
      "180",
      "316",
      "403",
      "456",
      "468",
      "497",
      "577",
      "583",
      "585",
      "634"
    ],
    shadowDaggers:[
      "14",
      "56",
      "80",
      "150",
      "355",
      "417",
      "468",
      "609"
    ],
    skeleton:[
      "169",
      "403",
      "449",
      "456",
      "468",
      "497",
      "557",
      "577",
      "583",
      "585",
      "681"
    ],
    stiletto:[
      "182",
      "371",
      "398",
      "407",
      "478",
      "638",
      "749",
      "838",
      "913",
      "928"
    ],
    survival:[
      "169",
      "403",
      "456",
      "468",
      "497",
      "557",
      "577",
      "583",
      "634",
      "681"
    ],
    talon:[
      "3",
      "10",
      "55",
      "74",
      "112",
      "185",
      "222",
      "241",
      "357",
      "387",
      "450",
      "528",
      "575",
      "805",
      "819",
      "837",
      "899",
      "905",
      "923"
    ],
    ursus:[
      "398",
      "494",
      "510",
      "575",
      "618",
      "694",
      "770",
      "838",
      "891",
      "917"
    ],
    ak47: {
      tier1:[
        "151",
        "168",
        "179",
        "321",
        "387",
        "555",
        "592",
        "617",
        "661",
        "670",
        "760",
        "809",
        "828",
        "955"
      ],
      tier2:[
        "532",
        "341",
        "935",
        "541",
        "4",
        "733",
        "310",
        "922",
        "512",
        "519",
        "323",
        "713",
        "715",
        "525",
        "571",
        "985",
        "575",
        "578",
        "708",
        "577",
        "978",
        "586",
        "969",
        "961",
        "557",
        "950",
        "798",
        "996",
        "791",
        "770",
        "775",
        "754",
        "752",
        "381",
        "382",
        "375",
        "363",
        "605",
        "205",
        "823",
        "216",
        "172",
        "627",
        "413",
        "220",
        "228",
        "189",
        "426",
        "429",
        "428",
        "610",
        "611",
        "112",
        "849",
        "844",
        "430",
        "126",
        "122",
        "442",
        "139",
        "862",
        "868",
        "450",
        "147",
        "856",
        "463",
        "689",
        "888",
        "887",
        "878",
        "872",
        "695",
        "698",
        "892",
        "690",
        "647",
        "34",
        "28",
        "32",
        "13",
        "82",
        "74",
        "479",
        "278",
        "103",
        "92",
        "905",
        "256"
      ]
    },
    fiveSeven:[
      "189",
      "278",
      "363",
      "689",
      "690",
      "868",
      "872"
    ],
    mac10:[
      "19",
      "22",
      "80",
      "95",
      "199",
      "239",
      "251",
      "295",
      "313",
      "349",
      "406",
      "503",
      "667",
      "748",
      "807",
      "890",
      "944"
    ]
  };

  setTimeout(() => {
    checkItems();
	  tableObserver();
  }, 5000);
};

const checkItems = () => {
  const tableItems = Array.from(document.querySelector(".mat-table").children[1].children);
  tableItems.forEach((item) => {
    const cellSkinName = item.cells[1];
    const itemName = cellSkinName.querySelector('.prefix').textContent;
    const itemPattern = item.cells[3].textContent;
    const skinName = cellSkinName.textContent;
    const itemUrl = (item.cells[6].querySelector('a').href === "undefined") ? "" : item.cells[6].querySelector('a').href;
    const itemFloat = parseFloat(item.cells[2].textContent);

    // починка ссылок фаз doppler's
    isItemDoppler(itemUrl, item);
    

    // проверка на принадлежности к семейству поверхностной закалки
    isItemCaseHardened(skinName, cellSkinName, itemName, itemPattern);
    

    // проверка на принадлежности к благоприятному для переплаты флоту
    isItemHasCoolFloat(itemFloat, item);
  });
};

const isItemHasCoolFloat = (itemFloat, item) => {
  if ((itemFloat <= 0.01)) {
    item.cells[2].style.color = "rgb(60, 179, 0)";
  }
  else if ((itemFloat >= 0.15) && (itemFloat <= 0.18)) {
    item.cells[2].style.color = "rgb(255, 105, 57)";
  };
};


const isItemCaseHardened = (skinName, item, itemName, itemPattern) => {
  const isBlueGem = (itemName, itemPattern, item) => {
    console.log(itemPattern);
  };


  if (skinName.includes('Case Hardened')) {
    item.style.color = "cyan";
    isBlueGem(itemName, itemPattern, item);
  };
};


const isItemDoppler = (url, item) => {
  if (url.includes('Doppler')) {
    item.cells[6].querySelector('a').href = fixDopplerUrl(url);
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
