import dayjs from "dayjs";
export function DeliveryDate({deliveryOptions, item}) {
    const selectedDeliveryOption = deliveryOptions
        .find((deliveryOption) => {
            return deliveryOption.id === item.deliveryOptionId;
        });
    return (
        <div className="delivery-date">
            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
    );
}