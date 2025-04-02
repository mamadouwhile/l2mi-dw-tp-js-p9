var societes = [
  //NOM, TELEPHONE, CODE POSTAL, COMMUNE, PRESIDENT.E
  ["LA RENAISSANCE", "02 41 52 09 57", 49650, "ALLONNES", "Régis TULASNE"],
  ["LE PRIEURE", "07 71 72 18 63", 49650, "ALLONNES", "Jean-Marie LANDRY"],
  ["LES LABOUREURS", "xx-xx-xx-xx-xx", 49650, "ALLONNES", "René BATTAIS"],
  ["L'UNION", "02 41 38 36 73", 49650, "ALLONNES", "Stéphane DEGRAVE"],
  ["L'AMBIBOULE", "02 47 52 46 64", 37340, "AMBILLOU", "Michel DERRIDDER"],
  ["LE ROSIER", "xx-xx-xx-xx-xx", 49700, "AMBILLOU CHÂTEAU", "Daniel COUTOIS"],
  [
    "STAND LAMORICIERE",
    "02 40 83 07 08",
    44150,
    "ANCENIS",
    "Marie-Jo BAUDOUIN",
  ],
  ["L'AMICALE", "xx-xx-xx-xx-xx", 49800, "ANDARD", "Jean-Luc MOUTEAU"],
  ["LES GROIES", "xx-xx-xx-xx-xx", 49800, "ANDARD", "Émile HERVÉ"],
  [
    "ASPTT L’ORMEAU",
    "02 41 88 53 91",
    49100,
    "ANGERS",
    "Jean-Claude BLANCHARD",
  ],
  ["FRATERNELLE JEAN MACE", "02 41 20 34 16", 49100, "ANGERS", "Albert ROGER"],
  ["JEANNE D'ARC", "02 41 47 53 87", 49000, "ANGERS", "Gisèle JASNAULT"],
  ["JULES FERRY", "02 41 48 50 44", 49100, "ANGERS", "Christian GARREAU"],
  ["A LA PENSÉE", "02 41 87 23 66", 49000, "ANGERS", "Serge LEGROS"],
  ["LE BON CONSEIL", "02 41 87 57 50", 49100, "ANGERS", "Vincent CHARRUAU"],
  [
    "LE CHAMP D'HONNEUR",
    "02 41 68 09 66",
    49000,
    "ANGERS",
    "Jean-Jacques SIMON",
  ],
  [
    "LES AMIS RÉUNIS",
    "02 41 88 74 98",
    49100,
    "ANGERS",
    "Marie-Claire FRESNAIE",
  ],
  ["NOTRE DAME", "02 41 86 95 12", 49000, "ANGERS", "Hubert PEHU"],
  ["SAINT JACQUES", "02 41 39 43 76", 49100, "ANGERS", "Marc DUTOUR"],
  ["SAINT LÉONARD", "02 41 66 27 40", 49000, "ANGERS", "Martial LOREAU"],
  [
    "LA RENAISSANCE",
    "02 41 82 35 73",
    49490,
    "AUVERSE – Noyant Villages",
    "Jean-Paul AVRIL",
  ],
  ["LES VIGNES", "02 41 34 26 99", 49240, "AVRILLÉ", "Robert DAUBIT"],
  [
    "LA CROIX DES SABLES",
    "02 41 50 89 88",
    49400,
    "BAGNEUX - SAUMUR",
    "Catherine PIERRE",
  ],
  ["L'UNION", "xx-xx-xx-xx-xx", 72200, "BAILLEUL (LE)", "Albert HERREMAN"],
  [
    "LES ARTISANS",
    "06 02 38 49 22",
    49150,
    "BAUGÉ-EN-ANJOU",
    "Jean-Paul POUPIN",
  ],
  [
    "L'UNION BAUGEOISE",
    "02 41 82 38 49",
    49150,
    "BAUGÉ-EN-ANJOU",
    "Albert BOYEAU",
  ],
  ["SAINT LAURENT", "xx-xx-xx-xx-xx", 49150, "BAUGÉ-EN-ANJOU", "Olivier MORIN"],
  ["LA GAIETÉ", "xx-xx-xx-xx-xx", 49140, "BAUNÉ", "Patrick MAHOT"],
  [
    "SOCIETE DE L'ORIENTAL",
    "06 25 47 41 47",
    49140,
    "BAUNÉ",
    "Guillaume GLACIAL",
  ],
  [
    "L'UNION",
    "xx-xx-xx-xx-xx",
    72200,
    "BAZOUGES SUR LE LOIR",
    "Laurent BIDAULT",
  ],
  [
    "SAINT VINCENT",
    "xx-xx-xx-xx-xx",
    72200,
    "BAZOUGES SUR LE LOIR",
    "Jean-Claude ALLARD",
  ],
  ["LE BEAU COUP", "02 41 48 50 04", 49070, "BEAUCOUZE", "Hubert LAFUENTE"],
  [
    "LA GROSSE PIERRE",
    "02 41 57 26 48",
    49250,
    "BEAUFORT-EN-ANJOU",
    "Alain MORTREAU",
  ],
  ["LA PELOUSE", "07 69 04 39 29", 49250, "BEAUFORT-EN-ANJOU", "Alain Lambert"],
  [
    "LES BUTTES",
    "02 41 80 38 22",
    49250,
    "BEAUFORT-EN-ANJOU",
    "Franck LETOURNEAU",
  ],
  [
    "LES MARILLIÉRES",
    "02 41 57 28 32",
    49250,
    "BEAUFORT-EN-ANJOU",
    "Philippe CHOLLET",
  ],
  [
    "L'UNION COMÈTE",
    "02 41 80 31 98",
    49250,
    "BEAUFORT-EN-ANJOU",
    "Yvan GILBERT",
  ],
  ["NOTRE DAME", "02 41 57 26 63", 49250, "BEAUFORT-EN-ANJOU", "Eliane BUCHER"],
  [
    "SAINT JOSEPH",
    "xx-xx-xx-xx-xx",
    49750,
    "BEAULIEU SUR LAYON",
    "Jean-François LEVEAU",
  ],
  [
    "L'UNION",
    "xx-xx-xx-xx-xx",
    49140,
    "BEAUVAU - JARZÉ-VILLAGES",
    "Raymond MABIT",
  ],
  [
    "LA COURTILLE",
    "02 41 77 35 63",
    49370,
    "BÉCON LES GRANITS",
    "Jacques LE CAHAIN",
  ],
  ["CERCLE DES LOISIRS", "02 47 97 30 05", 37140, "BENAIS", "Laurent FAUVY"],
  [
    "LES AMIS RÉUNIS",
    "02 41 45 29 79",
    49320,
    "BLAISON GOHIER",
    "Jany CAILLEAU",
  ],
  [
    "BOULE DE FORT DE BLOIS",
    "02 54 55 97 13",
    41000,
    "BLOIS",
    "Jean-Pierre ROUSSEAU",
  ],
  ["L'ESPÉRANCE", "xx-xx-xx-xx-xx", 49160, "BLOU", "Roger PANTAIS"],
  ["L'UNION", "02 41 82 72 38", 49150, "BOCE", "Jean-Marie NAULET"],
  ["LES AMIS RÉUNIS", "xx-xx-xx-xx-xx", 49800, "BOHALLE (LA)", "Clair MANCEAU"],
  ["LE LABOUREUR", "xx-xx-xx-xx-xx", 49800, "BOHALLE (LA)", "Bernard MAILLET"],
  [
    "L'ESPÉRANCE FRATERNELLE",
    "xx-xx-xx-xx-xx",
    49800,
    "BOHALLE (LA)",
    "Christian PERRINELLE",
  ],
  ["LA BONNE ALLIANCE", "06 47 54 14 44", 49080, "BOUCHEMAINE", "Guy PINSON"],
  ["LES AMIS RÉUNIS", "02 41 77 15 22", 49080, "BOUCHEMAINE", "Georges FREMY"],
  ["L'UNION", "02 41 66 24 93", 49080, "BOUCHEMAINE", "Philippe LEGROS"],
  ["LES AMIS RÉUNIS", "02 43 70 96 60", 53290, "BOUERE", "Noël DAVID"],
  ["LA MOTTE VERTE", "02 47 97 43 22", 37140, "BOURGUEIL", "Philippe PIAUMIER"],
  ["LES ROSIERS", "02 43 45 71 89", 72270, "BOUSSE", "Jean-Pierre VIOT"],
  [
    "L'ALLIANCE",
    "xx-xx-xx-xx-xx",
    49800,
    "BRAIN SUR L'AUTHION",
    "Jean-Robert CHARTIER",
  ],
  [
    "LES AMIS RÉUNIS",
    "02 41 54 34 75",
    49800,
    "BRAIN SUR L'AUTHION",
    "Roland LEMEUNIER",
  ],
  [
    "LES CULTIVATEURS",
    "02 41 54 97 97",
    49800,
    "BRAIN SUR L'AUTHION",
    "Gérard PINON",
  ],
  [
    "L'AGRICOLE",
    "02 41 52 84 53",
    49650,
    "BRAIN-SUR-ALLONNES",
    "Ludovic BERGER",
  ],
  ["L'UNION", "02 41 52 88 31", 49650, "BRAIN-SUR-ALLONNES", "Serge DAUPHINOT"],
  [
    "LA BOULE DU VAL DE MAULNE",
    "07 57 50 32 31",
    37330,
    "BRAYE SUR MAULNE",
    "Jean-Pierre FERGEAU",
  ],
  [
    "LES AMIS DE LA BOULE",
    "02 47 96 34 07",
    37130,
    "BRÉHÉMONT",
    "Chantal BIARD",
  ],
  [
    "L'UNION",
    "xx-xx-xx-xx-xx",
    49490,
    "BREIL – Noyant Villages",
    "Françoise DESVIGNES",
  ],
  [
    "LA JOYEUSE",
    "06 71 83 94 61",
    49390,
    "BREILLE LES PINS (LA)",
    "Patrick LELIEVRE",
  ],
  ["LE BEAU RIVAGE", "xx-xx-xx-xx-xx", 49125, "BRIOLLAY", "Bruno GASNIER"],
  ["LE BON CONSEIL", "02 41 43 54 55", 49125, "BRIOLLAY", "Michel ANDREAU"],
  ["L'UNION", "02 41 57 25 16", 49250, "BRION", "Roger FORTANIER"],
  [
    "SAINT VINCENT",
    "02 41 91 71 29",
    49320,
    "BRISSAC QUINCE",
    "Marcel GUILLOU",
  ],
  ["LA BRISSARTHOISE", "07 85 20 34 61", 49330, "BRISSARTHE", "Louis COURTY"],
  [
    "LA JOYEUSE",
    "xx-xx-xx-xx-xx",
    49490,
    "BROC – Noyant Villages",
    "Fernand CAILLEAU",
  ],
  ["VAL DE L'ERDRE", "02 41 92 72 34", 49440, "CANDÉ", "Thierry BRUNAUD"],
  [
    "LES AMIS DE L'ORDRE",
    "02 41 32 17 08",
    49460,
    "CANTENAY EPINARD",
    "Michel PIGEON",
  ],
  ["LES AMIS RÉUNIS", "02 41 52 99 68", 49400, "CHACÉ", "Michel RABINEAU"],
  [
    "SAINT HELIER",
    "02 41 94 16 30",
    49440,
    "CHALLAIN LA POTHERIE",
    "Roland DELANOE",
  ],
  ["LE RIVAGE", "02 41 78 14 25", 49290, "CHALONNES SUR LOIRE", "Pierre DAVY"],
  [
    "L'UNION LIBÉRALE",
    "xx-xx-xx-xx-xx",
    49380,
    "CHAMP SUR LAYON",
    "Vincent GOUJON",
  ],
  ["MONPLAISIR", "02 41 34 64 02", 49330, "CHAMPIGNE", "Philippe GESLIN"],
  [
    "LA TOURANGELLE",
    "02 47 24 18 03",
    37330,
    "CHANNAY SUR LATHAN",
    "Bruno RICATEAU",
  ],
  ["LE VAL D'HYROME", "xx-xx-xx-xx-xx", 49750, "CHANZEAUX", "Michel MANCEAU"],
  [
    "LES AMIS RÉUNIS",
    "07 82 88 39 00",
    49140,
    "CHAPELLE ST LAUD (LA)",
    "Thierry Desmarres",
  ],
  [
    "LES BATELIERS",
    "02 47 97 42 60",
    37140,
    "CHAPELLE SUR LOIRE (LA)",
    "Pierre MABILLEAU",
  ],
  [
    "LA FRATERNELLE",
    "02 41 33 92 94",
    49330,
    "CHATEAUNEUF SUR SARTHE",
    "Dominique COTTIN",
  ],
  [
    "LA JOIERIE",
    "02 41 69 41 98",
    49330,
    "CHATEAUNEUF SUR SARTHE",
    "Eric FERTUN",
  ],
  ["L'UNION AMICALE", "02 41 61 60 16", 49520, "CHATELAIS", "André GATINEAU"],
  [
    "LA FUYE",
    "xx-xx-xx-xx-xx",
    49380,
    "CHAVAGNES-LES-EAUX - TERRANJOU",
    "Michel THIBAULT",
  ],
  [
    "LA RENAISSANCE",
    "xx-xx-xx-xx-xx",
    49490,
    "CHAVAIGNES – Noyant Villages",
    "Yvon CHAUMIN",
  ],
  [
    "L'UNION",
    "xx-xx-xx-xx-xx",
    49490,
    "CHAVAIGNES – Noyant Villages",
    "Christophe GESLIN",
  ],
  [
    "LA VIGILANTE",
    "02 41 42 12 76",
    49125,
    "CHEFFES SUR SARTHE",
    "Alain NOBILET",
  ],
  [
    "LA CONCORDE",
    "xx-xx-xx-xx-xx",
    49320,
    "CHEMELLIER – BRISSAC LOIRE AUBANCE",
    "Noël LEPRON",
  ],
  [
    "LE PROGRÈS",
    "06 23 06 81 38",
    49320,
    "CHEMELLIER – BRISSAC LOIRE AUBANCE",
    "Jacky AUBEUX",
  ],
  [
    "LA RENAISSANCE",
    "02 41 51 98 73",
    49350,
    "CHENEHUTTE TREVES CUNAULT",
    "Cyril PAVIE",
  ],
  [
    "SAINT JOSEPH",
    "02 41 38 32 99",
    49350,
    "CHENEHUTTE TREVES CUNAULT",
    "Fabienne GENNETAI",
  ],
  [
    "LE PROGRÈS",
    "xx-xx-xx-xx-xx",
    49150,
    "CHEVIRÉ LE ROUGE",
    "Michel BOISLEVE",
  ],
  [
    "LA RENAISSANCE",
    "xx-xx-xx-xx-xx",
    49490,
    "CHIGNÉ – Noyant Villages",
    "Jean-Claude CHARDON",
  ],
  ["CERCLE DU BON ACCORD", "02 47 98 30 98", 37500, "CHINON", "Virginie GIRON"],
  [
    "CERCLE DE L'ILLETTE",
    "02 47 95 19 82",
    37140,
    "CHOUZÉ SUR LOIRE",
    "Benoist REGNIER",
  ],
  [
    "L'AVENIR",
    "xx-xx-xx-xx-xx",
    49150,
    "CLEFS – BAUGE EN ANJOU",
    "Sylvie ROGER",
  ],
  [
    "LE BON LABOUREUR",
    "xx-xx-xx-xx-xx",
    49150,
    "CLEFS – BAUGE EN ANJOU",
    "André CILOY",
  ],
  [
    "L'ESPÉRANCE",
    "06 75 06 08 41",
    49150,
    "CLEFS – BAUGE EN ANJOU",
    "Tiphaine LEON",
  ],
  ["JEANNE D'ARC", "02 41 94 21 26", 49520, "COMBRÉE", "Paul GILBERT"],
  ["LES PERREYEURS", "02 41 61 53 40", 49520, "COMBRÉE", "Jean-Michel ALIGAND"],
  ["LE CENTRE", "xx-xx-xx-xx-xx", 49630, "CORNÉ", "Jean-Louis EZECHIEL"],
  ["LES DUBLIERES", "xx-xx-xx-xx-xx", 49630, "CORNÉ", "Kamel GOURA"],
  ["TIVOLI", "02 41 78 94 10", 49630, "CORNÉ", "Noël HERBERT"],
  [
    "LA FRATERNELLE",
    "xx-xx-xx-xx-xx",
    49140,
    "CORNILLÉ LES CAVES",
    "Bernard NAULT",
  ],
  ["L'AVENIR", "xx-xx-xx-xx-xx", 49140, "CORZÉ", "Jean-Pierre COURTY"],
  ["L'EPINIERE", "06 77 75 51 44", 49140, "CORZÉ", "Jean-Luc PIVERT"],
  ["LES BONS ENFANTS", "xx-xx-xx-xx-xx", 49140, "CORZÉ", "Gervais CHEVÉ"],
  ["L'UNION DE LA NOUE", "02 41 32 25 67", 49140, "CORZÉ", "Gérard RENOU"],
  [
    "L'UNION",
    "02 41 38 56 64",
    49260,
    "COUDRAY MACOUARD (LE)",
    "Laurence MEUNIER",
  ],
  [
    "LA VIOLETTE",
    "xx-xx-xx-xx-xx",
    72270,
    "COURCELLES LA FORET",
    "Pascal LARMIGNAT",
  ],
  ["LE POINT DU JOUR", "xx-xx-xx-xx-xx", 49320, "COUTURES", "Stéphane NEAU"],
  ["LA CONCORDE", "02 41 47 62 25", 49320, "COUTURES", "Dominique HAUDEBAULT"],
  ["L'UNION", "xx-xx-xx-xx-xx", 72200, "BAZOUGES CRÉ SUR LOIR", "Yves OUVRARD"],
  ["LA LIBERTÉ", "xx-xx-xx-xx-xx", 72200, "CROSMIERES", "Loïc HERVE"],
  [
    "LA CONCORDE",
    "xx-xx-xx-xx-xx",
    49800,
    "DAGUENIERE (LA) LOIRE AUTHION",
    "Patrice MARTIN",
  ],
  [
    "LES LABOUREURS",
    "06 75 32 25 42",
    49800,
    "DAGUENIERE (LA) LOIRE AUTHION",
    "Yannick RAGUIN",
  ],
  ["LA CONCORDE", "02 41 60 23 89", 49920, "DAUMERAY", "Auguste CHEVE"],
  ["LA RÉUNION", "xx-xx-xx-xx-xx", 49920, "DAUMERAY", "Guy FRAQUET"],
  ["LA FONTAINE", "02 41 78 88 18", 49190, "DENÉE", "Renée COUET"],
  ["LE RIVAGE", "06 41 57 60 63", 49190, "DENÉE", "Jacques NEAU"],
  [
    "LA BONNE FONTAINE",
    "xx-xx-xx-xx-xx",
    49490,
    "DÉNEZÉ SOUS LE LUDE – Noyant Villages",
    "Tony ESNAULT",
  ],
  [
    "LA DISSÉENNE",
    "xx-xx-xx-xx-xx",
    72800,
    "DISSÉ SOUS LE LUDE",
    "Martine CHAUFOUR",
  ],
  [
    "SAINT PIERRE",
    "02 41 59 19 77",
    49700,
    "DOUÉ LA FONTAINE",
    "Gilles DENIAU",
  ],
  ["BEL AIR", "xx-xx-xx-xx-xx", 49430, "DURTAL", "Jean-Emile BOISARD"],
  ["LE PETIT TIVOLI", "xx-xx-xx-xx-xx", 49430, "DURTAL", "Philippe CHERE"],
  [
    "CERCLE DU SACRE CŒUR",
    "02 41 76 07 90",
    49430,
    "DURTAL",
    "Norbert DUGRIPPE",
  ],
  ["L'UNION DE GOUIS", "xx-xx-xx-xx-xx", 49430, "DURTAL", "Alain MEUNIER"],
  ["LA PROSPÉRITÉ", "xx-xx-xx-xx-xx", 49150, "ÉCHEMIRÉ", "Alain BEAUSSIER"],
  ["LA RENAISSANCE", "02 41 89 06 42", 49150, "ÉCHEMIRÉ", "Gérard JOUBERT"],
  ["LA RENAISSANCE", "02 41 43 03 93", 49000, "ÉCOUFLANT", "Gérard DAGUIN"],
  ["LA CONCORDE", "02 41 42 88 44", 49330, "ÉTRICHÉ", "Serge JOUIN"],
  ["BEAU SOLEIL", "02 41 78 49 10", 49380, "FAYE D'ANJOU", "Hervé MENARD"],
  ["LES TILLEULS", "02 41 32 14 58", 49460, "FENEU", "Yves GAULT"],
  ["LA GAIETÉ", "xx-xx-xx-xx-xx", 72200, "FLÉCHE (LA)", "Franck COHUAU"],
  ["LA RENAISSANCE", "07 83 86 67 21", 72200, "FLÉCHE (LA)", "Alain ETOURNEAU"],
  ["LA VIOLETTE", "02 43 45 73 21", 72200, "FLÉCHE (LA)", "Emmanuel COLAS"],
  ["L'AMITIÉ", "xx-xx-xx-xx-xx", 72200, "FLÉCHE (LA)", "Annie MARGOTIN"],
  ["LE BAS RHIN", "xx-xx-xx-xx-xx", 72200, "FLÉCHE (LA)", "Gérard FEUVRE"],
  [
    "LA VIOLETTE",
    "xx-xx-xx-xx-xx",
    72200,
    "FLÉCHE (LA) ST GERMAIN DU VAL",
    "Jean-Louis CERTENAIS",
  ],
  [
    "LA FRATERNITÉ",
    "xx-xx-xx-xx-xx",
    49250,
    "FONTAINE GUÉRIN",
    "Norbert NAURAIS",
  ],
  ["LE PRIEURE", "02 41 91 11 40", 49250, "FONTAINE GUÉRIN", "Didier COULON"],
  ["LE CENTRE", "xx-xx-xx-xx-xx", 49140, "FONTAINE MILON", "Michel PÉANT"],
  [
    "LES TILLEULS",
    "02 41 51 37 85",
    49590,
    "FONTEVRAUD L'ABBAYE",
    "Vincent ERNDT",
  ],
  ["LE PUITS AVARD", "xx-xx-xx-xx-xx", 49250, "GÉE", "Michel MARGAS"],
  ["LA CONCORDE", "02 41 38 00 74", 49350, "GENNES", "Régis LAURIN"],
  [
    "L'ALLIANCE",
    "xx-xx-xx-xx-xx",
    49490,
    "GENNETEIL – Noyant Villages",
    "Didier LEMONNIER",
  ],
  ["L'UNION", "02 41 95 64 26", 49220, "GREZ NEUVILLE", "Laurent ROUSSEAU"],
  ["LA RENAISSANCE", "xx-xx-xx-xx-xx", 49430, "HUILLÉ-LÉZIGNÉ", "Denis EON"],
  ["L’ENTENTE HUISMOISE", "02 47 95 43 48", 37420, "HUISMES", "René VERRIÈRE"],
  [
    "LA COURTILLE",
    "02 41 39 49 25",
    49123,
    "INGRANDES SUR LOIRE",
    "Christiane BLOND",
  ],
  [
    "LA GRANDE COUR",
    "02 41 39 11 22",
    49123,
    "INGRANDES SUR LOIRE",
    "Gérard FORT",
  ],
  ["LA GAIETÉ", "xx-xx-xx-xx-xx", 49140, "JARZÉ-VILLAGES", "Dominique GIRAULT"],
  [
    "LE PETIT CERCLE",
    "xx-xx-xx-xx-xx",
    49140,
    "JARZÉ-VILLAGES",
    "Christophe MOREAU",
  ],
  [
    "L'ESPÉRANCE",
    "xx-xx-xx-xx-xx",
    49140,
    "JARZÉ-VILLAGES",
    "Christian GUILLOT",
  ],
  [
    "LA RENAISSANCE",
    "02 41 91 98 61",
    49610,
    "JUIGNÉ SUR LOIRE",
    "Pierre-Yves CESBRON",
  ],
  [
    "LA RENAISSANCE",
    "02 41 33 92 46",
    49330,
    "JUVARDEIL",
    "Jean-Marie BACHELIER",
  ],
  ["L'UNION", "xx-xx-xx-xx-xx", 49320, "LA JAILLE YVON", "Patrick LAVIGNE"],
  ["L'UNION", "xx-xx-xx-xx-xx", 49150, "LANDE CHASLES (LA)", "James PATOYT"],
  ["LA JOYEUSE", "02 47 96 37 32", 37130, "LANGEAIS", "Nicolas GALLAUD"],
  [
    "L'UNION",
    "02 41 82 19 49",
    49490,
    "LASSE – Noyant Villages",
    "Joël RABOUIN",
  ],
  ["L'AVENIR", "02 41 61 58 59", 49520, "BOURG D'IRÉ (LE)", "Jean-Pierre FOIN"],
  [
    "CLUB BOULISTE MANCEAU",
    "06 11 29 41 05",
    72100,
    "LE MANS",
    "Henri BESNARD",
  ],
  ["LA PAIX", "02 47 95 86 86", 37500, "LERNÉ", "Laurence SOREAU"],
  ["LA VERDELAIS", "02 41 76 27 54", 49430, "LÉZIGNÉ", "Remy LOISEAU"],
  ["L'UNION", "02 41 95 64 21", 49220, "LION D'ANGERS (LE)", "Maurice BOYEAU"],
  [
    "SAINT JOSEPH",
    "02 41 95 66 18",
    49220,
    "LION D'ANGERS (LE)",
    "Gérard REMOUE",
  ],
  [
    "LA FRATERNELLE",
    "xx-xx-xx-xx-xx",
    49160,
    "LONGUÉ JUMELLES",
    "Dominique SOURDEAU",
  ],
  [
    "LE BON ACCUEIL",
    "xx-xx-xx-xx-xx",
    49160,
    "LONGUÉ JUMELLES",
    "Robert DUTERTRE",
  ],
  [
    "L'ESPÉRANCE",
    "02 41 38 89 67",
    49160,
    "LONGUÉ JUMELLES",
    "Pascal CAILLAUD",
  ],
  [
    "PAUL BIET",
    "02 41 52 12 15",
    49160,
    "LONGUÉ JUMELLES",
    "Jean-Paul LEPINAY",
  ],
  [
    "LA CONCORDE",
    "02 41 77 48 81",
    49370,
    "LOUROUX BECONNAIS (LE)",
    "Ludovic PLASSAIS",
  ],
  ["LES AMIS RÉUNIS", "02 47 24 10 75", 37330, "LUBLÉ", "Jean-Claude SORIN"],
  ["L'ESPÉRANCE", "02 43 45 84 11", 72800, "LUCHÉ PRINGÉ", "Marc LEGOT"],
  [
    "SAINT VINCENT",
    "xx-xx-xx-xx-xx",
    72800,
    "LUCHÉ PRINGÉ",
    "Georges ROUSSEAU",
  ],
  ["PÉAN", "06 89 47 30 07", 72800, "LUDE (LE)", "Jean-Claude LELARGE"],
  ["L'UNION", "xx-xx-xx-xx-xx", 49140, "LUÉ EN BAUGEOIS", "Patrice MAUXION"],
  ["L'UNION", "06 43 39 54 54", 72270, "MALICORNE SUR SARTHE", "Alain COUBARD"],
  ["SAINT MARTIN", "06 40 31 29 20", 49140, "MARCÉ", "Jérôme BIGOT"],
  ["SAINT VINCENT", "xx-xx-xx-xx-xx", 72200, "MAREIL SUR LOIR", "Michel AUVE"],
  ["L'UNION", "02 41 32 60 65", 49330, "MARIGNE", "Yves HOUDIN"],
  ["LA PAIX", "02 41 59 67 60", 49540, "MARTIGNE BRIAND", "François CHENE"],
  ["LA CROIX BOUJUAU", "xx-xx-xx-xx-xx", 49630, "MAZÉ-MILON", "Ghislain DIARD"],
  ["LA MAISON BLANCHE", "xx-xx-xx-xx-xx", 49630, "MAZÉ-MILON", "Serge TAVEAU"],
  ["LE LOIRON", "xx-xx-xx-xx-xx", 49630, "MAZÉ-MILON", "Venceslas DUPUY"],
  ["LE MILIEU", "xx-xx-xx-xx-xx", 49630, "MAZÉ-MILON", "Thierry METIVIER"],
  [
    "LES BONS LABOUREURS",
    "xx-xx-xx-xx-xx",
    49630,
    "MAZÉ-MILON",
    "Alain TIERCELIN",
  ],
  ["LES TOUCHES", "02 41 80 27 11", 49630, "MAZÉ-MILON", "Alain FILOLEAU"],
  [
    "LA MAZÉRIENNE",
    "02 47 96 60 69",
    37130,
    "MAZIÉRES DE TOURAINE",
    "Jean-Claude COUINEAU",
  ],
  [
    "SAINT PIERRE",
    "xx-xx-xx-xx-xx",
    49490,
    "MEIGNÉ LE VICOMTE – Noyant Villages",
    "Raymond LASCAUD",
  ],
  ["L'AVENIR", "xx-xx-xx-xx-xx", 49250, "MENITRE (LA)", "Emile GARREAU"],
  [
    "LES BONS ENFANTS",
    "xx-xx-xx-xx-xx",
    49250,
    "MENITRE (LA)",
    "Patrick MARCHAND",
  ],
  ["THUILLIER BURIDARD", "xx-xx-xx-xx-xx", 49250, "MENITRE (LA)", "Guy HATAT"],
  [
    "L'UNION",
    "xx-xx-xx-xx-xx",
    49490,
    "MÉON – Noyant Villages",
    "Marcel BOIGNÉ",
  ],
  ["L'ESPÉRANCE", "xx-xx-xx-xx-xx", 72270, "MEZERAY", "Sylvère FOURNIGAULT"],
  ["L'UNION", "02 41 32 86 46", 49330, "MIRE", "Jean-François AUBRY"],
  [
    "LES BONS ENFANTS",
    "xx-xx-xx-xx-xx",
    49430,
    "MONTIGNE LES RAIRIES",
    "Didier SALÉ",
  ],
  ["LA CONCORDE", "06 03 51 07 73", 49150, "MONTPOLLIN", "Thierry MINGOT"],
  [
    "LES AMIS",
    "02 41 52 36 01",
    49260,
    "MONTREUIL BELLAY",
    "Frédéric LIMOUSIN",
  ],
  ["LA GAIETÉ", "02 41 42 77 65", 49460, "MONTREUIL JUIGNÉ", "Thierry SUIRE"],
  ["L'UNION", "xx-xx-xx-xx-xx", 49140, "MONTREUIL SUR LOIR", "Jean BRILLAUD"],
  ["L'UNION", "02 41 95 68 63", 49220, "MONTREUIL SUR MAINE", "Gabriel RIVRON"],
  ["L'UNION", "xx-xx-xx-xx-xx", 49730, "MONTSOREAU", "Jacky MARCHAND"],
  ["LES PEUPLIERS", "02 41 37 12 57", 49640, "MORANNES", "Henri PITON"],
  ["SAINT RENÉ", "xx-xx-xx-xx-xx", 49390, "MOULIHERNE", "Bernard MARGAS"],
  [
    "L'UNION DE PLAISANCE",
    "07 66 22 24 30",
    49610,
    "MOZÉ SUR LOUET",
    "Guy PLANCONNEAU",
  ],
  ["LE COMMERCE", "07 71 94 51 11", 49610, "MURS ÉRIGNÉ", "Jean-Louis AUDOUIN"],
  ["LE PAVILLON", "02 41 57 87 95", 49610, "MURS ÉRIGNÉ", "Jacques GRONEAU"],
  [
    "SAINT PIERRE",
    "02 41 45 91 54",
    49610,
    "MURS ÉRIGNÉ",
    "Christian CROSNIER",
  ],
  ["L'AGRÉMENT", "xx-xx-xx-xx-xx", 49680, "NEUILLÉ", "Franck COURVOISIER"],
  [
    "L'UNION",
    "xx-xx-xx-xx-xx",
    49380,
    "NOTRE DAME D'ALLENÇON",
    "Jean-Louis GARREAU",
  ],
  [
    "LA GAIETÉ",
    "06 01 71 09 74",
    49490,
    "NOYANT – Noyant Villages",
    "Jean THÉODORE",
  ],
  [
    "MON PLAISIR",
    "xx-xx-xx-xx-xx",
    49390,
    "PARCAY LES PINS – Noyant Villages",
    "Françoise VERNEAU",
  ],
  ["L'UNION", "02 43 92 94 52", 72300, "PARCE SUR SARTHE", "Alain OGER"],
  [
    "L'AGRICULTURE",
    "02 41 76 77 01",
    49112,
    "PELLOUAILLES LES VIGNES",
    "Serge TETREL",
  ],
  [
    "L'ALLIANCE",
    "02 41 69 83 72",
    49112,
    "PELLOUAILLES LES VIGNES",
    "Lucien VOISINE",
  ],
  [
    "LA GRANDE SOCIÉTÉ",
    "02 41 76 76 72",
    49124,
    "PLESSIS GRAMMOIRE (LE)",
    "Henri COUSIN",
  ],
  [
    "LA RENAISSANCE DE FOUDON",
    "02 41 76 59 98",
    49124,
    "PLESSIS GRAMMOIRE (LE)",
    "Nicole DUBOS",
  ],
  [
    "MON PLAISIR",
    "07 81 94 57 78",
    49124,
    "PLESSIS GRAMMOIRE (LE)",
    "Stéphane SOUCHARD",
  ],
  ["BEL AIR", "02 41 44 93 12", 49130, "PONTS DE CE (LES)", "Pascal COUSIN"],
  ["LA BIENVENUE", "xx-xx-xx-xx-xx", 49130, "PONTS DE CE (LES)", "Remy PEAN"],
  [
    "L'ARMORICAINE",
    "02 41 33 18 63",
    49130,
    "PONTS DE CE (LES)",
    "Dominique DALLET",
  ],
  [
    "LE COMMERCE",
    "02 44 85 23 24",
    49130,
    "PONTS DE CE (LES)",
    "Pascal PORTIER",
  ],
  ["L'ORDRE", "02 41 79 30 21", 49130, "PONTS DE CE (LES)", "Minouche DROUIN"],
  [
    "CERCLE DE L'UNION",
    "xx-xx-xx-xx-xx",
    49170,
    "POSSONNIERE (LA)",
    "Jean-Louis LEGUÉ",
  ],
  ["LA POUANCÉENNE", "02 41 92 56 58", 49420, "POUANCÉ", "Yolande DERSOIR"],
  ["LES AMIS RÉUNIS", "02 41 95 22 33", 49370, "POUÉZE (LA)", "Roger VIGNERON"],
  ["LA GRAPPE", "02 43 95 47 93", 72300, "PRÉCIGNÉ", "Jacky FOUASSIER"],
  ["L'UNION", "xx-xx-xx-xx-xx", 49750, "RABLAY SUR LAYON", "Hervé FROUIN"],
  ["L'UNION", "xx-xx-xx-xx-xx", 49430, "RAIRIES (LES)", "Dominique JOUIS"],
  [
    "SAINT GEORGES",
    "xx-xx-xx-xx-xx",
    49430,
    "RAIRIES (LES)",
    "Jean Claude LANDAIS",
  ],
  [
    "LES AMIS DU BRETON",
    "02 47 97 49 73",
    37140,
    "RESTIGNÉ",
    "Stéphane LECOGGUEN",
  ],
  ["LA BOULE JOYEUSE", "xx-xx-xx-xx-xx", 37340, "RILLÉ", "Jacky CAILLEAU"],
  [
    "L'AVENIR",
    "02 41 78 83 00",
    49190,
    "ROCHEFORT SUR LOIRE",
    "Jean-Claude CARPENTIER",
  ],
  [
    "L'UNION DES SABLONS",
    "xx-xx-xx-xx-xx",
    49350,
    "ROSIERS SUR LOIRE (LES)",
    "Gaêlle LECAGNEUX",
  ],
  [
    "LES CONSTRUCTEURS",
    "02 43 95 87 89",
    72300,
    "SABLE SUR SARTHE",
    "Christian POULAIN",
  ],
  [
    "L'ÉTOILE SABOLIENNE",
    "02 43 92 22 56",
    72300,
    "SABLE SUR SARTHE",
    "Philippe ROINE",
  ],
  ["L'UNION", "02 43 92 55 14", 72300, "SABLE SUR SARTHE", "Alain POUPAS"],
  [
    "LA CONCORDE",
    "xx-xx-xx-xx-xx",
    49190,
    "SAINT AUBIN DE LUIGNE",
    "Yannick DUPONT",
  ],
  [
    "LES ABEILLES",
    "06 56 72 27 40",
    49124,
    "SAINT BARTHELEMY D'ANJOU",
    "Thierry PHILIPPEAU",
  ],
  [
    "SAINT PAUL",
    "02 41 93 71 83",
    49124,
    "SAINT BARTHELEMY D'ANJOU",
    "Stéphane HERY",
  ],
  [
    "L'UNION",
    "02 41 32 71 26",
    49370,
    "SAINT CLEMENT DE LA PLACE",
    "Joseph FESNARD",
  ],
  [
    "LA RENAISSANCE",
    "06 89 83 09 79",
    49260,
    "SAINT CYR EN BOURG",
    "Jean-Louis ROGER",
  ],
  [
    "LES ARTS RÉUNIS",
    "xx-xx-xx-xx-xx",
    49350,
    "SAINT GEORGES DES SEPT VOIES",
    "Alain SAULEAU",
  ],
  [
    "LA FRATERNITÉ",
    "xx-xx-xx-xx-xx",
    49250,
    "SAINT GEORGES DU BOIS",
    "Pierre CHAUVIGNÉ",
  ],
  [
    "L'UNION",
    "02 41 39 13 13",
    49170,
    "SAINT GEORGES SUR LOIRE",
    "Jean-Noël RICHARD",
  ],
  [
    "AMICALE ERNEST HERIN",
    "xx-xx-xx-xx-xx",
    72800,
    "SAINT GERMAIN D'ARCE",
    "Joël GUILVARD",
  ],
  [
    "LA CURE",
    "02 41 67 31 76",
    49400,
    "SAINT HILAIRE ST FLORENT",
    "Pascal COURVOISIER",
  ],
  [
    "LE BON VIGNERON",
    "02 41 50 61 88",
    49400,
    "SAINT HILAIRE ST FLORENT",
    "Christian GAUTIER",
  ],
  [
    "CERCLE LÉON LÉGAULT",
    "06 56 83 88 35",
    49130,
    "SAINT JEAN DE LA CROIX",
    "Claude GODIN",
  ],
  [
    "LA PAIX",
    "02 41 66 08 29",
    49320,
    "SAINT JEAN DES MAUVRETS",
    "Roselyne EGLANTIER",
  ],
  [
    "LA MAISON NEUVE",
    "06 19 80 14 27",
    49400,
    "SAINT LAMBERT DES LEVÉES",
    "René ANTIGNY",
  ],
  [
    "LES JOYEUX DU CHAPEAU",
    "02 41 67 56 68",
    49400,
    "SAINT LAMBERT DES LEVÉES",
    "Bruno FILATRE",
  ],
  [
    "L'UNION",
    "02 41 51 19 60",
    49400,
    "SAINT LAMBERT DES LEVÉES",
    "Gilbert DESPEIGNES",
  ],
  [
    "L'UNION ST MARTIN d’ARCE",
    "06 89 25 50 36",
    49150,
    "BAUGE EN ANJOU",
    "Noël CUREAU",
  ],
  [
    "LA RENAISSANCE",
    "02 41 38 52 21",
    49160,
    "SAINT MARTIN DE LA PLACE",
    "Michel BOIDIN",
  ],
  [
    "LE POLITARD",
    "xx-xx-xx-xx-xx",
    49250,
    "SAINT MATHURIN SUR LOIRE",
    "Dominique HUBERT",
  ],
  [
    "LE PONT FOULON",
    "xx-xx-xx-xx-xx",
    49250,
    "SAINT MATHURIN SUR LOIRE",
    "Dominique AUBIN",
  ],
  ["L'UNION", "xx-xx-xx-xx-xx", 49250, "LOIRE AUTHION", "Paul ROYER"],
  [
    "LA LIBERTÉ",
    "02 41 45 75 65",
    49610,
    "SAINT MELAINE SUR AUBANCE",
    "Jean-Pierre GAURION",
  ],
  [
    "L’AMICALE DES ANGEVINS",
    "02 40 66 10 49",
    44600,
    "SAINT NAZAIRE",
    "Olivier DURAND",
  ],
  [
    "LES BONS AMIS",
    "02 47 97 99 05",
    37140,
    "SAINT NICOLAS DE BOURGUEIL",
    "Guy HERSARD",
  ],
  [
    "LA BIENVENUE",
    "02 41 38 84 14",
    49160,
    "SAINT PHILBERT DU PEUPLE",
    "Teddy LETOURNEAU",
  ],
  [
    "LES AMIS RÉUNIS",
    "06 86 22 06 85",
    49250,
    "SAINT REMY LA VARENNE",
    "Christophe THIBAULT",
  ],
  [
    "L'UNION de Chauvigné",
    "xx-xx-xx-xx-xx",
    49250,
    "SAINT REMY LA VARENNE",
    "Elisabeth CHARLES",
  ],
  [
    "LA CONCORDE",
    "02 41 76 48 84",
    49480,
    "SAINT SYLVAIN D'ANJOU",
    "Florent PINEAU",
  ],
  [
    "L'ANGEVINE",
    "07 71 35 29 40",
    49480,
    "SAINT SYLVAIN D'ANJOU",
    "Pascal CHEVALIER",
  ],
  [
    "JEANNE D'ARC",
    "02 41 66 24 59",
    49130,
    "SAINTE GEMMES SUR LOIRE",
    "Michel SAVOIRE",
  ],
  [
    "PLAISANCE",
    "02 41 68 30 73",
    49130,
    "SAINTE GEMMES SUR LOIRE",
    "Paul PERPOIL",
  ],
  ["LA RUE GAUDIN", "xx-xx-xx-xx-xx", 49800, "SARRIGNÉ", "Régis MALABEUX"],
  [
    "LA RENAISSANCE",
    "xx-xx-xx-xx-xx",
    49320,
    "SAULGÉ L'HOPITAL",
    "Alain LENOIR",
  ],
  ["LE BEL AIR", "02 41 50 33 91", 49400, "SAUMUR", "Philippe LEDAIS"],
  ["LE PETIT CAPORAL", "02 41 67 19 36", 49400, "SAUMUR", "Éric MABILLE"],
  [
    "LA BONNE TENUE",
    "02 41 77 19 38",
    49170,
    "SAVENNIERES",
    "Jean-Maurice CORDIER",
  ],
  ["LA CONCORDE", "02 41 72 80 46", 49170, "SAVENNIERES", "Bernard CHOLET"],
  [
    "L'UNION",
    "02 43 45 12 89",
    72800,
    "SAVIGNÉ SOUS LE LUDE",
    "François LEMONNIER",
  ],
  [
    "LA BOULE SAVIGNÉENNE",
    "02 47 24 65 24",
    37340,
    "SAVIGNÉ SUR LATHAN",
    "Maurice CHENET",
  ],
  [
    "LES AMIS DE LA TREILLE",
    "02 41 32 82 57",
    49330,
    "SCEAUX D'ANJOU",
    "Claude LATOUCHE",
  ],
  ["LA MADELEINE", "02 41 92 81 84", 49500, "SEGRÉ", "Michel DUBREIL"],
  ["L'AURORE", "02 41 61 00 04", 49500, "SEGRÉ", "Jean-Noël MOUCHE"],
  [
    "JEANNE D'ARC",
    "06 33 36 28 61",
    49140,
    "SEICHES SUR LE LOIR",
    "Jean-Noël LANDELLE",
  ],
  [
    "LE PETIT SAINT JEAN",
    "xx-xx-xx-xx-xx",
    49140,
    "SEICHES SUR LE LOIR",
    "Dominique RONDEAU",
  ],
  ["L'UNION", "02 41 76 63 76", 49140, "SEICHES SUR LE LOIR", "Alain RENOU"],
  ["LA RENAISSANCE", "02 41 32 21 69", 49140, "SOUCELLES", "Serge PHILIPPEAU"],
  ["L'UNION", "02 41 45 35 93", 49610, "SOULAINES SUR AUBANCE", "Gilles FREMY"],
  [
    "HARRY DE VILLOUTREYS",
    "02 41 32 05 98",
    49460,
    "SOULAIRE ET BOURG",
    "Philippe GENET",
  ],
  [
    "L'ESPÉRANCE",
    "xx-xx-xx-xx-xx",
    72800,
    "THOREE LES PINS",
    "Claude LANGLAIS",
  ],
  ["L'UNION AGRICOLE", "02 41 47 66 50", 49380, "THOUARCE", "Alain DENECHERE"],
  [
    "L'UNION DU BOURGNEUF",
    "02 41 57 30 24",
    49350,
    "THOUREIL (LE)",
    "Jean-Michel LAURENT",
  ],
  [
    "L'UNION DE LA GARE",
    "06 41 99 05 32",
    49125,
    "TIERCE",
    "Jean-Michel RIBOTTA",
  ],
  ["SAINT MARCEL", "xx-xx-xx-xx-xx", 49125, "TIERCE", "Gérard GAUTIER"],
  ["LA BRETONNE", "02 41 69 79 13", 49800, "TRELAZE", "Jean-Pierre LAINÉ"],
  ["LA TOUR DU MOULIN", "02 41 69 74 15", 49800, "TRELAZE", "Nicole PILARD"],
  [
    "LES FRESNAIES BEAUMANOIR",
    "02 41 69 71 48",
    49800,
    "TRELAZE",
    "Christian BEAUCHESNE",
  ],
  [
    "AUX AMIS RÉUNIS",
    "xx-xx-xx-xx-xx",
    49700,
    "ULMES (LES)",
    "Christophe BRETON",
  ],
  ["SAINT PIERRE", "02 41 45 47 01", 49670, "VALANJOU", "Yves BUREAU"],
  ["LA RENAISSANCE", "02 40 98 34 25", 44370, "VARADES", "Marc GAUDICHEAU"],
  ["LA PAIX", "02 41 40 23 59", 49730, "VARENNES SUR LOIRE", "André MABILLEAU"],
  [
    "L'AVENIR",
    "02 41 38 38 76",
    49730,
    "VARENNES SUR LOIRE",
    "Jean-Claude BILLARD",
  ],
  ["L'UNION", "xx-xx-xx-xx-xx", 49400, "VARRAINS", "Laurent DEZE"],
  ["SAINT VINCENT", "02 41 74 96 37", 49320, "VAUCHRETIEN", "Yves YONNET"],
  ["L'ALLIANCE", "xx-xx-xx-xx-xx", 49150, "VAULANDRY", "Pascal CORVAISIER"],
  ["L'UNION", "02 41 61 45 18", 49220, "VERN D'ANJOU", "Suzanne ELUERE"],
  ["SAINT ERNEST", "06 71 09 04 21", 49390, "VERNANTES", "Michel HILDEVERT"],
  [
    "AMICALE JULES FERRY",
    "02 41 51 44 61",
    49390,
    "VERNOIL LE FOURRIER",
    "Liliane ROBINEAU",
  ],
  ["LA PAIX", "xx-xx-xx-xx-xx", 49150, "BAUGÉ EN ANJOU", "Gildas MARGAS"],
  ["L'ESPÉRANCE", "xx-xx-xx-xx-xx", 49150, "BAUGÉ en ANJOU", "Fabrice GUILLET"],
  [
    "L'UNION VIEIL-BAUGE",
    "02 41 89 81 86",
    49150,
    "BAUGÉ EN ANJOU",
    "Jean-Claude GRENET",
  ],
  [
    "LA TRANQUILLITÉ",
    "xx-xx-xx-xx-xx",
    72270,
    "VILLAINES SOUS MALICORNE",
    "Michel VANNIER",
  ],
  [
    "L'ÉGALITÉ",
    "xx-xx-xx-xx-xx",
    72270,
    "VILLAINES SOUS MALICORNE",
    "Dominique JEAN",
  ],
  ["L'AVENIR", "02 41 51 04 70", 49400, "VILLEBERNIER", "Georges GALLO"],
  ["L'UNION", "02 41 67 51 97", 49400, "VILLEBERNIER", "Thierry BOUILLAUX"],
  ["LES LILAS", "xx-xx-xx-xx-xx", 49140, "VILLEVEQUE", "Alain GUILLOU"],
  ["SAINT PIERRE", "xx-xx-xx-xx-xx", 49140, "VILLEVEQUE", "Guylaine PILLET"],
  ["L'AVENIR", "02 43 92 12 05", 72300, "VION", "Marc JOUBERT"],
  ["L'AVENIR", "xx-xx-xx-xx-xx", 49680, "VIVY", "André BOURGER"],
  [
    "LA BOULE VOUVRILLONNE",
    "02 47 52 65 10",
    37210,
    "VOUVRAY",
    "Christian LOTHION",
  ],
  [
    "ESPACE DE CONVIVIALITÉ",
    "xx-xx-xx-xx-xx",
    49400,
    "DISTRÉ",
    "Philippe RABILLER",
  ],
];

