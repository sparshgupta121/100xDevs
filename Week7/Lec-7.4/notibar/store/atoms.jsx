import {atom,selector} from 'recoil'

export const MyNetworkAtom = atom({
    key:"MyNetworkAtom",
    default:104
})
export const JobAtom = atom({
    key:"JobAtom",
    default:0
})
export const MessageAtom = atom({
    key:"MessageAtom",
    default:0
})
export const NotificationAtom = atom({
    key:"NotificationAtom",
    default:12
})


export const SumSelector = selector({
    key:"SumSelector",
    get:({get})=>{

        const MyNetworkCount = get(MyNetworkAtom)
        const JobCount = get(JobAtom)
        const MessageCount = get(MessageAtom)
        const NotificationCOunt = get(NotificationAtom)
        return (MyNetworkCount+JobCount+MessageCount+NotificationCOunt) ;
    }
})