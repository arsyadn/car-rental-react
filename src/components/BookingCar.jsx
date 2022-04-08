import '../styles/CarRental.css';
import { Form, Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import CardCar from './CardCar';
import Footer from '../Layout/Footer';

const BookingCar = () => {
    const [listCar, setListCar] = useState([]);

    const reqData = async () => {
        const {data} = await axios.get('https://rent-cars-api.herokuapp.com/admin/car');
        setListCar(data);
        console.log(data);

    }

    // useEffect(() =>{
    //     reqData();
    // }, []);
  
    return(
    <div className="relative">
        <div className="searchbar">
            <div className="d-flex justify-content-center">
            <div className="book-car mx-auto shadow p-3 mb-5 bg-white rounded absolute">
                <div className="book-wrap d-flex flex-column flex-lg-row">
                    <div className="book-type">
                        <p className="my-1">Tipe Driver</p>
                        <select defaultValue={'DEFAULT'} className="form-select select-driver" aria-label="Default select example">
                            <option value="DEFAULT" disabled>Pilih Tipe Driver</option>
                            <option value="1">Dengan Sopir</option>
                            <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="book-type">
                        <p className="my-1">Tanggal</p>
                        <Form.Control type="date" placeholder="Pilih Tanggal" className="select-date"/>
                    </div>
                    <div className="book-type">
                        <p className="my-1">Pilih Waktu</p>
                        <Form.Control type="time" name="duedate" placeholder="Pilih Waktu" className="select-date"/>
                    </div>
                    <div className="book-type">
                        <p className="my-1">Jumlah Penumpang (optional)</p>
                        <select defaultValue={'DEFAULT'} className="form-select select-passenger" aria-label="Default select example">
                            <option value="DEFAULT" disabled>Jumlah Penumpang</option>
                            <option value="1">4 orang</option>
                            <option value="2">5 orang</option>
                            <option value="2">6 orang</option>
                            <option value="3">Lebih dari 7</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-lg-end align-items-center flex-column flex-lg-row">
                        <Button className="btn-cari" onClick={reqData}>Cari Mobil</Button>
                    </div>
                </div>
            </div>
            </div>
            <div className="listcar-wrapper">
             { listCar.length > 0 && <CardCar listCar={listCar}/>}
            </div>
           
        </div>
        <div className="">
            <Footer/>
        </div>
    </div>        
    )
}
export default BookingCar;