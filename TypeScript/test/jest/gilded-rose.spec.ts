import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should not break this', () => {
    const expected = `-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest 10 20
Aged Brie 2 0
Elixir of the Mongoose 5 7
Sulfuras, Hand of Ragnaros 0 80
Sulfuras, Hand of Ragnaros -1 80
Backstage passes to a TAFKAL80ETC concert 15 20
Backstage passes to a TAFKAL80ETC concert 10 49
Backstage passes to a TAFKAL80ETC concert 5 49
Conjured Mana Cake 3 6
-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest 9 19
Aged Brie 1 1
Elixir of the Mongoose 4 6
Sulfuras, Hand of Ragnaros 0 80
Sulfuras, Hand of Ragnaros -1 80
Backstage passes to a TAFKAL80ETC concert 14 21
Backstage passes to a TAFKAL80ETC concert 9 50
Backstage passes to a TAFKAL80ETC concert 4 50
Conjured Mana Cake 2 5
`

    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)];


    const gildedRose = new GildedRose(items);

    let days: number = 2;
    if (process.argv.length > 2) {
      days = +process.argv[2];
    }

    let result = ''

    for (let i = 0; i < days; i++) {
      result += "-------- day " + i + " --------\n"
      result += "name, sellIn, quality\n"
      items.forEach(element => {
        result += (element.name + ' ' + element.sellIn + ' ' + element.quality + '\n')
      });
      gildedRose.updateQuality();
    }

    expect(result).toEqual(expected)
  })
});
