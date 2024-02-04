import { Dispatch, SetStateAction } from 'react'

export interface HeaderInf {
  setNewsType: Dispatch<SetStateAction<string>>,
  setSearchText: Dispatch<SetStateAction<string>>,
  loading: boolean,
}
