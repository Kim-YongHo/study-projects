import { create } from "zustand"
import { persist } from 'zustand/middleware'


export const useCounterStore = create(

    persist(
        (set) => ({

            count: 1,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set((state) => ({ count: 1 })),
            setNumber: (number) => set({ count: number })


        }),
        {
            name: 'count', // 세션 스토리지에 저장될 키 이름
            getStorage: () => sessionStorage, // 상태를 저장할 스토리지를 세션 스토리지로 설정


        }
    )
)
