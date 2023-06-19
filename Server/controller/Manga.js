const axios = require('axios');
const {Manga} = require("../model/Manga");

const countryCodes = {
    es: "es",
    "es-la": "ad",
    en: "gb",
    zn: "cn",
    zh: "cn",
    ja: "jp",
    ko: "kr",
    hu: "hu",
    fr: "fr",
    it: "it",
    de: "de",
    pt: "pt",
    nl: "nl",
    pl: "pl",
    ru: "ru",
    sv: "se",
    fi: "fi",
    no: "no",
    da: "dk",
    bg: "bg",
    hr: "hr",
    cs: "cz",
    et: "ee",
    el: "gr",
    he: "il",
    hi: "in",
    lv: "lv",
    lt: "lt",
    ms: "my",
    sr: "rs",
    sk: "sk",
    sl: "si",
    th: "th",
    uk: "ua",
    vi: "vn",
    ar: "sa",
    "pt-br": "br",
    id: "id",
    af: "za",
    sq: "al",
    am: "et",
    hy: "am",
    az: "az",
    eu: "es",
    be: "by",
    bn: "bd",
    bs: "ba",
    ca: "es",
    ceb: "ph",
    ny: "mw",
    co: "fr",
    cy: "gb",
    eo: "xx",
    tl: "ph",
    fy: "nl",
    gl: "es",
    ka: "ge",
    gu: "in",
    ht: "ht",
    ha: "ng",
    haw: "us",
    iw: "il",
    ig: "ng",
    is: "is",
    jw: "id",
    kn: "in",
    kk: "kz",
    km: "kh",
    rw: "rw",
    ky: "kg",
    lo: "la",
    la: "va",
    lb: "lu",
    mk: "mk",
    mg: "mg",
    ml: "in",
    mt: "mt",
    mi: "nz",
    mr: "in",
    mn: "mn",
    my: "mm",
    ne: "np",
    or: "in",
    ps: "af",
    fa: "ir",
    pa: "in",
    ro: "ro",
    sm: "ws",
    gd: "gb",
    st: "ls",
    sn: "zw",
    sd: "pk",
    si: "lk",
    so: "so",
    su: "id",
    sw: "tz",
    tg: "tj",
    ta: "in",
    tt: "ru",
    te: "in",
    tr: "tr",
    tk: "tm",
    ur: "pk",
    ug: "cn",
    uz: "uz",
    xh: "za",
    yi: "il",
    yo: "ng",
    "zh-hk": "hk",
    zu: "za"
  };

const Home = async (req, res) => {
    const final =[]
    try {
      const url = "https://api.mangadex.org/manga";
      let response = await axios.get(url, {
        params: {
          limit: 24,
          offset: 0,
          includes: ["cover_art"]
        }
      });
      const Info = response.data.data;
      Info.forEach((manga) =>{
        const title = manga.attributes.title.en || " ";
        const altTitles = manga.attributes.altTitles || " ";
        const description = manga.attributes.description || " ";
        const type = manga.attributes.publicationDemographic || " ";
        const coverArt = manga.relationships.find((r) => r.type === "cover_art");
        const image = coverArt ? `https://uploads.mangadex.org/covers/${manga.id}/${coverArt.attributes.fileName}` : " ";
        const status = manga.attributes.status || "";
        const id = manga.id || "";
        const group = manga.attributes.tags.filter((t) => t.attributes.group === "genre").map((t) => t.attributes.name.en);
        const flag = `https://mangadex.org/img/flags/${countryCodes[manga.attributes.originalLanguage] || "unknown"}.svg`;
        const year = manga.attributes.year || "";
        final.push(new Manga(title,altTitles ,description, type, image, status, id, group, flag, year));
    })
    console.log(response.data)
      res.status(200).json({Mangalist : final, Total : response.data.total});
    } catch (error) {
      console.error(error);
      res.status(500).send("Une erreur est survenue lors de la récupération des données");
    }
  };
  

  const cheerio = require("cheerio");




    //   const urls = "https://www.mangahere.cc/trending/";
    //   axios.get(urls).then((response) =>
    //   {
    //   const $ = cheerio.load(response.data);
   
    //   $('.manga-list-1 > .manga-list-1-list >li').each((i, contain) => {
    //     const title = $(contain).find('a').text();
    //     const href = "https://www.mangahere.cc/" + $(contain).find('a').attr('href');
    //     mangalist[title] = href;
    //   });

    //   res.json(mangalist)
      
    // })

module.exports = {Home}