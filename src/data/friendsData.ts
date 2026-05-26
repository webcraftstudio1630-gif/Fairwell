import pic1 from './Friend images/pic 1.jpeg';
import pic2 from './Friend images/WhatsApp Image 2026-05-18 at 10.42.55 PM.jpeg';
import pic3 from './Friend images/WhatsApp Image 2026-05-19 at 6.03.37 PM.jpeg';
import pic4 from './Friend images/Screenshot 2026-05-19 184656.png';
import pic5 from './Friend images/Screenshot 2026-05-19 184814.png';
import pic6 from './Friend images/Screenshot 2026-05-19 184835.png';
import pic7 from './Friend images/Screenshot 2026-05-19 184846.png';
import pic8 from './Friend images/Screenshot 2026-05-19 184857.png';
import pic9 from './Friend images/Screenshot 2026-05-19 184916.png';
import pic10 from './Friend images/Screenshot 2026-05-19 184931.png';
import pic11 from './Friend images/Screenshot 2026-05-19 184943.png';
import pic12 from './Friend images/Screenshot 2026-05-19 184955.png';
import newPic1 from './652056019_17966943666040092_6122043425627941404_n.jpg';
import newPic2 from './652800961_17966943684040092_735318736762201261_n.jpg';
import newPic3 from './653905648_17966943675040092_7930007155707287880_n.jpg';
import groupHighlightPic from './highlights/pic1.jpeg';

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface Friend {
  id: string;
  name: string;
  nickname: string;
  quote: string;
  photo: string;
  letter: string;
  favMemory: string;
  timeline: TimelineEvent[];
  handwrittenQuote: string;
  videoUrl: string;
  videoCaption: string;
  highlights: string[];
  role: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration: string;
}

export const musicPlaylist: MusicTrack[] = [
  {
    id: "1",
    title: "Woh Din [From \"Chhichhore\"]",
    artist: "Arijit Singh",
    src: "/woh_din.mp3",
    duration: "4:18"
  },
  {
    id: "2",
    title: "Pink hai (Gentle Farewell)",
    artist: "Akash MUthhmare",
    src: "https://assets.mixkit.co/music/preview/mixkit-delightful-valse-528.mp3",
    duration: "3:12"
  },
  {
    id: "3",
    title: "darling (Ambient Swell)",
    artist: "Dlipi lavdu",
    src: "https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3",
    duration: "2:58"
  },
  {
    id: "4",
    title: "Mat sun (Uplifting Acoustic)",
    artist: "Gandu",
    src: "https://assets.mixkit.co/music/preview/mixkit-serenade-for-lovers-530.mp3",
    duration: "3:34"
  },
  {
    id: "5",
    title: "Friendship Day Mashup 2022",
    artist: "Friends Forever",
    src: "/friendship_mashup.mp3",
    duration: "4:28"
  }
];

