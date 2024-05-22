import { atom } from "recoil";

export const emailStateAtom = atom({
    key: "emailState",
    default: ""
});


export const passwordStateAtom = atom({
    key: "passwordState",
    default: ""
});