import UseFetch from '../hook/UseFetch'

const ThoughtOutput = ({cleanUserinput})=>{

 
return(
    <>
    <section className='p-3'>
            {cleanUserinput && <UseFetch useInput= {cleanUserinput} />}
</section>
</>
)
}
export default ThoughtOutput;