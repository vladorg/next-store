export interface iProduct {
  title: string,
  description: string,
  chars?: string,
  categoryId: string,
  category?: {
    title: string,
    slug: string
  }
  thumb?: string,
  price: string,
  count: number,
  _id?: string,
  status: boolean,
  slug: string
}

export interface iCategory {
  title: string,
  description: string,
  slug: string,
  thumb: string,
  status: boolean,
  _id?: string
}
