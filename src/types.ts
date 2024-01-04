export interface iProduct {
  title: string,
  description: string,
  chars?: string,
  categoryId: string,
  category?: {
    title: string,
    slug: string,
    status: boolean
  }
  thumb: string,
  price: string,
  count: number,
  _id?: string,
  status: boolean,
  slug: string,
  quantity?: number
}

export interface iCategory {
  title: string,
  description: string,
  slug: string,
  thumb: string,
  status: boolean,
  _id?: string
}

export interface iMenu {
  title: string,
  slug: string,
  thumb?: string
}
