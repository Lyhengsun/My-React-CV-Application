export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export class tempListId {
  constructor() {
    this.tempListId = [];
  }

  getTempListId(itemsList) {
    while (this.tempListId.length < itemsList.length) {
      if (this.tempListId.length <= 0) {
        this.tempListId.push(1);
      } else {
        this.tempListId.push(this.tempListId[this.tempListId.length - 1] + 1);
      }
    }
    return this.tempListId;
  }

  getIndexOfId(id) {
    return this.tempListId.indexOf(id);
  }

  removeId(index) {
    this.tempListId = this.tempListId.filter((_, i) => i !== index);
  }
}
