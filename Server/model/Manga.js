class Manga {
    constructor(title, altTitles, description, type, image, status, id, genre, flag, year) {
      this.title = title;
      this.altTitles = altTitles;
      this.description = description;
      this.type = type;
      this.image = image;
      this.status = status;
      this.id = id;
      this.genre = genre;
      this.flag = flag;
      this.year = year;
    }
}

module.exports = { Manga };
