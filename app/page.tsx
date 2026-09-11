
import Header from "./component/Header";
// pages/_app.js
import Footer from "./component/Footer";
import CardDragon from "./feature/CardDragon";
import Favorites from "./feature/Favorites";


export default function Home() {
  return (

    <div className=" bg-black">
      <div className="bg-black">



        <div className="" >
          <Header />
        </div>
      </div>
     

      <div className="relative w-[70%] lg:h-80 m-auto max-md:w-full">
       
        <div
          style={{ backgroundImage: "url('/image/houseof.jpeg')" }}
          className="absolute inset-0 bg-cover bg-center bg-black max-md:hidden"
        />

  
        <div className="relative z-10">
          <CardDragon />
        </div>

      </div>

       <div>
        <Favorites/>
      </div>


      <div className="bg-gray-900  h-40 mt-10">
        <Footer />
      </div>




    </div>
  );
}
