interface House {
  id: number;
  name: string;
  price: number;
  yearBuilt: number;
}

interface HouseUpdate extends Omit<House, "id"> {} //Exclude ID
interface HouseId extends Pick<House, "id"> {} //Take only ID

interface HouseOptional extends Partial<House> {} //Remove neccessary elements
interface HouseReadOnly extends Readonly<House> {} //Readonly
interface HouseRequired extends Required<House> {} //Make all elements required

type TypeHouseRecord = Record<"name" | "price", string | number>; //name / price can be string or number

type TypeGetName = () => string;
type Return = ReturnType<TypeGetName>;

type Any = Extract<"max" | "gio", "elene" | "max">; //return similar element "max"
type Ant = Exclude<"max" | "gio", "elene" | "max">; //Excludes by the first parameter
type NotNull = NonNullable<string | number | null | undefined>; //remove all null & undefined

// const houses: HouseId = {};
