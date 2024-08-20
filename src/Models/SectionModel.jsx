export default class SectionModel {
  constructor(id, title = "Section", infos = [], type = "") {
    this.id = id;
    this.title = title;
    this.infos = infos;
    this.type = type;
  }
}
