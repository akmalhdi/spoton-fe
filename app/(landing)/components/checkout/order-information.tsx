"use client";
import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input type="text" placeholder="Type your full name" name="customerName" id="customerName" value={formData.customerName} onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input type="text" placeholder="Type your whatsapp number" name="customerContact" id="customerContact" value={formData.customerContact ?? ""} onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea placeholder="Example Street, 18, West Jakarta, Indonesia, 66521" name="customerAddress" id="customerAddress" value={formData.customerAddress} onChange={handleInputChange} rows={7} />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
