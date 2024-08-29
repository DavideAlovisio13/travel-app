const db = [
  {
    "id": 1,
    "viaggio": "Italia",
    "inizio": "2022-01-01",
    "fine": "2022-12-31",
    "luoghi": [
      {
        "id": 0,
        "nome": "Colosseo",
        "città": "Roma",
        "descrizione": "Il Colosseo è un antico anfiteatro romano, il più grande mai costruito, e uno dei monumenti più iconici d’Italia.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 41.8902,
          "longitudine": 12.4922
        },
        "immagine": "/images/Italia/Colosseo.jpg"
      },
      {
        "id": 1,
        "nome": "Duomo di Firenze",
        "città": "Firenze",
        "descrizione": "La Cattedrale di Santa Maria del Fiore, conosciuta come il Duomo di Firenze, è famosa per la sua cupola progettata da Brunelleschi.",
        "categoria": "Religioso",
        "coordinate": {
          "latitudine": 43.7731,
          "longitudine": 11.256
        },
        "immagine": "/images/Italia/firenze.JPG"
      },
      {
        "id": 2,
        "nome": "Canal Grande",
        "città": "Venezia",
        "descrizione": "Il Canal Grande è il principale canale di Venezia, famoso per i suoi palazzi storici e i pittoreschi ponti.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 45.4408,
          "longitudine": 12.3155
        },
        "immagine": "/images/Italia/canal-grande-venezia.jpg"
      },
      {
        "id": 3,
        "nome": "Pompei",
        "città": "Pompei",
        "descrizione": "Pompei è un’antica città romana sepolta dall’eruzione del Vesuvio nel 79 d.C., oggi un sito archeologico di grande importanza.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 40.746,
          "longitudine": 14.4989
        },
        "immagine": "/images/Italia/POMPEI.webp"
      },
      {
        "id": 4,
        "nome": "Torre di Pisa",
        "città": "Pisa",
        "descrizione": "La Torre Pendente di Pisa è uno dei monumenti più riconoscibili al mondo, famosa per la sua inclinazione.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 43.723,
          "longitudine": 10.3966
        },
        "immagine": "/images/Italia/torre_di_pisa.jpg"
      },
      {
        "id": 5,
        "nome": "Lago di Como",
        "città": "Como",
        "descrizione": "Il Lago di Como è noto per i suoi paesaggi mozzafiato, le ville storiche e i pittoreschi villaggi lungo le sue rive.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 45.9237,
          "longitudine": 9.2572
        },
        "immagine": "/images/Italia/lago-como.jpg"
      },
      {
        "id": 6,
        "nome": "Costiera Amalfitana",
        "città": "Amalfi",
        "descrizione": "La Costiera Amalfitana è famosa per le sue scogliere spettacolari, i pittoreschi villaggi e le acque cristalline.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 40.6333,
          "longitudine": 14.6029
        },
        "immagine": "/images/Italia/costiera-amalfitana.jpg"
      },
      {
        "id": 7,
        "nome": "Cinque Terre",
        "città": "Liguria",
        "descrizione": "Le Cinque Terre sono una serie di cinque villaggi costieri noti per i loro paesaggi colorati e le escursioni panoramiche.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 44.1277,
          "longitudine": 9.7094
        },
        "immagine": "/images/Italia/5terre.jpg"
      },
      {
        "id": 8,
        "nome": "Vaticano",
        "città": "Città del Vaticano",
        "descrizione": "La Città del Vaticano è il centro della Chiesa Cattolica, sede della Basilica di San Pietro e dei Musei Vaticani.",
        "categoria": "Religioso",
        "coordinate": {
          "latitudine": 41.9029,
          "longitudine": 12.4534
        },
        "immagine": "/images/Italia/vaticano.jpeg"
      },
      {
        "id": 9,
        "nome": "Galleria degli Uffizi",
        "città": "Firenze",
        "descrizione": "La Galleria degli Uffizi è uno dei musei d’arte più famosi al mondo, con una vasta collezione di opere rinascimentali.",
        "categoria": "Culturale",
        "coordinate": {
          "latitudine": 43.7687,
          "longitudine": 11.2558
        },
        "immagine": "/images/Italia/galleria-uffizi.jpg"
      }
    ]
  },
  {
    "id": 2,
    "viaggio": "Francia",
    "inizio": "2022-01-01",
    "fine": "2022-12-31",
    "luoghi": [
      {
        "id": 0,
        "nome": "Torre Eiffel",
        "città": "Parigi",
        "descrizione": "La Torre Eiffel è uno dei monumenti più iconici al mondo, simbolo di Parigi e della Francia.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 48.8584,
          "longitudine": 2.2945
        },
        "immagine": "images/Francia/EiffelTower.jpg"
      },
      {
        "id": 1,
        "nome": "Museo del Louvre",
        "città": "Parigi",
        "descrizione": "Il Museo del Louvre è uno dei più grandi e famosi musei d'arte del mondo, ospita opere come la Gioconda e la Venere di Milo.",
        "categoria": "Culturale",
        "coordinate": {
          "latitudine": 48.8606,
          "longitudine": 2.3376
        },
        "immagine": "images/Francia/parigi-louvre.jpg"
      },
      {
        "id": 2,
        "nome": "Palazzo di Versailles",
        "città": "Versailles",
        "descrizione": "Il Palazzo di Versailles è una delle residenze reali più famose al mondo, noto per i suoi giardini spettacolari e la Sala degli Specchi.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 48.8049,
          "longitudine": 2.1204
        },
        "immagine": "images/Francia/parigi-versailles.jpg"
      },
      {
        "id": 3,
        "nome": "Mont Saint-Michel",
        "città": "Normandia",
        "descrizione": "Mont Saint-Michel è un'isola tidale famosa per la sua abbazia medievale e il pittoresco villaggio.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 48.6361,
          "longitudine": -1.5115
        },
        "immagine": "images/Francia/Mont-Saint-Michel.jpg"
      },
      {
        "id": 4,
        "nome": "Cattedrale di Notre-Dame",
        "città": "Parigi",
        "descrizione": "La Cattedrale di Notre-Dame è un capolavoro dell'architettura gotica, famosa per le sue vetrate e i gargoyle.",
        "categoria": "Religioso",
        "coordinate": {
          "latitudine": 48.8529,
          "longitudine": 2.35
        },
        "immagine": "images/Francia/notre-dame.jpg"
      },
      {
        "id": 5,
        "nome": "Costa Azzurra",
        "città": "Riviera Francese",
        "descrizione": "La Costa Azzurra è famosa per le sue spiagge glamour, i resort di lusso e le acque cristalline.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 43.7034,
          "longitudine": 7.2663
        },
        "immagine": "images/Francia/costa_azzurra.jpg"
      },
      {
        "id": 6,
        "nome": "Castelli della Loira",
        "città": "Valle della Loira",
        "descrizione": "I Castelli della Loira sono una serie di castelli rinascimentali situati lungo il fiume Loira, noti per la loro bellezza e storia.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 47.4136,
          "longitudine": 0.6848
        },
        "immagine": "images/Francia/CastellidellaLoira.jpg"
      },
      {
        "id": 7,
        "nome": "Provenza",
        "città": "Provenza",
        "descrizione": "La Provenza è famosa per i suoi campi di lavanda, i pittoreschi villaggi e il clima mediterraneo.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 43.9493,
          "longitudine": 4.8055
        },
        "immagine": "images/Francia/Provenza.jpg"
      },
      {
        "id": 8,
        "nome": "Chamonix-Mont-Blanc",
        "città": "Chamonix",
        "descrizione": "Chamonix-Mont-Blanc è una famosa località sciistica situata ai piedi del Monte Bianco, la montagna più alta d'Europa.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 45.9237,
          "longitudine": 6.8694
        },
        "immagine": "images/Francia/Chamonix-Mont-Blanc.jpg"
      },
      {
        "id": 9,
        "nome": "Carcassonne",
        "città": "Carcassonne",
        "descrizione": "Carcassonne è una città fortificata medievale, famosa per le sue mura ben conservate e il castello.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 43.213,
          "longitudine": 2.351
        },
        "immagine": "images/Francia/Carcassonne.jpg"
      }
    ]
  },
  {
    "id": 3,
    "viaggio": "Germania",
    "inizio": "2022-01-01",
    "fine": "2022-12-31",
    "luoghi": [
      {
        "id": 0,
        "nome": "Porta di Brandeburgo",
        "città": "Berlino",
        "descrizione": "La Porta di Brandeburgo è uno dei monumenti più iconici di Berlino, simbolo della riunificazione tedesca.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 52.5163,
          "longitudine": 13.3777
        },
        "immagine": "images/Germania/porta-brandeburgo-berlino.jpg"
      },
      {
        "id": 1,
        "nome": "Duomo di Colonia",
        "città": "Colonia",
        "descrizione": "Il Duomo di Colonia è una delle cattedrali gotiche più grandi e famose del mondo, patrimonio mondiale dell'UNESCO.",
        "categoria": "Religioso",
        "coordinate": {
          "latitudine": 50.9413,
          "longitudine": 6.9582
        },
        "immagine": "images/Germania/duomo-di-colonia-germania.jpg"
      },
      {
        "id": 2,
        "nome": "Castello di Neuschwanstein",
        "città": "Baviera",
        "descrizione": "Il Castello di Neuschwanstein è un castello da fiaba situato nelle Alpi Bavaresi, ispirazione per il castello della Bella Addormentata della Disney.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 47.5576,
          "longitudine": 10.7498
        },
        "immagine": "images/Germania/CastellodiNeuschwanstein.jpg"
      },
      {
        "id": 3,
        "nome": "Foresta Nera",
        "città": "Baden-Württemberg",
        "descrizione": "La Foresta Nera è una regione montuosa famosa per i suoi paesaggi pittoreschi, le foreste dense e i villaggi tradizionali.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 48.0,
          "longitudine": 8.0
        },
        "immagine": "images/Germania/foresta-nera.jpg"
      },
      {
        "id": 4,
        "nome": "Miniatur Wunderland",
        "città": "Amburgo",
        "descrizione": "Miniatur Wunderland è il più grande modello ferroviario del mondo, con dettagliate riproduzioni di città e paesaggi.",
        "categoria": "Culturale",
        "coordinate": {
          "latitudine": 53.5436,
          "longitudine": 9.9886
        },
        "immagine": "images/Germania/Miniatur_wunderland.jpg"
      },
      {
        "id": 5,
        "nome": "Valle del Reno",
        "città": "Renania",
        "descrizione": "La Valle del Reno è famosa per i suoi vigneti, i castelli medievali e i pittoreschi villaggi lungo il fiume Reno.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 50.0,
          "longitudine": 7.0
        },
        "immagine": "images/Germania/reno.jpg"
      },
      {
        "id": 6,
        "nome": "Isola dei Musei",
        "città": "Berlino",
        "descrizione": "L'Isola dei Musei è un complesso di cinque musei di fama mondiale situati su un'isola nel fiume Sprea a Berlino.",
        "categoria": "Culturale",
        "coordinate": {
          "latitudine": 52.5169,
          "longitudine": 13.401
        },
        "immagine": "images/Germania/IsoladeiMusei.jpg"
      },
      {
        "id": 7,
        "nome": "Marienplatz",
        "città": "Monaco di Baviera",
        "descrizione": "Marienplatz è la piazza centrale di Monaco di Baviera, famosa per il municipio neogotico e il carillon.",
        "categoria": "Storico",
        "coordinate": {
          "latitudine": 48.1374,
          "longitudine": 11.5755
        },
        "immagine": "images/Germania/Marienplatz.jpg"
      },
      {
        "id": 8,
        "nome": "Zugspitze",
        "città": "Baviera",
        "descrizione": "La Zugspitze è la montagna più alta della Germania, situata nelle Alpi Bavaresi, famosa per le sue piste da sci e i panorami mozzafiato.",
        "categoria": "Paesaggistico",
        "coordinate": {
          "latitudine": 47.421,
          "longitudine": 10.9853
        },
        "immagine": "images/Germania/Zugspitze.jpg"
      },
      {
        "id": 9,
        "nome": "Frauenkirche",
        "città": "Dresda",
        "descrizione": "La Frauenkirche è una chiesa luterana ricostruita dopo la Seconda Guerra Mondiale, simbolo della riconciliazione e della pace.",
        "categoria": "Religioso",
        "coordinate": {
          "latitudine": 51.051,
          "longitudine": 13.7416
        },
        "immagine": "images/Germania/Frauenkirche.jpg"
      }
    ]
  }
]

export default db
