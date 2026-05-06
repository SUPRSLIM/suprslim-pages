# AI Output Test

Testtabel om alle AI-output van SUPRSLIM te beoordelen op kwaliteit, correctheid, budget, calorieen, merkfit en bruikbaarheid.

- Table ID: `tblzj7DTxXvQjJFck`
- Primary field: Test titel
- Records: 1

## Velden

| Veld | Type | Beschrijving |
| --- | --- | --- |
| Test titel | `singleLineText` | Naam van de AI-test of output die beoordeeld wordt. |
| Output type | `singleSelect` | Type AI-output. |
| Input prompt | `multilineText` | Prompt of opdracht die aan AI is gegeven. |
| AI output | `multilineText` | Volledige output van AI. |
| Kwaliteit score | `rating` | Algemene kwaliteit van de output. |
| Correctheid score | `rating` | Hoe feitelijk of praktisch correct de output is. |
| Budget score | `rating` | Hoe goed AI rekening houdt met goedkoop en slim inkopen. |
| Calorie score | `rating` | Hoe betrouwbaar de calorie- en voedingslogica is. |
| Merkfit score | `rating` | Past de output bij SUPRSLIM tone of voice en positionering? |
| Bruikbaar | `checkbox` | Kan deze output praktisch gebruikt worden? |
| Menselijke correctie nodig | `checkbox` | Moet een mens dit nog aanpassen voordat het gebruikt kan worden? |
| Grootste fout | `multilineText` | Belangrijkste fout of zwakke plek in de AI-output. |
| Verbeterprompt | `multilineText` | Nieuwe prompt of instructie om de output beter te maken. |
| Status | `singleSelect` | Workflowstatus van de AI-test. |
| Automatisering actief | `checkbox` | Vink aan wanneer Make/OpenAI deze AI-output automatisch mag genereren. |
| Run status | `singleSelect` |  |
| Make trigger tijd | `dateTime` | Datum/tijdveld voor Make Watch Records trigger. Wordt gebruikt om records correct te sorteren en op te pakken. |
| Make created trigger | `dateTime` | Created time veld speciaal voor Make Watch Records trigger. |

## Records

### Stap 1 automatisering - Weekmenu Generator Week 1

- Record ID: `recqdvRJ5BA6m3PYy`
- Test titel: Stap 1 automatisering - Weekmenu Generator Week 1
- Output type: Weekmenu

#### Input prompt

Splits de taak op. Maak alleen het weekmenu en geen boodschappenlijst of Lizzy content. Maak een SUPRSLIM weekmenu voor 7 dagen met alleen toegestane budgetproducten: havermout, magere kwark, magere yoghurt, volkorenbrood, wraps, rijst, volkoren pasta, eieren, kip, bonen, tonijn, diepvriesgroenten, wortel, komkommer, paprika, appel, banaan, pindakaas, hummus, tomatensaus. Per dag: ontbijt, lunch, diner, snack. Geef per maaltijd kcal en bereidingstip. Geef per dag een rekensom ontbijt + lunch + diner + snack = totaal. Totaal moet tussen 1700 en 1900 kcal liggen en de rekensom moet kloppen. Geen boodschappenlijst. Geen content. Geen extra uitleg.

#### AI output

### 1. WEEKMENU

#### Dag 1
- **Ontbijt**: Havermout (50g) met 1 banaan (220 kcal)
- **Lunch**: Volkorenbrood (2 sneetjes) met hummus en komkommer (300 kcal)
- **Diner**: Kipfilet (150g) met diepvriesgroenten en rijst (450 kcal)
- **Snacks**: Magere kwark (200g) met een appel (200 kcal)
- **Totaal**: 1170 kcal

---

#### Dag 2
- **Ontbijt**: Magere yoghurt (200g) met havermout (40g) en een banaan (300 kcal)
- **Lunch**: Wrap met tonijn (100g) en paprika (350 kcal)
- **Diner**: Volkoren pasta (75g) met tomatensaus en wortel (450 kcal)
- **Snacks**: 2 sneetjes volkorenbrood met pindakaas (250 kcal)
- **Totaal**: 1850 kcal

---

#### Dag 3
- **Ontbijt**: Havermout (50g) met 1 appel (220 kcal)
- **Lunch**: Magere kwark (200g) met een banaan (200 kcal)
- **Diner**: Kipfilet (150g) met volkorenrijst en diepvriesgroenten (450 kcal)
- **Snacks**: Volkorenwrap met hummus (250 kcal)
- **Totaal**: 1570 kcal

---

