# Image slots for Grok Bot

The app is playable with unrestyled public-domain maps and CSS filters. Drop files into `app/images/` and `app/maps/` using **these exact filenames**. Do not invent new names without editing the JS.

General rules for every image:

- No modern lettering, no watermarks, no UI chrome, no English captions burned in (maps may keep their original historical labels).
- No anachronistic clothing or objects.
- Prefer the look of a painted miniature, a copperplate, or a slightly foxed print — not a video-game splash, not photoreal tourism.
- Restyled maps: keep geography, coastlines, and original labels; change only palette, paper, and ink to match the period theme below.

## Period palettes

- **Medieval (weeks 1–4):** parchment `#f3ead8`, wine `#7b2d26`, church blue `#1e3a5f`, gold `#b0893a`. Courts, pilgrimage roads, friars, fairs, universities, law courts, banners.
- **Early modern (weeks 5–8):** cream paper, Venetian red `#8b1e1e`, printer’s black, gold `#c4a35a`. Presses, galleys, cabinets of instruments, courts of Louis XIV, a Dutch counting-house.
- **Modern (weeks 9–12):** neoclassical cream, empire green `#3d4f3a`, ink blue `#1a3650`. Mills, codes, parade-grounds, a laboratory balance, a Calcutta interior.

## Maps to restyle (overwrite the file in `maps/`)

Keep the original as a backup copy named `*.orig.*` if you like.

1. `maps/europe-1190.jpg` — high medieval Europe / Mediterranean. Parchment, wine-and-blue.
2. `maps/france-1180.png` — France c. 1180. Used as a regional plate, not as a battle field.
3. `maps/hyw-1435.png` — Hundred Years’ War France.
4. `maps/constantinople-1453.png` — 1453 siege. Keep walls and Horn.
5. `maps/lepanto-1571.jpg` — Camocio 1574 order of battle. Do not invent extra ships.
6. `maps/blenheim-1704.png` and `maps/blenheim-field.png`
7. `maps/vienna-1683.jpg` — 1683 printed plan.
8. `maps/austerlitz-1805.jpg` and `maps/austerlitz-1400.png`
9. `maps/waterloo-1815.png`
10. `maps/leipzig-1813.jpg`

## Atmosphere stills (new files in `images/`)

These appear at the top of each week home. Until they exist, the app shows a dashed slot.

| File | Prompt gist |
|---|---|
| `images/w01-atmosphere.jpg` | A 13th-c. French royal court and a road of banners; clerks, a legate, a king’s household. Not a generic castle poster. |
| `images/w02-atmosphere.jpg` | Champagne fair: cloth bales, money-changers’ benches, a guarded hall, mud and pack-animals. |
| `images/w03-atmosphere.jpg` | Bologna: students in a hired hall, a Decretum on a desk, a street of lodgings. |
| `images/w04-atmosphere.jpg` | Merton or a Paris arts school: a diagram of speeds on a slate, an astrolabe on a table, clerks. |
| `images/w05-atmosphere.jpg` | A Holy League galley stern and a printed news-map of Lepanto in a Venetian shop. |
| `images/w06-atmosphere.jpg` | Venetian counting-house: journal and ledger open, a Franciscan at a merchant’s table (Pacioli’s world). |
| `images/w07-atmosphere.jpg` | Salamanca lecture or Westminster hall: a relectio, a bench of common lawyers. |
| `images/w08-atmosphere.jpg` | A bronze ball in a wooden groove; a single-lens microscope; a Bourbon well-shaft at Pompeii in a small inset, not a tourist photo. |
| `images/w09-atmosphere.jpg` | Austerlitz morning: a thin French right, breath in cold air, no film-still Napoleon close-up. |
| `images/w10-atmosphere.jpg` | Cromford mill on the Derwent, water-wheel, timed work. |
| `images/w11-atmosphere.jpg` | A Conseil chamber with the Civil Code quires; not a marble Napoleon. |
| `images/w12-atmosphere.jpg` | A balance and closed vessel; an indicator diagram pinned to a board; a Calcutta interior with a Sanskrit grammar, not a “mystical East” postcard. |
| `images/intro-atmosphere.jpg` | Optional. Clergy opening ranks: a villein in orders among nobles — Tocqueville’s image, not a cartoon. |

## Do not generate

- New geographic maps from imagination. Restyle the Commons files.
- Photoreal portraits of living people.
- Anything that could be mistaken for the assigned PDF pages.
