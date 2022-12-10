// Generics function for the UseState functionality
const genericsUseState = <T>(str: T): [() => T, (v: T) => void] => {
  let localState = str;
  return [() => localState, (val: T) => (localState = val)];
};

const [s1getter, s1setter] = genericsUseState<string>("hi");
console.log(s1getter());
s1setter("bye");
console.log(s1getter());

const [s2getter, s2setter] = genericsUseState<number | null>(null);
console.log("\n", s2getter());
s2setter(288);
console.log(s2getter());

// Ranking Algorithm Function with TS Generics Syntax
interface RankGenerics<RankItem> {
  item: RankItem;
  rank: number;
}

// Ranking Alogorithm for Superheroes object
const rankingAlgorithm = <RankItem>(
  items: RankItem[],
  rankCalculate: (value: RankItem) => number
): RankItem[] => {
  const ranks: RankGenerics<RankItem>[] = items.map((item) => ({
    item: item,
    rank: rankCalculate(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
};

interface heroesType {
  name: string;
  power: number;
}

const heroes: heroesType[] = [
  { name: "Captain America", power: 400 },
  { name: "Batman", power: 1200 },
  { name: "Superman", power: 1000 },
];

console.log(
  "\n\nRanking Algorithm is : \n",
  rankingAlgorithm<heroesType>(heroes, ({ power }) => power)
);
