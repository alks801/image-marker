import axios from "axios"
import { EnumTypeResponseObj } from "../types"
import { hostApi } from "../const"
import { responseEnumTypeObjToEnumType } from "../utils"

const path = "/regions"

export const getRegions = async () => {
  try {
    const response = await axios.get<EnumTypeResponseObj>(hostApi + path)
    return responseEnumTypeObjToEnumType(response.data)
  } catch (error) {
    return []
  }
}
