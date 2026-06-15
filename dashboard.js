
window.addEventListener('error', e => { try { document.body.innerHTML = '<pre style="padding:20px;color:red;background:#fff;font:13px monospace;white-space:pre-wrap">RUNTIME ERROR: ' + (e.message || e) + '\n\n' + (e.error && e.error.stack ? e.error.stack : '') + '</pre>'; } catch(_){} });
try {
const DATA = [
  {
    "business": "AB Shop",
    "owner": "Amy",
    "phone": "(603) 252-9887",
    "email": "info@shopbyamy.com",
    "dm_channel": "https://www.facebook.com/shopbyamy",
    "city_state": "Keene, NH",
    "author_link": "https://www.facebook.com/shopbyamy",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Arturo's Restaurant & Bar",
    "owner": "Artie Lorie",
    "phone": "(570) 299-5296",
    "email": "arturosofdupon@gmail.com",
    "dm_channel": "https://www.facebook.com/arturosdupont",
    "city_state": "Dupont, PA",
    "author_link": "https://www.facebook.com/arturosdupont",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "BeautiMarx Studio",
    "owner": "Stacee Russell",
    "phone": "(865) 243-6589",
    "email": "beautimarx@gmail.com",
    "dm_channel": "https://www.facebook.com/beautimarx",
    "city_state": "Knoxville, TN",
    "author_link": "https://www.facebook.com/beautimarx",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Beauty Within Collection",
    "owner": "Tammy Cook-Phillips",
    "phone": "(706) 306-8354",
    "email": "beautywithinco@gmail.com",
    "dm_channel": "https://www.facebook.com/tammy.cookphillips",
    "city_state": "Augusta, GA",
    "author_link": "https://www.facebook.com/tammy.cookphillips",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Defender Jerky",
    "owner": "Scott Parker",
    "phone": "(832) 693-0468",
    "email": "info@beefjerkyoutlet.com",
    "dm_channel": "https://www.facebook.com/scott.parker.defender",
    "city_state": "Humble, TX",
    "author_link": "https://www.facebook.com/scott.parker.defender",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Dog Grooming Salon",
    "owner": "Kris Uncapher-Kruzel",
    "phone": "(419) 902-4082",
    "email": "uncapherkruzel@gmail.com",
    "dm_channel": "https://www.facebook.com/kris.kruzelrn",
    "city_state": "Maumee, OH",
    "author_link": "https://www.facebook.com/kris.kruzelrn",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Eldridge Investments LLC",
    "owner": "Samantha Eldridge",
    "phone": "(731) 441-3846",
    "email": "info@eldridgeco.com",
    "dm_channel": "https://www.facebook.com/eldridgeco",
    "city_state": "Greenwich, CT",
    "author_link": "https://www.facebook.com/eldridgeco",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Eri Nicole Artistry",
    "owner": "Erika Nicole",
    "phone": "(302) 391-4459",
    "email": "erikanicoleartistry@gmail.com",
    "dm_channel": "https://www.facebook.com/eri.nicole.artistry",
    "city_state": "Bessemer, AL",
    "author_link": "https://www.facebook.com/eri.nicole.artistry",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Hungry Howie's Pizza (rebrand)",
    "owner": "Keith and Joell Smith",
    "phone": "(912) 384-5500",
    "email": "contactus@hungryhowies.com",
    "dm_channel": "https://www.facebook.com/hungryhowies",
    "city_state": "Stephan, GA",
    "author_link": "https://www.facebook.com/hungryhowies",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Joey Jimenez (Georgetown TX — co-owner of Secret Ranch Boutique with Starla Jimenez)",
    "owner": "Joey Jimenez (married to Starla Jimenez)",
    "phone": "(361) 701-0094",
    "email": "secretrboutique@gmail.com",
    "dm_channel": "Facebook @joey.jimenez OR email secretrboutique@gmail.com OR phone",
    "city_state": "Alice, TX",
    "author_link": "https://www.facebook.com/joey.jimenez (inferred)",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nJoey — saw you and Starla running Secret Ranch Boutique out of Alice with the pop-ups across South Texas. Saw your POS question on Facebook.\n\n=== OPENER (first 10 seconds) ===\nHi Joey, this is [YOUR NAME] — got a quick minute about the SRB boutique?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Same deal as I'd offer Starla: a flat-rate card processor that saves boutique pop-ups about $100-200/mo vs. Square.\n2. The mobile swiper + virtual terminal combo works well for the Thursday-night live sales on Facebook — key in cards for phone orders, swipe at the pop-up.\n3. If you have a separate LLC / DBA for SRB, we can set that up as its own merchant account in 48 hours.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we already use Square\"\n  → Most SRB-style pop-ups do. The 2.6% on a $125 sale is $3.25 — we can usually bring that to $1.95-2.10. Over 50 sales/mo that's $50+ saved.\n• If they say: \"we're pop-up only\"\n  → Mobile swiper + virtual terminal + your phone. No monthly minimums.\n• If they say: \"send info\"\n  → What's your email? One-pager specific to South Texas boutique pop-ups.\n\n=== CLOSE / ASK ===\nEmail to send the comparison sheet?",
    "opener": "Hi Joey, this is [YOUR NAME] — got a quick minute about the SRB boutique?",
    "pitch": "Same deal as I'd offer Starla: a flat-rate card processor that saves boutique pop-ups about $100-200/mo vs. Square. | The mobile swiper + virtual terminal combo works well for the Thursday-night live sales on Facebook — key in cards for phone orders, swipe at the pop-up. | If you have a separate LLC / DBA for SRB, we can set that up as its own merchant account in 48 hours.",
    "objections": "\"we already use Square\" → Most SRB-style pop-ups do. The 2.6% on a $125 sale is $3.25 — we can usually bring that to $1.95-2.10. Over 50 sales/mo that's $50+ saved. || \"we're pop-up only\" → Mobile swiper + virtual terminal + your phone. No monthly minimums. || \"send info\" → What's your email? One-pager specific to South Texas boutique pop-ups.",
    "ask": "Email to send the comparison sheet?",
    "emails": [
      {
        "type": "cold",
        "subject": "Quick question about Joey Jimenez",
        "body": "Hey,\n\nSaw your post on Facebook about your business (Joey Jimenez (Georgetown TX — co-owner of Secret Ranch Boutique with Starla Jimenez)). I work with a lot of small businesses like yours on flat-rate card processing — typically saving $80-300/mo vs. the big processors.\n\nIf you want, I'll send a one-pager specific to your volume. No sales pitch, no call. Just the sheet.\n\nWorth a reply?\n\n[YOUR NAME]\n[YOUR COMPANY]\n[YOUR PHONE — text only]"
      }
    ]
  },
  {
    "business": "Kanpai Mt. Pleasant",
    "owner": "Sean Park",
    "phone": "(843) 388-8001",
    "email": "chefseanpark@hotmail.com",
    "dm_channel": "https://www.facebook.com/chefseanpark",
    "city_state": "Mount Pleasant, SC",
    "author_link": "https://www.facebook.com/chefseanpark",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Kitties Cafe",
    "owner": "Corey Jamieson",
    "phone": "(218) 695-4101",
    "email": "kittiescafe@gmail.com",
    "dm_channel": "https://www.facebook.com/corey.jamieson.37",
    "city_state": "Remer, MN",
    "author_link": "https://www.facebook.com/corey.jamieson.37",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Krista Thompson (small biz)",
    "owner": "Krista Thompson",
    "phone": "(859) 481-5768",
    "email": "scottkrista.1@netzero.com",
    "dm_channel": "https://www.facebook.com/krista.thompson.scott",
    "city_state": "Springfield, KY",
    "author_link": "https://www.facebook.com/krista.thompson.scott",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "LaFayth's Aesthetic Beauty Bar",
    "owner": "Lafayth",
    "phone": "(512) 843-1796",
    "email": "lafayths.abb@gmail.com",
    "dm_channel": "https://www.facebook.com/lafayth.abb",
    "city_state": "Pflugerville, TX",
    "author_link": "https://www.facebook.com/lafayth.abb",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "McFarlin's Front Porch",
    "owner": "Makenna Taryn McFarlin",
    "phone": "(512) 710-3114",
    "email": "mcfarlinsfrontporch@gmail.com",
    "dm_channel": "https://www.facebook.com/makenna.taryn.33",
    "city_state": "Liberty Hill, TX",
    "author_link": "https://www.facebook.com/makenna.taryn.33",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Miss Emily's Bed and Biscuit",
    "owner": "Emily Broring",
    "phone": "(407) 737-0774",
    "email": "info@missemilysbedandbiscuit.com",
    "dm_channel": "https://www.facebook.com/ebroring",
    "city_state": "Orlando, FL",
    "author_link": "https://www.facebook.com/ebroring",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Nana Bevs Southern Kitchen",
    "owner": "Beverly",
    "phone": "(580) 565-9200",
    "email": "nanabevssouthernkitchen@gmail.com",
    "dm_channel": "https://www.facebook.com/nana.bevs",
    "city_state": "Ardmore, OK",
    "author_link": "https://www.facebook.com/nana.bevs",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "North Country",
    "owner": "Scott Smith",
    "phone": "(203) 803-8015",
    "email": "smiths@ncbpinc.com",
    "dm_channel": "https://www.facebook.com/scott.smith.ncbp",
    "city_state": "Hartford, CT",
    "author_link": "https://www.facebook.com/scott.smith.ncbp",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Oklahoma Sparks",
    "owner": "Eric Yeager",
    "phone": "(580) 223-5889",
    "email": "eric.yeager@kirkland.com",
    "dm_channel": "https://www.facebook.com/eric.yeager.kirkland",
    "city_state": "Ardmore, OK",
    "author_link": "https://www.facebook.com/eric.yeager.kirkland",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "One-eyed Jack's Gourmet Delights",
    "owner": "Tracy",
    "phone": "(865) 621-4531",
    "email": "info@oneeyedjacksgourmetdelights.com",
    "dm_channel": "https://www.facebook.com/profile.php?id=61578980384756",
    "city_state": "Pigeon Forge, TN",
    "author_link": "https://www.facebook.com/profile.php?id=61578980384756",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Precious Touch Cleaning",
    "owner": "Y.V. Gibsion",
    "phone": "(948) 253-2442",
    "email": "preciouscleaning31@gmail.com",
    "dm_channel": "https://www.facebook.com/preciouscleaning31",
    "city_state": "Richmond, VA",
    "author_link": "https://www.facebook.com/preciouscleaning31",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Renewed Hair Studio & Spa",
    "owner": "Leslie Grimes",
    "phone": "(706) 529-3781",
    "email": "renewedhairstudioandspa@gmail.com",
    "dm_channel": "https://www.facebook.com/renewedhair",
    "city_state": "Dalton, GA",
    "author_link": "https://www.facebook.com/renewedhair",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Rolling Cones Novelty Ice Cream Truck",
    "owner": "Melissa",
    "phone": "(978) 996-3385",
    "email": "info@rollingconesboston.com",
    "dm_channel": "https://www.facebook.com/rollingconesboston",
    "city_state": "Boston, MA",
    "author_link": "https://www.facebook.com/rollingconesboston",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Sade's Vinyl Designs",
    "owner": "Sadie",
    "phone": "(802) 661-8720",
    "email": "sadescreations22@gmail.com",
    "dm_channel": "https://www.facebook.com/sadescreations22",
    "city_state": "Winooski, VT",
    "author_link": "https://www.facebook.com/sadescreations22",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Secret Ranch Boutique (Georgetown, TX area)",
    "owner": "Starla Jimenez (with husband Joey Jimenez)",
    "phone": "(361) 701-0094",
    "email": "secretrboutique@gmail.com",
    "dm_channel": "Facebook @starla.vela.1 OR email secretrboutique@gmail.com OR phone",
    "city_state": "Alice, TX",
    "author_link": "https://www.facebook.com/starla.vela.1/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nStarla — saw the Secret Ranch Boutique in Alice and the South Texas pop-up circuit, and you were looking at POS options for the boutique.\n\n=== OPENER (first 10 seconds) ===\nHi Starla, this is [YOUR NAME] — Joey on the line too maybe? Saw Secret Ranch Boutique's posts about the pop-ups. Got a minute?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Boutiques that do pop-ups + a home base have a specific need — a POS that works offline at a market and reconciles when you get back to the shop.\n2. We work with boutiques like yours, typically save $100-200/mo vs. Square or the bundled processors.\n3. If you do Thursday night live sales on Facebook, we can wire a 'ship-now' button into your checkout so the post-sale processing is one click instead of a manual entry.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we use Square\"\n  → Square works but the per-tap fee at boutique volume adds up — on a $125 SRB live sale you lose $3.35. Flat rate would be ~$2.10. Over 50 sales/mo that's $60+ saved.\n• If they say: \"we're pop-up only, no store\"\n  → Even better — virtual terminal + mobile swiper + your phone = no monthly fees.\n• If they say: \"send info\"\n  → What's your email? One-page specific to South Texas boutique volume.\n\n=== CLOSE / ASK ===\nEmail to send the comparison sheet?",
    "opener": "Hi Starla, this is [YOUR NAME] — Joey on the line too maybe? Saw Secret Ranch Boutique's posts about the pop-ups. Got a minute?",
    "pitch": "Boutiques that do pop-ups + a home base have a specific need — a POS that works offline at a market and reconciles when you get back to the shop. | We work with boutiques like yours, typically save $100-200/mo vs. Square or the bundled processors. | If you do Thursday night live sales on Facebook, we can wire a 'ship-now' button into your checkout so the post-sale processing is one click instead of a manual entry.",
    "objections": "\"we use Square\" → Square works but the per-tap fee at boutique volume adds up — on a $125 SRB live sale you lose $3.35. Flat rate would be ~$2.10. Over 50 sales/mo that's $60+ saved. || \"we're pop-up only, no store\" → Even better — virtual terminal + mobile swiper + your phone = no monthly fees. || \"send info\" → What's your email? One-page specific to South Texas boutique volume.",
    "ask": "Email to send the comparison sheet?",
    "emails": [
      {
        "type": "cold",
        "subject": "Quick question about Joey Jimenez",
        "body": "Hey,\n\nSaw your post on Facebook about your business (Joey Jimenez (Georgetown TX — co-owner of Secret Ranch Boutique with Starla Jimenez)). I work with a lot of small businesses like yours on flat-rate card processing — typically saving $80-300/mo vs. the big processors.\n\nIf you want, I'll send a one-pager specific to your volume. No sales pitch, no call. Just the sheet.\n\nWorth a reply?\n\n[YOUR NAME]\n[YOUR COMPANY]\n[YOUR PHONE — text only]"
      }
    ]
  },
  {
    "business": "Spellbound Sparkle",
    "owner": "Brittany",
    "phone": "(828) 989-3681",
    "email": "support@spellboundsparkle.com",
    "dm_channel": "https://www.facebook.com/profile.php?id=61550959185162",
    "city_state": "Asheville, NC",
    "author_link": "https://www.facebook.com/profile.php?id=61550959185162",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Suds Laundry (Waynesboro VA)",
    "owner": "Ian Hudlow (and his wife Anne)",
    "phone": "(540) 241-1910",
    "email": "sudslaundry1@gmail.com",
    "dm_channel": "Email sudslaundry1@gmail.com OR phone",
    "city_state": "Next to the big Wal-Mart in Waynesboro, VA (exact street TBD)",
    "author_link": "https://www.facebook.com/sudslaundry1/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nIan — saw the Suds Laundry in Waynesboro next to the big Walmart, and the wash-and-fold service you and Anne run. You're also exploring expanding to Staunton VA.\n\n=== OPENER (first 10 seconds) ===\nHi Ian, this is [YOUR NAME] — quick 60 seconds about Suds Laundry?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Laundromats are one of the highest-margin card-processing verticals we work with — typically $400-800/mo in savings vs. the bundled processor most laundromat owners start on.\n2. Wash-and-fold gift certificates (the bidding-for-good charity auction model) need a virtual terminal that emails receipts — we can wire that up in a day.\n3. If you do open the second location in Staunton, both stores can run on one flat-rate account with one consolidated deposit.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we use a laundromat-specific processor\"\n  → Most laundromat-specific processors are 2.7-3.0% which is way above the flat rate. We can usually save 25-40% on laundromat volume.\n• If they say: \"we're already small, doesn't matter\"\n  → Actually laundromats punch above their weight — your wash/dry cycles are small dollar amounts but the monthly volume is high. Worth 5 min to compare.\n• If they say: \"send info\"\n  → What's the best email? One-pager specific to laundromat wash-and-fold volume.\n\n=== CLOSE / ASK ===\nBest email to send the comparison sheet?",
    "opener": "Hi Ian, this is [YOUR NAME] — quick 60 seconds about Suds Laundry?",
    "pitch": "Laundromats are one of the highest-margin card-processing verticals we work with — typically $400-800/mo in savings vs. the bundled processor most laundromat owners start on. | Wash-and-fold gift certificates (the bidding-for-good charity auction model) need a virtual terminal that emails receipts — we can wire that up in a day. | If you do open the second location in Staunton, both stores can run on one flat-rate account with one consolidated deposit.",
    "objections": "\"we use a laundromat-specific processor\" → Most laundromat-specific processors are 2.7-3.0% which is way above the flat rate. We can usually save 25-40% on laundromat volume. || \"we're already small, doesn't matter\" → Actually laundromats punch above their weight — your wash/dry cycles are small dollar amounts but the monthly volume is high. Worth 5 min to compare. || \"send info\" → What's the best email? One-pager specific to laundromat wash-and-fold volume.",
    "ask": "Best email to send the comparison sheet?",
    "emails": []
  },
  {
    "business": "The Tin Roof Country Store and Creamery",
    "owner": "Elizabeth",
    "phone": "(706) 400-5547",
    "email": "info@tinroofcreamery.com",
    "dm_channel": "https://www.facebook.com/elizdyer/",
    "city_state": "Blairsville, GA",
    "author_link": "https://www.facebook.com/elizdyer/",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "4eveercleaning LLC",
    "owner": "Tasha",
    "phone": "(763) 807-9817",
    "email": "",
    "dm_channel": "https://www.facebook.com/4eveercleaning",
    "city_state": "Minneapolis",
    "author_link": "https://www.facebook.com/4eveercleaning",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Alaska Timber Essential Oils",
    "owner": "Julie Annis",
    "phone": "(907) 821-8495",
    "email": "",
    "dm_channel": "https://www.facebook.com/julie.annis",
    "city_state": "Ketchikan",
    "author_link": "https://www.facebook.com/julie.annis",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Boba & Bites (Greater Sacramento food trailer)",
    "owner": "Wilson (wilson@nextcode.my) per LinkedIn mapping",
    "phone": "(916) 742-3837",
    "email": "",
    "dm_channel": "Yelp business page OR Facebook @bobaandbites",
    "city_state": "Greater Sacramento, CA (AAPI Night Market 520 Capitol Mall + farmers markets)",
    "author_link": "https://www.facebook.com/bobaandbites/ (or profile.php?id=61570700008994)",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nWilson — I saw you're running Boba & Bites out in the Sacramento area, doing AAPI night markets + farmers markets, and looking at POS options for the trailer.\n\n=== OPENER (first 10 seconds) ===\nHi Wilson, this is [YOUR NAME] from [YOUR COMPANY] — saw your Boba & Bites post about scaling up. Do you have 90 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. We work with food trailers specifically — flat-rate card processing so the 3% you're losing on a $200 boba order doesn't eat your margin.\n2. Boba is high-ticket quick-serve so you need a POS that handles tips, custom modifiers (sugar level, ice, toppings) without slowing down the line.\n3. We also do a same-day mobile deposit so the cash-flow drag on a market day is gone.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we already use Square\"\n  → Square's fine for starters but at your volume the 2.6% + 10¢ adds up — we can usually save a trailer doing $20K/mo about $400/mo with a flat-rate flat-fee plan.\n• If they say: \"send me an email\"\n  → Absolutely. What's the best email? I'll send you a one-pager tonight specific to food trailers + a no-obligation savings estimate based on last month's volume.\n• If they say: \"not interested\"\n  → Totally fair. Mind if I send one quick comparison sheet so you have it when you're ready? No follow-up calls.\n\n=== CLOSE / ASK ===\nBest next step: can I send you a side-by-side savings comparison specific to your trailer this week?",
    "opener": "Hi Wilson, this is [YOUR NAME] from [YOUR COMPANY] — saw your Boba & Bites post about scaling up. Do you have 90 seconds?",
    "pitch": "We work with food trailers specifically — flat-rate card processing so the 3% you're losing on a $200 boba order doesn't eat your margin. | Boba is high-ticket quick-serve so you need a POS that handles tips, custom modifiers (sugar level, ice, toppings) without slowing down the line. | We also do a same-day mobile deposit so the cash-flow drag on a market day is gone.",
    "objections": "\"we already use Square\" → Square's fine for starters but at your volume the 2.6% + 10¢ adds up — we can usually save a trailer doing $20K/mo about $400/mo with a flat-rate flat-fee plan. || \"send me an email\" → Absolutely. What's the best email? I'll send you a one-pager tonight specific to food trailers + a no-obligation savings estimate based on last month's volume. || \"not interested\" → Totally fair. Mind if I send one quick comparison sheet so you have it when you're ready? No follow-up calls.",
    "ask": "Best next step: can I send you a side-by-side savings comparison specific to your trailer this week?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: boba trailer savings — quick one-pager",
        "body": "Hey Wilson —\n\nTried you earlier. Quick recap so you have it on file:\n\nThe trailer's processing on a market day is probably 2.6% + 10¢/swipe (Square) or higher if you're on Toast. Flat-rate we can usually get that to ~1.9% effective for a high-volume food trailer.\n\nI built a one-pager specific to Sacramento food trailers (AAPI Night Market volume, farmers-market volume, weekend pop-ups). Want me to send it?\n\nJust text me back \"send\" and I'll forward it tonight. Or call me at [YOUR PHONE].\n\n[YOUR NAME]\n[YOUR COMPANY]"
      }
    ]
  },
  {
    "business": "Chefs Cort (Cafe & Catering)",
    "owner": "Cortney Banks-Gordon (Chef Cort)",
    "phone": "+1-817-655-3777 (Yelp) or +1-817-381-8870 (Grubhub)",
    "email": "",
    "dm_channel": "Facebook @ChefsCortCafe16 OR phone",
    "city_state": "Fort Worth, TX",
    "author_link": "https://www.facebook.com/ChefsCortCafe16/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nCortney — saw the post about Chef Cort and the Fort Worth soul-food cafe, and the wing deal. You mentioned needing a menu programmer on the Toast setup.\n\n=== OPENER (first 10 seconds) ===\nHi Cortney, this is [YOUR NAME] — saw your Chef Cort posts. Got 60 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. You mentioned the menu-programming problem on Toast — we work with new soul-food / cafe setups like yours and can usually get a menu configured in 2-3 business days.\n2. On the processing side, if you're doing the $25 wing deal volume, we can usually save 20-30% vs. Toast's bundled rates.\n3. We also do same-day deposit which is a big deal for cafes that need cash for Saturday's prep on Friday morning.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"already have a processor\"\n  → Most cafes we work with came over from Toast's bundled processing or Square and saved $300-600/mo. Worth a comparison.\n• If they say: \"we're rebuilding after a loss\"\n  → I'm sorry to hear that. If you're using the GoFundMe momentum, the best ROI is making sure every swipe has the lowest possible rate. 5 min to compare.\n• If they say: \"send info\"\n  → What's your email? I'll send a one-pager specific to a 1809 Everman cafe volume.\n\n=== CLOSE / ASK ===\nBest email to send the comparison sheet?",
    "opener": "Hi Cortney, this is [YOUR NAME] — saw your Chef Cort posts. Got 60 seconds?",
    "pitch": "You mentioned the menu-programming problem on Toast — we work with new soul-food / cafe setups like yours and can usually get a menu configured in 2-3 business days. | On the processing side, if you're doing the $25 wing deal volume, we can usually save 20-30% vs. Toast's bundled rates. | We also do same-day deposit which is a big deal for cafes that need cash for Saturday's prep on Friday morning.",
    "objections": "\"already have a processor\" → Most cafes we work with came over from Toast's bundled processing or Square and saved $300-600/mo. Worth a comparison. || \"we're rebuilding after a loss\" → I'm sorry to hear that. If you're using the GoFundMe momentum, the best ROI is making sure every swipe has the lowest possible rate. 5 min to compare. || \"send info\" → What's your email? I'll send a one-pager specific to a 1809 Everman cafe volume.",
    "ask": "Best email to send the comparison sheet?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: Chefs Cort menu programmer + processing",
        "body": "Hey Cortney —\n\nAppreciate the time today. Wanted to follow up on the two things we talked about — the Toast menu programmer issue and the processing side.\n\n**Menu programmer**: we have a partner who can usually get a Toast menu configured in 2-3 business days for a new cafe concept. I'll connect you if you want.\n\n**Processing**: on the $25 wing-deal volume you're doing, Toast's bundled rate is costing you about 2.49% + 15¢. Flat-rate we can get that to ~1.95% effective. Over your monthly volume that's typically $300-600/mo in savings.\n\nI have a one-pager specific to Fort Worth soul-food / cafe volumes. Text me at [YOUR PHONE] and I'll send it tonight.\n\nEither way, I appreciated the conversation about the rebuild — you're doing something real in that community. Rooting for you.\n\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "Chiplis Country Market (formerly Chiplis Country Acres)",
    "owner": "Haley Chiplis (with Jim Schepis & Jesse Chiplis)",
    "phone": "(814) 938-8434",
    "email": "",
    "dm_channel": "Facebook page @ChiplisCountryMarket OR phone follow-up",
    "city_state": "Punxsutawney, PA",
    "author_link": "https://www.facebook.com/p/Chiplis-Country-Market-61587685311552/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nHaley — saw you and the family just opened Chiplis Country Market in Punxsutawney, and you were asking about card processing for the new store.\n\n=== OPENER (first 10 seconds) ===\nHi Haley, this is [YOUR NAME] — saw the post about your new market in Punxsutawney. Did I catch you at a good time?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. We specialise in country stores, delis, farm markets — typically save 30-50% vs. whatever the big processor is charging because we flat-rate it.\n2. Bait & tackle, deli meat by the pound, hot food, lottery, gas — we can handle all of that on one terminal.\n3. Plus a quick onboarding — usually 48 hours from paperwork to swiping your first card.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we already have a processor\"\n  → Most of the country stores we work with came over from one of the big three and saved $200-500/mo. Worth a 5-min comparison.\n• If they say: \"we just opened, not ready\"\n  → Even better — let's get you set up right the first time before the rate locks in. 15 min to run your numbers.\n• If they say: \"not interested\"\n  → No problem. Can I email you the comparison sheet for when you're ready?\n\n=== CLOSE / ASK ===\nWhat's the best email to send a side-by-side savings comparison — should take you 30 seconds to review.",
    "opener": "Hi Haley, this is [YOUR NAME] — saw the post about your new market in Punxsutawney. Did I catch you at a good time?",
    "pitch": "We specialise in country stores, delis, farm markets — typically save 30-50% vs. whatever the big processor is charging because we flat-rate it. | Bait & tackle, deli meat by the pound, hot food, lottery, gas — we can handle all of that on one terminal. | Plus a quick onboarding — usually 48 hours from paperwork to swiping your first card.",
    "objections": "\"we already have a processor\" → Most of the country stores we work with came over from one of the big three and saved $200-500/mo. Worth a 5-min comparison. || \"we just opened, not ready\" → Even better — let's get you set up right the first time before the rate locks in. 15 min to run your numbers. || \"not interested\" → No problem. Can I email you the comparison sheet for when you're ready?",
    "ask": "What's the best email to send a side-by-side savings comparison — should take you 30 seconds to review.",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: Punxsutawney market — savings comparison",
        "body": "Hey Haley —\n\nThanks for the time on the call. Wanted to follow up with the one-pager we discussed.\n\nThree things specific to the new market at 19465 Route 119:\n\n1. **Combined deli + retail + bait + lottery** = one flat-rate account covers all of it (most big processors charge a different rate for each category).\n2. **48-hour onboarding** — you'd be swiping cards before the weekend market crowd.\n3. **$200-500/mo in savings** vs. the typical first-90-days rate a new market gets.\n\nI'll attach the one-pager. If it makes sense, just text me back a time that works for a 5-minute walkthrough of the numbers.\n\nThanks again,\n[YOUR NAME]\n[YOUR PHONE]"
      }
    ]
  },
  {
    "business": "Cornerstone Health (Your Health & Gift Boutique)",
    "owner": "Jenny Degen Eichenberger (maiden: Kollasch)",
    "phone": "(515) 320-3419",
    "email": "",
    "dm_channel": "Facebook @jenny.degenkollasch OR phone",
    "city_state": "103 W. Ramsey Street, Bancroft, Iowa 50517",
    "author_link": "https://www.facebook.com/jenny.degenkollasch/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nJenny — saw the Cornerstone Health boutique in Bancroft, and your call/text line for orders. You're running the small-town health and gift shop at 103 W. Ramsey.\n\n=== OPENER (first 10 seconds) ===\nHi Jenny, this is [YOUR NAME] — quick call about Cornerstone Health, the Bancroft boutique. Got 60 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. We work with small-town gift + health boutiques specifically — the kind of mix you have — and typically save 25-40% on card processing vs. the big processors.\n2. If you're taking orders by call/text and running them through manually, we can do a virtual terminal that lets you key in card numbers without a physical swipe — saves you the per-tap fee on phone orders.\n3. Onboarding is 48 hours; you'll have a swiper in the shop and a virtual terminal on your phone.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we're too small\"\n  → We have other shops in towns smaller than Bancroft — flat-rate works at any size, and the savings percentage is the same.\n• If they say: \"we use Square\"\n  → Square is fine for low volume but at the boutique level you save more with a flat rate. 5 min to compare.\n• If they say: \"call back later\"\n  → Absolutely. When's a good time?\n\n=== CLOSE / ASK ===\nBest email to send a side-by-side comparison?",
    "opener": "Hi Jenny, this is [YOUR NAME] — quick call about Cornerstone Health, the Bancroft boutique. Got 60 seconds?",
    "pitch": "We work with small-town gift + health boutiques specifically — the kind of mix you have — and typically save 25-40% on card processing vs. the big processors. | If you're taking orders by call/text and running them through manually, we can do a virtual terminal that lets you key in card numbers without a physical swipe — saves you the per-tap fee on phone orders. | Onboarding is 48 hours; you'll have a swiper in the shop and a virtual terminal on your phone.",
    "objections": "\"we're too small\" → We have other shops in towns smaller than Bancroft — flat-rate works at any size, and the savings percentage is the same. || \"we use Square\" → Square is fine for low volume but at the boutique level you save more with a flat rate. 5 min to compare. || \"call back later\" → Absolutely. When's a good time?",
    "ask": "Best email to send a side-by-side comparison?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: Bancroft boutique — savings sheet for the call/text orders",
        "body": "Hey Jenny —\n\nNice chatting earlier. As promised, the one-pager on what we do for small-town gift + health boutiques.\n\nSpecifically for Cornerstone:\n\n- **Virtual terminal** so you can key in card numbers for the call/text orders (you mentioned this is how most orders come in).\n- **Physical swiper** for in-store.\n- **Flat rate** that doesn't penalise you for low-volume months (Bancroft isn't a 5K-swipes-a-month town, and that's fine).\n\nSavings vs. Square on a typical boutique mix: about $80-150/mo.\n\nIf you want to set up a 5-min walkthrough, text me at [YOUR PHONE] — I'll bring my own number so you can save mine.\n\nTalk soon,\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "Jordana (Wix + Clover switch)",
    "owner": "Jordana",
    "phone": "(647) 891-5758",
    "email": "",
    "dm_channel": "https://www.facebook.com/jordana.wix",
    "city_state": "Toronto",
    "author_link": "https://www.facebook.com/jordana.wix",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Meraki FTW (Mediterranean Restaurant, Fort Worth TX)",
    "owner": "Christina Lerma Elbitar (with Nehme William Elbitar, husband)",
    "phone": "(817) 924-2372",
    "email": "",
    "dm_channel": "Facebook @merakiftw OR phone the Chadra number (817) 924-2372",
    "city_state": "Fort Worth, TX (Mediterranean concept opened Mar 17, 2026; same ownership as Chadra Mezza)",
    "author_link": "https://www.facebook.com/merakiftw (inferred)",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nChristina or Nehme — saw the new Meraki Mediterranean spot you opened March 17 in Fort Worth, and you were talking about a menu programmer for the Toast setup.\n\n=== OPENER (first 10 seconds) ===\nHi, this is [YOUR NAME] from [YOUR COMPANY] — calling for Nehme or Christina. Quick 60 seconds about Meraki FTW?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. We work with the Elbitars' Chadra Mezza setup already and we know the Fort Worth food scene — we can usually save new Mediterranean concepts 25-40% on card processing in month one.\n2. The good news: Toast is great for menu programmers. The catch is the bundled processing rate — most folks don't realise you can bring your own processor to Toast and cut that line item significantly.\n3. If you're doing $40K/mo, that's typically $700-1,000/mo in savings we can lock in without changing how you ring anything up.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we're already on Toast and locked in\"\n  → You're not locked in — Toast allows you to bring your own processor. We do that for free. 5 min to run the numbers.\n• If they say: \"we have a processor through Chadra\"\n  → Then we already know the account — would take 10 minutes to look at the current rate and see if there's savings.\n• If they say: \"not interested right now\"\n  → Totally understand — Meraki is brand new. Can I send the comparison sheet so you have it for when you're settled in?\n\n=== CLOSE / ASK ===\nBest email to send a one-page breakdown specific to Meraki's volume?",
    "opener": "Hi, this is [YOUR NAME] from [YOUR COMPANY] — calling for Nehme or Christina. Quick 60 seconds about Meraki FTW?",
    "pitch": "We work with the Elbitars' Chadra Mezza setup already and we know the Fort Worth food scene — we can usually save new Mediterranean concepts 25-40% on card processing in month one. | The good news: Toast is great for menu programmers. The catch is the bundled processing rate — most folks don't realise you can bring your own processor to Toast and cut that line item significantly. | If you're doing $40K/mo, that's typically $700-1,000/mo in savings we can lock in without changing how you ring anything up.",
    "objections": "\"we're already on Toast and locked in\" → You're not locked in — Toast allows you to bring your own processor. We do that for free. 5 min to run the numbers. || \"we have a processor through Chadra\" → Then we already know the account — would take 10 minutes to look at the current rate and see if there's savings. || \"not interested right now\" → Totally understand — Meraki is brand new. Can I send the comparison sheet so you have it for when you're settled in?",
    "ask": "Best email to send a one-page breakdown specific to Meraki's volume?",
    "emails": []
  },
  {
    "business": "Mobbed Up Inc",
    "owner": "Gino",
    "phone": "(815) 345-3004",
    "email": "",
    "dm_channel": "https://www.facebook.com/mobbedup",
    "city_state": "Rockford",
    "author_link": "https://www.facebook.com/mobbedup",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Mobile Boutique (Jared Schmidt)",
    "owner": "Jared Schmidt",
    "phone": "(931) 289-9144",
    "email": "",
    "dm_channel": "https://www.facebook.com/jared.schmidt.mb",
    "city_state": "College Station",
    "author_link": "https://www.facebook.com/jared.schmidt.mb",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Neumans Hilltop Treasures",
    "owner": "Bev Neuman",
    "phone": "(317) 995-7569",
    "email": "",
    "dm_channel": "https://www.facebook.com/bev.neuman",
    "city_state": "Wellford",
    "author_link": "https://www.facebook.com/bev.neuman",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Nikkie's Naturals (small business, Ohio)",
    "owner": "Nikki (private)",
    "phone": "(662) 363-2432",
    "email": "",
    "dm_channel": "Facebook @NikkieDoesItNatural OR phone",
    "city_state": "1317 Main St, Tunica, MS 38676 (with recent second location at 3578 HWY 4, Sarah, MS 38665)",
    "author_link": "https://www.facebook.com/nikkies.naturals (inferred)",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nNikki — saw Nikkie's Naturals in Tunica, the candle/wax-melt business with the Breast Cancer Awareness walks and the 19-state shipping operation.\n\n=== OPENER (first 10 seconds) ===\nHi Nikki, this is [YOUR NAME] — calling about Nikkie's Naturals in Tunica. Quick 60 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. You mentioned needing a touchscreen POS that does inventory — the right one is a handheld tablet that goes with you to vendor events and syncs to your shop at 1317 Main St.\n2. Vendor events are high-volume fast — we work with small-batch makers like you and can save 20-30% on card processing vs. Square or PayPal.\n3. If you're shipping to 19 states, we can also do a hosted checkout that calculates sales tax by destination — saves you the headache at tax time.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we use Square\"\n  → Square is great for events but the 2.6% + 10¢ adds up at 19-state volume. We can usually save a small-batch maker shipping 200+ orders/mo about $150-300/mo.\n• If they say: \"we're too small for a custom setup\"\n  → We have other Tunica-area small businesses — flat rate works at any size.\n• If they say: \"send info\"\n  → Email? I'll send a one-pager specific to candle/wax-melt small-batch maker volume.\n\n=== CLOSE / ASK ===\nBest email to send the comparison?",
    "opener": "Hi Nikki, this is [YOUR NAME] — calling about Nikkie's Naturals in Tunica. Quick 60 seconds?",
    "pitch": "You mentioned needing a touchscreen POS that does inventory — the right one is a handheld tablet that goes with you to vendor events and syncs to your shop at 1317 Main St. | Vendor events are high-volume fast — we work with small-batch makers like you and can save 20-30% on card processing vs. Square or PayPal. | If you're shipping to 19 states, we can also do a hosted checkout that calculates sales tax by destination — saves you the headache at tax time.",
    "objections": "\"we use Square\" → Square is great for events but the 2.6% + 10¢ adds up at 19-state volume. We can usually save a small-batch maker shipping 200+ orders/mo about $150-300/mo. || \"we're too small for a custom setup\" → We have other Tunica-area small businesses — flat rate works at any size. || \"send info\" → Email? I'll send a one-pager specific to candle/wax-melt small-batch maker volume.",
    "ask": "Best email to send the comparison?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: Nikkie's Naturals — vendor events + the 19-state shipping",
        "body": "Hey Nikki —\n\nThanks for the time today. Wanted to follow up on the touchscreen POS + the 19-state shipping thing.\n\n**For vendor events**: the right setup is a handheld tablet that goes with you to markets, syncs to the 1317 Main St shop, and processes flat-rate. We work with other small-batch candle/wax-melt makers and the typical savings vs. Square is $150-300/mo at your volume.\n\n**For the 19-state shipping**: if you're manually calculating sales tax per destination at the end of the year, we can wire a hosted checkout (Stripe-compatible) that calculates and remits automatically. That alone probably saves you a day a month of bookkeeping.\n\nI'll attach the one-pager. Text me at [YOUR PHONE] if you want to walk through it.\n\nLoved what you're doing with the Komen walks, by the way. Real community work.\n\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "PRIZE (prizeaustin.com)",
    "owner": "Lisa Lee Bagby (Owner/Designer of PRIZE Brass Sculptures)",
    "phone": "(646) 853-4582",
    "email": "",
    "dm_channel": "Instagram @lisa_bagby OR @prizeaustin OR phone",
    "city_state": "Austin, TX (online-only — physical 2nd Street District location CLOSED; operates via Etsy + Faire + @the550market pop-up)",
    "author_link": "https://www.facebook.com/prizeaustin/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nLisa — saw PRIZE, the brass-sculpture business in Austin, on Etsy and the 550 Market pop-up. Was looking for a website/online-setup help.\n\n=== OPENER (first 10 seconds) ===\nHi Lisa, this is [YOUR NAME] — calling about PRIZE Brass Sculptures. Quick 60 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Wholesale brass sculpture makers typically pay 2.9% on Faire + 3% on Etsy + Stripe fees — we can consolidate that to a flat rate and save $200-400/mo at your volume.\n2. If you do the @the550market pop-ups and have an in-person swiper, we can run that on the same flat-rate account.\n3. Onboarding is 48 hours; you'd have a Faire/Etsy-friendly setup with one statement.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we use Faire and Etsy directly\"\n  → Their processing is built in but the rate is non-negotiable. We can route your direct-sales channel (the 550 market, any custom orders outside Etsy) through flat-rate and save there.\n• If they say: \"we're low volume\"\n  → At $6.1M revenue per ZoomInfo even a 0.5% reduction is $30K/yr. Worth a 5-min comparison.\n• If they say: \"send info\"\n  → Email? One-pager specific to brass-sculpture maker + Faire + Etsy.\n\n=== CLOSE / ASK ===\nBest email to send the comparison?",
    "opener": "Hi Lisa, this is [YOUR NAME] — calling about PRIZE Brass Sculptures. Quick 60 seconds?",
    "pitch": "Wholesale brass sculpture makers typically pay 2.9% on Faire + 3% on Etsy + Stripe fees — we can consolidate that to a flat rate and save $200-400/mo at your volume. | If you do the @the550market pop-ups and have an in-person swiper, we can run that on the same flat-rate account. | Onboarding is 48 hours; you'd have a Faire/Etsy-friendly setup with one statement.",
    "objections": "\"we use Faire and Etsy directly\" → Their processing is built in but the rate is non-negotiable. We can route your direct-sales channel (the 550 market, any custom orders outside Etsy) through flat-rate and save there. || \"we're low volume\" → At $6.1M revenue per ZoomInfo even a 0.5% reduction is $30K/yr. Worth a 5-min comparison. || \"send info\" → Email? One-pager specific to brass-sculpture maker + Faire + Etsy.",
    "ask": "Best email to send the comparison?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: PRIZE wholesale + the 550 Market pop-ups",
        "body": "Hey Lisa —\n\nThanks for taking the call. Wanted to follow up on the wholesale processing side.\n\nI know the (646) line is more of a sales/ops line for PRIZE LLC, so I wasn't sure if it was the right one to call on your personal cell. If you'd rather, just text me back at [YOUR PHONE] and I'll move the conversation to DMs.\n\nThe summary: at $6.1M revenue per ZoomInfo, even a 0.5% reduction in processing across your Faire + Etsy + direct channels is $30K/year back in your pocket. For a brass-sculpture wholesale brand the flat-rate structure is particularly well-suited because your average ticket is high ($186+ per piece) and your sale volume is concentrated (Faire, @the550market, the @cynthiarowley wholesale channel).\n\nI have a one-pager specific to brass-sculpture wholesale. Want me to send?\n\nThanks again,\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "PRIZE (prizeaustin.com)",
    "owner": "Lisa Lee Bagby (Owner/Designer of PRIZE Brass Sculptures)",
    "phone": "(646) 853-4582",
    "email": "",
    "dm_channel": "Instagram @lisa_bagby OR @prizeaustin OR phone",
    "city_state": "Austin, TX (online-only — physical 2nd Street District location CLOSED; operates via Etsy + Faire + @the550market pop-up)",
    "author_link": "https://www.facebook.com/prizeaustin/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nLisa — saw PRIZE, the brass-sculpture business in Austin, on Etsy and the 550 Market pop-up. Was looking for a website/online-setup help.\n\n=== OPENER (first 10 seconds) ===\nHi Lisa, this is [YOUR NAME] — calling about PRIZE Brass Sculptures. Quick 60 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Wholesale brass sculpture makers typically pay 2.9% on Faire + 3% on Etsy + Stripe fees — we can consolidate that to a flat rate and save $200-400/mo at your volume.\n2. If you do the @the550market pop-ups and have an in-person swiper, we can run that on the same flat-rate account.\n3. Onboarding is 48 hours; you'd have a Faire/Etsy-friendly setup with one statement.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we use Faire and Etsy directly\"\n  → Their processing is built in but the rate is non-negotiable. We can route your direct-sales channel (the 550 market, any custom orders outside Etsy) through flat-rate and save there.\n• If they say: \"we're low volume\"\n  → At $6.1M revenue per ZoomInfo even a 0.5% reduction is $30K/yr. Worth a 5-min comparison.\n• If they say: \"send info\"\n  → Email? One-pager specific to brass-sculpture maker + Faire + Etsy.\n\n=== CLOSE / ASK ===\nBest email to send the comparison?",
    "opener": "Hi Lisa, this is [YOUR NAME] — calling about PRIZE Brass Sculptures. Quick 60 seconds?",
    "pitch": "Wholesale brass sculpture makers typically pay 2.9% on Faire + 3% on Etsy + Stripe fees — we can consolidate that to a flat rate and save $200-400/mo at your volume. | If you do the @the550market pop-ups and have an in-person swiper, we can run that on the same flat-rate account. | Onboarding is 48 hours; you'd have a Faire/Etsy-friendly setup with one statement.",
    "objections": "\"we use Faire and Etsy directly\" → Their processing is built in but the rate is non-negotiable. We can route your direct-sales channel (the 550 market, any custom orders outside Etsy) through flat-rate and save there. || \"we're low volume\" → At $6.1M revenue per ZoomInfo even a 0.5% reduction is $30K/yr. Worth a 5-min comparison. || \"send info\" → Email? One-pager specific to brass-sculpture maker + Faire + Etsy.",
    "ask": "Best email to send the comparison?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: PRIZE wholesale + the 550 Market pop-ups",
        "body": "Hey Lisa —\n\nThanks for taking the call. Wanted to follow up on the wholesale processing side.\n\nI know the (646) line is more of a sales/ops line for PRIZE LLC, so I wasn't sure if it was the right one to call on your personal cell. If you'd rather, just text me back at [YOUR PHONE] and I'll move the conversation to DMs.\n\nThe summary: at $6.1M revenue per ZoomInfo, even a 0.5% reduction in processing across your Faire + Etsy + direct channels is $30K/year back in your pocket. For a brass-sculpture wholesale brand the flat-rate structure is particularly well-suited because your average ticket is high ($186+ per piece) and your sale volume is concentrated (Faire, @the550market, the @cynthiarowley wholesale channel).\n\nI have a one-pager specific to brass-sculpture wholesale. Want me to send?\n\nThanks again,\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "PRIZE (prizeaustin.com)",
    "owner": "Lisa Lee Bagby (Owner/Designer of PRIZE Brass Sculptures)",
    "phone": "(646) 853-4582",
    "email": "",
    "dm_channel": "Instagram @lisa_bagby OR @prizeaustin OR phone",
    "city_state": "Austin, TX (online-only — physical 2nd Street District location CLOSED; operates via Etsy + Faire + @the550market pop-up)",
    "author_link": "https://www.facebook.com/prizeaustin/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nLisa — saw PRIZE, the brass-sculpture business in Austin, on Etsy and the 550 Market pop-up. Was looking for a website/online-setup help.\n\n=== OPENER (first 10 seconds) ===\nHi Lisa, this is [YOUR NAME] — calling about PRIZE Brass Sculptures. Quick 60 seconds?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Wholesale brass sculpture makers typically pay 2.9% on Faire + 3% on Etsy + Stripe fees — we can consolidate that to a flat rate and save $200-400/mo at your volume.\n2. If you do the @the550market pop-ups and have an in-person swiper, we can run that on the same flat-rate account.\n3. Onboarding is 48 hours; you'd have a Faire/Etsy-friendly setup with one statement.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we use Faire and Etsy directly\"\n  → Their processing is built in but the rate is non-negotiable. We can route your direct-sales channel (the 550 market, any custom orders outside Etsy) through flat-rate and save there.\n• If they say: \"we're low volume\"\n  → At $6.1M revenue per ZoomInfo even a 0.5% reduction is $30K/yr. Worth a 5-min comparison.\n• If they say: \"send info\"\n  → Email? One-pager specific to brass-sculpture maker + Faire + Etsy.\n\n=== CLOSE / ASK ===\nBest email to send the comparison?",
    "opener": "Hi Lisa, this is [YOUR NAME] — calling about PRIZE Brass Sculptures. Quick 60 seconds?",
    "pitch": "Wholesale brass sculpture makers typically pay 2.9% on Faire + 3% on Etsy + Stripe fees — we can consolidate that to a flat rate and save $200-400/mo at your volume. | If you do the @the550market pop-ups and have an in-person swiper, we can run that on the same flat-rate account. | Onboarding is 48 hours; you'd have a Faire/Etsy-friendly setup with one statement.",
    "objections": "\"we use Faire and Etsy directly\" → Their processing is built in but the rate is non-negotiable. We can route your direct-sales channel (the 550 market, any custom orders outside Etsy) through flat-rate and save there. || \"we're low volume\" → At $6.1M revenue per ZoomInfo even a 0.5% reduction is $30K/yr. Worth a 5-min comparison. || \"send info\" → Email? One-pager specific to brass-sculpture maker + Faire + Etsy.",
    "ask": "Best email to send the comparison?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: PRIZE wholesale + the 550 Market pop-ups",
        "body": "Hey Lisa —\n\nThanks for taking the call. Wanted to follow up on the wholesale processing side.\n\nI know the (646) line is more of a sales/ops line for PRIZE LLC, so I wasn't sure if it was the right one to call on your personal cell. If you'd rather, just text me back at [YOUR PHONE] and I'll move the conversation to DMs.\n\nThe summary: at $6.1M revenue per ZoomInfo, even a 0.5% reduction in processing across your Faire + Etsy + direct channels is $30K/year back in your pocket. For a brass-sculpture wholesale brand the flat-rate structure is particularly well-suited because your average ticket is high ($186+ per piece) and your sale volume is concentrated (Faire, @the550market, the @cynthiarowley wholesale channel).\n\nI have a one-pager specific to brass-sculpture wholesale. Want me to send?\n\nThanks again,\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "Sassy Southern Boutique & More",
    "owner": "Elisiagail Cosco",
    "phone": "(251) 776-4473",
    "email": "",
    "dm_channel": "Facebook @SassySouthernBoutiqueMore OR phone",
    "city_state": "Semmes, AL",
    "author_link": "https://www.facebook.com/p/Sassy-Southern-Boutique-More-61585642599501/",
    "status": "ready_for_outreach",
    "call_script": "=== POST CONTEXT (what the lead posted) ===\nElisiagail — saw Sassy Southern Boutique in Semmes, you're running the boutique and the Knappy Dogs grooming in the same building.\n\n=== OPENER (first 10 seconds) ===\nHi Elisiagail, this is [YOUR NAME] from [YOUR COMPANY]. Got a quick minute about your shop in Semmes?\n\n=== 3-POINT PITCH (next 30 seconds) ===\n1. Boutique + pet grooming in one building means two different card profiles — we can do a flat rate for both and consolidate to one deposit.\n2. You mentioned 'closing' sales — last-30-days processing is a good time to see if your rates went up because of chargebacks or volume drops.\n3. Most boutiques we work with save $80-200/mo vs. the big processors.\n\n=== OBJECTION HANDLERS (top 3) ===\n• If they say: \"we're closing soon, not worth it\"\n  → Actually the opposite — when you reopen (or do a final closing sale) you want every percentage point on the table. 5-minute comparison.\n• If they say: \"we use Square\"\n  → Square's per-tap pricing hits boutiques harder than you'd think — on a $100 sale you lose $2.75 vs. our ~$1.79 flat. We can run the math.\n• If they say: \"send info\"\n  → What's your email? One page, specific to your volume, no spam.\n\n=== CLOSE / ASK ===\nCan I send a quick savings comparison to your email tonight?",
    "opener": "Hi Elisiagail, this is [YOUR NAME] from [YOUR COMPANY]. Got a quick minute about your shop in Semmes?",
    "pitch": "Boutique + pet grooming in one building means two different card profiles — we can do a flat rate for both and consolidate to one deposit. | You mentioned 'closing' sales — last-30-days processing is a good time to see if your rates went up because of chargebacks or volume drops. | Most boutiques we work with save $80-200/mo vs. the big processors.",
    "objections": "\"we're closing soon, not worth it\" → Actually the opposite — when you reopen (or do a final closing sale) you want every percentage point on the table. 5-minute comparison. || \"we use Square\" → Square's per-tap pricing hits boutiques harder than you'd think — on a $100 sale you lose $2.75 vs. our ~$1.79 flat. We can run the math. || \"send info\" → What's your email? One page, specific to your volume, no spam.",
    "ask": "Can I send a quick savings comparison to your email tonight?",
    "emails": [
      {
        "type": "followup",
        "subject": "Re: Semmes boutique + Knappy Dogs",
        "body": "Hey Elisiagail —\n\nThanks for the time today. Wanted to follow up on what we discussed for Sassy Southern + Knappy Dogs.\n\nThe two-business under-one-roof situation (boutique + pet grooming) is actually ideal for a flat-rate setup — most processors charge two different retail rates for the two merchant categories. We can do one flat rate that covers both, and you get one consolidated deposit.\n\nFor the closing-sale volume, this is actually a great time to do a comparison because the higher processing rate is the most expensive in those final-30-days rushes. A 5-minute comparison can show you the actual delta.\n\nI'll attach the comparison sheet. Text me back at [YOUR PHONE] if you want to walk through it.\n\nThanks again,\n[YOUR NAME]"
      }
    ]
  },
  {
    "business": "Tips & Toes by Natalie",
    "owner": "Natalie",
    "phone": "(919) 902-3482",
    "email": "",
    "dm_channel": "https://www.facebook.com/natalie.tipstoes",
    "city_state": "Angier, NC",
    "author_link": "https://www.facebook.com/natalie.tipstoes",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Whipped Nature Soaps & More",
    "owner": "",
    "phone": "(217) 440-6213",
    "email": "",
    "dm_channel": "https://www.facebook.com/permalink.php?story_fbid=pfbid0pYM3M8Msh4zNQoLGfxt3MrjPMvRRBjfdk95mSCW7L61jnYc81R6VENXhXK8ynQw7l&id=100093205494917",
    "city_state": "Hamilton, IL",
    "author_link": "https://www.facebook.com/permalink.php?story_fbid=pfbid0pYM3M8Msh4zNQoLGfxt3MrjPMvRRBjfdk95mSCW7L61jnYc81R6VENXhXK8ynQw7l&id=100093205494917",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "ZodiaqTwin L.L.C",
    "owner": "Aneres",
    "phone": "(701) 732-0024",
    "email": "",
    "dm_channel": "https://www.facebook.com/zodiaq.twin",
    "city_state": "Grand Forks",
    "author_link": "https://www.facebook.com/zodiaq.twin",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": []
  },
  {
    "business": "Drinkerd's Doughy Delight (cottage food bakery cart)",
    "owner": "Drinkerd (first name private; uses Facebook handle)",
    "phone": "",
    "email": "drinkerddelights@gmail.com",
    "dm_channel": "https://www.facebook.com/61566923246670/ (author page)",
    "city_state": "TBD (cottage food business, no storefront)",
    "author_link": "https://www.facebook.com/61566923246670/ (author page)",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": [
      {
        "type": "cold",
        "subject": "Quick question about your cottage-food bakery cart",
        "body": "Hey Drinkerd,\n\nSaw your post on the Cottage Food Business group about the pickup-only toggle issue on your Square site (drinkerds-doughy-delight.square.site). Looks like you're getting started with the cart, which is exciting.\n\nTwo questions and then a free thing:\n\n1. What's the cart doing on a market day in terms of volume — $500/day or closer to $2,000/day? (Just so I can frame what I send you.)\n2. Are you also doing the in-person events with a mobile swiper, or is the cart's Square site the main channel for pickup orders right now?\n\nThe free thing: we work with a bunch of cottage-food makers and we have a one-pager that shows what % of your revenue is going to processing fees (with real numbers from similar businesses — $2K/mo, $5K/mo, $10K/mo). If you want, I'll send it over once I know your monthly volume.\n\nNo sales pitch, no call. Just the sheet.\n\nWorth a reply?\n\n[YOUR NAME]\n[YOUR COMPANY]\n[YOUR PHONE — text me if you want]"
      }
    ]
  },
  {
    "business": "Drinkerd's Doughy Delight (cottage food bakery cart)",
    "owner": "Drinkerd (first name private; uses Facebook handle)",
    "phone": "",
    "email": "drinkerddelights@gmail.com",
    "dm_channel": "https://www.facebook.com/61566923246670/ (author page)",
    "city_state": "TBD (cottage food business, no storefront)",
    "author_link": "https://www.facebook.com/61566923246670/ (author page)",
    "status": "ready_for_outreach",
    "call_script": "",
    "opener": "",
    "pitch": "",
    "objections": "",
    "ask": "",
    "emails": [
      {
        "type": "cold",
        "subject": "Quick question about your cottage-food bakery cart",
        "body": "Hey Drinkerd,\n\nSaw your post on the Cottage Food Business group about the pickup-only toggle issue on your Square site (drinkerds-doughy-delight.square.site). Looks like you're getting started with the cart, which is exciting.\n\nTwo questions and then a free thing:\n\n1. What's the cart doing on a market day in terms of volume — $500/day or closer to $2,000/day? (Just so I can frame what I send you.)\n2. Are you also doing the in-person events with a mobile swiper, or is the cart's Square site the main channel for pickup orders right now?\n\nThe free thing: we work with a bunch of cottage-food makers and we have a one-pager that shows what % of your revenue is going to processing fees (with real numbers from similar businesses — $2K/mo, $5K/mo, $10K/mo). If you want, I'll send it over once I know your monthly volume.\n\nNo sales pitch, no call. Just the sheet.\n\nWorth a reply?\n\n[YOUR NAME]\n[YOUR COMPANY]\n[YOUR PHONE — text me if you want]"
      }
    ]
  }
];
const STORAGE_KEY = 'lead-outreach-state-v5';
// Migration: on load, if v5 is empty, fall back to v4, v3, v2
const MIGRATION_KEYS = ['lead-outreach-state-v4', 'lead-outreach-state-v3', 'lead-outreach-state-v2'];
const SETTINGS_KEY = 'lead-outreach-settings-v1';
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const list = $('#lead-list');
const detail = $('#detail');
const search = $('#search');
const filterChannel = $('#filter-channel');
const filterStatus = $('#filter-status');
const filterCb = $('#filter-cb');
let active = null;
let cbFilter = 'all';

