import { Link } from 'react-router-dom';
import bannerImage from '../../assets/BannerPhoto.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 max-w-6xl w-[1170px]  h-[554px]   text-left items-center ml-52 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImage} alt="Image will  be display"
            className="max-w-sm rounded-lg shadow-2xl w-[318px] h-[394px]" />
          <div>
            <h1 className="text-5xl font-bold">Unveiling the World of Books!</h1>
            
            <Link to ={`/listed`}>
            <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded">View The List </button>
            </Link>
          </div>
        </div> 
      </div>
    );
};

export default Banner;