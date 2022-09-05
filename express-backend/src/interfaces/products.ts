export interface Description {
  title: string,
  subtitle?: string
  text?: string
}

export interface Variants {
  color?: string[],
  size?: string[],
  material?: string[],
}

export interface ProductDataType {
  id: string,
  name: string,
  description: Description[],
  listPrice: string,
  bestPrice: string,
  hasDiscount: boolean,
  variants?: Variants,
  quantity: number,
  isAvailable: boolean,
  heroImage: string,
  collectionImages?: Array<string>,
  origin: string,
  rating: number,
}