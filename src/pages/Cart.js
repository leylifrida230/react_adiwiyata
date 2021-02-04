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
                    nama:"skinaqua moist milk sunscreen spf 50", harga: 45000, jumlah: 2, total:90000,
                    gambar: "http://image.femaledaily.com/dyn/500/images/prod-pics/product_1564649232_Skin_Aqua__800x800.jpg"
                },
                {
                    nama:"n'pure cica toner", harga: 100000, jumlah: 1, total:100000,
                    gambar: "data:image/jpeg;base64,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"
                },
                {
                    nama:"Axis Y Dark Spot Correction", harga: 200000, jumlah: 1, total:200000,
                    gambar: "data:image/jpeg;base64,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"
                },
                {
                    nama:"Axis-Y Mughwort Pore Clarifying Wash Off Pack", harga: 239000, jumlah: 1, total:239000,
                    gambar: "https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/9/19/8f5bc056-02b2-4d30-a23c-8b9bed49c0dd.jpg"
                },
            ],
            
            action: "",
            nama: "",
            harga: 0,
            jumlah: 0,
            gambar: "",
            total: 0,
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
            total:0,
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
            total: item.total,
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
                gambar: this.state.gambar,
                total: this.state.total
            })
        }else if(this.state.action === "update"){
            let index = tempProd.indexOf(this.state.selectedItem)
            tempProd[index].nama = this.state.nama
            tempProd[index].harga = this.state.harga
            tempProd[index].jumlah = this.state.jumlah
            tempProd[index].gambar = this.state.gambar
            tempProd[index].total = this.state.total
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

    HitungTotal = () => {
        let harga = this.state.harga
        let jumlah = this.state.jumlah

        let result =  harga*jumlah
        this.setState({total: result})
    }

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
                        total={item.total}
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

                                    Total Harga 
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.total}
                                    onChange={ev => this.setState({total: ev.target.value})}
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