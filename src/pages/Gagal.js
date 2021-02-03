import React from 'react';
import Card from '../components/Card'
import $ from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"

class Gagal extends React.Component{
    constructor(){
        super()
        this.state = {
            agenda: [
                {
                    nama:"when im happy", tanggal:"gatau semoga setelah sukses"
                },
                {
                    nama:"my birthday", tanggal:"23 January"
                }
            ],
            
            action: "",
            nama: "",
            tanggal: "",
            selectedItem: null,
            keyword: "",
            filterAgenda: []
        }

        this.state.filterAgenda = this.state.agenda
    }

    Add = () => {
        // menampilkan komponen modal
        $("#modal_agenda").modal("show")
        this.setState({
            nama: "",
            tanggal: "",
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_agenda").modal("show")
        this.setState({
            nama: item.nama,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item 
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state agenda
        let tempAgenda = this.state.agenda

        if(this.state.action === "insert") {
            // menambah data baru
            tempAgenda.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal
            })
        }else if(this.state.action === "update"){
            let index = tempAgenda.indexOf(this.state.selectedItem)
            tempAgenda[index].nama = this.state.nama
            tempAgenda[index].tanggal = this.state.tanggal
        }

        this.setState({agenda : tempAgenda})

        // menutup komponen modal_agenda
        $("#modal_agenda").modal("hide")
    }

    Drop = (item) => {
        // konform menghapus data
        if(window.confirm("Apakah anda yakn ingin menghapus data ini?")){
            // menghapus data
            let tempAgenda = this.state.agenda
            //posisi index daya yg akan dihapus
            let index = tempAgenda.indexOf(item)

            // hapus data
            tempAgenda.splice(index, 1)

            this.setState({agenda: tempAgenda})
        }
    }

    searching = event => {
        if(event.keyCode === 13){
            // 13 adalah kode untuk tombol enter

            let keyword = this.state.keyword.toLowerCase()
            let tempAgenda = this.state.buku
            let result = tempAgenda.filter(item => {
                return item.nama.toLowerCase().includes(keyword) ||
                item.tanggal.toLowerCase().includes(keyword) 
               
            })

            this.setState({filterAgenda: result})
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
                    {this.state.filterAgenda.map( (item, index) => (
                        <Card
                        nama={item.nama}
                        tanggal={item.tanggal}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
                </button>

                {/** component modal sbg control manipulasi data */}
                <div className="modal" id="mosal_agenda">
                    <div className="modal_dialog">
                        <div className="modal_content">
                            {/** Modal Header */}
                            <div className="modal-header">
                                Form Agenda
                            </div>

                            {/** modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Event
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.nama}
                                    onChange={ev => this.setState({nama: ev.target.value})}
                                    required />

                                    Tanggal Event
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.tanggal}
                                    onChange={ev => this.setState({tanggal: ev.target.value})}
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
export default Gagal;