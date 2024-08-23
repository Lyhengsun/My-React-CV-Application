export default class SectionModel {
  constructor(id, title = "Section", infos = [], type = "section") {
    this.id = id;
    this.title = title;
    this.infos = infos;
    this.type = type;
  }
}

export class TitleSectionModel extends SectionModel {
  constructor(id, title, infos = [], userImg = "") {
    super(id, title, infos, "title");
    this.userImg = userImg;
  }
}
