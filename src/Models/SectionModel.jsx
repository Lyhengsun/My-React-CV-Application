export default class SectionModel {
  constructor(id, title = "Section", description = "", infos = [], type = "") {
    this.id = id;
    this.title = title;
    this.desc = description;
    this.infos = infos;
    this.type = type;
  }
}
