# Quigley Coffee Company: spec site notes

Talking points for Anthony. This file is not part of the site.

## Pages

| Page | File | What it does |
|---|---|---|
| Home | index.html | Open-now badge, address, hours and tap-to-call above the fold, Order ahead button, the four offers (menu, Q Club, cart, ownership), story, 4.8 rating with real quotes, cart service area |
| Menu | menu.html | A readable HTML menu: Koda Brew, Bear Hug, Iced PFL, Iced Florida Boi, the daily coffee bar, food and extras. Prices stay in Dripos |
| Coffee cart | coffee-cart.html | All three event packages with real prices, the full add-on price table, event types, service area, planning FAQ, "Get a quote for this" buttons that prefill the form |
| Q Club | q-club.html | $12/week membership explained in three perks, how it works, and the fine print as an FAQ |
| Own a cart | own-a-cart.html | Franchise offer: ~$35K investment, 8 to 12 weeks to launch, what is included, six steps, discovery call link |
| Visit | contact.html | Address, full hours with today highlighted, phone, directions, Instagram, and a working event quote form with `?service=` prefill |

No gallery page: no photos could be collected this run (see Brand notes).

## Problems on the current site

1. No address, hours or phone number appear as text on the homepage. The only location info is a "CLICK FOR SHOP DIRECTIONS" Google Maps link. https://www.quigleycoffeeco.com
2. No menu with item names anywhere on the site. Every order goes out to Dripos. https://www.quigleycoffeeco.com
3. Typo in the Q Club section: "Unlimted coffee for the price of two." https://www.quigleycoffeeco.com
4. Typo on the cart page: "2-HOUR UNLIMTED DRINKS." https://quigleycoffeeco.com/book-the-cart
5. "Get a quote" buttons on the cart page link to `#/`, a dead placeholder. People ready to book an event have nowhere to go. https://quigleycoffeeco.com/book-the-cart
6. "Order Beans" and "Buy Coffee Bags" link to `#/`, and the beans page lists no products. https://quigleycoffeeco.com/coffee-beans
7. Book the Cart links split between `/book-the-cart` and `/book-event`; `/book-event` returned an error when fetched. https://quigleycoffeeco.com/book-event
8. The homepage says both "400+ events since 2021" and "500+ events served." https://www.quigleycoffeeco.com
9. The ownership page gives three launch timelines: 90 days, 12 weeks, and 8 to 12 weeks. https://quigleycoffeeco.com/own-a-coffee-cart
10. Typo "sandwhich" in the Q Club rules. https://quigleycoffeeco.com/qclub
11. Page source carries "Your browser does not support the video tag." and the canonical points at quigleycoffee.com while every link uses quigleycoffeeco.com. https://www.quigleycoffeeco.com
12. Hours differ between listings: MapQuest and Restaurantji say 7 AM to 5 PM daily; Birdeye says Mon to Thu 7 to 7, Fri 7 to 9, Sat 7 to 7, Sun 6 to 4. https://reviews.birdeye.com/quigley-coffee-company-171694564565023

Problems 1 to 5 were rechecked against the live site during this build and are still there.

## What the new design does and why

- **The shop comes first.** The current homepage reads as an event-catering pitch. Walk-in customers checking hours on their phone get a visit card with an open-now badge (computed in Eastern time), the address, hours and a phone link in the first screen.
- **A real menu page.** Drinks people mention in reviews (Koda Brew, Bear Hug) get names and descriptions people can read before they drive over. Dripos stays the place to order and the source of prices.
- **Every quote button goes somewhere.** Each cart package has "Get a quote for this," which opens the Visit page with that package already selected. Fixes the `#/` dead ends.
- **Four offers, four pages.** Shop, Q Club, cart catering and cart ownership each had a section crammed into one long page. Now each has its own page with the real prices and fine print, and the nav is five items.
- **Mobile action bar.** Call and Order ahead stay pinned at the bottom of every page on phones.
- **One stat, one timeline.** The site uses "400+ events since 2021" and "8 to 12 weeks from signing" everywhere.

## Brand notes

- This run could not download the logo, photos or stylesheet from quigleycoffeeco.com (network blocked from the build machine), so the site uses a text wordmark ("Quigley Coffee Co.") and no photos. Drop the real logo into the header and footer, and add shop, drink and cart photos to Home, Menu and Coffee cart before showing the owner.
- Palette is provisional: brick red primary, sun yellow and deep teal accents on warm cream, picked to match the "bright and colorful" shop interior described by Do Orlando North. Swap for colors sampled from the logo.
- Type: Archivo (headings) and Figtree (body). Replace the heading face if their Showit site uses an identifiable brand font.
- Kept their own wording: "GOOD. CLEAN. FAST.", "Coffee is our thing; people are our heart.", "Unlimited coffee for the price of two" (typo fixed), package names exactly as listed.

## Before launch checklist

- [ ] Confirm hours with the owner (listings disagree). Update the `HOURS` array in script.js, the hours list on contact.html and the JSON-LD.
- [ ] Add the real logo and photos; add a gallery page if there are 8 or more.
- [ ] Confirm the add-on price pairings (the source pricing page layout is scrambled) and whether branded cup prices are single color.
- [ ] Confirm the Q Club sign-up URL (currently club.quigleycoffeeco.com) and the event call link (Calendly).
- [ ] Ask for drink prices and descriptions for Iced PFL, Iced Florida Boi, Bear Hug and the other signature drinks if they want prices on the menu page.
- [ ] Confirm whether to mention "8 spots left" for founding cart owners (left off the spec because it changes).
- [ ] Hook the quote form to a handler (markup is ready for Netlify Forms) and test delivery to the owner's inbox.
- [ ] Remove `noindex,nofollow` from every page once the owner approves going live, and fix the canonical domain.
- [ ] Replace the Open Graph image (currently their existing site screenshot) with a real shop photo.

## Sources

- https://www.quigleycoffeeco.com
- https://quigleycoffeeco.com/book-the-cart
- https://quigleycoffeeco.com/catering-pricing-1
- https://quigleycoffeeco.com/qclub
- https://quigleycoffeeco.com/own-a-coffee-cart
- https://quigleycoffeeco.com/coffee-beans
- https://reviews.birdeye.com/quigley-coffee-company-171694564565023 (address, 4.8 from 372 reviews, Chinmaya quote)
- https://www.restaurantji.com/fl/sanford/quigley-coffee-co-/ (phone, hours, drink names)
- https://www.mapquest.com/us/florida/quigley-coffee-656653725 (hours)
- https://doorlandonorth.com/?p=3199 (founders, interior, Koda Brew, motto)