let state = loadState();
let settings = loadSettings();
function loadState() { try { let s = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); if (s && Object.keys(s).length) return s; for (const k of MIGRATION_KEYS) { const old = localStorage.getItem(k); if (old) { try { const parsed = JSON.parse(old); if (parsed && Object.keys(parsed).length) { localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed)); return parsed; } } catch {} } } return {}; } catch { return {}; } }
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadSettings() { try { return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || { method: 'native' }; } catch { return { method: 'native' }; } }
function saveSettings() { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); }
function getStatus(biz) { return (state[biz] || {}).status || 'to_call'; }
function setStatus(biz, status) { if (!state[biz]) state[biz] = {}; state[biz].status = status; state[biz].updated_at = new Date().toISOString(); saveState(); renderAll(); }
function getNotes(biz) { return (state[biz] || {}).notes || ''; }
function setNotes(biz, notes) { if (!state[biz]) state[biz] = {}; state[biz].notes = notes; state[biz].updated_at = new Date().toISOString(); saveState(); }
function getCallCount(biz) { return (state[biz] || {}).call_count || 0; }
function incCallCount(biz) { if (!state[biz]) state[biz] = {}; state[biz].call_count = (state[biz].call_count || 0) + 1; state[biz].last_call_at = new Date().toISOString(); state[biz].last_call_method = settings.method; saveState(); renderAll(); }
function getCallbacks(biz) { return (state[biz] || {}).callbacks || []; }
function addCallback(biz, cb) { if (!state[biz]) state[biz] = {}; if (!state[biz].callbacks) state[biz].callbacks = []; cb.id = 'cb_' + Date.now() + '_' + Math.random().toString(36).slice(2,7); cb.created_at = new Date().toISOString(); cb.completed = false; state[biz].callbacks.push(cb); saveState(); renderAll(); }
function completeCallback(biz, cbId) { if (!state[biz] || !state[biz].callbacks) return; const cb = state[biz].callbacks.find(c => c.id === cbId); if (cb) { cb.completed = true; cb.completed_at = new Date().toISOString(); saveState(); renderAll(); } }
function cancelCallback(biz, cbId) { if (!state[biz] || !state[biz].callbacks) return; state[biz].callbacks = state[biz].callbacks.filter(c => c.id !== cbId); saveState(); renderAll(); }
function snoozeCallback(biz, cbId, hours) { if (!state[biz] || !state[biz].callbacks) return; const cb = state[biz].callbacks.find(c => c.id === cbId); if (cb) { const d = new Date(cb.when); d.setHours(d.getHours() + hours); cb.when = d.toISOString().slice(0,16); saveState(); renderAll(); } }
function hasActiveCallback(biz) { return getCallbacks(biz).some(c => !c.completed); }
function allCallbacksFlat() { const out = []; DATA.forEach(d => { getCallbacks(d.business).forEach(cb => { out.push({ biz: d.business, d, cb }); }); }); return out; }
function startOfDay(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
function startOfToday() { return startOfDay(new Date()); }
function startOfTomorrow() { const x = startOfToday(); x.setDate(x.getDate() + 1); return x; }
function startOfWeek() { const x = startOfToday(); const dow = x.getDay(); x.setDate(x.getDate() - dow); return x; }
function endOfWeek() { const x = startOfWeek(); x.setDate(x.getDate() + 7); return x; }
function inRange(cb, range) { const when = new Date(cb.when); const t = startOfToday(); const tom = startOfTomorrow(); if (range === 'all') return !cb.completed; if (range === 'done') return cb.completed; if (cb.completed) return false; if (range === 'overdue') return when < t; if (range === 'today') return when >= t && when < tom; if (range === 'tomorrow') { const dayAfter = new Date(tom); dayAfter.setDate(dayAfter.getDate() + 1); return when >= tom && when < dayAfter; } if (range === 'week') return when >= t && when < endOfWeek(); if (range === 'future') return when >= endOfWeek(); return true; }
const STATUS_LABEL = { to_call: 'To call', contacted: 'Contacted', replied: 'Replied', meeting: 'Meeting', lost: 'Lost' };
const CB_TYPE_LABEL = { call: '📞 Call', email: '✉ Email', dm: '💬 DM', meeting: '🤝 Meeting', other: '📌 Other' };

function normalizePhone(p) { if (!p) return ''; const digits = p.replace(/[^+0-9]/g, ''); if (digits.startsWith('+')) return digits; if (digits.length === 10) return '+1' + digits; if (digits.length === 11 && digits.startsWith('1')) return '+' + digits; return '+' + digits; }
async function placeCall(d, method) {
  const phone = d.phone;
  if (!phone) { showToast('No phone on file'); return; }
  const norm = normalizePhone(phone);
  incCallCount(d.business);

  if (method === 'native') { window.location.href = 'tel:' + norm; showToast('Opening dialer...'); return; }
  if (method === 'gv') {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Try GV app via universal link; on Android, GV may not be installed
      window.location.href = 'tel:' + norm;
      setTimeout(() => { window.open('https://voice.google.com/u/0/calls?a=nc,' + encodeURIComponent(norm.replace('+', '')), '_blank'); }, 1200);
    } else {
      window.open('https://voice.google.com/u/0/calls?a=nc,' + encodeURIComponent(norm.replace('+', '')), '_blank');
      showToast('Opened Google Voice — press call');
    }
    return;
  }
  if (method === 'twilio') {
    if (!settings.twilio_sid || !settings.twilio_token || !settings.twilio_from) { showToast('⚙ Set Twilio creds first'); return; }
    showToast('Triggering Twilio call to ' + norm + '...');
    try {
      // If proxy URL is set, POST there (recommended — bypasses CORS)
      // Otherwise fall back to direct API call (will fail with CORS in most browsers)
      let res;
      if (settings.proxy_url) {
        res = await fetch(settings.proxy_url.replace(/\/$/, '') + '/twilio', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: norm, from: settings.twilio_from, url: settings.webhook, statusCallback: settings.callback_url })
        });
      } else {
        res = await fetch('https://api.twilio.com/2010-04-01/Accounts/' + settings.twilio_sid + '/Calls.json', {
          method: 'POST',
          headers: { 'Authorization': 'Basic ' + btoa(settings.twilio_sid + ':' + settings.twilio_token), 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ To: norm, From: settings.twilio_from, Url: settings.webhook || ('data:text/xml,' + encodeURIComponent('<Response><Say>Connecting.</Say><Dial>'+norm+'</Dial></Response>')) })
        });
      }
      if (res.ok) { const j = await res.json(); showToast('Twilio: call ' + (j.call_sid || j.sid || 'initiated')); }
      else { const err = await res.json().catch(() => ({})); showToast('Twilio error: ' + (err.error || err.message || res.status).slice(0,100)); }
    } catch (e) { showToast('Twilio failed: ' + e.message + ' (set Proxy URL in ⚙ to bypass CORS)'); }
    return;
  }
  if (method === 'plivo') {
    if (!settings.plivo_id || !settings.plivo_token || !settings.plivo_from) { showToast('⚙ Set Plivo creds first'); return; }
    showToast('Triggering Plivo call to ' + norm + '...');
    try {
      let res;
      if (settings.proxy_url) {
        res = await fetch(settings.proxy_url.replace(/\/$/, '') + '/plivo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: norm, from: settings.plivo_from, answer_url: settings.webhook })
        });
      } else {
        const auth = btoa(settings.plivo_id + ':' + settings.plivo_token);
        res = await fetch('https://api.plivo.com/v1/Account/' + settings.plivo_id + '/Call/', {
          method: 'POST',
          headers: { 'Authorization': 'Basic ' + auth, 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: settings.plivo_from, to: norm, answer_url: settings.webhook || 'https://answer.plivo.com/redirect' })
        });
      }
      if (res.ok) { const j = await res.json(); showToast('Plivo: ' + (j.message || 'call initiated') + ' (' + norm + ')'); }
      else { const err = await res.json().catch(() => ({})); showToast('Plivo error: ' + (err.error || err.message || res.status).slice(0,100)); }
    } catch (e) { showToast('Plivo failed: ' + e.message + ' (set Proxy URL in ⚙ to bypass CORS)'); }
    return;
  }
}

