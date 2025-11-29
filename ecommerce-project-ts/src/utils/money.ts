export function formatMoney(pricePaisa: number){
    return `${(pricePaisa/100).toFixed(2)}`;
}