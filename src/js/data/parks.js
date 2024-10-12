const parks = [
  {
    id: 1,
    title: "Łazienki Królewskie",
    imageSource: "./images/park_1.min.jpg",
    altText: "Kanał wodny, a nad nim mostek łączący dwie zabudowy pałacu w Łazienkach Królewskich w Warszawie.",
    city: "Warszawa",
    country: "Polska",
    area: "76 000",
    description: "Łazienki Królewskie w Warszawie to malowniczy park pełen zabytków. Warto zobaczyć Pałac na Wyspie, słynący z pięknych wnętrz i otoczenia stawów. W parku znajdują się także Stara Oranżeria z Teatrem Stanisławowskim, a także Pomnik Fryderyka Chopina, który jest miejscem letnich koncertów fortepianowych. Nie można pominąć amfiteatru nad stawem oraz Ogrodu Chińskiego, które razem tworzą wyjątkowy klimat tego miejsca.",
    linkURL: "https://pl.wikipedia.org/wiki/%C5%81azienki_Kr%C3%B3lewskie_w_Warszawie"
  },
  {
    id: 2,
    title: "Park Oliwski im. Adama Mickiewicza",
    imageSource: "./images/park_2.min.jpg",
    altText: "Ogród kwiatowy, z bujnymi różowymi kwiatami na pierwszym planie, otoczony niskimi żywopłotami, prowadzący do centralnej części parku z alejkami po obu stronach, w tle widoczne drzewa w jesiennych kolorach.",
    city: "Gdańsk",
    country: "Polska",
    area: "11 300",
    description: "Park Oliwski im. Adama Mickiewicza w Gdańsku to piękny, zabytkowy park położony w dzielnicy Oliwa. Znany jest z urokliwych alejek, geometrycznych ogrodów i stawów, po których pływają łabędzie. W parku znajduje się Palmiarnia z egzotycznymi roślinami oraz barokowy Pałac Opatów, obecnie mieszczący Muzeum Narodowe. Szczególnie polecany jest spacer po Ogrodzie Francuskim oraz wizyta w Ogrodzie Japońskim, oferującym unikalny klimat i architekturę wschodu.",
    linkURL: "https://pl.wikipedia.org/wiki/Park_Oliwski"
  },
  {
    id: 3,
    title: "Park Szczytnicki",
    imageSource: "./images/park_3.min.jpg",
    altText: "Zbiornik wodny wraz z mostkiem w orientalnym stylu wschodnim w parku Szczytnickim we Wrocławiu.",
    city: "Wrocław",
    country: "Polska",
    area: "100 000",
    description: "Park Szczytnicki we Wrocławiu to jeden z największych i najstarszych parków w mieście, znany z pięknej zieleni i malowniczych zakątków. Jego główną atrakcją jest Ogród Japoński, zaprojektowany w stylu orientalnym, pełen egzotycznych roślin i charakterystycznych mostków. Warto zobaczyć także kościół pw. św. Jana Nepomucena, drewnianą świątynię z XVII wieku. Park oferuje spokojne ścieżki spacerowe, idealne na relaks w otoczeniu przyrody i pięknych krajobrazów.",
    linkURL: "https://pl.wikipedia.org/wiki/Park_Szczytnicki"
  },
  {
    id: 4,
    title: "Park Güell",
    imageSource: "./images/park_4.min.jpg",
    city: "Barcelona",
    altText: "Długa, falista ławka, ozdobiona kolorową ceramiką na pierwszym planie w parku Güell w Barcelonie, a za nią widok na fragment miasta.",
    country: "Hiszpania",
    area: "20 000",
    linkURL: "https://pl.wikipedia.org/wiki/Park_G%C3%BCell",
    description: "Park Güell w Barcelonie to niezwykłe dzieło Antoniego Gaudíego, pełne kolorowych mozaik, fantazyjnych kształtów i organicznych form. W parku warto zobaczyć słynną Salamandrę, zdobioną kolorową ceramiką, oraz długą, falistą ławkę z widokiem na miasto. Spacerując, można podziwiać pawilony przy wejściu, Sala Hipóstila z imponującymi kolumnami i taras z panoramą Barcelony. Park Güell to unikalne połączenie natury i sztuki, które zachwyca kreatywnością i oryginalnością.",
  },
  {
    id: 5,
    title: "Hyde Park",
    imageSource: "./images/park_5.min.jpg",
    altText: "Kamienny posąg w kształcie odwróconej litery U, a za nim zielona trawa, drzewa oraz staw w Hyde Park w Londynie.",
    city: "Londyn",
    country: "Wielka Brytania",
    area: "146 000",
    description: "Hyde Park w Londynie to jeden z najsłynniejszych parków na świecie, rozciągający się na ponad 140 hektarach. Oferuje liczne atrakcje, w tym Serpentine Lake, gdzie można wypożyczyć łódki, oraz Speakers' Corner – miejsce publicznych debat. Park jest idealny na spacery, bieganie i pikniki, a także na odkrywanie zabytków, takich jak Pomnik Księżnej Diany czy Apsley House. Hyde Park jest też miejscem wielu koncertów i wydarzeń kulturalnych przez cały rok.",
    linkURL: "https://pl.wikipedia.org/wiki/Hyde_Park"
  },
  {
    id: 6,
    title: "Tiergarten Park",
    imageSource: "./images/park_6.min.jpg",
    altText: "Widok na Kolumnę Zwyciąstwa w Tiergarten Park w Berlinie, otoczoną drzewami, z dwoma pomnikami rycerzy walczących ze lwami po obu stronach na pierwszym planie.",
    city: "Berlin",
    country: "Niemcy",
    area: "200 000",
    description: "Tiergarten w Berlinie to największy i najstarszy park w mieście, rozciągający się na ponad 200 hektarach. Jest oazą spokoju w sercu stolicy Niemiec, idealną na spacery, pikniki i jazdę na rowerze. Znajduje się tu wiele pomników, w tym Kolumna Zwycięstwa oraz Pomnik Żołnierzy Radzieckich. Park otacza gmachy rządowe, takie jak Reichstag, a jego centralnym punktem jest Großer Stern, gdzie przecinają się główne aleje parku. To ulubione miejsce mieszkańców i turystów.",
    linkURL: "https://en.wikipedia.org/wiki/Tiergarten_(park)"
  },
  {
    id: 7,
    title: "Central Park",
    imageSource: "./images/park_7.min.jpg",
    altText: "Staw w Central Parku w Nowym Jorku, otoczony drzewami, z widokiem na wysokie wieżowce w tle pod niebem z białymi chmurami.",
    city: "Nowy Jork",
    country: "USA",
    area: "341 000",
    description: "Central Park w Nowym Jorku to rozległy, 340-hektarowy park w samym sercu Manhattanu. Stanowi zieloną oazę wśród wieżowców, oferując różnorodne atrakcje, takie jak malownicze jeziora, ogrody, ścieżki spacerowe i rowerowe. Warto odwiedzić Zamek Belvedere, The Great Lawn, czy staw Conservatory Water, gdzie odbywają się regaty modeli łodzi. Park jest także domem dla Central Park Zoo i Teatru Delacorte, a zimą można ślizgać się na lodowisku Wollman Rink.",
    linkURL: "https://pl.wikipedia.org/wiki/Central_Park"
  },
  {
    id: 8,
    title: "Ogrody Tivoli",
    imageSource: "./images/park_8.min.jpg",
    altText: "Nocne niebo, a pod rozświetlona zabudowa w stylu azjatyckim, w tle roller coaster oraz podświetlona na fioletowo wieża widokowa.",
    city: "Kopenhaga",
    country: "Dania",
    area: "50 000",
    description: "Ogrody Tivoli w Kopenhadze to historyczny park rozrywki, otwarty w 1843 roku, położony w centrum miasta. Słynie z unikalnej atmosfery, łączącej tradycyjne atrakcje, takie jak rollercoastery i karuzele, z pięknymi ogrodami i oświetleniem. Warto odwiedzić drewnianą kolejkę górską z 1914 roku oraz przechadzać się po klimatycznych alejach wśród fontann i kwiatów. Tivoli oferuje również koncerty, pokazy świetlne oraz liczne restauracje, czyniąc go idealnym miejscem dla rodzin i miłośników rozrywki.",
    linkURL: "https://pl.wikipedia.org/wiki/Ogrody_Tivoli"
  },
  {
    id: 9,
    title: "Ogród Botaniczny",
    imageSource: "./images/park_9.min.jpg",
    altText: "Teren zielonych drzew, otoczony rzeką, a na drugim planie wysokie platformy w kształcie lejka w kolorze złotym wbijające się w błękitne niebo.",
    city: "Singapur",
    country: "Singapur",
    area: "74 000",
    description: "Ogród Botaniczny w Singapurze to wpisany na listę UNESCO tropikalny park, znany z imponującej różnorodności roślin. Jego główną atrakcją jest Narodowy Ogród Orchidei, gdzie można podziwiać ponad 1000 gatunków tych egzotycznych kwiatów. Warto także odwiedzić Ogród Dziecięcy Jacob Ballas, Ogród Imbirowy oraz Jezioro Łabędzie. To spokojne miejsce, idealne na relaks i obcowanie z naturą, przyciąga zarówno miłośników botaniki, jak i turystów szukających wytchnienia od miejskiego zgiełku.",
    linkURL: "https://pl.wikipedia.org/wiki/Ogrody_botaniczne_w_Singapurze"
  }
];

export default parks;