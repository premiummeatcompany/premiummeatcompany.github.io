(function() {
  "use strict";

  const defaultLanguage = "en";
  const supportedLanguages = ["en", "de", "ja", "ro", "sk", "hu"];

  const translations = {
    en: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Company supplies high-quality fattened duck liver, legs, drumsticks and gizzard to partners across Hungary and the EU.",
      "language.label": "Language",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.products": "Products",
      "nav.events": "Events",
      "nav.contact": "Contact",
      "hero.title": "Premium Meat Company",
      typedItems: "Finest Fattened Duck Liver, Select Duck Legs, Prime Drumsticks, Traditional Gizzard",
      "about.title": "About us",
      "about.body": "Premium Meat Company Kft. is a dynamic wholesaler of high-quality meat and fish products, serving partners throughout Hungary and the European Union. Our core specialty lies in premium duck products, available both fresh and frozen, sourced and handled with exceptional care. Beyond duck, we also offer a wide selection of processed meat products, ensuring consistent quality and reliable supply for our clients.",
      "products.title": "Products",
      "products.liver.name": "Fattened Duck Liver",
      "products.legs.name": "Fattened Duck Legs",
      "products.gizzard.name": "Fattened Gizzard",
      "products.whole.name": "Fattened Whole Duck",
      "products.whole.note": "Optionally With 600+ Liver",
      "products.drumsticks.name": "Fattened Drum Sticks",
      "products.breast.name": "Fattened Frozen Duck Breast",
      "events.title": "Events",
      "events.omek": "OMEK - Hungarian Food Summit 2025",
      "contact.title": "Contact",
      "contact.address.title": "Address",
      "contact.address.value": "1. Fo street, Tok, 2073",
      "contact.phone.title": "Call Us",
      "contact.email.title": "Email Us",
      "form.name": "Your Name",
      "form.email": "Your Email",
      "form.phone": "Your Phone",
      "form.subject": "Subject",
      "form.message": "Message",
      "form.loading": "Loading",
      "form.sent": "Your message has been sent. Thank you!",
      "form.submit": "Send Message",
      "footer.copyright": "Copyright",
      "footer.rights": "All Rights Reserved"
    },
    de: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Company liefert hochwertige Stopfleber, Entenkeulen, Unterkeulen und Maegen an Partner in Ungarn und der EU.",
      "language.label": "Sprache",
      "nav.home": "Start",
      "nav.about": "Uber uns",
      "nav.products": "Produkte",
      "nav.events": "Veranstaltungen",
      "nav.contact": "Kontakt",
      "hero.title": "Premium Meat Company",
      typedItems: "Feinste Entenstopfleber, Ausgewahlte Entenkeulen, Erstklassige Unterkeulen, Traditionelle Entenmagen",
      "about.title": "Uber uns",
      "about.body": "Premium Meat Company Kft. ist ein dynamischer Grosshandler fur hochwertige Fleisch- und Fischprodukte und beliefert Partner in ganz Ungarn und in der Europaischen Union. Unser Schwerpunkt liegt auf Premium-Entenprodukten, frisch und tiefgekuhlt, die mit besonderer Sorgfalt bezogen und verarbeitet werden. Daruber hinaus bieten wir eine breite Auswahl an verarbeiteten Fleischprodukten und sichern unseren Kunden konstante Qualitat sowie zuverlassige Lieferungen.",
      "products.title": "Produkte",
      "products.liver.name": "Entenstopfleber",
      "products.legs.name": "Entenkeulen von Mastenten",
      "products.gizzard.name": "Entenmagen von Mastenten",
      "products.whole.name": "Ganze Mastente",
      "products.whole.note": "Optional mit Leber 600 g+",
      "products.drumsticks.name": "Entenunterkeulen",
      "products.breast.name": "Gefrorene Entenbrust",
      "events.title": "Veranstaltungen",
      "events.omek": "OMEK - Hungarian Food Summit 2025",
      "contact.title": "Kontakt",
      "contact.address.title": "Adresse",
      "contact.address.value": "Fő utca 1., Tök, 2073",
      "contact.phone.title": "Rufen Sie uns an",
      "contact.email.title": "E-Mail",
      "form.name": "Ihr Name",
      "form.email": "Ihre E-Mail",
      "form.phone": "Ihre Telefonnummer",
      "form.subject": "Betreff",
      "form.message": "Nachricht",
      "form.loading": "Wird geladen",
      "form.sent": "Ihre Nachricht wurde gesendet. Vielen Dank!",
      "form.submit": "Nachricht senden",
      "footer.copyright": "Copyright",
      "footer.rights": "Alle Rechte vorbehalten"
    },
    ja: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Companyは、高品質な肥育鴨フォアグラ、もも肉、ドラムスティック、砂肝をハンガリーおよびEUの取引先に供給しています。",
      "language.label": "言語",
      "nav.home": "ホーム",
      "nav.about": "会社情報",
      "nav.products": "製品",
      "nav.events": "イベント",
      "nav.contact": "お問い合わせ",
      "hero.title": "Premium Meat Company",
      typedItems: "最高品質の肥育鴨フォアグラ, 厳選された鴨もも肉, 上質なドラムスティック, 伝統的な砂肝",
      "about.title": "会社情報",
      "about.body": "Premium Meat Company Kft.は、高品質な食肉および魚介製品を扱う卸売会社で、ハンガリー全土と欧州連合内のパートナーに供給しています。主力は、丁寧に調達・取り扱われたプレミアム鴨製品で、生鮮品と冷凍品の両方をご用意しています。鴨製品に加え、加工肉製品も幅広く取り扱い、お客様に安定した品質と確かな供給をお届けします。",
      "products.title": "製品",
      "products.liver.name": "肥育鴨フォアグラ",
      "products.legs.name": "肥育鴨もも肉",
      "products.gizzard.name": "肥育鴨砂肝",
      "products.whole.name": "肥育丸鴨",
      "products.whole.note": "600g以上のレバー付きも可能",
      "products.drumsticks.name": "肥育鴨ドラムスティック",
      "products.breast.name": "冷凍肥育鴨むね肉",
      "events.title": "イベント",
      "events.omek": "OMEK - Hungarian Food Summit 2025",
      "contact.title": "お問い合わせ",
      "contact.address.title": "住所",
      "contact.address.value": "2073 Tök, Fő utca 1.",
      "contact.phone.title": "電話",
      "contact.email.title": "メール",
      "form.name": "お名前",
      "form.email": "メールアドレス",
      "form.phone": "電話番号",
      "form.subject": "件名",
      "form.message": "メッセージ",
      "form.loading": "送信中",
      "form.sent": "メッセージが送信されました。ありがとうございます。",
      "form.submit": "送信",
      "footer.copyright": "著作権",
      "footer.rights": "無断転載を禁じます"
    },
    ro: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Company furnizeaza ficat de rata indopata, pulpe, ciocanele si pipote de calitate superioara partenerilor din Ungaria si UE.",
      "language.label": "Limba",
      "nav.home": "Acasa",
      "nav.about": "Despre noi",
      "nav.products": "Produse",
      "nav.events": "Evenimente",
      "nav.contact": "Contact",
      "hero.title": "Premium Meat Company",
      typedItems: "Ficat premium de rata indopata, Pulpe de rata selectionate, Ciocanele de prima calitate, Pipote traditionale",
      "about.title": "Despre noi",
      "about.body": "Premium Meat Company Kft. este un distribuitor dinamic de produse din carne si peste de inalta calitate, care deserveste parteneri din Ungaria si din Uniunea Europeana. Specialitatea noastra principala o reprezinta produsele premium din rata, disponibile proaspete si congelate, selectate si manipulate cu grija deosebita. Pe langa produsele din rata, oferim si o gama larga de produse procesate din carne, asigurand calitate constanta si aprovizionare fiabila pentru clientii nostri.",
      "products.title": "Produse",
      "products.liver.name": "Ficat de rata indopata",
      "products.legs.name": "Pulpe de rata indopata",
      "products.gizzard.name": "Pipote de rata indopata",
      "products.whole.name": "Rata intreaga indopata",
      "products.whole.note": "Optional cu ficat de 600 g+",
      "products.drumsticks.name": "Ciocanele de rata indopata",
      "products.breast.name": "Piept de rata indopata congelat",
      "events.title": "Evenimente",
      "events.omek": "OMEK - Hungarian Food Summit 2025",
      "contact.title": "Contact",
      "contact.address.title": "Adresa",
      "contact.address.value": "Strada Fő nr. 1, Tök, 2073",
      "contact.phone.title": "Sunati-ne",
      "contact.email.title": "Email",
      "form.name": "Numele dvs.",
      "form.email": "Emailul dvs.",
      "form.phone": "Telefonul dvs.",
      "form.subject": "Subiect",
      "form.message": "Mesaj",
      "form.loading": "Se incarca",
      "form.sent": "Mesajul dvs. a fost trimis. Va multumim!",
      "form.submit": "Trimiteti mesajul",
      "footer.copyright": "Copyright",
      "footer.rights": "Toate drepturile rezervate"
    },
    sk: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Company dodava kvalitnu pecen z vykrmenej kacice, stehna, dolne stehna a zaludky partnerom v Madarsku a EU.",
      "language.label": "Jazyk",
      "nav.home": "Domov",
      "nav.about": "O nas",
      "nav.products": "Produkty",
      "nav.events": "Podujatia",
      "nav.contact": "Kontakt",
      "hero.title": "Premium Meat Company",
      typedItems: "Najjemnejsia pecen z vykrmenej kacice, Vyberove kacacie stehna, Prvotriedne dolne stehna, Tradicne kacacie zaludky",
      "about.title": "O nas",
      "about.body": "Premium Meat Company Kft. je dynamicky velkoobchod s kvalitnymi masovymi a rybimi produktmi, ktory obsluhuje partnerov v celom Madarsku a v Europskej unii. Nase hlavne zameranie su premiove kacacie produkty, cerstve aj mrazene, ziskavane a spracuvane s mimoriadnou starostlivostou. Okrem kacacich produktov ponukame aj siroky vyber spracovanych masovych vyrobkov a zakaznikom zabezpecujeme stabilnu kvalitu a spolahlive dodavky.",
      "products.title": "Produkty",
      "products.liver.name": "Pecen z vykrmenej kacice",
      "products.legs.name": "Stehna z vykrmenej kacice",
      "products.gizzard.name": "Zaludky z vykrmenej kacice",
      "products.whole.name": "Cela vykrmena kacica",
      "products.whole.note": "Volitelne s pecenou 600 g+",
      "products.drumsticks.name": "Dolne stehna z vykrmenej kacice",
      "products.breast.name": "Mrazene prsia z vykrmenej kacice",
      "events.title": "Podujatia",
      "events.omek": "OMEK - Hungarian Food Summit 2025",
      "contact.title": "Kontakt",
      "contact.address.title": "Adresa",
      "contact.address.value": "Fő utca 1., Tök, 2073",
      "contact.phone.title": "Zavolajte nam",
      "contact.email.title": "Email",
      "form.name": "Vase meno",
      "form.email": "Vas email",
      "form.phone": "Vas telefon",
      "form.subject": "Predmet",
      "form.message": "Sprava",
      "form.loading": "Nacitava sa",
      "form.sent": "Vasa sprava bola odoslana. Dakujeme!",
      "form.submit": "Odoslat spravu",
      "footer.copyright": "Copyright",
      "footer.rights": "Vsetky prava vyhradene"
    },
    hu: {
      metaTitle: "Premium Meat Company",
      metaDescription: "A Premium Meat Company minosegi hizott kacsamajat, combot, alsocombot es zuzakat szallit magyarorszagi es EU-s partnereinek.",
      "language.label": "Nyelv",
      "nav.home": "Fooldal",
      "nav.about": "Rolunk",
      "nav.products": "Termekek",
      "nav.events": "Esemenyek",
      "nav.contact": "Kapcsolat",
      "hero.title": "Premium Meat Company",
      typedItems: "Valogatott hizott kacsamaj, Minosegi kacsacomb, Elso osztalyu alsocomb, Hagyomanyos kacsazuza",
      "about.title": "Rolunk",
      "about.body": "A Premium Meat Company Kft. dinamikus nagykereskedo, amely kiváló minosegu hus- es haltermekekkel latja el partnereit Magyarorszagon es az Europai Unioban. Fo szakteruletunk a premium kacsatermekek kore, friss es fagyasztott valtozatban, gondos beszerzessel es kezelessel. A kacsatermekeken tul feldolgozott hustermekek szeles valasztekát is kinaljuk, allando minoseget es megbizhato ellatast biztositva ugyfeleinknek.",
      "products.title": "Termekek",
      "products.liver.name": "Hizott kacsamaj",
      "products.legs.name": "Hizott kacsacomb",
      "products.gizzard.name": "Hizott kacsazuza",
      "products.whole.name": "Egesz hizott kacsa",
      "products.whole.note": "Opcionálisan 600 g+ majjal",
      "products.drumsticks.name": "Hizott kacsa alsocomb",
      "products.breast.name": "Fagyasztott hizott kacsamell",
      "events.title": "Esemenyek",
      "events.omek": "OMEK - Magyar Elelmiszeripari Csucstalalkozo 2025",
      "contact.title": "Kapcsolat",
      "contact.address.title": "Cim",
      "contact.address.value": "2073 Tök, Fő utca 1.",
      "contact.phone.title": "Telefon",
      "contact.email.title": "Email",
      "form.name": "Nev",
      "form.email": "Email-cim",
      "form.phone": "Telefonszam",
      "form.subject": "Targy",
      "form.message": "Uzenet",
      "form.loading": "Kuldes folyamatban",
      "form.sent": "Az uzenetet elkuldtuk. Koszonjuk!",
      "form.submit": "Uzenet kuldese",
      "footer.copyright": "Szerzoi jog",
      "footer.rights": "Minden jog fenntartva"
    }
  };

  function getStoredLanguage() {
    try {
      return localStorage.getItem("pmc-language");
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem("pmc-language", language);
    } catch (error) {
      // Persisting the preference is a convenience; the page still works without it.
    }
  }

  function normalizeLanguage(language) {
    if (!language) return null;
    const base = language.toLowerCase().split("-")[0];
    return supportedLanguages.includes(base) ? base : null;
  }

  function detectLanguage() {
    const storedLanguage = normalizeLanguage(getStoredLanguage());
    if (storedLanguage) return storedLanguage;

    const browserLanguages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    for (const language of browserLanguages) {
      const normalized = normalizeLanguage(language);
      if (normalized) return normalized;
    }

    return defaultLanguage;
  }

  function translate(language) {
    const selectedLanguage = supportedLanguages.includes(language) ? language : defaultLanguage;
    const dictionary = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.title = dictionary.metaTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dictionary.metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dictionary.metaTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", dictionary.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    const typedElement = document.querySelector(".typed");
    if (typedElement) {
      typedElement.setAttribute("data-typed-items", dictionary.typedItems);
    }

    const languageSelect = document.querySelector("#language-select");
    if (languageSelect) {
      languageSelect.value = selectedLanguage;
      languageSelect.setAttribute("aria-label", dictionary["language.label"]);
    }

    window.dispatchEvent(new CustomEvent("pmc:languagechange", {
      detail: {
        language: selectedLanguage
      }
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.querySelector("#language-select");
    const initialLanguage = detectLanguage();

    translate(initialLanguage);

    if (languageSelect) {
      languageSelect.addEventListener("change", (event) => {
        const selectedLanguage = normalizeLanguage(event.target.value) || defaultLanguage;
        storeLanguage(selectedLanguage);
        translate(selectedLanguage);
      });
    }
  });

  window.pmcI18n = {
    setLanguage: translate,
    languages: supportedLanguages
  };
})();
