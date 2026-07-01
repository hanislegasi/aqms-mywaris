import {
doc,
setDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function createReceipt(
db,
data
){

const receiptNo =
`${data.receiptPrefix}-${new Date().getFullYear()}${String(new Date().getMonth()+1).padStart(2,"0")}-${Date.now()}`;

await setDoc(

doc(
db,
"receipts",
receiptNo
),

{

receiptNo,

receiptPrefix:data.receiptPrefix,

serviceCode:data.serviceCode,

serviceName:data.serviceName,

category:data.category,

consultantLevel:data.consultantLevel || "",

consultantNo:data.consultantNo || "",

uid:data.uid,

payerName:data.payerName,

amount:data.amount,

paymentMethod:data.paymentMethod,

transactionId:data.transactionId,

status:"PAID",

paymentDate:data.paymentDate,

createdAt:serverTimestamp()

}

);

return receiptNo;

}
