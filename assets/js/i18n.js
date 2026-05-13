(function() {
  "use strict";

  const defaultLanguage = "en";
  const supportedLanguages = ["en", "de", "ja", "ro", "sk", "sl", "hu"];

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
      "events.omek": "OMÉK - Hungarian Food Summit 2025",
      "contact.title": "Contact",
      "contact.address.title": "Address",
      "contact.address.value": "1. Fő street, Tök, 2073",
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
      metaDescription: "Premium Meat Company liefert hochwertige Stopfleber, Entenkeulen, Unterkeulen und Mägen an Partner in Ungarn und der EU.",
      "language.label": "Sprache",
      "nav.home": "Start",
      "nav.about": "Über uns",
      "nav.products": "Produkte",
      "nav.events": "Veranstaltungen",
      "nav.contact": "Kontakt",
      "hero.title": "Premium Meat Company",
      typedItems: "Feinste Entenstopfleber, Ausgewählte Entenkeulen, Erstklassige Unterkeulen, Traditionelle Entenmägen",
      "about.title": "Über uns",
      "about.body": "Premium Meat Company Kft. ist ein dynamischer Großhändler für hochwertige Fleisch- und Fischprodukte und beliefert Partner in ganz Ungarn und in der Europäischen Union. Unser Schwerpunkt liegt auf Premium-Entenprodukten, frisch und tiefgekühlt, die mit besonderer Sorgfalt bezogen und verarbeitet werden. Darüber hinaus bieten wir eine breite Auswahl an verarbeiteten Fleischprodukten und sichern unseren Kunden konstante Qualität sowie zuverlässige Lieferungen.",
      "products.title": "Produkte",
      "products.liver.name": "Entenstopfleber",
      "products.legs.name": "Entenkeulen von Mastenten",
      "products.gizzard.name": "Entenmagen von Mastenten",
      "products.whole.name": "Ganze Mastente",
      "products.whole.note": "Optional mit Leber 600 g+",
      "products.drumsticks.name": "Entenunterkeulen",
      "products.breast.name": "Gefrorene Entenbrust",
      "events.title": "Veranstaltungen",
      "events.omek": "OMÉK - Hungarian Food Summit 2025",
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
      "events.omek": "OMÉK - Hungarian Food Summit 2025",
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
      metaDescription: "Premium Meat Company furnizează ficat de rață îndopată, pulpe, ciocănele și pipote de calitate superioară partenerilor din Ungaria și UE.",
      "language.label": "Limba",
      "nav.home": "Acasă",
      "nav.about": "Despre noi",
      "nav.products": "Produse",
      "nav.events": "Evenimente",
      "nav.contact": "Contact",
      "hero.title": "Premium Meat Company",
      typedItems: "Ficat premium de rață îndopată, Pulpe de rață selecționate, Ciocănele de primă calitate, Pipote tradiționale",
      "about.title": "Despre noi",
      "about.body": "Premium Meat Company Kft. este un distribuitor dinamic de produse din carne și pește de înaltă calitate, care deservește parteneri din Ungaria și din Uniunea Europeană. Specialitatea noastră principală o reprezintă produsele premium din rață, disponibile proaspete și congelate, selectate și manipulate cu grijă deosebită. Pe lângă produsele din rață, oferim și o gamă largă de produse procesate din carne, asigurând calitate constantă și aprovizionare fiabilă pentru clienții noștri.",
      "products.title": "Produse",
      "products.liver.name": "Ficat de rață îndopată",
      "products.legs.name": "Pulpe de rață îndopată",
      "products.gizzard.name": "Pipote de rață îndopată",
      "products.whole.name": "Rață întreagă îndopată",
      "products.whole.note": "Opțional cu ficat de 600 g+",
      "products.drumsticks.name": "Ciocănele de rață îndopată",
      "products.breast.name": "Piept de rață îndopată congelat",
      "events.title": "Evenimente",
      "events.omek": "OMÉK - Hungarian Food Summit 2025",
      "contact.title": "Contact",
      "contact.address.title": "Adresa",
      "contact.address.value": "Strada Fő nr. 1, Tök, 2073",
      "contact.phone.title": "Sunați-ne",
      "contact.email.title": "Email",
      "form.name": "Numele dvs.",
      "form.email": "Emailul dvs.",
      "form.phone": "Telefonul dvs.",
      "form.subject": "Subiect",
      "form.message": "Mesaj",
      "form.loading": "Se încarcă",
      "form.sent": "Mesajul dvs. a fost trimis. Vă mulțumim!",
      "form.submit": "Trimiteți mesajul",
      "footer.copyright": "Copyright",
      "footer.rights": "Toate drepturile rezervate"
    },
    sk: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Company dodáva kvalitnú pečeň z vykŕmenej kačice, stehná, dolné stehná a žalúdky partnerom v Maďarsku a EÚ.",
      "language.label": "Jazyk",
      "nav.home": "Domov",
      "nav.about": "O nás",
      "nav.products": "Produkty",
      "nav.events": "Podujatia",
      "nav.contact": "Kontakt",
      "hero.title": "Premium Meat Company",
      typedItems: "Najjemnejšia pečeň z vykŕmenej kačice, Výberové kačacie stehná, Prvotriedne dolné stehná, Tradičné kačacie žalúdky",
      "about.title": "O nás",
      "about.body": "Premium Meat Company Kft. je dynamický veľkoobchod s kvalitnými mäsovými a rybími produktmi, ktorý obsluhuje partnerov v celom Maďarsku a v Európskej únii. Naše hlavné zameranie sú prémiové kačacie produkty, čerstvé aj mrazené, získavané a spracúvané s mimoriadnou starostlivosťou. Okrem kačacích produktov ponúkame aj široký výber spracovaných mäsových výrobkov a zákazníkom zabezpečujeme stabilnú kvalitu a spoľahlivé dodávky.",
      "products.title": "Produkty",
      "products.liver.name": "Pečeň z vykŕmenej kačice",
      "products.legs.name": "Stehná z vykŕmenej kačice",
      "products.gizzard.name": "Žalúdky z vykŕmenej kačice",
      "products.whole.name": "Celá vykŕmená kačica",
      "products.whole.note": "Voliteľne s pečeňou 600 g+",
      "products.drumsticks.name": "Dolné stehná z vykŕmenej kačice",
      "products.breast.name": "Mrazené prsia z vykŕmenej kačice",
      "events.title": "Podujatia",
      "events.omek": "OMÉK - Hungarian Food Summit 2025",
      "contact.title": "Kontakt",
      "contact.address.title": "Adresa",
      "contact.address.value": "Fő utca 1., Tök, 2073",
      "contact.phone.title": "Zavolajte nám",
      "contact.email.title": "Email",
      "form.name": "Vaše meno",
      "form.email": "Váš email",
      "form.phone": "Váš telefón",
      "form.subject": "Predmet",
      "form.message": "Správa",
      "form.loading": "Načítava sa",
      "form.sent": "Vaša správa bola odoslaná. Ďakujeme!",
      "form.submit": "Odoslať správu",
      "footer.copyright": "Copyright",
      "footer.rights": "Všetky práva vyhradené"
    },
    sl: {
      metaTitle: "Premium Meat Company",
      metaDescription: "Premium Meat Company dobavlja visokokakovostna jetra pitanih rac, stegna, krače in želodčke partnerjem na Madžarskem in v EU.",
      "language.label": "Jezik",
      "nav.home": "Domov",
      "nav.about": "O nas",
      "nav.products": "Izdelki",
      "nav.events": "Dogodki",
      "nav.contact": "Kontakt",
      "hero.title": "Premium Meat Company",
      typedItems: "Najboljša jetra pitanih rac, Izbrana račja stegna, Prvovrstne račje krače, Tradicionalni račji želodčki",
      "about.title": "O nas",
      "about.body": "Premium Meat Company Kft. je dinamičen veletrgovec z visokokakovostnimi mesnimi in ribjimi izdelki, ki oskrbuje partnerje po vsej Madžarski in Evropski uniji. Naša glavna posebnost so premium račji izdelki, sveži in zamrznjeni, pridobljeni in obdelani z izjemno skrbnostjo. Poleg račjih izdelkov ponujamo tudi širok izbor predelanih mesnih izdelkov ter strankam zagotavljamo stalno kakovost in zanesljivo dobavo.",
      "products.title": "Izdelki",
      "products.liver.name": "Jetra pitane race",
      "products.legs.name": "Stegna pitane race",
      "products.gizzard.name": "Želodčki pitane race",
      "products.whole.name": "Cela pitana raca",
      "products.whole.note": "Po želji z jetri 600 g+",
      "products.drumsticks.name": "Krače pitane race",
      "products.breast.name": "Zamrznjene prsi pitane race",
      "events.title": "Dogodki",
      "events.omek": "OMÉK - Hungarian Food Summit 2025",
      "contact.title": "Kontakt",
      "contact.address.title": "Naslov",
      "contact.address.value": "Fő utca 1., Tök, 2073",
      "contact.phone.title": "Pokličite nas",
      "contact.email.title": "Email",
      "form.name": "Vaše ime",
      "form.email": "Vaš email",
      "form.phone": "Vaša telefonska številka",
      "form.subject": "Zadeva",
      "form.message": "Sporočilo",
      "form.loading": "Nalaganje",
      "form.sent": "Vaše sporočilo je bilo poslano. Hvala!",
      "form.submit": "Pošlji sporočilo",
      "footer.copyright": "Avtorske pravice",
      "footer.rights": "Vse pravice pridržane"
    },
    hu: {
      metaTitle: "Premium Meat Company",
      metaDescription: "A Premium Meat Company minőségi hízott kacsamájat, combot, alsócombot és zúzát szállít magyarországi és EU-s partnereinek.",
      "language.label": "Nyelv",
      "nav.home": "Főoldal",
      "nav.about": "Rólunk",
      "nav.products": "Termékek",
      "nav.events": "Események",
      "nav.contact": "Kapcsolat",
      "hero.title": "Premium Meat Company",
      typedItems: "Válogatott hízott kacsamáj, Minőségi kacsacomb, Első osztályú alsócomb, Hagyományos kacsazúza",
      "about.title": "Rólunk",
      "about.body": "A Premium Meat Company Kft. dinamikus nagykereskedő, amely kiváló minőségű hús- és haltermékekkel látja el partnereit Magyarországon és az Európai Unióban. Fő szakterületünk a prémium kacsatermékek köre, friss és fagyasztott változatban, gondos beszerzéssel és kezeléssel. A kacsatermékeken túl feldolgozott hústermékek széles választékát is kínáljuk, állandó minőséget és megbízható ellátást biztosítva ügyfeleinknek.",
      "products.title": "Termékek",
      "products.liver.name": "Hízott kacsamáj",
      "products.legs.name": "Hízott kacsacomb",
      "products.gizzard.name": "Hízott kacsazúza",
      "products.whole.name": "Egész hízott kacsa",
      "products.whole.note": "Opcionálisan 600 g+ májjal",
      "products.drumsticks.name": "Hízott kacsa alsócomb",
      "products.breast.name": "Fagyasztott hízott kacsamell",
      "events.title": "Események",
      "events.omek": "OMÉK - Magyar Élelmiszeripari Csúcstalálkozó 2025",
      "contact.title": "Kapcsolat",
      "contact.address.title": "Cím",
      "contact.address.value": "2073 Tök, Fő utca 1.",
      "contact.phone.title": "Telefon",
      "contact.email.title": "Email",
      "form.name": "Név",
      "form.email": "Email-cím",
      "form.phone": "Telefonszám",
      "form.subject": "Tárgy",
      "form.message": "Üzenet",
      "form.loading": "Küldés folyamatban",
      "form.sent": "Az üzenetet elküldtük. Köszönjük!",
      "form.submit": "Üzenet küldése",
      "footer.copyright": "Szerzői jog",
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
