import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'


export default class BaiTapTruyenFunction extends Component {
    
  render() {
      console.log('this.state',this.state);
    return (
      <div className='container'>
          <h3 className='text-center text-success'>BÀI TẬP TRUYỀN FUNCTION</h3>
          
          <DanhSachSanPham/>
      </div>
    )
  }
}
