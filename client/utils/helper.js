export const getDiscountedPrecentage=(originalPrice,discountedPrice)=>{
    const discount =originalPrice-discountedPrice;

    const discountPercentage=(discount/originalPrice)*100;

    return discountPercentage.toFixed(0);


}