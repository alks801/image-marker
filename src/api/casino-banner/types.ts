import { BannerPositioning, Image, ImageResponse, Region, RegionResponseProp, StrapiResponse } from "../types"

export type CasinoBanner = BannerPositioning & {
  id: number
  eventType: "general" | "aviator"
  name: string | null
  image: Image
  region: Region
}

export type CasinoBannerResponse = StrapiResponse<
  CasinoBanner & {
    image: ImageResponse
    region: RegionResponseProp
  }
>
