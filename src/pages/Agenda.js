import React from 'react'
import Card from "../components/Card"
import $ from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"
class Agenda extends React.Component{
    constructor(){
        super()
        this.state = {
            jadwal: [
                {
                    nama:"Hari Sejuta Pohon", tanggal:"10 Janiary"
                },
                {
                    nama:"Hari Peduli Sampah Nasional", tanggal:"21 February"
                },
                {
                   nama:"Hari Air Sedunia", tanggal:"22 Maret"
                },
            ],

            action: "",
            nama: "",
            tanggal: "",
            selectedItem: null,
            keyword: "",
            filter: [],
        }

        this.state.filter = this.state.jadwal

    }

    Add = () => {
        // menampilkan komponen modal
        $("#modal_jadwal").modal("show")
        this.setState({
            nama: "",
            tanggal: "",
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_jadwal").modal("show")
        this.setState({
            nama:item.nama,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempJadwal = this.state.jadwal

        if (this.state.action === "insert") {
            // menambah data baru
            tempJadwal.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal,
            })
        }else if(this.state.action === "update"){
            // menyimpan perubahan data
            let index = tempJadwal.indexOf(this.state.selectedItem)
            tempJadwal[index].nama = this.state.nama
            tempJadwal[index].tanggal = this.state.tanggal
        }

        this.setState({jadwal : tempJadwal})
        
        // menutup komponen modal_buku
        $("#modal_jadwal").modal("hide")
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            // menghapus data
            let tempJadwal = this.state.jadwal
            // posisi index data yg akan dihapus
            let index = tempJadwal.indexOf(item)

            // hapus data
            tempJadwal.splice(index, 1)

            this.setState({jadwal: tempJadwal})
        }
    }

    searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempJadwal = this.state.jadwal
            let result = tempJadwal.filter(item => {
                return item.nama.toLowerCase().includes(keyword) ||
                item.tanggal.toLowerCase().includes(keyword) 
            })

            this.setState({filter: result})
        }
    }

    
    render(){
        return(
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Search.."
                value={this.state.keyword}
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)}
                 />
                <div className="row">
                    { this.state.filter.map( (item, index) => (
                        <Card
                        nama={item.nama}
                        tanggal={item.tanggal}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                         />
                    )) }
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_jadwal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Agenda
                            </div>

                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Event 
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.nama}
                                    onChange={ ev => this.setState({nama: ev.target.value}) }
                                    required />
                                    
                                    Tanggal Event
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.tanggal}
                                    onChange={ ev => this.setState({tanggal: ev.target.value}) }
                                    required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Agenda;