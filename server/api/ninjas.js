export default defineEventHandler(async(event)=>{

/* queries */
const {name}=useQuery(event);
/*handle posts etc*/
const {age} = await useBody(event);
/* APi call with private key */
const {data} = await $fetch('/api/ninjas')

// return {message:`Hello ${name} and age is ${age}`};
return data;
})