function pills(d) {
  const arr = [];
  if (d.phone) arr.push('<span class="pill phone">📞 ' + d.phone + '</span>');
  else if (d.email) arr.push('<span class="pill email">✉</span>');
  else arr.push('<span class="pill dm">DM</span>');
  if (hasActiveCallback(d.business)) arr.push('<span class="pill cb">⏰</span>');
  return arr.join(' ');
}
function statusDot(s) { return '<span class="status-dot ' + s + '"></span>'; }
function formatWhen(iso) {
  const d = new Date(iso);
  const today = startOfToday();
  const tomorrow = startOfTomorrow();
  const dayAfter = new Date(tomorrow); dayAfter.setDate(dayAfter.getDate() + 1);
  const time = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  if (d < today) { const days = Math.floor((today - d) / 86400000); return { label: days === 1 ? 'Yesterday' : (days + 'd ago'), time, overdue: true, full: d.toLocaleString() }; }
  if (d < tomorrow) return { label: 'Today', time, overdue: false, full: d.toLocaleString() };
  if (d < dayAfter) return { label: 'Tomorrow', time, overdue: false, full: d.toLocaleString() };
  return { label: d.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }), time, overdue: false, full: d.toLocaleString() };
}

function renderStats() {
  const total = DATA.length;
  const reachable = DATA.filter(d => d.phone || d.email).length;
  const counts = countByStatus();
  const contactCount = counts.contacted + counts.replied + counts.meeting;
  $('#stats-container').innerHTML = '<div class="stat"><b>' + total + '</b><span>leads</span></div><div class="stat"><b>' + reachable + '</b><span>reachable</span></div><div class="stat"><b>' + contactCount + '</b><span>contacted</span></div>';
  const activeCbs = countActiveCallbacks();
  const badge = $('#cb-badge');
  if (activeCbs > 0) { badge.textContent = activeCbs; badge.style.display = 'inline-block'; }
  else { badge.style.display = 'none'; }
}
function countByStatus() { const c = { to_call: 0, contacted: 0, replied: 0, meeting: 0, lost: 0 }; DATA.forEach(d => { c[getStatus(d.business)]++; }); return c; }
function countActiveCallbacks() { let n = 0; DATA.forEach(d => { n += getCallbacks(d.business).filter(c => !c.completed).length; }); return n; }

