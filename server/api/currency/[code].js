export default defineEventHandler(async(event)=>{

  const {code} = event.context.params
  const {currencyKey}= useRuntimeConfig()
   /* FOR CURRENCY API USED BY SHAUN...not working */
const uri=`https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

const data= await $fetch(uri);
  //const {data}=await $fetch(uri);
return data;

})