export const friendsData: Friend[] = [
  {
    id: "adveth askar ",
    name: "Adveth",
    nickname: "addu",
    role: "He's my first friend in colleage ",
    quote: "Debugging life one coffee at a time, but I could never debug the laughter we shared at 3 AM.",
    photo: pic7,
    letter: "So Aadu, tula mahit aahe na, tu majha first friend hota ani almost 1 year paryant aapan bench partner pan hoto .Tyachyanantar khup goshti zhalya, kahi changlya kahi vait, pan ek gosht kadhi change nahi zali — tu majha first friend hotas ani nehmi special rahshil.Mala mahit aahe tu kahi vela kaun asa bolt hota majhya sobat, ani tyamage reasons pan hote. Tya goshtinmule mala khup kahi samajla, khup kahi shikayla milala. Saglya goshti letter madhye explain nahi karta yet, mhanun te jau de.Pan ek gosht nakkich — mi tujhya sobat jevdha time spend kela na, to majhya life madhla khup happy ani memorable time hota. Tujhya mule mala he group milala, nave friends milale, ani college life khup mast zali. Tu nastas tar kadachit mi itke changle friends banavle pan naste.Majha college cha first bunk pan tujhya sobat hota, ani खरं सांगायचं तर tujhya sobat rahayla mala khup avdaycha. Aata mala “tarki” nako samjhu saalya. 😭Majhe best moments kharach tujhya sobatch banle. Aaplya tighancha trio pan khup mast hota ani te moments mi kadhi visarnar nahi. Mala mahit aahe tu mala kadachit jast miss nahi karnaar, pan mi nakki karnaar.Thank you for every moment, every laugh, every bunk, every memory.Tu nehmi majhya life madhye special rahshil.Take care re saalya ❤️",
    favMemory: "That spontaneous road trip to Big Sur where our car broke down, and you spent 4 hours fixing the radiator while teaching us astrophysics under the stars.",
    timeline: [

      { year: "2023", event: "Built our first terrible app together during the 48-hour hackathon" },
      { year: "2024", event: "Organized the legendary rooftop summer farewell party" },
      { year: "2025", event: "Graduation & signing our shared memory vault" }
    ],
    handwrittenQuote: "Keep building beautiful things, my friend. See you at the top!",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-partying-happily-46557-large.mp4",
    videoCaption: "Celebrating Alex's hackathon victory at the downtown loft, 2024.",
    highlights: ["3 AM Diner Runs", "Hackathon Champions", "Rooftop Jam Sessions"]
  },
  {
    id: "maya",
    name: "Rohit ",
    nickname: "",
    role: "patner in backchodi",
    quote: "gandu saala backchodi karte rahe taaa",
    photo: pic2,
    letter: "So Rohit, college me admission ke time sabse pehle mai tujhe hi mila tha. Tab hum dono ne zyada baat nahi ki thi, bas normal hi tha sab. Fir college start hone ke baad bhi hum itna nahi bolte the, lekin jab baat karna start kiya na, tab fir backchodi kabhi ruki hi nahi.Apna first group — Suhani, tu, mai aur Adveth — ye hamesha yaad rahega. Sabke saath itni masti ki hai ki ab sochta hu to hasi aa jati hai. Fir second year me kuch achi bate hui aur kuch buri bhi hui, par ab un sab baaton ko yaad karke mood kharab nahi karna mujhe.Phir Navin aaya aur apna ek naya group bana. Waha pe jaake hum dono ne aur bhi zyada masti ki. Tujhe maine meri life ki almost har baat batayi hai. Tu hamesha sunta tha aur samajhta bhi tha. Haan, mai thoda immature hu, par chutiya nahi hu 😭.Sach bolu to tere saath jitna bhi time spend kiya hai na, usme bohot maja aaya. Har ek bakchodi, har ek trip, har ek random conversation yaad rahegi. Thank you bhai itne saare mast moments dene ke liye. Future me kahi bhi rahe, contact mat todna.Take care bhai ❤️",
    favMemory: "When you converted the communal lounge into a makeshift art studio and made us all paint our inner spirit animals at midnight.",
    timeline: [
      { year: "2023", event: "Moved into the apartment across the hall with 14 house plants" },
      { year: "2024", event: "Curated the group's first polaroid gallery wall" },
      { year: "2025", event: "Backpacking trip through the Pacific Northwest forests" },
      { year: "2026", event: "Tearful but beautiful goodbye dinner at our favorite spot" }
    ],
    handwrittenQuote: "Never lose that spark that makes you see magic in the mundane.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-smiling-4886-large.mp4",
    videoCaption: "Maya capturing the neon lights during our midnight city walk.",
    highlights: ["Polaroid Wall Creation", "Midnight Art Therapy", "Forest Hiking"]
  },
  {
    id: "shantanu",
    name: "shantanu",
    nickname: "shantabbai ",
    role: "The gandu person ",
    quote: "True friendship isn't about being inseparable; it's about being separated and nothing changing.",
    photo: pic3,
    letter: "Bhai, tu majhya jindagi madhe ek veglach chapter manun aalaa. Suruvatila khup goshti changlya hotya, aapan sobat khup time spend kela ani kahi moments aaj pan athavtat. Jari aaplya madhe kahi misunderstandings ani problems zhalya, tari pn je kahi changle moments hote te mi kadhi visarnar nahi.Mala fakta ek advice dyaychi aahe — changlya prakare bolayla shik ani swatachi personality अजून strong banav. Mala mahit aahe ki tujhya past madhe khup kahi jhalay, ani kahi goshti kharach painful hotya. Pan kahi ठिकाणी tujhi pan chuk hoti he accept karun pudhe jayla pahije. Life madhe saglyanna second chance milto, fakta swatahla change karaychi tayari pahije.Pudhe jaun changle mitra bana, changlya lokansobat raha ani swatahla improve kar. Mi hope karto ki future madhe tu ek better ani happy person banशील.Je kahi time aapan sobat ghalavla,tyasathi thanks.He manun mi aaple shabda sampavto.",
    favMemory: "Hosting the Thanksgiving dinner where the turkey burned, so you improvised and made gourmet grilled cheese for 13 people.",
    timeline: [
      { year: "2022", event: "Rescued us from a torrential downpour after the music festival" },
      { year: "2023", event: "Started the official Sunday Family Dinner tradition" },
      { year: "2024", event: "Ran the city marathon with the entire group cheering at the finish line" },
      { year: "2025", event: "Passed the medical boards with flying colors" }
    ],
    handwrittenQuote: "You've got the biggest heart of anyone I know. Keep healing the world.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-friends-toasting-with-beer-bottles-42812-large.mp4",
    videoCaption: "Marcus leading the toast at our final Sunday family barbecue.",
    highlights: ["Sunday BBQs", "Marathon Day", "Late Night Advice"]
  },
  {
    id: "parth kharche",
    name: "parth",
    nickname: "partyaa",
    role: "the backchod master ",
    quote: "Life is a beautiful melody, and you all were the perfect harmony.",
    photo: pic4,
    letter: "Bhaiii,Mi tujhya sathi jast kahi lihuu shakat nahi, tyachya sathi sorry. Pan jevha pasun tu group madhe aala, tevha pasun khari masti suru zali. Tujha ek veglach vibe hota. Yeta-jata mala tras dyayla yaychas, pan honestly te pn mastach hota.Aapan jevda pn time sobat spend kela, to khup chan hota ani khup sare moments aaj pn athavtat. Saglyat special gosht manje trips ani firayla jayche plans. Tujhya yenyapoorvi plans fakta bant hote, pan kadhi complete hot navte. Pan tu alyavar khup sare plans banle ani aapan kharach firayla pn gelo. Tyasathi kharach thank you.Personally mala vatat ki tu soft-hearted aahe ani khup changla  pn aahe. Tu kadhi kadhi masti karto, tras deto, pan inside tu caring ani genuine person aahe.Thank you for all these special moments, laughs ani memories. He sagla mi kadhi visarnar nahi. ❤️",
    favMemory: "That rainy Tuesday evening when the power went out, and you led an entirely unplugged candlelight sing-along until 2 AM.",
    timeline: [
      { year: "2023", event: "Played her first open mic night with 12 nervous friends front row" },
      { year: "2024", event: "Wrote the unofficial 'Anthem' of our friend group" },
      { year: "2025", event: "Summer busking tour along the coastal boardwalks" },
      { year: "2026", event: "Signed her first recording EP deal" }
    ],
    handwrittenQuote: "May your life always be filled with beautiful music and standing ovations.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-playing-acoustic-guitar-in-the-sun-34563-large.mp4",
    videoCaption: "Elena practicing her new single on the porch at sunset.",
    highlights: ["Candlelight Sessions", "Open Mic Triumphs", "Beach Campfires"]
  },
  {
    id: "bhageshree amane",
    name: "bhageshree",
    nickname: "The Kittu",
    role: "The sports girl",
    quote: "Energy is contagious, and I'm so glad I caught yours.",
    photo: pic5,
    letter: "Dear Editor,Tujhya sathi lihayla mala kadhi jast vichar karava lagat nahi, karan tu aamchya group chi main member hotis. First year madhe aapn jast bolat navhto ani tu dusrya group madhe hotis, mhanun kadhi khas bonding jhali nahi. Pan second year pasun aapn bolayla laglo ani tevha mala tujha nature khup avadla.Mi tujhya shi khup jast bollo nahi, pan jitka vel bollo titkya velat mala samajla ki tu khup changli ani sweet person aahe. Tujhya mule aamcha group motha jhala, ani tujhyamulech aami social media madhe pan active jhalo. Tyasathi kharach thank you so much.Aapn khup jast time sobat spend nahi kela, pan jevdhe moments banle te khup special ani memorable hote. Tujhya sobat rahun khup chan vatla ani he sagle moments nehmi lakshat rahnar.Thank you for everything ❤️",
    favMemory: "When you rented a mascot costume just to congratulate Sarah on getting her promotion, embarrassing and delighting the entire office.",
    timeline: [
      { year: "2023", event: "Crashed the campus talent show with an improvised flash mob" },
      { year: "2024", event: "Organized the epic 24-hour movie marathon survival challenge" },
      { year: "2025", event: "Backpacked across four countries in two weeks with zero sleep" },
      { year: "2026", event: "Accepted the dream expat role in Tokyo" }
    ],
    handwrittenQuote: "Keep shining bright and bringing the party wherever you go!",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-cheering-at-a-party-45814-large.mp4",
    videoCaption: "Jordan getting the entire crowd hyped at our New Year's Eve bash.",
    highlights: ["Flash Mob Glory", "Mascot Surprise", "Tokyo Sendoff"]
  },
  {
    id: "pari kewat",
    name: "pari",
    nickname: "The hepari",
    role: "The choti bachhi",
    quote: "A good friend knows all your stories. A best friend helped you write them.",
    photo: pic6,
    letter: "Tere liye Hindi me likhna pad raha hai 😭.So Pari, hum dono 1st year me mile the aur tu mujhe starting se hi ek exciting person lagi.Tujhe sabke saath dosti karni thi aur tune ki bhi.Haan, tera relationship bahut kharab gaya tha, par tu usse move on ho gayi, aur ye bahut badi baat hai.Sach bolu toh mujhe darr lagta tha ki tu kahin kuch galat step na le le.Main dikhata nahi tha, par mujhe teri sach me parva thi.Ye mera last letter hai tere liye.Aur honestly, mere liye tu kabhi mature nahi thi 😭, tu hamesha ek choti bacchi hi rahegi.Aur facewash wale scene ke liye sorry, mujhe waise nahi karna chahiye tha.Pata hai, tu bahut pyari hai — tere nature se bhi aur tere dil se bhi.Bas ek hi wish hai ki tujhe future me ek aisa dost mile jo teri care kare, tujhe samjhe aur hamesha tere saath rahe.Mujhe samajh nahi aa raha kya bolu, bahut kuch bolna hai par shayad words nahi mil rahe.Tere saath jitne bhi moments hue, sab honestly bahut acche the.Un sab ke liye thank you ❤️Future ke liye all the best, khush rehna aur apna dhyan rakhna. ✨",
    favMemory: "Planning a secret surprise birthday weekend for Alex down to the 15-minute intervals, including a fake kidnapping scenario that went hilariously right.",
    timeline: [
      { year: "2023", event: "Created the legendary 'Master Friend Group Directory & Calendar'" },
      { year: "2024", event: "Successfully coordinated a 13-person cabin getaway on a budget" },
      { year: "2025", event: "Helped three of us prep for and ace our major career interviews" },
      { year: "2026", event: "Stepping up as Senior Project Director in Chicago" }
    ],
    handwrittenQuote: "Thank you for keeping us together. You're irreplaceable.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-friends-laughing-and-talking-in-a-diner-43015-large.mp4",
    videoCaption: "Sophia going over the weekend itinerary over diner pancakes.",
    highlights: ["Cabin Getaway", "Surprise Parties", "Late Night Prep"]
  },
  {
    id: "abhishek gohane ",
    name: "abhii",
    nickname: "abbu jaan and NUNU",
    role: "The master mind with pure heart",
    quote: "We are all travelers in the wilderness of the world, and the best we can find is an honest friend.",
    photo: pic12,
    letter: "So Abbu khara saangu t tujhi khup athavan yenar, kaun ki je moments aapn sobat spend kele te khup chan hote. Mala mahit aahe tu mala bhetayla yenar, pn toh time nahi rahnar jasa aata hota. Aata sagla badalnar aahe, pn aaplya memories kadhi nahi badalnar.Mala nahi mahit tu mala kasa samajtes, pn mala tu khup chan vatates. Aaplya madhye je bonding hoti na, ti kharach special hoti majhya sathi. Pn kahi gosti mala avdlya nahi, especially fake gf wali prank. Mala mahit hota ki te prank hota, pn eka moment laa vatla ki tu majhya var trust kartes. Pn the jaude aata, kaun ki tyapeksha aapli friendship majhya sathi jast important aahe.Aata mala fkt evdha mhanycha aahe ki I will miss you a lot yaar. Tula mahit aahe aapla competition mi khup miss karnaar, ani aapla trio pn. Aapn keleli masti, fights, random talks, saglach athavnar. Tula majhya sagdya gosti mahit aahet ani mi tujhya var khup jast trust karto.Mahit nahi aapn aata kadhi bhetnaar, pn jevha pn bhetu na, mi tula ek bohot motha hug denar aahe. Ani ho, tujhya lagna laa pn mi nakkich yenar, tu bolavlas tari ani nahi bolavlas tari. 😭I miss you yaar. ❤️",
    favMemory: "Sitting on the fire escape until dawn discussing the meaning of success while watching the city wake up beneath us.",
    timeline: [
      { year: "2023", event: "Introduced the group to existentialism and premium loose-leaf tea" },
      { year: "2024", event: "Published his first collection of university essays" },
      { year: "2025", event: "Hosted the weekly 'Deep Talks & Dim Lights' salon in his living room" },
      { year: "2026", event: "Awarded the prestigious European Literature Fellowship" }
    ],
    handwrittenQuote: "Stay curious, stay kind, and never stop looking up at the stars.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-reading-a-book-in-a-cozy-living-room-41584-large.mp4",
    videoCaption: "Liam sharing a passage from his favorite book during a rainy afternoon.",
    highlights: ["Fire Escape Dawns", "Philosophy Salons", "Paris Sendoff"]
  },
  {
    id: "ashlesha aaglawe",
    name: "Ashlesha",
    nickname: "ashlil or ashu ",
    role: "The artistand  ",
    quote: "Style is a way to say who you are without having to speak, but friendship speaks straight to the soul.",
    photo: pic8,
    letter: "Finally last msg for you… khara saangu kaa, mala samjat nahi aahe kuthun start karu. Aata jevha sagla end hot aahe na, tevha aaple sagle moments ek ek karun aathavtat aahet. Tujhya sobat spend kelela pratyek moment majhya sathi special hota. Masti, random talks, teasing, fights, saglach khup chan hota.Tula mahit aahe majhi feeling kay hoti. Mi kadhi fake behave nahi kela tujhyashi. Mi ek gost khari bollo hoto ki mi tula accept kara la kadhi pn tayar hoto. Kaun ki tujhyasobat asta na mala khup peace vataycha. Tujha message ala ki mood better vaycha. Kadachit he sagla tujhyasathi normal asel, pn majhyasathi khup important hota.Ani ho, tu dusryan sobat hotis te moments pn mala aathavtat. Kadhi kadhi vait vataycha, pn तरीही mala tujhyabaddal care kadhi kami jhali nahi. Aapn sobat jevde pn moments spend kele, mi tyat kharach happy hoto. Thank you mala he sagle moments feel karvun dilya sathi. College madhle kahi best memories tujhyamule special zhale.Pn aata reality accept karavi lagel ki sagla previous sarkha rahnar nahi. Kadachit aapan dur hou, kami bolu kiwa completely strangers pn hou. Ani honestly hech part saglyat jast hurt karto. Kaun ki jya person shi roz bolaychi habit lagte na, tya person la achanak sodun dene easy nast.Mhanun mi aata new life start kara cha try karnar. He easy nahi aahe, pn future sathi necessary aahe. Obviously mi tula miss karnar, mi khota nahi bolu shakat. Mi try karnar tula visraycha, jari te difficult asel tari pn.Fakt ek gost nehmi lakshat thev — tu majhya life madhli ek khup beautiful memory rahshil. Ani last madhe fakt evdhach wish karto ki tujhi life khup changli jhali pahije. Tu nehmi happy raha, smile kart raha ani successful ho.Take care 🤍",
    favMemory: "When you gave the entire group a glamorous thrift-store makeover for our thrift-prom party, turning $10 outfits into runway masterpieces.",
    timeline: [
      { year: "2022", event: "Saved everyone from fashion disasters before the winter gala" },
      { year: "2023", event: "Launched her independent sustainable fashion blog" },
      { year: "2024", event: "Organized the charity runway show that raised $5,000" },
      { year: "2025", event: "Headhunted by a major design house in Milan" }
    ],
    handwrittenQuote: "You make the world a more beautiful place just by being in it.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-smiling-in-a-fashion-photoshoot-42751-large.mp4",
    videoCaption: "Chloe directing the backstage chaos at our charity fashion show.",
    highlights: ["Thrift Prom", "Charity Gala", "Milan Dream"]
  },
  {
    id: "samruddhi warsagde",
    name: "Samu",
    nickname: "samyaaaa",
    role: "The best sister",
    quote: "Jobs fill your pocket, but adventures fill your soul. Thanks for being my greatest adventure.",
    photo: pic9,
    letter: "Dear Samu,So this is probably my last message to you. Aaj finally mi majhya feelings thodya express karto.Aapli first meet athavte ka tula? Mala tar ajun pan perfectly athavte. Tu Adveth sobat bolayla aali hotis ani mi tevha tujhyashi khup rude tone madhe bollo hoto. Tya veles mala vatla navhta ki aapan itke close hou. Pan honestly, tu veglich nighali.Tu halu halu majhya life cha important part bant geli. Tu mala khup badlun takli. Majha attitude, majha nature, khup goshti tujhyamule change jhalya. Aata condition ashi aahe ki tu fakta friend nahi rahili, tu majhi “Don Sis” zali aahe.Tujha nature mala khup avadto. Tu protective aahe, caring aahe, ani mi kuthe chuklo tar mala samjun pan sangtes, kadhi kadhi shivya pan detes. Pan khara sangaycha tar mala te pan avadta, karan tyat pan tujhi care diste.Aaple khup moments aahet — kahi funny, kahi emotional, kahi jhagde wale pan. Kahi goshtinvar aaple arguments pan jhale, kahi veles bolne band pan jhale. Pan shevti aapan parat normal jhalo. Tyasathi thank you ani sorry pan, jar kadhi majhya words mule tula hurt zala asel tar.Tu majhyasathi khup special aahe Samu. Mi kadhi openly sangitla nahi pan tujhya sobat बोलताना mala khup comfortable vataycha. Tujhyamule college che khup moments special jhale.Aata pudhe sagle aaplya aaplya life madhe busy hou, nave lok yetil, nave moments yetil. Pan honestly, mi tula kadhi forget nahi karnaar. Tujhi jaga majhya life madhe always special rahil.I will really miss you a lot. Tujhya shivya, tujha attitude, tujha care karne, saglach miss honar.Ajun lihayla gelo tar kharach radayla lagen mi.Take care of yourself, Don Sis ❤️Always stay happy and keep smiling. ",
    favMemory: "Getting lost on the hiking trail in Yosemite and singing 90s boy band songs at the top of our lungs to keep the bears away.",
    timeline: [
      { year: "2022", event: "Convinced the group to go camping in freezing November weather" },
      { year: "2023", event: "Completed his solo summit of Mount Rainier" },
      { year: "2024", event: "Led our epic 10-day cross-country van expedition" },
      { year: "2025", event: "Moving to Colorado to become a full-time guide" }
    ],
    handwrittenQuote: "Never stop climbing. The view is always worth it!",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-friends-hiking-in-the-mountains-42614-large.mp4",
    videoCaption: "Ethan leading the pack up the Yosemite summit ridge, 2024.",
    highlights: ["Yosemite Trek", "Van Expedition", "Mountain Summits"]
  },
  {
    id: "pratyusha komati",
    name: "pratyusha",
    nickname: "potti",
    role: "Thanda paani",
    quote: "First we eat, then we do everything else. And I wouldn't want to eat with anyone else.",
    photo: pic10,
    letter: "So potti, tujhse main 1st year me mila tha. Mujhe honestly yaad bhi nahi hamari first meeting kaise hui thi 😭, but jo bhi thi acchi hi rahi hogi. Humne jitna bhi time saath spend kiya na, woh sab mere liye bahut memorable hai. Agar main hamari memories likhne baithu toh shayad pura din nikal jayega, kyunki har choti choti baat bhi yaad aati hai.Main bas itna kehna chahta hu ki main tujhe sach me bahut zyada miss karunga. Tere saath jitna bhi time spend kiya, uske liye main bahut khush hu. Kabhi kabhi kuch log unknowingly itne important ban jaate hai na, aur tu unme se ek hai.Aur pata hai, teri ek baat mujhe sabse zyada pasand hai 😭❤️ — tu Marathi bolne ka try karti hai. Tujhe perfectly nahi aata, phir bhi tu confidence se bolti rehti hai, aur wahi cheez mujhe teri bahut cute lagti hai. Sach me, main tere Marathi wale moments aur especially tera “# Thanda pani” bahut miss karunga 😭. Har baar woh sunke hasi aa jati thi.Tere saath ki masti, random baatein, hasi मजाक, sab kuch yaad aayega. Aur ek baat bolu, tu jaisi hai na waisi hi rehna, kyunki tera nature hi tujhe special banata hai.I really wish ki tu mujhe kabhi na bhule. Aur thoda selfish hoke bolu toh, mujhe ye bhi wish hai ki tu bhi mujhe miss kare 😭.Thank you for all the moments, all the memories, aur itna accha friend banne ke liye. Future ke liye all the best potti ✨Khush rehna, apna dhyan rakhna, aur kabhi kabhi Marathi bolte rehna 😭❤️",
    favMemory: "The legendary baking competition where you blindfolded us and made us guess exotic flavor pairings until we were all crying with laughter.",
    timeline: [
      { year: "2023", event: "Started the underground dorm bakery that kept us fed during finals" },
      { year: "2024", event: "Won first place in the citywide amateur pastry contest" },
      { year: "2025", event: "Catered Marcus's marathon victory party with 200 custom cupcakes" },
      { year: "2026", event: "Leased her first commercial bakery space in Austin, Texas" }
    ],
    handwrittenQuote: "Life is short, eat the dessert first. Love you always!",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-decorating-a-cake-in-a-kitchen-40915-large.mp4",
    videoCaption: "Rachel putting the finishing touches on our graduation celebratory cake.",
    highlights: ["Midnight Bakery", "Cupcake Victory", "Austin Bakery"]
  },
  {
    id: "sahil bonde",
    name: "sahil bondi",
    nickname: "bondya and chocalote dhude",
    role: "shreyaa kaa future husband",
    quote: "There is no algorithm for the kind of friendship we share.",
    photo: pic11,
    letter: "So Bondi, mala athvan aahe ki aapli first meet kashi jhali hoti 😭, pan honestly ti athvan mala ata recall nahi karaychi. Je kahi hota te jau de. Pan ek gosht nakki aahe ki jevha pasun aapan bolayla laglo, tevha pasun tu nehmich ek changla friend rahila.Tujhya sathi ek advice aahe bhai — always real raha. As nahi mhanat ki tu fake aahe, pan kahi vela je tula chukich vatat na, tevha tyacha stand ghe. Tu khup changla aahe, pan kadhi kadhi lok changlya lokanchach fayda ghetaat.Ani khara sangu? Tu majha khup vela help kela aahe. Jevha majhya kade paise nasayche tevha pan tu kadhi nahi baghitla ki parat milnar ka nahi. Kuthe jaycha plan asel, kahi khaycha asel, kahi pan asel — tu nehmich help kela. Hi gosht mi kadhi visarnar nahi.Ani group बद्दल बोलायचं तर, khara saangu, group hota saglyancha… pan tyat tu main part hota. Fakt problem hi hoti ki tula kadhi he realise nahi jhala. Khup lok tujha use kart hote, karan tyanna mahit hota ki tu nahi mhananar nahi. Mala kahi vela vait pan vataycha he baghun. Pan chal jau de, ata tyacha kahi use nahi.Pan ek gosht nakki — tu group sathi khup important hota ani rahshil. Tujhya mule khup moments funny ani memorable jhale. Tu nasata tar group madhli energy pan vegli asti.Mi fakt he wish karto ki samor jaun tujhi life khup better jhali pahije. Tula khup changle lok bhetila pahijet je tujhi value kartil ani tujha fayda nahi ghetil. Tu deserve karte ki lok tujha respect karava ani genuinely care karava.Thank you saglya help sathi, saglya moments sathi, ani ek changla friend rahilya sathi ❤️Khush raha, real raha, ani swatahala kadhi kami samju nako ✨",
    favMemory: "When you rigged the apartment doorbell to play custom theme songs for each of the 13 friends whenever they walked in.",
    timeline: [
      { year: "2023", event: "Built the custom group chat server with custom emojis for all 13 of us" },
      { year: "2024", event: "Created the automated chore tracker that saved our apartment sanity" },
      { year: "2025", event: "Secured the top tier AI research fellowship" },
      { year: "2026", event: "Moving to Palo Alto for his dream Senior Engineer role" }
    ],
    handwrittenQuote: "You're one in a million. Don't ever change who you are.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-a-dark-room-42845-large.mp4",
    videoCaption: "David coding the group's custom soundboard late at night.",
    highlights: ["Theme Song Doorbell", "Custom Chat Server", "Palo Alto Move"]
  },
  {
    id: "ayushi sonkosare",
    name: "ayushi ",
    nickname: "The angry bird",
    role: "The colleage bhangar",
    quote: "We are all stories in the end. Just make it a good one.",
    photo: pic1,
    letter: "So Ayushi, “mask wali mulgi” 😭1st year madhe tu nehmich mask laun yaychi, ani honestly tevha mala kahi samjat navhta tujhyabaddal. Pan mala aapli first meet changlich athvate 😭. Khup kharab jhali hoti, karan tu Adveth la tras det hoti, ani obviously best friend la koni tras dila tar mala raag yenarach hota.Pan khara saangu? 1st year madhe mi tula like kart hoto 😭. Ata pls mala chukicha samju nako, te fakta ek phase hota ani ata te sagla ek funny memory sarkha vatata.Ani tujhi life tar comedy peksha kami nahi aahe 😭. “Bank wala bf” pasun te tujhe random scenes paryant saglach ek number funny hota. Kahi vela asa vataycha ki tujhyabhovti je kahi hota na, te direct comedy movie madhun aalay 😭. Tujhya mule group madhle khup moments entertaining jhale, ani honestly tu nastis tar group itka funny pan nasata.Pan ek gosht sathi mala genuinely sorry mhanaycha aahe. Jevha tujhi tabyat kharab asaychi tevha pan mi tula tras det rahaycho. Mala tevha realise nahi jhala ki mi तुला इतका irritate karto. Really sorry for everything. Kadhi kadhi mazak madhe apan samorcha person la kiti hurt karto he samjat nahi.Ani  tu khup changli aahe. Mala fakta tula samjayla khup late jhala. Kadhi kadhi apan lokanna properly olakhaychya aadhi judge karto, ani majhya kadun tech jhala. त्यासाठी I am really sorry ❤️Aata ek weird wish aahe 😭 — I wish ki aapan kadhi parat bhetu naye. Wrong way madhe nahi bolat, pan kahi lok memories madhyech changle vatatat. Ani mala वाटतं तू तशीच राहशील — ek funny, mask wali mulgi जी कायम आठवणीत राहील 😭✨And my blessings are always with you.Khush raha, healthy raha❤️",
    favMemory: "Sitting around the campfire while you read aloud the hilarious, fictionalized 'Chronicles of Apartment 4B' that you wrote about our daily shenanigans.",
    timeline: [
      { year: "2023", event: "Started the shared group memory journal that we all contributed to" },
      { year: "2024", event: "Won the university storytelling slam with a piece about our road trip" },
      { year: "2025", event: "Completed her debut novel manuscript during NaNoWriMo" },
      { year: "2026", event: "Hired as an Associate Editor at a major Seattle publisher" }
    ],
    handwrittenQuote: "Keep writing your beautiful story. I'll always be reading.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-writing-in-a-notebook-in-a-cafe-41551-large.mp4",
    videoCaption: "Hannah drafting her storytelling slam winning piece at the local cafe.",
    highlights: ["Campfire Chronicles", "Storytelling Slam", "Seattle Chapter"]
  },
  {
    id: "lucas",
    name: "pranali",
    nickname: "nagin and nali",
    role: "class changer",
    quote: "Good friends are like stars. You don't always see them, but you know they're always there.",
    photo: pic1,
    letter: "Dear Pranali,So Pranali, mi tula 3 year pasun olakhato ani khara sangaycha tar mi konasobat lavkar involved hot nahi. Pan tujhyasobat jevda pan time spend kela, to majhyasathi khup special hota. Apli friendship nehmich majhya lakshat rahil.Tujhyasobat kelelya gappa, masti ani sagle moments khup chan hote. Thank you for every moment, every smile ani pratyek changlya aathvanisathi.Pudhe ayushyat kuthehi ja, nehmich anandi raha ani yashasvi ho. Apli friendship kadhi visarnar nahi.Take care, and thank you for everything. ❤️",
    favMemory: "When you organized the impromptu salsa night in the middle of the rain-soaked courtyard, getting all 13 of us to dance regardless of our rhythm.",
    timeline: [
      { year: "2023", event: "The master connector who introduced all 13 of us during freshman mixer" },
      { year: "2024", event: "Hosted the multicultural feast celebrating everyone's heritage" },
      { year: "2025", event: "Elected Student Body President with our group as his campaign team" },
      { year: "2026", event: "Moving to Madrid for his Masters in International Relations" }
    ],
    handwrittenQuote: "Thank you for bringing us all together. You are true family.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-friends-dancing-at-a-rooftop-party-44142-large.mp4",
    videoCaption: "Lucas leading the salsa line at our rooftop graduation celebration.",
    highlights: ["Courtyard Salsa", "Campaign Victory", "Madrid Diplomacy"]
  }
];

export const groupCollagePhotos = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  newPic1,
  newPic2,
  newPic3,
  groupHighlightPic
];