var prenoms_feminins = [
  "Annie",
  "Catherine",
  "Chantal",
  "Christiane",
  "Clair",
  "Eliane",
  "Elisabeth",
  "Fabienne",
  "Françoise",
  "Gaêlle",
  "Gisèle",
  "Guylaine",
  "Jany",
  "Laurence",
  "Liliane",
  "Marie-Claire",
  "Marie-Jo",
  "Martine",
  "Renée",
  "Roselyne",
  "Suzanne",
  "Sylvie",
  "Virginie",
  "Yolande",
];

var departements = [37, 41, 44, 49, 53, 72];

// méthode renvoyant une copie du tableau sans doublons
Array.prototype.supprimerDoublons = function () {
  return [...new Set(this)];
};

/************************************************************************ */
// Question 1 : nombre de sociétés sans numéros de téléphone
var sans_telephone = societes.filter(societe => societe[1] === "xx-xx-xx-xx-xx").length
// A COMPLETER
console.log("#SOCIETES SANS TELEPHONE = " + sans_telephone); // 114

/************************************************************************ */
// Question 2 : objet stockant le nombre de sociétés par département
var distribution = societes.reduce((acc,societe)=>{

  let dep = societe[2].toString().substring(0,2);
  
  if(acc[dep]){
    acc[dep]++;
  }else{
    acc[dep] = 1;
  }
  return acc;
},{});
// A COMPLETER
console.log("#SOCIETES PAR DEPARTEMENT = ");
console.log(distribution);

