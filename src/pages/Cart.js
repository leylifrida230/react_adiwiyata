import React from 'react'
import CardProd from "../components/CardProd"
import $, { event } from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"
class Cart extends React.Component{
    constructor(){
        super()
        this.state = {
            produk: [
                {
                    nama:"skinaqua moist milk sunscreen spf 50", harga: 45000, jumlah: 2, 
                    gambar: "http://image.femaledaily.com/dyn/500/images/prod-pics/product_1564649232_Skin_Aqua__800x800.jpg"
                }
            ],
            
            action: "",
            nama: "",
            harga: 0,
            jumlah: 0,
            gambar: "",
            selectedItem: null,
            keyword: "",
            filterProduk: []
        }
        this.state.filterProduk = this.state.produk
    }

    Add = () => {
        $("#modal_prod").modal("show")
        this.setState({
            nama: "",
            harga: 0,
            jumlah: 0,
            gambar: "",
            action: "insert"
        })
    }

    Edit = (item) => {
        $("#modal_prod").modal("show")
        this.setState({
            nama: item.nama,
            harga: item.harga,
            jumlah: item.jumlah,
            gambar: item.gambar,
            action: "update",
            selectedItem: item 
        })
    }

    Save = (event) => {
        event.preventDefault();
        let tempProd = this.state.produk

        if (this.state.action === "insert") {
            tempProd.push({
                nama: this.state.nama,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                gambar: this.state.gambar
            })
        }else if(this.state.action === "update"){
            let index = tempProd.indexOf(this.state.selectedItem)
            tempProd[index].nama = this.state.nama
            tempProd[index].harga = this.state.harga
            tempProd[index].jumlah = this.state.jumlah
            tempProd[index].gambar = this.state.gambar
        }
        this.setState({produk : tempProd})

        $("#modal_prod").modal("hide")
    }

    Drop = (item) => {
        if(window.confirm("Apakah anda akan menghapus item ini?")){
            let tempProd = this.state.produk
            let index = tempProd.indexOf(item)

            tempProd.splice(index, 1)

            this.setState({produk: tempProd})
        }
    }

    // keknya gabutuh searching deh

    render(){
        return(
            // tempat total harga
            <div className="container">
                <div className="row">
                    {this.state.filterProduk.map( (item, index) => (
                        <CardProd
                        nama={item.nama}
                        harga={item.harga}
                        jumlah={item.jumlah}
                        gambar={item.gambar}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        />
                    ))}
                </div>

                {/**button tambah data keknya ga penting deh tapi di kasi aja dulu */}
                <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Produk
                </button>

                <div className="modal" id="modal_prod">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                Form Produk 
                            </div>

                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Produk 
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.nama}
                                    onChange={ev => this.setState({nama: ev.target.value})}
                                    required />

                                    Harga Produk 
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.harga}
                                    onChange={ev => this.setState({harga: ev.target.value})}
                                    required />

                                    Jumlah Produk 
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.jumlah}
                                    onChange={ev => this.setState({jumlah: ev.target.value})}
                                    required />

                                    Gambar Produk 
                                    <input type="url" className="form-control mb-2"
                                    value={this.state.gambar}
                                    onChange={ev => this.setState({gambar: ev.target.value})}
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
export default Cart;