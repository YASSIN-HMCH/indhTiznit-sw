import chef from "../photos/chef.webp"

const Presentation = () => {
  return (
    <>
    <h1 className="text-center text-white m-4 py-2 bg-success">Présentation</h1>
    <img src={chef} alt=""  style={{ height: '550px',  width: '100%'}}/>
    </>
  )
}

export default Presentation