/************************************************************************ */
// Question 3 : extraire les prénoms sous forme d'un tableau trié de mots
var prenoms = societes.map(societe => societe[4])
                      .filter(societe => societe)
                      .supprimerDoublons()
                      .sort((s1, s2) => 
                        s1.toLowerCase().localeCompare(s2.toLowerCase()));
// A COMPLETER
console.log("PRENOMS TRIES = " + prenoms);

/************************************************************************ */
// Question 4 : générer le tableau HTML des sociétés
// A COMPLETER
function genererTable(societes){
  var table = document.querySelector("table")

  societes.forEach(societe => {
      var ligne = table.insertRow(1)

      var societeCol = ligne.insertCell(0);
      societeCol.textContent = societe[0];

      var cpCol = ligne.insertCell(1)
      cpCol.textContent = societe[2]

      var presidenteCol = ligne.insertCell(2)
      presidenteCol.textContent = societe[4]

      if(prenoms_feminins.includes(societe[4])){
        presidenteCol.classList.add("presidente")
      }

  })

}

genererTable(societes)
/************************************************************************ */
// Question 5 : impléménter constructeur et méthode de prototype

function Societe(nom,codePostal,president){
  this.nom = nom;
  this.codePostal = codePostal;
  this.president = president;
}

Societe.prototype.toHTML = (datalist)=>{
  let option = document.createElement("option")
  option.value = `${this.nom} – ${this.codePostal} – ${this.president}`;

  datalist.appendChild(option);

}

societes.forEach(function (s) {
  let societe = new Societe(s[0], s[2], s[4]);
  societe.toHTML(document.getElementById("societes"));
});
// A COMPLETER
