export const infoType = Object.freeze({
  INFO_LIST: Symbol("info_list"),
  INFO_DESCRIPTION: Symbol("info_description"),
});

export class InfoModel {
  constructor(infos = [], type = infoType.INFO_DESCRIPTION, bold = false) {
    this.infos = infos;
    this.type = type;
    this.bold = bold;
  }
}
