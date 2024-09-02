import {atom,selector} from 'recoil'

export const MyAtom = atom({
    key:"MyAtom",
    default:{
        network:0,
        jobs:0,
        messages:0,
        notifications:0
    }
})
export const SumSelector = selector({
    key:"SumSelector",
    get:({get})=>{

        const MyNetworkCount = get(MyAtom).network
        const JobCount = get(MyAtom).jobs
        const MessageCount = get(MyAtom).messages
        const NotificationCOunt = get(MyAtom).notifications
        return (MyNetworkCount+JobCount+MessageCount+NotificationCOunt) ;
    }
})