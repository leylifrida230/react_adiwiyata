import React from 'react'
import Card from "../components/Card"
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
            <div className="container">

            </div>
        )
    }
}
export default Cart;