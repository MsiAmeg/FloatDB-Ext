window.onload = function () {

  const blueGems = {
    m9:{
      tier1:[
      "11",
      "105",
      "150",
      "354",
      "417",
      "601",
      "675",
      "796"
      ],
      tier2:[]
    },
    bayonet:{
      tier1:[
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
      tier2:[]
    },
    bowie:{
      tier1:[
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
      tier2:[]
    },
    Butterfly:{
      tier1:[
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
      tier2:[]
    },
    classic:{
      tier1:[
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
      tier2:[]
    },
    falchion:{
      tier1:[
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
      tier2:[]
    },
    flip:{
      tier1:[
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
      tier2:[]
    },
    gut:{
      tier1:[
      "165",
      "220",
      "421",
      "549",
      "567",
      "647",
      "928",
      "962"
      ],
      tier2:[]
    },
    huntsman:{
      tier1:[
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
      tier2:[]
    },
    karambit:{
      tier1:[
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
      tier2:[]
    },
    navaja:{
      tier1:[
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
      tier2:[]
    },
    nomad:{
      tier1:[
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
      tier2:[]
    },
    paracord:{
      tier1:[
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
      tier2:[
        "14",
        "55",
        "58",
        "84",
        "116",
        "167",
        "169",
        "281",
        "288",
        "294",
        "345",
        "351",
        "372",
        "383",
        "404",
        "447",
        "449",
        "501",
        "502",
        "504",
        "557",
        "590",
        "606",
        "640",
        "668",
        "680",
        "681",
        "812",
        "890",
        "910",
        "922"
      ]
    },
    daggers:{
      tier1:[
      "14",
      "56",
      "80",
      "150",
      "355",
      "417",
      "468",
      "609"
      ],
      tier2:[]
    },
    skeleton:{
      tier1:[
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
      tier2:[
      "14",
      "55",
      "180",
      "281",
      "288",
      "316",
      "383",
      "447",
      "516",
      "556",
      "634",
      "640",
      "651",
      "668",
      "700",
      "704",
      "850"
      ]
    },
    stiletto:{
      tier1:[
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
      tier2:[
      "7",
      "92",
      "110",
      "194",
      "214",
      "322",
      "330",
      "358",
      "396",
      "420",
      "494",
      "515",
      "534",
      "612",
      "655",
      "839",
      "846",
      "877",
      "885",
      "965"
      ]
    },
    survival:{
      tier1:[
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
      tier2:[
      "14",
      "55",
      "58",
      "77",
      "124",
      "127",
      "157",
      "166",
      "167",
      "170",
      "179",
      "180",
      "281",
      "288",
      "294",
      "316",
      "345",
      "351",
      "372",
      "383",
      "447",
      "449",
      "495",
      "496",
      "516",
      "529",
      "556",
      "585",
      "590",
      "606",
      "607",
      "619",
      "623",
      "628",
      "636",
      "640",
      "651",
      "668",
      "680",
      "698",
      "700",
      "704",
      "812",
      "850",
      "890",
      "916",
      "922",
      "941",
      "961"
      ]
    },
    talon:{
      tier1:[
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
      tier2:[
        "4",
        "14",
        "19",
        "32",
        "34",
        "46",
        "56",
        "70",
        "80",
        "82",
        "95",
        "114",
        "130",
        "139",
        "170",
        "176",
        "180",
        "186",
        "199",
        "236",
        "292",
        "304",
        "311",
        "313",
        "316",
        "341",
        "351",
        "365",
        "367",
        "368",
        "379",
        "411",
        "453",
        "468",
        "473",
        "506",
        "570",
        "602",
        "621",
        "657",
        "713",
        "761",
        "815",
        "830",
        "866",
        "873",
        "891",
        "917",
        "960"
      ]
    },
    ursus:{
      tier1:[
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
      tier2:[
        "27",
        "29",
        "38",
        "39",
        "42",
        "43",
        "53",
        "61",
        "87",
        "92",
        "98",
        "110",
        "112",
        "130",
        "175",
        "182",
        "194",
        "214",
        "244",
        "263",
        "283",
        "305",
        "330",
        "335",
        "347",
        "358",
        "371",
        "396",
        "407",
        "414",
        "426",
        "457",
        "468",
        "474",
        "478",
        "488",
        "499",
        "510",
        "534",
        "612",
        "629",
        "631",
        "638",
        "643",
        "652",
        "682",
        "702",
        "703",
        "708",
        "714",
        "717",
        "721",
        "753",
        "767",
        "768",
        "798",
        "800",
        "808",
        "811",
        "836",
        "841",
        "844",
        "854",
        "858",
        "868",
        "870",
        "881",
        "885",
        "889",
        "894",
        "907",
        "913",
        "924",
        "928",
        "937",
        "944",
        "964",
        "965",
        "974",
        "985",
        "987"
      ]
    },
    "ak-47": {
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
    "five-seven":{
      tier1:[
        "189",
        "278",
        "363",
        "689",
        "690",
        "868",
        "872"
      ],
      tier2:[]
    },
    "mac-10":{
      tier1:[
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
      ],
      tier2:[]
    },
  };

  setTimeout(() => {
    checkItems(blueGems);
	  tableObserver(blueGems);
  }, 5000);
};

const checkItems = (blueGems) => {
  const tableItems = Array.from(document.querySelector(".mat-table").children[1].children);
  tableItems.forEach((item) => {
    const cellSkinName = item.cells[1];
    const itemName = cellSkinName.querySelector('.prefix').textContent;
    const cellSkinPattern = item.cells[3];
    const itemPattern = item.cells[3].textContent;
    const skinName = cellSkinName.textContent;
    const itemUrl = (item.cells[6].querySelector('a').href === "undefined") ? "" : item.cells[6].querySelector('a').href;
    const itemFloat = parseFloat(item.cells[2].textContent);

    // починка ссылок фаз doppler's
    isItemDoppler(itemUrl, item);
    

    // проверка на принадлежности к семейству поверхностной закалки
    isItemCaseHardened(skinName, cellSkinName, itemName, itemPattern, cellSkinPattern, blueGems);
    

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


const isItemCaseHardened = (skinName, cellSkinName, itemName, itemPattern, cellSkinPattern, blueGems) => {
  const isBlueGem = (itemName, itemPattern, cellSkinPattern) => {
    const mathcedWeapon = whatWeapon(itemName, blueGems);
    if (mathcedWeapon !== "none"){
      const tier1 = Object.values(blueGems[mathcedWeapon]["tier1"]).find(pattern => pattern == itemPattern);
      const tier2 = Object.values(blueGems[mathcedWeapon]["tier2"]).find(pattern => pattern == itemPattern);
      
      if (typeof tier1 !== "undefined"){
        cellSkinPattern.style.color = "cyan";
      };

      if (typeof tier2 !== "undefined"){
        cellSkinPattern.style.color = "yellow";
      };
    };
  };

  const whatWeapon = (itemName, blueGems) => {
    for(weapon in blueGems){
      if (itemName.toLowerCase().includes(weapon)){
        return weapon;
      };
    };
    return "none";
  };

  if (skinName.includes('Case Hardened')) {
    cellSkinName.style.color = "cyan";
    isBlueGem(itemName, itemPattern, cellSkinPattern);
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

const tableObserver = (blueGems) => {
  const target = document.querySelector(".results");

  const observer = new MutationObserver((entries) => {
    if (entries[0].target.classList.contains("search-container") || entries[0].target.tagName == "TBODY") {
		checkItems(blueGems);
    }
  });

  const config = {
    attributes: false,
    childList: true,
    subtree: true,
  };

  observer.observe(target, config);
};