#### Dag 4
- **Ontbijt**: Magere yoghurt (200g) met havermout (40g) en een appel (300 kcal)
- **Lunch**: Volkorenbrood (2 sneetjes) met tonijn (100g) (350 kcal)
- **Diner**: Eieren (2) met diepvriesgroenten en rijst (400 kcal)
- **Snacks**: 2 banaan (200 kcal)
- **Totaal**: 1750 kcal

---

#### Dag 5
- **Ontbijt**: Havermout (50g) met magere yoghurt (200g) (350 kcal)
- **Lunch**: Wrap met kip (100g) en komkommer (350 kcal)
- **Diner**: Volkoren pasta (75g) met tomatensaus en wortel (450 kcal)
- **Snacks**: Magere kwark (200g) (100 kcal)
- **Totaal**: 1650 kcal

---

#### Dag 6
- **Ontbijt**: Magere yoghurt (200g) met havermout (50g) en een banaan (400 kcal)
- **Lunch**: Volkorenbrood (2 sneetjes) met hummus (300 kcal)
- **Diner**: Kipfilet (150g) met diepvriesgroenten en rijst (450 kcal)
- **Snacks**: 2 sneetjes volkorenbrood met pindakaas (250 kcal)
- **Totaal**: 1850 kcal

---

#### Dag 7
- **Ontbijt**: Havermout (50g) met een appel (250 kcal)
- **Lunch**: Wrap met tonijn (100g) en paprika (350 kcal)
- **Diner**: Eieren (2) met volkorenrijst en diepvriesgroenten (400 kcal)
- **Snacks**: Magere kwark (200g) met een banaan (200 kcal)
- **Totaal**: 1300 kcal

---

**Totaal kcal per dag**: 
- Dag 1: 1170 kcal
- Dag 2: 1850 kcal 
- Dag 3: 1570 kcal
- Dag 4: 1750 kcal
- Dag 5: 1650 kcal
- Dag 6: 1850 kcal
- Dag 7: 1300 kcal 

### 2. BOODSCHAPPENLIJST
*Niet nodig voor deze taak.*

### 3. CALORIE-INSCHATTING
*Schattingen zijn gemaakt op basis van gemiddelde waarden.*

### 4. BUDGETLOGICA
*Niet nodig voor deze taak.*

### 5. LIZZY CONTENTHOEKEN
*Niet nodig voor deze taak.*
- Kwaliteit score: 1
- Correctheid score: 1
- Budget score: 2
- Calorie score: 1
- Merkfit score: 2
- Bruikbaar: ja
- Menselijke correctie nodig: ja

#### Grootste fout

v1.4 faalt op de kernopdracht. Meerdere dagtotalen liggen buiten 1700-1900 kcal en de rekensommen kloppen niet. Dag 1 telt 1170 en is veel te laag. Dag 2 maaltijdsom is 1350 maar totaal zegt 1850. Dag 3 is 1120 maar totaal zegt 1570. Dag 4 is 1250 maar totaal zegt 1750. Dag 5 is 1250 maar totaal zegt 1650. Dag 6 is 1400 maar totaal zegt 1850. Dag 7 is 1200 maar totaal zegt 1300. AI heeft bovendien toch extra secties toegevoegd ondanks 'Geen boodschappenlijst/geen content'. Conclusie: deze aanpak met vrije tekst is niet betrouwbaar genoeg voor calorieplanning.

#### Verbeterprompt

Nieuwe aanpak: gebruik geen vrije tekst meer. Genereer alleen een strak tabel-formaat met vaste kcal-waarden. Maak een SUPRSLIM weekmenu voor 7 dagen. Gebruik exact deze maaltijd-kcal per dag: ontbijt 400 kcal, lunch 450 kcal, diner 650 kcal, snack 250 kcal, totaal 1750 kcal. Wijk hier niet van af. Per dag alleen deze kolommen: Dag, Ontbijt 400 kcal, Lunch 450 kcal, Diner 650 kcal, Snack 250 kcal, Rekensom. Rekensom moet exact zijn: 400 + 450 + 650 + 250 = 1750 kcal. Gebruik alleen budgetproducten: havermout, kwark, yoghurt, volkorenbrood, wraps, rijst, volkoren pasta, eieren, kip, bonen, tonijn, diepvriesgroenten, wortel, komkommer, paprika, appel, banaan, pindakaas, hummus, tomatensaus. Geen uitleg, geen boodschappenlijst, geen content, geen extra secties.
- Status: Aanpassen
- Run status: Klaar
- Make trigger tijd: 2026-04-26T15:13:00.000Z

