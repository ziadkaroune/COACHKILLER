import UseFetch from '../hook/UseFetch'

const ThoughtOutput = ({cleanUserinput})=>{

 
return(
    <>
    <section className='bg-pink-300 p-3'>
            {cleanUserinput && <UseFetch useInput= {cleanUserinput} />}
</section>
</>
)
}
export default ThoughtOutput;