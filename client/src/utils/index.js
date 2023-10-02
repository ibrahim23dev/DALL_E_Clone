import { surpriseMePrompts } from '../constant'

export function getRandompromot(promot) {
    const randomIndex = Math.floor(Math.random()*
        surpriseMePrompts.length)
    const Randompromot = surpriseMePrompts[randomIndex];
    if (Randompromot === promot) return getRandompromot(promot);
    return Randompromot;
}