import { useEffect, useState, createContext, ReactNode } from 'react'

import data from '../dates.json'

interface DatesContextData {
  dates: App.Date[] | undefined
  activeData: (date: App.Date) => void
}

interface DatesContextProviderProps {
  children: ReactNode
}

export const DatesContext = createContext({} as DatesContextData)

export function DatesContextProvider({ children }: DatesContextProviderProps) {
  const [dates, setDates] = useState<App.Date[]>()

  const newDates: App.Date[] = []

  useEffect(() => {
    setDates(data)
  }, [])

  const desactiveAllAnotherDates = (data: App.Date) => {
    dates?.forEach((date, index) => {
      if (date.id !== data.id) {
        date.isActive = false
      }
      newDates[index] = date
    })
    setDates(newDates)
  }

  const activeData = (data: App.Date) => {
    desactiveAllAnotherDates(data)
    dates?.forEach((date) => {
      if (date.id === data.id) {
        date.isActive = true
      }
    })
  }

  return (
    <DatesContext.Provider value={{ dates, activeData }}>
      {children}
    </DatesContext.Provider>
  )
}
