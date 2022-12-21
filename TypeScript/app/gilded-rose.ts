export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateItemQuality(item: Item) {

    switch (item.name) {
      case 'Aged Brie':
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }

        if (item.sellIn < 0 && item.quality < 50) {
          item.quality = item.quality + 1
        }

        item.sellIn = item.sellIn - 1;

        return item

      case 'Backstage passes to a TAFKAL80ETC concert':
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }

        if (item.sellIn < 11 && item.quality < 50) {
          item.quality = item.quality + 1
        }

        if (item.sellIn < 6 && item.quality < 50) {
          item.quality = item.quality + 1
        }

        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0 && item.quality < 50) {
          item.quality = item.quality + 1
        }

        return item

      case 'Sulfuras, Hand of Ragnaros':

        return item

      default:
        if (item.name.includes('Conjured')) {
          if (item.quality > 0) {
            item.quality = item.quality - 2
          }

          item.sellIn = item.sellIn - 1;

          if (item.sellIn < 0 && item.quality > 0) {
            item.quality = item.quality - 4
          }

          return item
        }

        if (item.quality > 0) {
          item.quality = item.quality - 1
        }

        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0 && item.quality > 0) {
          item.quality = item.quality - 1
        }

        return item

    }
  }

  updateQuality() {
    this.items = this.items.map(this.updateItemQuality)

    return this.items;
  }
}
