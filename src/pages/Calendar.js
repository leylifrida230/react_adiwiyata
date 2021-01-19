import React from "react";
import Alert from '../components/Alert'

class Calendar extends React.Component{
    render(){
        return(
            <div className="container ">
                <div className="alert alert-dark">
                    <h1 className="App">Calendar for Neighborhood Days</h1>
                    {/** <div className="alert alert-dark">
                        10 Januari : Hari Sejuta Pohon
                    </div>
                    <div className="alert alert-dark">
                         21 Februari : Hari Peduli Sampah Nasional
                    </div>
                    <div className="alert alert-dark"> 
                        22 Maret : Hari Air Sedunia
                    </div>
                    <div className="alert alert-dark">
                        22 April : Hari Bumi
                    </div>
                    <div className="alert alert-dark">
                        22 Mei : Hari Keanekaragaman Hayati Internasional
                    </div>
                    <div className="alert alert-dark">
                        5 Juni : Hari Lingkungan Hidup Sedunia
                    </div>
                    <div className="alert alert-dark">
                        26 Juli : Hari Mangrove Sedunia
                    </div>
                    <div className="alert alert-dark">
                        10 Agustus : Hari Konservasi Alam Nasional
                    </div>
                    <div className="alert alert-dark">
                        7 September : Hari Udara Bersih Internasional
                    </div>
                    <div className="alert alert-dark"> 
                        16 September : Hari Pelestarian Lapisan Ozon Internasional
                    </div>
                    <div className="alert alert-dark">
                        21 September : Hari Bersih-bersih Sedunia (World Cleanup Day)
                    </div>
                    <div className="alert alert-dark">
                        5 November : Hari Cinta Puspa dan Satwa Nasional
                    </div>
                    <div className="alert alert-dark">
                        28 November : Hari Menanam Pohon Indonesia
                    </div>
                    <div className="alert alert-dark">
                        4 Desember : Hari Konservasi Kehidupan Liar
                    </div>
                    */}
                
                    <Alert bg="success" title="10 Januari">Hari Sejuta Pohon</Alert> 
                    <Alert bg="danger" title="21 Februari" >Hari Peduli Sampah Nasional</Alert>
                    <Alert bg="warning" title="22 Maret" >Hari Air Sedunia</Alert>
                    <Alert bg="success" title="22 April" >Hari Bumi</Alert>
                    <Alert bg="danger" title="22 Mei" >Hari Kanekaragaman Hayati Internasional</Alert>
                    <Alert bg="warning" title="5 Juni">Hari Linkungan Hidup Sedunia</Alert> 
                    <Alert bg="success" title="26 Juli" >Hari Mangrove Sedunia</Alert>
                    <Alert bg="danger" title="10 Agustus" >Hari Konservasi Alam Nasional</Alert>
                    <Alert bg="warning" title="7 September" >Hari Udara Bersih Internasional</Alert>
                    <Alert bg="success" title="16 September" >Hari Pelestarian Lapisan Ozon Internasional</Alert>
                    <Alert bg="danger" title="21 September">Hari Bersih-bersih Sedunia (World Clean Up Day)</Alert> 
                    <Alert bg="warning" title="5 November" >Hari Cinta Puspa dan Satwa Nasional</Alert>
                    <Alert bg="success" title="28 November" >Hari Menanam Pohon Indonesia</Alert>
                    <Alert bg="danger" title="4 Desember" >Hari Konversi Kehidupan Liar</Alert>

                </div>
            </div>
        )
    }
}
export default Calendar;