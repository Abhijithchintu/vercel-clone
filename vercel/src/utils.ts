export function generate() {
    let ans = "";
    const sub = "123456789qwertyuiopasdfghjklzxcvbnm";
    for(let i=0; i < 5; i++){
        ans += sub[Math.floor(Math.random()*sub.length)]
    }
    return ans;
}
