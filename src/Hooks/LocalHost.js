import { toast } from "react-toastify";

const getFromLocalStorage = () => {
    let members = []
    const localHost = localStorage.getItem("Members");
    if(localHost){
        members = JSON.parse(localHost);
    };
    return members;
};

const addToLocalLocalStorage = (data) => {
    const members = getFromLocalStorage();
    const isExist = members.find(b => b.type === data.type && b.paymentMethod === data.paymentMethod);
    if(isExist){
        toast.error("Already done payment");
        return false;
    }else{
        members.push(data);
        const newData = JSON.stringify(members);
        localStorage.setItem("Members", newData);
        toast.success(`Payment successfull`);
        return true;
    }
};

export { getFromLocalStorage, addToLocalLocalStorage };