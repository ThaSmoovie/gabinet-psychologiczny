// Centralne dane treści — łatwa podmiana.
import heroPortrait from "@/assets/hero-portrait.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import footerPlaceholder from "@/assets/footer-placeholder.svg";
import gabinet1Placeholder from "@/assets/gabinet-1-placeholder.svg";
import gabinet2Placeholder from "@/assets/gabinet-2-placeholder.svg";
import contactStill from "@/assets/contact-still.jpg";
import leafMark from "@/assets/leaf-mark.png";

export const ASSETS = {
  heroPortrait,
  aboutPortrait: heroPortrait,
  gabinet1: gabinet1Placeholder,
  gabinet2: gabinet2Placeholder,
  officeInterior,
  footerPlaceholder,
  contactStill,
  leafMark,
};

export const PERSON = {
  name: "Bożena Siminiak",
  title: "psycholog · psychoterapeuta · psychoonkolog",
};

export const CONTACT = {
  phone: "+48 518 474 719",
  phoneHref: "tel:+48518474719",
  email: "bozena.siminiak@gamil.com",
  emailHref: "mailto:bozena.siminiak@gamil.com",
};

export const OBSZARY = [
  {
    title: "Psychoterapia indywidualna, par i rodzin",
    short: "Wsparcie w relacjach, emocjach i odzyskiwaniu równowagi.",
    long: "Prowadzę terapię osób dorosłych, par i rodzin. Wspieram w sytuacjach trudnych, takich jak konflikty w relacjach, wypalenie zawodowe, żałoba czy doświadczenie choroby. Pracuję w nurcie systemowym, integrując techniki poznawczo-behawioralne, by pomóc klientom budować trwałe zmiany i odnaleźć swoje zasoby.",
  },
  {
    title: "Psychoonkologia",
    short: "Wsparcie w radzeniu sobie z chorobą i jej konsekwencjami.",
    long: "Od lat towarzyszę pacjentom z diagnozą onkologiczną i ich rodzinom na każdym etapie choroby – od diagnozy, przez leczenie, aż po powrót do życia po chorobie. Pomagam zmierzyć się z lękiem, stratą, nową tożsamością i zmianami życiowymi, jakie niesie choroba.",
  },
  {
    title: "Wsparcie okołoporodowe",
    short: "Pomoc w emocjach związanych z ciążą i początkiem macierzyństwa.",
    long: "Pracuję z kobietami w ciąży i po porodzie, wspierając je w przeżywaniu emocji, budowaniu relacji z dzieckiem, radzeniu sobie z lękami i depresją poporodową. Udzielam również wsparcia partnerom i rodzinom w tym wymagającym okresie.",
  },
  {
    title: "Kryzys i strata",
    short: "Pomoc w nagłych zmianach, żałobie i trudnych momentach życia.",
    long: "Towarzyszę osobom przeżywającym nagłe zmiany, kryzysy egzystencjalne, rozstania czy żałobę. Pomagam znaleźć nowe znaczenia i siłę do adaptacji, w atmosferze bezpieczeństwa i zrozumienia.",
  },
  {
    title: "Trauma i psychosomatyka",
    short: "Praca z ciałem i psychiką w przewlekłym stresie i traumie.",
    long: "Zajmuję się terapią osób zmagających się z traumą, objawami psychosomatycznymi, zaburzeniami nastroju czy chronicznym stresem. Łączę podejście psychoterapeutyczne z wiedzą z zakresu dietetyki i zdrowia, co pozwala spojrzeć na problem w sposób całościowy.",
  },
];

export const GABINETY = [
  {
    image: ASSETS.gabinet1,
    city: "Poznań",
    address: "ul. Kutrzeby 12a/7, Stare Miasto",
    note: "II piętro · winda",
  },
  {
  image: ASSETS.gabinet2,
  city: "Online",
  address: "",
  note: "Konsultacje online",
  },
];

export const CENNIK = [
  { name: "Psychoterapia indywidualna", price: "200 zł" },
  { name: "Psychoterapia par", price: "250 zł" },
  { name: "Psychoterapia rodzinna", price: "250 zł" },
  { name: "Konsultacja psychologiczna online", price: "180 zł" },
  { name: "Wizyta psychoonkologiczna domowa", price: "300 zł" },
  { name: "Konsultacja dla osoby wspierającej chorującego", price: "200 zł" },
];

export const EDUKACJA = [
  "Uniwersytet SWPS w Poznaniu - Psychologia Kliniczna",
  "Uniwersytet SWPS w Warszawie - Psychoonkologia",
  "Uniwersytet Medyczny w Poznaniu - Dietetyka",
  "Wielkopolskie Towarzystwo Terapii Systemowej - Kurs Zawansowany",
];

// Maks. 850 znaków
export const EDUKACJA_INTRO =
  "Ukończyłam psychologię na Uniwersytecie SWPS w Poznaniu, ze specjalnością psychologia kliniczna. Studia te dały mi solidne podstawy w rozumieniu mechanizmów funkcjonowania człowieka, diagnozie i pomocy psychologicznej osobom dorosłym w kryzysie. Jestem także absolwentką podyplomowych studiów z zakresu Psychoonkologii na Uniwersytecie SWPS w Warszawie, gdzie pogłębiłam wiedzę na temat wsparcia psychologicznego osób z chorobą nowotworową i ich rodzin – na każdym etapie choroby. Dodatkowo ukończyłam Dietetykę i Poradnictwo Żywieniowe na Uniwersytecie Medycznym w Poznaniu, co pozwala mi patrzeć na zdrowie człowieka w sposób holistyczny – łącząc aspekty psychiczne i fizyczne. Obecnie uczestniczę w Kursie Zaawansowanym Psychoterapii Systemowej indywidualnej i rodzinnej, organizowanym przez Wielkopolskie Towarzystwo Terapii Systemowej.";
