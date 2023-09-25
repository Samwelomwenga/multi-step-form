import { PickedAddOnsState } from "../../features/PickAddOns/pickAddOnsSlice";

const calculateTotal = (planPrice: number, planAddOns: PickedAddOnsState[]) => {
  const totalPrice =
    planAddOns.length > 0
      ? planPrice +
        planAddOns.reduce(
          (acc: number, planAddOns) => acc + (planAddOns.price??0),
          0
        )
      : planPrice;
    return totalPrice;
};
export default calculateTotal;
