import notFound from '../../public/Images/404.png'

const NotFound = () => {
  return (
   <div style={{display:"flex",alignItems:"center",justifyContentc:"center"}}>
   <img src={notFound} alt="Not Found Img" width="100%" />
   </div>
  )
}

export default NotFound