function filtered() {
  const q = search.value.toLowerCase();
  const ch = filterChannel.value;
  const st = filterStatus.value;
  const cb = filterCb.value;
  return DATA.filter(d => {
    const hay = (d.business + ' ' + d.owner + ' ' + d.city_state + ' ' + d.phone + ' ' + d.email).toLowerCase();
    if (q && !hay.includes(q)) return false;
    if (ch === 'phone' && !d.phone) return false;
    if (ch === 'email' && !d.email) return false;
    if (ch === 'dm' && (d.phone || d.email)) return false;
    if (st && getStatus(d.business) !== st) return false;
    if (cb === 'has_cb' && !hasActiveCallback(d.business)) return false;
    return true;
  });
}

function renderList() {
  const items = filtered();
  list.innerHTML = items.map(d => '<div class="lead-row ' + (active === d.business ? 'active' : '') + '" data-biz="' + d.business.replace(/"/g,'&quot;') + '"><div class="biz">' + statusDot(getStatus(d.business)) + d.business.split('(')[0].trim() + '</div><div class="meta">' + (d.city_state ? '<span>' + d.city_state + '</span>' : '') + ' ' + pills(d) + '</div></div>').join('');
  list.querySelectorAll('.lead-row').forEach(el => {
    el.addEventListener('click', () => { active = el.dataset.biz; renderList(); renderDetail(DATA.find(d => d.business === active)); document.querySelector('.list-view').classList.add('detail-open'); window.scrollTo({top: 0, behavior: 'smooth'}); });
  });
}

function copy(text) { navigator.clipboard.writeText(text).then(() => showToast('Copied!')); }
function showToast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._tid); t._tid = setTimeout(() => t.classList.remove('show'), 2500); }

function renderDetail(d) {
  const telHref = d.phone ? 'tel:' + d.phone.replace(/[^+0-9]/g,'') : null;
  const tel = d.phone ? '<a class="tel" href="' + telHref + '">' + d.phone + '</a>' : '—';
  const mail = d.email ? '<a class="mail" href="mailto:' + d.email + '">' + d.email + '</a>' : '—';
  const link = d.author_link ? '<a class="url" href="' + d.author_link + '" target="_blank" rel="noopener">' + (d.author_link.length > 60 ? d.author_link.slice(0,60)+'…' : d.author_link) + '</a>' : '—';
  const pitch = d.pitch ? d.pitch.split(' | ').filter(Boolean).map(p => '<li>' + p + '</li>').join('') : '';
  const objs = d.objections ? d.objections.split(' || ').filter(Boolean).map(o => { const m = o.match(/^"([^"]+)"\s*→\s*(.*)$/); if (m) return '<div class="objection"><b>If they say: "' + m[1] + '"</b><div>→ ' + m[2] + '</div></div>'; return ''; }).join('') : '';
  const emailsHtml = d.emails.map(e => '<div class="email-block"><div class="label">' + e.type + ' email</div><div class="subj">' + (e.subject || '(no subject)') + '<button class="copybtn" onclick="copy(decodeURIComponent(\'' + encodeURIComponent(e.subject||'') + '\'))">Copy subject</button></div><pre>' + (e.body || '(empty)') + '<button class="copybtn" onclick="copy(decodeURIComponent(\'' + encodeURIComponent(e.body||'') + '\'))">Copy body</button></pre></div>').join('');
  const callScript = d.call_script ? '<pre>' + d.call_script + '<button class="copybtn" onclick="copy(decodeURIComponent(\'' + encodeURIComponent(d.call_script) + '\'))">Copy script</button></pre>' : '<em style="color:var(--muted)">No call script.</em>';
  const currentStatus = getStatus(d.business);
  const cbs = getCallbacks(d.business);
  const activeCbs = cbs.filter(c => !c.completed).sort((a,b) => new Date(a.when) - new Date(b.when));
  const pastCbs = cbs.filter(c => c.completed).sort((a,b) => new Date(b.completed_at) - new Date(a.completed_at));
  const cbList = (cbsArr, label) => cbsArr.length ? cbsArr.map(c => {
    const w = formatWhen(c.when);
    const type = CB_TYPE_LABEL[c.type] || c.type;
    const safeBiz = d.business.replace(/'/g,"\\'");
    return '<div class="cb-row ' + (w.overdue ? 'overdue' : '') + '"><div class="when">' + w.label + '<small>' + w.time + '</small></div><div><div class="biz">' + type + (c.notes ? ' — ' + c.notes.replace(/</g,'&lt;') : '') + '</div><div class="what">' + (c.completed ? 'Completed ' + new Date(c.completed_at).toLocaleString() : 'Scheduled') + '</div></div><div class="actions">' + (c.completed ? '' : '<button class="btn green" onclick="completeCallback(\'' + safeBiz + '\',\'' + c.id + '\')">✓ Done</button>') + (c.completed ? '' : '<button class="btn" onclick="snoozeCallback(\'' + safeBiz + '\',\'' + c.id + '\',1)">+1h</button>') + (c.completed ? '' : '<button class="btn" onclick="snoozeCallback(\'' + safeBiz + '\',\'' + c.id + '\',24)">+1d</button>') + '<button class="btn cancel" onclick="cancelCallback(\'' + safeBiz + '\',\'' + c.id + '\')">✕</button></div></div>';
  }).join('') : '<em style="color:var(--muted);font-size:12px">No ' + label + '</em>';

  const safeBiz = d.business.replace(/'/g,"\\'");
  const callBar = d.phone ? '<div class="call-bar"><a class="phone-pill gv" href="#" onclick="event.preventDefault(); placeCall(DATA.find(x=>x.business===\'' + safeBiz + '\'),\'gv\')" title="Google Voice">📞 GV</a><a class="phone-pill" href="#" onclick="event.preventDefault(); placeCall(DATA.find(x=>x.business===\'' + safeBiz + '\'),\'native\')" title="Native dialer">📞 Dial</a>' + (settings.twilio_sid ? '<a class="phone-pill twilio" href="#" onclick="event.preventDefault(); placeCall(DATA.find(x=>x.business===\'' + safeBiz + '\'),\'twilio\')" title="Twilio">Twilio</a>' : '') + (settings.plivo_id ? '<a class="phone-pill plivo" href="#" onclick="event.preventDefault(); placeCall(DATA.find(x=>x.business===\'' + safeBiz + '\'),\'plivo\')" title="Plivo">Plivo</a>' : '') + (d.email ? '<a class="mail-pill" href="mailto:' + d.email + '">✉ Email</a>' : '') + (d.author_link ? '<a class="link-pill" href="' + d.author_link + '" target="_blank" rel="noopener">💬 Link</a>' : '') + '<span class="stat" style="flex:1 0 100%;justify-content:center"><b>' + getCallCount(d.business) + '</b><span>call attempts (' + (settings.method||'native') + ')</span></span><a class="link-pill" href="#" onclick="event.preventDefault(); openCallLog(\'' + safeBiz + '\')" style="flex:1 0 100%;background:var(--green);color:white;border-color:var(--green);margin-top:6px" title="Log this call">📝 Log this call + save highlights</a></div>' : '';

  const statusBar = '<div class="section"><h3>Status</h3><div class="status-bar">' + Object.keys(STATUS_LABEL).map(s => '<button class="status-btn ' + (s === currentStatus ? 'active ' + s : '') + '" onclick="setStatus(\'' + safeBiz + '\',\'' + s + '\')">' + STATUS_LABEL[s] + '</button>').join('') + '</div><div class="notes-box"><div class="lbl">Notes (saved locally)</div><textarea placeholder="e.g. Spoke with owner, callback Friday 3pm" onchange="setNotes(\'' + safeBiz + '\', this.value)">' + getNotes(d.business).replace(/</g,'&lt;') + '</textarea></div><div class="notes-box"><div class="lbl">Schedule a follow-up</div><div class="row"><div><div class="lbl">When</div><input type="datetime-local" id="cb-when-' + d.business.replace(/[^a-zA-Z0-9]/g,'_') + '" value="' + new Date(Date.now() + 24*3600*1000).toISOString().slice(0,16) + '"></div><div><div class="lbl">Type</div><select id="cb-type-' + d.business.replace(/[^a-zA-Z0-9]/g,'_') + '"><option value="call">📞 Call</option><option value="email">✉ Email</option><option value="dm">💬 DM</option><option value="meeting">🤝 Meeting</option><option value="other">📌 Other</option></select></div><div style="display:flex;align-items:flex-end"><button class="btn primary" onclick="scheduleCallback(\'' + safeBiz + '\')">⏰ Schedule</button></div></div></div><div class="notes-box"><div class="lbl">Active callbacks (' + activeCbs.length + ')</div>' + cbList(activeCbs, 'scheduled callbacks') + '</div>' + (pastCbs.length ? '<div class="notes-box"><div class="lbl">Completed (' + pastCbs.length + ')</div>' + cbList(pastCbs, 'completed callbacks') + '</div>' : '') + '</div>';
  const highlightsSection = renderHighlights(d.business);
  const callLogSection = renderCallLog(d.business);

  detail.innerHTML = '<div class="detail"><button class="back-btn" onclick="document.querySelector(\'.list-view\').classList.remove(\'detail-open\'); window.scrollTo({top:0,behavior:\'smooth\'});">← Back to leads</button><h2>' + d.business + '</h2><div class="owner">Owner: ' + (d.owner || '—') + '</div>' + callBar + '<div class="grid"><div class="card"><div class="lbl">Phone</div><div class="val">' + tel + '</div></div><div class="card"><div class="lbl">Email</div><div class="val">' + mail + '</div></div><div class="card"><div class="lbl">City / State</div><div class="val">' + (d.city_state || '—') + '</div></div><div class="card"><div class="lbl">Best link</div><div class="val">' + link + '</div></div></div>' + highlightsSection + statusBar + callLogSection + (d.opener ? '<div class="section"><h3>Opener (first 10s)</h3><pre>' + d.opener + '</pre></div>' : '') + (d.pitch ? '<div class="section"><h3>3-Point Pitch</h3><ul class="pitch">' + pitch + '</ul></div>' : '') + (objs ? '<div class="section"><h3>Objection Handlers</h3>' + objs + '</div>' : '') + (d.ask ? '<div class="section"><h3>Close / Ask</h3><pre>' + d.ask + '</pre></div>' : '') + '<div class="section"><h3>Full Call Script</h3>' + callScript + '</div>' + (emailsHtml ? '<div class="section"><h3>Emails (' + d.emails.length + ')</h3>' + emailsHtml + '</div>' : '') + '</div>';
}

function scheduleCallback(biz) {
  const safe = biz.replace(/[^a-zA-Z0-9]/g, '_');
  const whenEl = document.getElementById('cb-when-' + safe);
  const typeEl = document.getElementById('cb-type-' + safe);
  if (!whenEl || !typeEl) return;
  const when = whenEl.value;
  if (!when) { showToast('Pick a date and time first'); return; }
  addCallback(biz, { when, type: typeEl.value });
  showToast('Callback scheduled for ' + new Date(when).toLocaleString());
}

function renderKanban() {
  const counts = countByStatus();
  $$('[data-count]').forEach(el => { el.textContent = counts[el.dataset.count] || 0; });
  $$('.column').forEach(col => {
    const status = col.dataset.status;
    col.querySelectorAll('.kcard').forEach(c => c.remove());
    DATA.filter(d => getStatus(d.business) === status).forEach(d => {
      const card = document.createElement('div');
      card.className = 'kcard'; card.draggable = true; card.dataset.biz = d.business;
      const ph = d.phone ? '<div class="ph">📞 ' + d.phone + '</div>' : '';
      const em = d.email ? '<div class="em">✉ ' + d.email + '</div>' : '';
      const cbCount = getCallbacks(d.business).filter(c => !c.completed).length;
      const cb = cbCount ? '<div class="cb">⏰ ' + cbCount + '</div>' : '';
      const calls = getCallCount(d.business);
      card.innerHTML = '<div class="biz">' + d.business.split('(')[0].trim() + '</div><div class="meta">' + (d.city_state || '') + (calls ? ' · ' + calls + '×' : '') + '</div>' + ph + em + cb;
      card.addEventListener('dragstart', e => { card.classList.add('dragging'); e.dataTransfer.setData('text/plain', d.business); });
      card.addEventListener('dragend', () => card.classList.remove('dragging'));
      card.addEventListener('click', () => { switchView('list'); active = d.business; renderList(); renderDetail(d); });
      col.appendChild(card);
    });
  });
  $$('.column').forEach(col => {
    col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
    col.addEventListener('drop', e => { e.preventDefault(); col.classList.remove('drag-over'); const biz = e.dataTransfer.getData('text/plain'); if (biz) setStatus(biz, col.dataset.status); });
  });
}

function renderCallbacks() {
  const all = allCallbacksFlat();
  const buckets = { overdue: [], today: [], tomorrow: [], week: [], future: [], done: [] };
  all.forEach(item => { const r = item.cb.completed ? 'done' : (inRange(item.cb, 'overdue') ? 'overdue' : inRange(item.cb, 'today') ? 'today' : inRange(item.cb, 'tomorrow') ? 'tomorrow' : inRange(item.cb, 'week') ? 'week' : inRange(item.cb, 'future') ? 'future' : null); if (r) buckets[r].push(item); });
  Object.values(buckets).forEach(arr => arr.sort((a,b) => new Date(a.cb.when) - new Date(b.cb.when)));
  $('#cb-summary').innerHTML = '<div class="card overdue"><div class="lbl">🔴 Overdue</div><div class="val">' + buckets.overdue.length + '</div><div class="sub">Past due</div></div><div class="card today"><div class="lbl">🟠 Today</div><div class="val">' + buckets.today.length + '</div><div class="sub">Today</div></div><div class="card upcoming"><div class="lbl">🔵 Upcoming</div><div class="val">' + (buckets.tomorrow.length + buckets.week.length + buckets.future.length) + '</div><div class="sub">Future</div></div><div class="card"><div class="lbl">✓ Done</div><div class="val">' + buckets.done.length + '</div><div class="sub">All-time</div></div>';
  const groups = [
    { key: 'overdue', label: '🔴 Overdue', items: buckets.overdue, cls: 'overdue' },
    { key: 'today', label: '🟠 Today', items: buckets.today, cls: 'today' },
    { key: 'tomorrow', label: '🔵 Tomorrow', items: buckets.tomorrow, cls: 'tomorrow' },
    { key: 'week', label: '📅 This week', items: buckets.week, cls: '' },
    { key: 'future', label: '⏳ Future', items: buckets.future, cls: '' },
    { key: 'done', label: '✓ Completed', items: buckets.done, cls: '' },
  ];
  let html = '';
  const visible = cbFilter === 'all' ? groups : groups.filter(g => g.key === cbFilter);
  visible.forEach(g => {
    if (!g.items.length && cbFilter !== g.key) return;
    html += '<div class="cb-group ' + g.cls + '"><div class="cb-group-header"><h3>' + g.label + '</h3><span class="count">' + g.items.length + '</span></div>';
    if (!g.items.length) { html += '<div class="cb-empty">Nothing here.</div>'; }
    else {
      g.items.forEach(({ biz, d, cb }) => {
        const w = formatWhen(cb.when);
        const type = CB_TYPE_LABEL[cb.type] || cb.type;
        const safeBiz = d.business.replace(/'/g,"\\'");
        html += '<div class="cb-row ' + (w.overdue ? 'overdue' : '') + '"><div class="when">' + w.label + '<small>' + w.time + '</small></div><div><div class="biz">' + d.business.split('(')[0].trim() + '<div class="owner">' + (d.owner || '') + ' · ' + (d.city_state || '') + '</div></div><div class="what">' + type + (cb.notes ? ' — ' + cb.notes.replace(/</g,'&lt;') : '') + '</div></div><div class="actions">' + (cb.completed ? '' : (d.phone ? '<a class="btn primary" href="#" onclick="event.preventDefault(); placeCall(DATA.find(x=>x.business===\'' + safeBiz + '\'),\'' + (settings.method||'native') + '\')">📞</a>' : '')) + (cb.completed ? '' : (d.email ? '<a class="btn" href="mailto:' + d.email + '">✉</a>' : '')) + (cb.completed ? '' : '<button class="btn green" onclick="completeCallback(\'' + safeBiz + '\',\'' + cb.id + '\')">✓</button>') + (cb.completed ? '' : '<button class="btn" onclick="snoozeCallback(\'' + safeBiz + '\',\'' + cb.id + '\',1)">+1h</button>') + (cb.completed ? '' : '<button class="btn" onclick="snoozeCallback(\'' + safeBiz + '\',\'' + cb.id + '\',24)">+1d</button>') + '<button class="btn cancel" onclick="cancelCallback(\'' + safeBiz + '\',\'' + cb.id + '\')">✕</button></div></div>';
      });
    }
    html += '</div>';
  });
  if (!html) html = '<div class="cb-empty" style="font-size:14px;padding:80px 20px">No callbacks scheduled.<br><br>Open any lead in the 📋 List tab, pick a date+time, and hit ⏰ Schedule.</div>';
  $('#cb-content').innerHTML = html;
}

function switchView(v) {
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === v));
  $('#list-view').style.display = v === 'list' ? 'grid' : 'none';
  $('#kanban-view').style.display = v === 'kanban' ? 'block' : 'none';
  $('#callbacks-view').style.display = v === 'callbacks' ? 'block' : 'none';
  if (v === 'kanban') renderKanban();
  if (v === 'callbacks') renderCallbacks();
}
$$('.tab').forEach(t => t.addEventListener('click', () => switchView(t.dataset.view)));
$$('#cb-filter button').forEach(b => b.addEventListener('click', () => { $$('#cb-filter button').forEach(x => x.classList.remove('active')); b.classList.add('active'); cbFilter = b.dataset.range; renderCallbacks(); }));

function exportProgress() {
  const rows = [['Business', 'Owner', 'Phone', 'Email', 'City/State', 'Status', 'CallAttempts', 'LastCallMethod', 'LastCallAt', 'ActiveCallbacks', 'NextCallback', 'Notes', 'UpdatedAt']];
  DATA.forEach(d => {
    const s = state[d.business] || {};
    const cbs = (s.callbacks || []).filter(c => !c.completed).sort((a,b) => new Date(a.when) - new Date(b.when));
    rows.push([ d.business, d.owner, d.phone, d.email, d.city_state, STATUS_LABEL[getStatus(d.business)], s.call_count || 0, s.last_call_method || '', s.last_call_at || '', cbs.length, cbs[0] ? new Date(cbs[0].when).toISOString() : '', (s.notes || '').replace(/\n/g, ' / '), s.updated_at || '' ]);
  });
  const rowsWithCb = [['Business', 'Owner', 'Phone', 'Email', 'CallbackType', 'CallbackWhen', 'CallbackNotes', 'Completed', 'CompletedAt']];
  DATA.forEach(d => { (state[d.business]?.callbacks || []).forEach(cb => { rowsWithCb.push([ d.business, d.owner, d.phone, d.email, cb.type, cb.when, (cb.notes || '').replace(/\n/g, ' / '), cb.completed ? 'yes' : 'no', cb.completed_at || '' ]); }); });
  const csv1 = rows.map(r => r.map(c => '"' + (c||'').toString().replace(/"/g,'""') + '"').join(',')).join('\n');
  const csv2 = rowsWithCb.map(r => r.map(c => '"' + (c||'').toString().replace(/"/g,'""') + '"').join(',')).join('\n');
  const blob1 = new Blob([csv1], { type: 'text/csv' });
  const url1 = URL.createObjectURL(blob1);
  const a1 = document.createElement('a'); a1.href = url1; a1.download = 'lead-outreach-progress-' + new Date().toISOString().slice(0,10) + '.csv'; a1.click(); URL.revokeObjectURL(url1);
  if (rowsWithCb.length > 1) { const blob2 = new Blob([csv2], { type: 'text/csv' }); const url2 = URL.createObjectURL(blob2); const a2 = document.createElement('a'); a2.href = url2; a2.download = 'lead-callbacks-' + new Date().toISOString().slice(0,10) + '.csv'; a2.click(); URL.revokeObjectURL(url2); showToast('Exported 2 CSVs.'); }
  else { showToast('Exported progress CSV.'); }
}
$('#export-btn').addEventListener('click', exportProgress);

$('#settings-btn').addEventListener('click', () => {
  $('#set-method').value = settings.method || 'native';
  $('#set-gv').value = settings.gv_number || '';
  $('#set-callerid').value = settings.caller_id || '';
  $('#set-twilio-sid').value = settings.twilio_sid || '';
  $('#set-twilio-token').value = settings.twilio_token || '';
  $('#set-twilio-from').value = settings.twilio_from || '';
  $('#set-plivo-id').value = settings.plivo_id || '';
  $('#set-plivo-token').value = settings.plivo_token || '';
  $('#set-plivo-from').value = settings.plivo_from || '';
  $('#set-webhook').value = settings.webhook || '';
  if ($('#set-proxy')) $('#set-proxy').value = settings.proxy_url || '';
  $('#settings-modal').style.display = 'flex';
});
$('#set-cancel').addEventListener('click', () => { $('#settings-modal').style.display = 'none'; });
$('#set-save').addEventListener('click', () => {
  settings.method = $('#set-method').value;
  settings.gv_number = $('#set-gv').value.trim();
  settings.caller_id = $('#set-callerid').value.trim();
  settings.twilio_sid = $('#set-twilio-sid').value.trim();
  settings.twilio_token = $('#set-twilio-token').value.trim();
  settings.twilio_from = $('#set-twilio-from').value.trim();
  settings.plivo_id = $('#set-plivo-id').value.trim();
  settings.plivo_token = $('#set-plivo-token').value.trim();
  settings.plivo_from = $('#set-plivo-from').value.trim();
  settings.webhook = $('#set-webhook').value.trim();
  settings.proxy_url = $('#set-proxy') ? $('#set-proxy').value.trim() : '';
  saveSettings();
  $('#settings-modal').style.display = 'none';
  showToast('Settings saved');
  renderDetail(DATA.find(x => x.business === active) || DATA[0]);
  if (active) renderList();
});
$('#settings-modal').addEventListener('click', e => { if (e.target.id === 'settings-modal') $('#settings-modal').style.display = 'none'; });

function renderAll() { renderStats(); renderList(); renderKanban(); renderCallbacks(); if (active) renderDetail(DATA.find(d => d.business === active)); }
search.add
search.addEventListener('input', renderList);
filterChannel.addEventListener('change', renderList);
filterStatus.addEventListener('change', renderList);
filterCb.addEventListener('change', renderList);

renderAll();
if (DATA.length) { active = DATA[0].business; renderList(); renderDetail(DATA[0]); }

// ===== CALL LOG =====
let callLogBiz = null;

function openCallLog(biz) {
  callLogBiz = biz;
  const lead = state[biz] || {};
  document.getElementById('cl-biz').textContent = biz;
  const now = new Date(); now.setSeconds(0, 0);
  document.getElementById('cl-when').value = now.toISOString().slice(0,16);
  document.getElementById('cl-duration').value = '';
  document.getElementById('cl-outcome').value = 'interested';
  document.getElementById('cl-transcript').value = '';
  document.getElementById('cl-equipment').value = lead.equipment || '';
  document.getElementById('cl-volume').value = lead.volume || '';
  document.getElementById('cl-pain').value = lead.pain || '';
  document.getElementById('cl-timeline').value = lead.timeline || '';
  document.getElementById('cl-budget').value = lead.budget || '';
  document.getElementById('cl-dm').value = lead.decision_maker || '';
  document.getElementById('cl-competitor').value = lead.competitor || '';
  document.getElementById('cl-interest').value = lead.interest || '';
  document.getElementById('cl-next-notes').value = '';
  document.getElementById('cl-next-when').value = suggestNextDate('interested');
  document.getElementById('cl-next-type').value = 'call';
  document.getElementById('calllog-modal').classList.add('open');
  document.getElementById('cl-transcript').oninput = autoExtractFromTranscript;
  document.getElementById('cl-outcome').onchange = function() {
    document.getElementById('cl-next-when').value = suggestNextDate(this.value);
    document.getElementById('cl-next-type').value = suggestNextType(this.value);
  };
}

function closeCallLog() { document.getElementById('calllog-modal').classList.remove('open'); callLogBiz = null; }

function suggestNextDate(outcome) {
  const d = new Date();
  const offsets = { meeting_booked: -1, interested: 1, callback: 2, voicemail: 1, no_answer: 0, not_interested: 30, wrong_number: -1 };
  const off = offsets[outcome] !== undefined ? offsets[outcome] : 1;
  if (off === -1) return '';
  if (outcome === 'no_answer') { d.setHours(d.getHours() + 3); d.setHours(Math.min(d.getHours(), 19)); }
  else d.setDate(d.getDate() + off);
  d.setMinutes(0); d.setSeconds(0);
  return d.toISOString().slice(0,16);
}

function suggestNextType(outcome) {
  return ({ meeting_booked: 'meeting', interested: 'call', callback: 'call', voicemail: 'call', no_answer: 'call', not_interested: 'email', wrong_number: 'other' })[outcome] || 'call';
}

function autoExtractFromTranscript() {
  const t = (document.getElementById('cl-transcript').value || '').toLowerCase();
  if (!t) return;
  const equipKeywords = ['square','clover','sumup','stripe','paypal','toast','lightspeed','shopify','vend','lavu','touchbistro','revel','oracle micros','ncr','vagaro','booker','fresha','boulevard','mangomint','podium','cash app','venmo','zelle','apple pay','helcim','stax','payanywhere','squareup','clover go','clover station'];
  const found = equipKeywords.filter(k => t.includes(k));
  if (found.length && !document.getElementById('cl-equipment').value) {
    document.getElementById('cl-equipment').value = found.map(f => f.replace(/\b\w/g, c => c.toUpperCase())).join(', ');
  }
  const volM = t.match(/\$\s*(\d{1,3}(?:[,\.]\d{3})+|\d+)\s*k?\s*\/?\s*(mo|month|monthly|wk|week|day|daily|yr|year)?/);
  if (volM && !document.getElementById('cl-volume').value) document.getElementById('cl-volume').value = volM[0].trim();
  const painKeywords = ['fees','expensive','high cost','support','hidden','slow','crash','down','breaks','outage','sucks','terrible','horrible','rises','rising','increase','doubled','overpriced','scam','ripoff','disappointed','frustrated','angry','unhappy'];
  const painFound = painKeywords.filter(k => t.includes(k));
  if (painFound.length && !document.getElementById('cl-pain').value) {
    document.getElementById('cl-pain').value = painFound.slice(0,3).map(p => p.replace(/\b\w/g, c => c.toUpperCase())).join(', ');
  }
  const timeM = t.match(/(in|by|next|within)\s+(\d+)\s*(day|week|month|yr|year)s?/);
  if (timeM && !document.getElementById('cl-timeline').value) document.getElementById('cl-timeline').value = timeM[0].toLowerCase();
  if (found.length && !document.getElementById('cl-competitor').value) {
    document.getElementById('cl-competitor').value = found.map(f => f.replace(/\b\w/g, c => c.toUpperCase())).join(', ');
  }
}

function saveCallLog() {
  if (!callLogBiz) return;
  if (!state[callLogBiz]) state[callLogBiz] = {};
  const $ = (id) => document.getElementById(id);
  const when = $('cl-when').value;
  const outcome = $('cl-outcome').value;
  const duration = $('cl-duration').value;
  const transcript = $('cl-transcript').value;
  const equipment = $('cl-equipment').value.trim();
  const volume = $('cl-volume').value.trim();
  const pain = $('cl-pain').value.trim();
  const timeline = $('cl-timeline').value.trim();
  const budget = $('cl-budget').value.trim();
  const dm = $('cl-dm').value.trim();
  const competitor = $('cl-competitor').value.trim();
  const interest = $('cl-interest').value;
  const nextWhen = $('cl-next-when').value;
  const nextType = $('cl-next-type').value;
  const nextNotes = $('cl-next-notes').value.trim();

  const log = {
    id: 'log_' + Date.now(),
    at: when ? new Date(when).toISOString() : new Date().toISOString(),
    duration_min: duration ? parseInt(duration) : null,
    outcome: outcome,
    transcript: transcript,
    equipment: equipment,
    volume: volume,
    pain: pain,
    timeline: timeline,
    budget: budget,
    decision_maker: dm,
    competitor: competitor,
    interest: interest ? parseInt(interest) : null,
    method: (settings.method || 'native'),
  };

  state[callLogBiz].equipment = equipment;
  state[callLogBiz].volume = volume;
  state[callLogBiz].pain = pain;
  state[callLogBiz].timeline = timeline;
  state[callLogBiz].budget = budget;
  state[callLogBiz].decision_maker = dm;
  state[callLogBiz].competitor = competitor;
  state[callLogBiz].interest = interest ? parseInt(interest) : null;

  if (!state[callLogBiz].call_log) state[callLogBiz].call_log = [];
  state[callLogBiz].call_log.push(log);
  incCallCount(callLogBiz);

  const summary = 'Last call (' + new Date(log.at).toLocaleString() + '): ' + outcome.replace(/_/g, ' ') +
    (duration ? ' / ' + duration + 'min' : '') +
    (equipment ? ' / using ' + equipment : '') +
    (competitor && competitor !== equipment ? ' / mentioned ' + competitor : '') +
    (pain ? ' / pain: ' + pain : '') +
    (timeline ? ' / ' + timeline : '') +
    (interest ? ' / interest ' + interest + '/10' : '');
  state[callLogBiz].notes = summary + (state[callLogBiz].notes ? '\n\n' + state[callLogBiz].notes : '');

  if (nextWhen && outcome !== 'meeting_booked' && outcome !== 'wrong_number') {
    if (!state[callLogBiz].callbacks) state[callLogBiz].callbacks = [];
    const cbNotes = nextNotes || ('Follow-up from ' + outcome.replace(/_/g, ' ')) +
      (equipment ? ' | equip: ' + equipment : '') +
      (pain ? ' | pain: ' + pain : '');
    state[callLogBiz].callbacks.push({
      id: 'cb_' + Date.now(),
      when: new Date(nextWhen).toISOString(),
      type: nextType,
      notes: cbNotes,
      completed: false,
      created_at: new Date().toISOString(),
      from_call_log: log.id,
    });
  }

  const statusMap = { meeting_booked: 'meeting', interested: 'replied', callback: 'contacted', voicemail: 'contacted', no_answer: 'contacted', not_interested: 'lost', wrong_number: 'lost' };
  if (statusMap[outcome]) state[callLogBiz].status = statusMap[outcome];

  state[callLogBiz].updated_at = new Date().toISOString();
  saveState();
  closeCallLog();
  renderAll();
  showToast('✓ Call logged' + (nextWhen ? ' + callback scheduled' : ''));
}

function getCallLog(biz) { return (state[biz] || {}).call_log || []; }
function getEquipment(biz) { return (state[biz] || {}).equipment || ''; }
function getVolume(biz) { return (state[biz] || {}).volume || ''; }
function getPain(biz) { return (state[biz] || {}).pain || ''; }
function getTimeline(biz) { return (state[biz] || {}).timeline || ''; }
function getInterest(biz) { return (state[biz] || {}).interest || ''; }
function getCompetitor(biz) { return (state[biz] || {}).competitor || ''; }
function getDecisionMaker(biz) { return (state[biz] || {}).decision_maker || ''; }
function getBudget(biz) { return (state[biz] || {}).budget || ''; }

function renderHighlights(biz) {
  const parts = [];
  if (getEquipment(biz)) parts.push('⚙ <b>' + esc(getEquipment(biz)) + '</b>');
  if (getVolume(biz)) parts.push('💰 <b>' + esc(getVolume(biz)) + '</b>');
  if (getPain(biz)) parts.push('😣 <b>' + esc(getPain(biz)) + '</b>');
  if (getTimeline(biz)) parts.push('⏱ <b>' + esc(getTimeline(biz)) + '</b>');
  if (getCompetitor(biz)) parts.push('🥊 <b>' + esc(getCompetitor(biz)) + '</b>');
  if (getBudget(biz)) parts.push('💵 <b>' + esc(getBudget(biz)) + '</b>');
  if (getDecisionMaker(biz)) parts.push('👤 <b>' + esc(getDecisionMaker(biz)) + '</b>');
  if (getInterest(biz)) parts.push('🔥 <b>' + getInterest(biz) + '/10</b>');
  if (!parts.length) return '';
  return '<div class="highlights">' + parts.map(p => '<span class="highlight">' + p + '</span>').join('') + '</div>';
}

function renderCallLog(biz) {
  const logs = getCallLog(biz);
  if (!logs.length) return '<div class="call-log"><h4>Call log (none yet — click "Log this call" above after your first call)</h4></div>';
  return '<div class="call-log"><h4>Call log (' + logs.length + ')</h4>' + logs.slice().reverse().map(l => {
    const date = new Date(l.at).toLocaleString();
    const fields = [];
    if (l.equipment) fields.push('⚙ <b>' + esc(l.equipment) + '</b>');
    if (l.volume) fields.push('💰 <b>' + esc(l.volume) + '</b>');
    if (l.pain) fields.push('😣 <b>' + esc(l.pain) + '</b>');
    if (l.timeline) fields.push('⏱ <b>' + esc(l.timeline) + '</b>');
    if (l.competitor && l.competitor !== l.equipment) fields.push('🥊 <b>' + esc(l.competitor) + '</b>');
    if (l.budget) fields.push('💵 <b>' + esc(l.budget) + '</b>');
    if (l.decision_maker) fields.push('👤 <b>' + esc(l.decision_maker) + '</b>');
    if (l.interest) fields.push('🔥 <b>' + l.interest + '/10</b>');
    if (l.duration_min) fields.push('⏳ <b>' + l.duration_min + 'min</b>');
    return '<div class="call-log-row"><div class="log-head"><span class="log-outcome ' + esc(l.outcome) + '">' + esc((l.outcome||'').replace(/_/g,' ')) + '</span><small>' + date + '</small></div>' + (fields.length ? '<div class="log-fields">' + fields.join(' &nbsp; ') + '</div>' : '') + (l.transcript ? '<details style="margin-top:6px"><summary style="cursor:pointer;color:var(--muted);font-size:12px">Show transcript</summary><pre style="white-space:pre-wrap;font-family:inherit;font-size:12px;color:var(--muted);margin:6px 0 0;padding:8px;background:var(--bg);border-radius:6px">' + esc(l.transcript).slice(0, 3000) + (l.transcript.length > 3000 ? '…' : '') + '</pre></details>' : '') + '</div>';
  }).join('') + '</div>';
}

function esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

// ===== STARTUP =====
function init() {
  try {
    state = loadState();
    settings = loadSettings();
    if (typeof renderAll === 'function') renderAll();
    else { renderList(); renderKanban(); renderCallbacks(); }
    active = DATA[0] ? DATA[0].business : null;
    if (active && typeof renderDetail === 'function') renderDetail(DATA[0]);
  } catch (e) {
    console.error('Init error:', e);
    document.body.innerHTML = '<pre style="padding:20px;color:red;background:#fff;font:14px monospace">INIT ERROR: ' + (e && e.message ? e.message : e) + '\n\n' + (e && e.stack ? e.stack : '') + '</pre>';
  }
}
// Expose handler functions to the global scope so inline onclick="..." handlers
// can reach them. Required because this whole script is wrapped in a try{} block:
// sync function declarations leak to global via legacy block-hoisting, but ASYNC
// ones (e.g. placeCall) do NOT — which broke the call buttons. Assign explicitly.
try {
  Object.assign(window, {
    DATA,  // inline onclick handlers do placeCall(DATA.find(...)) — DATA is a
           // block-scoped const and doesn't leak to global without this.
    placeCall, setStatus, setNotes, scheduleCallback, snoozeCallback,
    completeCallback, cancelCallback, saveCallLog, closeCallLog, openCallLog,
    copy, addCallback, exportProgress,
  });
} catch (_) { /* any name not in scope is skipped by the throw; ignore */ }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
} catch(e) {
  document.body.innerHTML = '<pre style="padding:20px;color:red;background:#fff;font:13px monospace;white-space:pre-wrap">SCRIPT ERROR: ' + (e && e.message ? e.message : e) + '\n\n' + (e && e.stack ? e.stack : '') + '</pre>';
}
